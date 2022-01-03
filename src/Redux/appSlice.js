import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const appSlice = createSlice({
   name: "app",
   initialState: {
      snackBarOpen: false,
      snackBarSeverity: "",
      snackBarText: "",
      isMenuOpen: false,
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
   },
   extraReducers: {},
});

export const { closeSnackBar, openSnackBar, openMenu, closeMenu } =
   appSlice.actions;

export default appSlice.reducer;
