import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchBarFunction = createAsyncThunk(
   "search for products",
   async (input) => {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      return { data, input };
   }
);
export const appSlice = createSlice({
   name: "app",
   initialState: {
      snackBarOpen: false,
      snackBarSeverity: "",
      snackBarText: "",
      isMenuOpen: false,
      searchValue: "",
      categories: ["All"],
      pending: false,
      items: [],
      error: false,
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
         // state.searchValue = action.payload.input;
         state.pending = true;
         state.error = false;
      },
      [searchBarFunction.fulfilled]: (state, action) => {
         state.pending = false;
         state.error = false;
         state.items = action.payload.data;
         // state.searchValue = action.payload.input;
      },
      [searchBarFunction.rejected]: (state, action) => {
         state.pending = false;
         state.error = true;
         // state.searchValue = action.payload.input;
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
