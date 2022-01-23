import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cart/add", async (id) => {
   const { data } = await axios.post(`/cart`, { product_id: id });

   return data;
});

export const fetchCartItems = createAsyncThunk("cart/fetchAll", async () => {
   const { data } = await axios.get(`/cart`);

   return data;
});
export const clearCart = createAsyncThunk("cart/clearCart", async () => {
   const { data } = await axios.delete(`/cart/delete_all`);
   return data;
});
export const removeItemFromCart = createAsyncThunk(
   "cart/removeItem",
   async (_id) => {
      const { data } = await axios.delete(`/cart/delete/${_id}`);
      return data;
   }
);
export const incrementCartItem = createAsyncThunk(
   "cart/incrementItem",
   async (_id) => {
      const { data } = await axios.patch(`/cart/increment`, {
         product_id: _id,
      });
      return data;
   }
);
export const decrementCartItem = createAsyncThunk(
   "cart/removeItem",
   async (_id) => {
      const { data } = await axios.patch(`/cart/decrement`, {
         product_id: _id,
      });
      return data;
   }
);

export const checkout = createAsyncThunk("cart/checkout", async (formData) => {
   const { email, name, phoneNumber, amount } = formData;
   const { data } = await axios.post("/cart/checkout", {
      email,
      name,
      phoneNumber,
      amount,
   });
   return data;
});

export const verifyPayment = createAsyncThunk(
   "cart/verify",
   async (reference) => {
      await axios.get(`/cart/paystack/checkout?reference=${reference}`);

      return;
   }
);
export const placeOrder = createAsyncThunk(
   "cart/placeOrder",
   async ({ address, city, postalCode, country }) => {
      await axios.post(`/cart/checkout/shipping`, {
         address,
         city,
         postalCode,
         country,
      });

      return;
   }
);

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartItems: [],
      cartLength: 0,
      error: false,
      pending: false,
      total: 0,
      url: "",
   },
   reducers: {
      resetCart: (state) => {
         state.cartItems = [];
         state.cartLength = 0;
         state.error = false;
         state.pending = false;
         state.total = 0;
      },
      getTotal: (state) => {
         state.total = state.cartItems.reduce((a, b) => {
            return (
               Math.round(
                  (a +
                     (b.quantity * Math.round(b.product_id.price * 100)) /
                        100) *
                     100
               ) / 100
            );
         }, 0);
      },
   },
   extraReducers: {
      [addToCart.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [addToCart.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         let { products } = action.payload;
         products = products.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
         });
         state.cartItems = products;
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
         let { products } = action.payload;
         products = products.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
         });
         state.cartItems = products;
         state.cartLength = action.payload.count;
      },

      [fetchCartItems.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [clearCart.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },

      [clearCart.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.cartItems = [];
         state.cartLength = 0;
      },

      [clearCart.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [removeItemFromCart.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },

      [removeItemFromCart.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         let { products } = action.payload;
         products = products.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
         });
         state.cartItems = products;
         state.cartLength = action.payload.count;
      },

      [removeItemFromCart.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [incrementCartItem.pending]: (state, action) => {
         state.error = false;
      },

      [incrementCartItem.fulfilled]: (state, action) => {
         state.error = false;
         let { products } = action.payload;
         products = products.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
         });
         state.cartItems = products;
         state.cartLength = action.payload.count;
      },

      [incrementCartItem.rejected]: (state, action) => {
         state.error = true;
      },
      [decrementCartItem.pending]: (state, action) => {
         state.error = false;
      },

      [decrementCartItem.fulfilled]: (state, action) => {
         state.error = false;
         let { products } = action.payload;
         products = products.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
         });
         state.cartItems = products;
         state.cartLength = action.payload.count;
      },
      [decrementCartItem.rejected]: (state, action) => {
         state.error = true;
      },
      [checkout.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [checkout.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.url = action.payload.url;
      },
      [checkout.rejected]: (state) => {
         state.pending = false;
         state.error = true;
      },
      [verifyPayment.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [verifyPayment.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
      },
      [verifyPayment.rejected]: (state) => {
         state.pending = false;
         state.error = true;
      },
      [placeOrder.pending]: (state) => {
         state.pending = true;
         state.error = false;
      },
      [placeOrder.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
      },
      [placeOrder.rejected]: (state) => {
         state.pending = false;
         state.error = true;
      },
   },
});

export const { resetCart, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
