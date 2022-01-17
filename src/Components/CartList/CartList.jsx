import React from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
   Grid,
   makeStyles,
   CircularProgress,
   Typography,
   Button,
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
   },
   progress: {
      padding: theme.spacing(10),
   },
}));

const mapThroughItems = (items) => {
   return items.map((item, idx) => {
      return <CartItem key={idx} item={item} />;
   });
};

const CartList = () => {
   const { cartItems, pending, cartLength } = useSelector(
      (state) => state.cart
   );
   const classes = useStyles();
   const navigate = useNavigate();
   return (
      <>
         {cartLength === 0 && (
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
               xs={10}
               sm={8}
            >
               <Typography variant="h4" color="initial">
                  No Items in cart
               </Typography>
               <Button
                  color="primary"
                  onClick={() => navigate("/products")}
                  variant="contained"
               >
                  Shop Now!!!
               </Button>
            </Grid>
         )}
         {!pending ? (
            <Grid className={classes.container} container item xs={10} sm={8}>
               {mapThroughItems(cartItems)}
            </Grid>
         ) : (
            <Grid
               className={classNames(classes.progress, classes.container)}
               container
            >
               <CircularProgress size="5rem" />
            </Grid>
         )}
      </>
   );
};

export default CartList;
