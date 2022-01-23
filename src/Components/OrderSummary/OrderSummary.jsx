import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: theme.shadows[2],
      borderRadius: theme.spacing(2),
      maxHeight: 380,
      minWidth: 320,
      maxWidth: 444,
      margin: theme.spacing(3),
      overflowY: "scroll",
      padding: theme.spacing(2),
   },
   itemContainer: {
      borderBottom: `1px solid #0b0d17`,
      maxHeight: 150,
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      overflow: "hidden",
   },
   imgContainer: {
      height: "auto",
      width: "100%",
   },
   img: {
      height: "100%",
      width: "100%",
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

const OrderSummary = () => {
   const classes = useStyles();
   const { cartItems, total } = useSelector((state) => state.cart);
   return (
      <Grid container item xs={12} md={6} className={classes.container}>
         <Typography component="h2" variant="h5">
            Order Summary
         </Typography>
         {cartItems.map((item) => {
            const {
               quantity,
               product_id: { image, price, title },
            } = item;
            return (
               <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
                  className={classes.itemContainer}
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
                        className={classNames(
                           classes.hideMobile,
                           classes.maxHeight
                        )}
                     >
                        <div className={classes.imgContainer}>
                           <img
                              className={classes.img}
                              src={image}
                              alt={title}
                           />
                        </div>
                     </Grid>
                     <Grid
                        item
                        container
                        xs={12}
                        sm={9}
                        md={8}
                        className={classes.info}
                     >
                        <Grid
                           item
                           container
                           direction="row"
                           alignItems="flex-start"
                           justifyContent="space-between"
                           className={classes.infoTitle}
                        >
                           <Typography variant="body2" color="initial">
                              {title.substring(0, 40)}...
                           </Typography>
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
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            );
         })}
         <Typography component="h6" variant="body1">
            Total: $ {total}
         </Typography>
      </Grid>
   );
};

export default OrderSummary;
