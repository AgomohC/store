import React, { useEffect } from "react";
import classNames from "classnames";
import {
   makeStyles,
   Typography,
   Button,
   Grid,
   Box,
   TextField,
} from "@material-ui/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder, verifyPayment, clearCart } from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "100vh",
   },
   formContainer: {
      minHeight: 320,
      minWidth: 320,
      maxWidth: 444,
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(3),
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
   },

   link: {
      color: theme.palette.primary.light,
      transition: "all 0.1s ease-in-out",
      "&:hover": {
         color: theme.palette.primary.dark,
      },
      marginLeft: theme.spacing(1),
      textDecoration: "none",
   },
   flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   centerMargin: {
      marginRight: "auto",
      marginLeft: "auto",
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   marginTopFour: {
      marginTop: theme.spacing(4),
   },
   text: {
      color: theme.palette.grey[600],
      letterSpacing: 2.5,
   },
   letterSpace: {
      letterSpacing: 2,
   },
}));
const Shipping = () => {
   const classes = useStyles();
   const [searchParams] = useSearchParams();
   const reference = searchParams.get("reference");
   const { error, pending } = useSelector((state) => state.cart);
   const navigate = useNavigate();

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(verifyPayment(reference));
   }, [dispatch, reference]);

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const address = data.get("address");
      const city = data.get("city");
      const postalCode = data.get("postalCode");
      const country = data.get("country");
      dispatch(
         placeOrder({
            address,
            city,
            postalCode,
            country,
         })
      );
      if (!error && !pending) {
         dispatch(
            openSnackBar({
               severity: "success",
               text: "Order submitted",
            })
         );
         dispatch(clearCart());
         navigate("/products");
      } else if (error && !pending) {
         dispatch(
            openSnackBar({
               severity: "error",
               text: "Something went wrong",
            })
         );
         navigate("/cart");
      }
   };

   return (
      <>
         <Grid
            container
            className={classNames(
               classes.container,
               classes.flex,
               classes.letterSpace
            )}
         >
            <Grid
               className={classes.formContainer}
               item
               container
               direction="column"
               xs={12}
               sm={8}
               md={6}
               lg={4}
            >
               <Typography component="h1" variant="h4">
                  Shipping Info
               </Typography>

               <Box
                  component="form"
                  className={classes.marginTopTwo}
                  onSubmit={handleSubmit}
               >
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="address"
                     label="Address"
                     type="text"
                     id="address"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="city"
                     label="City"
                     type="text"
                     id="city"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="postalCode"
                     label="Postal Code"
                     type="text"
                     id="postalCode"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="country"
                     label="Country"
                     type="text"
                     id="country"
                  />

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.marginTopFour}
                     // disabled={pending}
                  >
                     <Typography
                        variant="body1"
                        className={classes.letterSpace}
                     >
                        Place Order
                     </Typography>
                  </Button>
               </Box>
            </Grid>
         </Grid>
      </>
   );
};

export default Shipping;
