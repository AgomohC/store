import React from "react";
import { useSelector } from "react-redux";
import {
   Grid,
   Typography,
   makeStyles,
   Button,
   alpha,
   Chip,
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      padding: theme.spacing(4),
      justifyContent: "space-around",
      height: "auto",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
         padding: theme.spacing(10),
      },
   },
   imgContainer: {
      width: "100%",
      height: "auto",
   },
   img: {
      width: "100%",
      height: "auto",
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   paleText: {
      color: alpha("#333", 0.8),
   },
   letterSpace: {
      letterSpacing: 2.5,
   },
}));

const SingleProduct = () => {
   const { singleItem } = useSelector((state) => state.app);
   const { pending } = useSelector((state) => state.cart);
   const classes = useStyles();
   const { title, price, description, category, image } = singleItem;

   return (
      <Grid container className={classes.container}>
         <Grid item xs={10} sm={4}>
            <div className={classes.imgContainer}>
               <img src={image} alt={title} className={classes.img} />
            </div>
         </Grid>
         <Grid item xs={10} sm={6} lgs={4}>
            <Typography className={classes.marginTopTwo} variant="h4">
               {title}
            </Typography>

            <Chip
               label={category}
               variant="outlined"
               className={classes.marginTopTwo}
            />
            <Typography
               className={classNames(classes.paleText, classes.marginTopTwo)}
               variant="body1"
            >
               {description}
            </Typography>
            <Typography className={classes.marginTopTwo} variant="subtitle2">
               ${price}
            </Typography>

            <Button
               className={classNames(classes.letterSpace, classes.marginTopTwo)}
               fullWidth
               variant="contained"
               color="primary"
               disabled={pending}
            >
               Add to Cart
            </Button>
         </Grid>
      </Grid>
   );
};

export default SingleProduct;
