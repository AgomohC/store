import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("login/user", async (user) => {
   const { data } = await axios.post("/auth/login", user);

   localStorage.setItem(
      "user",
      JSON.stringify({ name: user.username, token: data.token })
   );
   return data;
});
export const registerUser = createAsyncThunk("register/user", async (user) => {
   const { lastName, firstName, email, username, password, confirmPassword } =
      user;
   if (password !== confirmPassword) {
      return;
   }
   const { data } = await axios.post("/auth/register", {
      lastName,
      firstName,
      email,
      username,
      password,
   });
   localStorage.setItem(
      "user",
      JSON.stringify({ name: user.username, token: data.token })
   );
   return data;
});

export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: null,
      pending: false,
      error: false,
      errorMessage: "",
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
         state.errorMessage = "";
      },
      [loginUser.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.user = action.payload;
         state.errorMessage = "";
      },
      [loginUser.rejected]: (state) => {
         state.pending = false;
         state.error = true;
         state.errorMessage = "Something went wrong, Please try again";
      },
      [registerUser.pending]: (state) => {
         state.pending = true;
         state.error = false;
         state.errorMessage = "";
      },
      [registerUser.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.user = action.payload.user;
         state.errorMessage = "";
      },
      [registerUser.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
         state.errorMessage = "Something went wrong, Please try again";
      },
   },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
