import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const appSlice = createSlice({
   name: "app",
   initialState: {
      snackBarOpen: true,
      snackBarSeverity: "success",
      snackBarText: "successful",
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
   },
   extraReducers: {},
});

export const { closeSnackBar, openSnackBar } = appSlice.actions;

export default appSlice.reducer;
