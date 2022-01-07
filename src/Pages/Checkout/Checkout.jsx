import React from "react";
import { CheckoutInfo, OrderSummary } from "../../Components";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   container: {
      height: "auto",
      justifyContent: "space-around",
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         padding: theme.spacing(3),
      },
      [theme.breakpoints.up("md")]: {
         padding: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
         padding: theme.spacing(8),
      },
   },
}));
const Checkout = () => {
   const classes = useStyles();
   return (
      <Grid container className={classes.container}>
         <OrderSummary />
         <CheckoutInfo />
      </Grid>
   );
};

export default Checkout;
