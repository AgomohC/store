import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cart/add", async (item) => {
   const { data } = await axios.post(`/cart`, item);
   //  return the full cart object belonging to the user
   return data;
});

export const fetchCartItems = createAsyncThunk("cart/fetchAll", async () => {
   const { data } = await axios.get(`/cart`);

   return data;
});

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartItems: [],
      cartLength: 0,
      error: false,
      pending: false,
   },
   reducers: {},
   extraReducers: {
      [addToCart.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [addToCart.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.cartItems = action.payload.products;
         state.cartLength = action.payload.count;
      },
      [addToCart.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [fetchCartItems.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },

      [fetchCartItems.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.cartItems = action.payload.products;
         state.cartLength = action.payload.count;
      },

      [fetchCartItems.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
   },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
