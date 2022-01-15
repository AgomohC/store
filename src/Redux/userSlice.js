import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (user) => {
   const { data } = await axios.post("/auth/login", user);

   localStorage.setItem(
      "user",
      JSON.stringify({ data: data.user, token: data.token })
   );
   return data.user;
});
export const registerUser = createAsyncThunk("user/register", async (user) => {
   const { lastName, firstName, email, username, password } = user;

   const { data } = await axios.post("/auth/register", {
      lastName,
      firstName,
      email,
      username,
      password,
   });
   localStorage.setItem(
      "user",
      JSON.stringify({ data: data.user, token: data.token })
   );
   return data.user;
});

const user = JSON.parse(localStorage.getItem("user")).data;

export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: user ? user : null,
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
         state.user = action.payload;
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
