import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openSnackBar } from "./appSlice";
import { useDispatch } from "react-redux";

export const addToCart = createAsyncThunk("add to cart", async (item) => {
   const { data } = axios.post(`https://fakestoreapi.com/carts`, item);
   //  return the full cart object belonging to the user
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
         state.cartItems = action.payload;
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Added to Cart",
               severity: "success",
            })
         );
      },
      [addToCart.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
         const dispatch = useDispatch();
         dispatch(
            openSnackBar({
               text: "Something went wrong, please try again",
               severity: "error",
            })
         );
      },
   },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
