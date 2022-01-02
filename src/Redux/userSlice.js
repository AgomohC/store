import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openSnackBar } from "./appSlice";
import { useDispatch } from "react-redux";

export const loginUser = createAsyncThunk("login/user", async (user) => {
   const { data } = await axios.post(
      "https://fakestoreapi.com/auth/login",
      user
   );
   localStorage.setItem(
      "user",
      JSON.stringify({ name: user.username, token: data.token })
   );
   const res = { username: user.username };
   return res;
});
export const registerUser = createAsyncThunk("register/user", async (user) => {
   const { data } = await axios.post("https://fakestoreapi.com/users", user);
   localStorage.setItem(
      "user",
      JSON.stringify({ name: user.username, token: data.token })
   );
   const res = { username: user.username };
   return res;
});

export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: null,
      pending: false,
      error: false,
   },
   reducers: {
      logOut: (state) => {
         state.user = null;
         state.pending = false;
         state.error = false;
         localStorage.removeItem("user");
      },
   },
   extraReducers: {
      [loginUser.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [loginUser.fulfilled]: (state, action) => {
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Logged in successfully",
               severity: "success",
            })
         );
         state.pending = false;
         state.error = false;
         state.user = action.payload;
      },
      [loginUser.rejected]: (state) => {
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Something went wrong, please try again",
               severity: "error",
            })
         );
         state.pending = false;
         state.error = true;
      },
      [registerUser.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [registerUser.fulfilled]: (state, action) => {
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Account created successfully, welcome!",
               severity: "success",
            })
         );
         state.pending = false;
         state.error = false;
         state.user = action.payload;
      },
      [registerUser.rejected]: (state) => {
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Something went wrong, please try again",
               severity: "error",
            })
         );
         state.pending = false;
         state.error = true;
      },
   },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
