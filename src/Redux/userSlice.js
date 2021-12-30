import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: null,
   },
   reducers: {},
   extraReducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
