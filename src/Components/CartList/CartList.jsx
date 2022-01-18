import React from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
   Grid,
   makeStyles,
   CircularProgress,
   Typography,
   Button,
} from "@material-ui/core";
import classNames from "classnames";
import { clearCart } from "../../Redux/cartSlice";

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
   priceDiv: {
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
      overflow: "hidden",
      padding: theme.spacing(3),
   },
   btnContainer: {
      marginTop: theme.spacing(2),
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
   const dispatch = useDispatch();
   return (
      <>
         {cartLength === 0 && (
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
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
         {!pending && cartLength !== 0 ? (
            <Grid className={classes.container} container item xs={10} lg={8}>
               {mapThroughItems(cartItems)}
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  xs={12}
                  className={classes.priceDiv}
               >
                  <Typography variant="h6" color="initial">
                     Total:
                  </Typography>
               </Grid>
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  className={classes.btnContainer}
               >
                  <Button
                     variant="contained"
                     onClick={() => dispatch(clearCart())}
                  >
                     Clear Cart
                  </Button>
                  <Button
                     onClick={() => navigate("/products")}
                     variant="contained"
                     color="primary"
                  >
                     Continue Shopping
                  </Button>
                  <Button
                     variant="contained"
                     onClick={() => navigate("/checkout")}
                  >
                     Checkout
                  </Button>
               </Grid>
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
