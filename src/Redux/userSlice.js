import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: null,
      pending: false,
      error: false,
   },
   reducers: {},
   extraReducers: {
      [loginUser.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [loginUser.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.user = action.payload;
      },
      [loginUser.rejected]: (state) => {
         state.pending = false;
         state.error = true;
      },
   },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
