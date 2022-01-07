import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackBar } from "../../Redux/appSlice";

const Alert = (props) => {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const CustomSnackbar = () => {
   const { snackBarOpen, snackBarSeverity, snackBarText } = useSelector(
      (state) => state.app
   );

   const dispatch = useDispatch();
   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      dispatch(closeSnackBar());
   };
   return (
      <Snackbar
         open={snackBarOpen}
         autoHideDuration={4000}
         onClose={handleClose}
      >
         <Alert onClose={handleClose} severity={snackBarSeverity}>
            <Typography variant="body1" color="initial">
               {snackBarText}
            </Typography>
         </Alert>
      </Snackbar>
   );
};

export default CustomSnackbar;
