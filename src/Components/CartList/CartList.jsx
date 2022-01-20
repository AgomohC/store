import React, { useEffect, useRef } from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
   Grid,
   makeStyles,
   CircularProgress,
   Typography,
   Button,
   withStyles,
} from "@material-ui/core";
import classNames from "classnames";
import { clearCart } from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";
import { getTotal } from "../../Redux/cartSlice";

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
   navigateBtn: {
      marginBottom: theme.spacing(4),
   },
   marginRightTwo: {
      marginRight: theme.spacing(2),
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   letterSpace: {
      letterSpacing: 3,
   },
}));

const mapThroughItems = (items) => {
   return items.map((item, idx) => {
      return <CartItem key={idx} item={item} />;
   });
};
const DangerButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.error.main,
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
         color: theme.palette.common.white,
         borderColor: theme.palette.error.light,
         backgroundColor: theme.palette.error.light,
      },
   },
}))(Button);
const SuccessButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.success.main,
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
         color: theme.palette.common.white,
         borderColor: theme.palette.success.light,
         backgroundColor: theme.palette.success.light,
      },
   },
}))(Button);

const CartList = () => {
   const { cartItems, pending, cartLength, error, total } = useSelector(
      (state) => state.cart
   );
   const classes = useStyles();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const isMounted = useRef(false);

   useEffect(() => {
      if (isMounted.current && cartLength !== 0) {
         dispatch(getTotal());
      } else {
         isMounted.current = true;
      }
   }, [dispatch, cartItems, cartLength]);

   const handleClearCart = () => {
      dispatch(clearCart());
      if (!error && !pending) {
         dispatch(
            openSnackBar({
               severity: "success",
               text: "Cart has been cleared",
            })
         );
      } else if (error && !pending) {
         dispatch(
            openSnackBar({
               severity: "error",
               text: "Something went wrong",
            })
         );
      }
   };

   return (
      <>
         {!pending && cartLength !== 0 ? (
            <Grid className={classes.container} container item xs={10} lg={8}>
               <Button
                  onClick={() => navigate("/products")}
                  variant="contained"
                  color="primary"
                  className={classNames(
                     classes.letterSpace,
                     classes.navigateBtn
                  )}
               >
                  Continue Shopping
               </Button>
               {mapThroughItems(cartItems)}
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  xs={12}
                  className={classes.priceDiv}
               >
                  <Typography variant="body1" color="initial">
                     Total: {total}
                  </Typography>
               </Grid>
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  className={classes.btnContainer}
               >
                  <DangerButton
                     variant="contained"
                     onClick={handleClearCart}
                     className={classes.marginRightTwo}
                  >
                     Clear Cart
                  </DangerButton>
                  <SuccessButton
                     variant="contained"
                     onClick={() => navigate("/checkout")}
                  >
                     Checkout
                  </SuccessButton>
               </Grid>
            </Grid>
         ) : !pending && cartLength === 0 ? (
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
            >
               <Typography variant="h4" color="initial">
                  Cart is empty
               </Typography>
               <Button
                  color="primary"
                  onClick={() => navigate("/products")}
                  variant="contained"
                  className={classNames(
                     classes.letterSpace,
                     classes.marginTopTwo
                  )}
               >
                  Shop Now!!!
               </Button>
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
