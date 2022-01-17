import React from "react";
import { makeStyles, Button, Typography, Grid } from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   container: {
      marginBottom: theme.spacing(3),
      maxHeight: 150,
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
      overflow: "hidden",
   },
   imgContainer: {
      height: "100%",
      width: "100%",
   },
   img: {
      height: "auto",
      width: "100%",
   },
   btnContainer: {
      maxWidth: "30%",
      height: "100%",
   },
   paddingTopTwo: {
      paddingTop: theme.spacing(2),
   },
   dangerText: {
      color: theme.palette.error.main,
   },
   maxHeight: {
      height: "100%",
   },
   paleText: {
      color: theme.palette.grey[600],
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
         <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            className={classes.maxHeight}
         >
            <Grid item xs={4} className={classes.maxHeight}>
               <div className={classes.imgContainer}>
                  <img className={classes.img} src={image} alt={title} />
               </div>
            </Grid>
            <Grid item container xs={7} className={classes.paddingTopTwo}>
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
                  <Grid
                     item
                     className={classes.btnContainer}
                     container
                     direction="row"
                     alignItems="center"
                  >
                     <Button>
                        <Remove className={classes.paleText} />
                     </Button>
                     <Typography variant="subtitle2">{quantity}</Typography>
                     <Button>
                        <Add className={classes.paleText} />
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CartItem;
