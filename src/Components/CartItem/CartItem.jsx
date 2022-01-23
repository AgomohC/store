import React from "react";
import { makeStyles, Typography, Grid, IconButton } from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import {
   removeItemFromCart,
   incrementCartItem,
   decrementCartItem,
} from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";
const useStyles = makeStyles((theme) => ({
   container: {
      marginBottom: theme.spacing(3),
      maxHeight: 150,
      paddingRight: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
      overflow: "hidden",
      transition: "0.3s all ease-in-out",
   },
   imgContainer: {
      height: "auto",
      width: "100%",
   },
   img: {
      height: "100%",
      width: "100%",
   },
   btnContainer: {
      height: "100%",
      [theme.breakpoints.up("md")]: {
         maxWidth: "30%",
         height: "100%",
      },
   },
   info: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
   },
   infoTitle: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(2),
      },
   },
   infoPrice: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginTop: theme.spacing(4),
      },
   },
   dangerText: {
      color: theme.palette.error.main,
   },
   maxHeight: {
      height: "100%",
      display: "flex",
      alignItems: "center",
   },
   paleText: {
      color: theme.palette.grey[600],
   },
   cursor: {
      cursor: "pointer",
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "Scale(0.9)",
      },
   },
   hideMobile: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "flex",
      },
   },
}));

const CartItem = ({ item }) => {
   const classes = useStyles();
   const { error, pending } = useSelector((state) => state.cart);
   const {
      quantity,
      product_id: { _id, image, price, title },
   } = item;
   const dispatch = useDispatch();

   const handleDelete = () => {
      dispatch(removeItemFromCart(_id));
      if (!error && !pending) {
         dispatch(
            openSnackBar({
               severity: "success",
               text: "Item has removed cart",
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
      <Grid
         container
         direction="column"
         justifyContent="center"
         alignItems="center"
         alignContent="center"
         wrap="nowrap"
         className={classes.container}
      >
         <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            className={classes.maxHeight}
         >
            <Grid
               item
               sm={3}
               className={classNames(classes.hideMobile, classes.maxHeight)}
            >
               <div className={classes.imgContainer}>
                  <img className={classes.img} src={image} alt={title} />
               </div>
            </Grid>
            <Grid item container xs={12} sm={9} md={8} className={classes.info}>
               <Grid
                  item
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
                  className={classes.infoTitle}
               >
                  <Typography variant="body2" color="initial">
                     {title.substring(0, 30)}...
                  </Typography>
                  <Delete
                     onClick={handleDelete}
                     className={classNames(classes.dangerText, classes.cursor)}
                  />
               </Grid>
               <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                  wrap="wrap"
                  className={classes.infoPrice}
               >
                  <Grid
                     container
                     direction="row"
                     item
                     xs={8}
                     justifyContent="space-around"
                  >
                     <Typography
                        variant="subtitle2"
                        color="initial"
                        className={classes.paleText}
                     >
                        {price} x {quantity}
                     </Typography>
                     <Typography variant="subtitle2" color="initial">
                        {Math.round(price * quantity * 100) / 100}
                     </Typography>
                  </Grid>
                  <Grid
                     item
                     className={classes.btnContainer}
                     container
                     direction="row"
                     wrap="nowrap"
                     alignItems="center"
                     xs={4}
                  >
                     <IconButton
                        onClick={() => dispatch(decrementCartItem(_id))}
                     >
                        <Remove className={classes.paleText} />
                     </IconButton>
                     <Typography variant="subtitle2">{quantity}</Typography>
                     <IconButton
                        onClick={() => dispatch(incrementCartItem(_id))}
                     >
                        <Add className={classes.paleText} />
                     </IconButton>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CartItem;
