import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const AccountInfo = () => {
   const classes = useStyles();
   const {
      user: { firstname, lastname, email, username },
   } = useSelector((state) => state.user);
   return (
      <Grid container>
         <Grid item>
            <Typography variant="h4" color="initial">
               Profile
            </Typography>
         </Grid>
      </Grid>
   );
};

export default AccountInfo;
