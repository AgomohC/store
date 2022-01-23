import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { closeMenu } from "../../Redux/appSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
   root: {
      position: "fixed",
      top: 56,
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
         top: 48,
      },
      [theme.breakpoints.up("sm")]: {
         top: 64,
      },
      left: 0,
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      height: "100vh",
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
      zIndex: 999,
   },
   navLinks: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(4),
   },
   linkText: {
      marginTop: theme.spacing(2),
      textAlign: "left",
   },
   close: {
      position: "absolute",
      top: 20,
      right: 20,
   },
   whiteText: {
      color: "#fff",
   },

   link: {
      transition: "0.3s all ease-in-out",
      "&:hover": {
         marginLeft: theme.spacing(1),
      },
      color: "#fff",
      textDecoration: "none",
   },
}));

const Menu = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   return (
      <Grid component="aside" item container xs={12} className={classes.root}>
         <Grid item container direction="column" className={classes.navLinks}>
            <Grid>
               <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.linkText}
               >
                  <Link
                     to="/"
                     onClick={() => dispatch(closeMenu())}
                     className={classes.link}
                  >
                     Home
                  </Link>
               </Typography>
               <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.linkText}
               >
                  <Link
                     to="/products"
                     onClick={() => dispatch(closeMenu())}
                     className={classes.link}
                  >
                     Products
                  </Link>
               </Typography>
               <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.linkText}
               >
                  <Link
                     to="/account"
                     onClick={() => dispatch(closeMenu())}
                     className={classes.link}
                  >
                     My Account
                  </Link>
               </Typography>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Menu;
