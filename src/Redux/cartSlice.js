import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartItems: [],
      cartLength: 0,
      error: false,
      pending: false,
   },
   reducers: {},
   extraReducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
