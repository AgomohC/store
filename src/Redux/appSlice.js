import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../axios";

export const searchBarFunction = createAsyncThunk(
   "search for products",
   async (input) => {
      console.log(input);
      const { data } = await axios.get(`/products/search/${input}`);
      return data;
   }
);
export const getCategories = createAsyncThunk("get categories", async () => {
   const { data } = await axios.get("/products/categories");
   return data;
});

export const getProductsInCategories = createAsyncThunk(
   "get products in each category",
   async (category) => {
      if (category === "All") {
         const { data } = await axios.get("/products");
         return data;
      }
      const { data } = await axios.get(`/products/categories/${category}`);
      return data;
   }
);

export const getItems = createAsyncThunk("get items", async () => {
   const { data } = await axios.get("/products");
   return data;
});

export const getSingleItem = createAsyncThunk("get Single Item", async (id) => {
   const { data } = await axios.get(`/products/${id}`);
   return data;
});

export const appSlice = createSlice({
   name: "app",
   initialState: {
      snackBarOpen: false,
      snackBarSeverity: "",
      snackBarText: "",
      isMenuOpen: false,
      searchValue: "",
      categories: [],
      pending: false,
      items: [],
      error: false,
      singleItem: {},
   },
   reducers: {
      closeSnackBar: (state) => {
         state.snackBarOpen = false;
         state.snackBarSeverity = "";
         state.snackBarText = "";
      },
      openSnackBar: (state, action) => {
         const { text, severity } = action.payload;
         state.snackBarOpen = true;
         state.snackBarSeverity = severity;
         state.snackBarText = text;
      },
      openMenu: (state) => {
         state.isMenuOpen = true;
      },
      closeMenu: (state) => {
         state.isMenuOpen = false;
      },
      setSearchBarValue: (state, action) => {
         state.searchValue = action.payload;
      },
   },
   extraReducers: {
      [searchBarFunction.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [searchBarFunction.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.items = action.payload;
      },
      [searchBarFunction.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [getCategories.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [getCategories.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.categories = [...action.payload];
      },
      [getCategories.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [getProductsInCategories.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [getProductsInCategories.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.items = action.payload;
      },
      [getProductsInCategories.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [getItems.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [getItems.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.items = action.payload;
      },
      [getItems.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
      [getSingleItem.pending]: (state, action) => {
         state.pending = true;
         state.error = false;
      },
      [getSingleItem.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.singleItem = action.payload;
      },
      [getSingleItem.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
      },
   },
});

export const {
   closeSnackBar,
   openSnackBar,
   openMenu,
   closeMenu,
   setSearchBarValue,
} = appSlice.actions;

export default appSlice.reducer;
