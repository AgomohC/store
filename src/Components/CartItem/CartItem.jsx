import React from "react";
import {
   makeStyles,
   Button,
   Typography,
   Grid,
   withStyles,
   IconButton,
   CardMedia,
} from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   container: {
      marginBottom: theme.spacing(3),
      maxHeight: 320,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
   },
   imgContainer: {
      // height: "auto",
      width: "100%",
      maxHeight: 200,
   },
   img: {
      height: 200,
      width: "100%",
   },
   dangerText: {
      color: theme.palette.error.main,
   },
}));

const CartItem = ({ item }) => {
   const classes = useStyles();
   const {
      quantity,
      product_id: { _id, image, price, title },
   } = item;
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
         <Grid container item xs={10} justifyContent="space-between">
            <Grid item xs={4}>
               <div className={classes.imgContainer}>
                  <CardMedia
                     className={classes.img}
                     image={image}
                     alt={title}
                  />
               </div>
            </Grid>
            <Grid item container xs={7}>
               <Grid
                  item
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
               >
                  <Typography variant="subtitle2" color="initial">
                     {title.substring(0, 30)}...
                  </Typography>
                  <Delete className={classes.dangerText} />
               </Grid>
               <Grid
                  item
                  container
                  direction="row"
                  alignItems="baseline"
                  justifyContent="space-between"
               >
                  <Typography variant="subtitle2" color="initial">
                     {price} x {quantity}
                  </Typography>
                  <Typography variant="subtitle2" color="initial">
                     {Math.round(price * quantity * 100) / 100}
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CartItem;
