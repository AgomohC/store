import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: theme.shadows[2],
      borderRadius: theme.spacing(2),
      minHeight: 320,
      minWidth: 320,
      maxWidth: 444,
      margin: theme.spacing(3),
   },
}));

const OrderSummary = () => {
   const classes = useStyles();
   return (
      <Grid
         container
         item
         xs={12}
         sm={6}
         className={classes.container}
         direction="column"
      >
         <Typography component="h1" variant="h4">
            Order Summary
         </Typography>
      </Grid>
   );
};

export default OrderSummary;
