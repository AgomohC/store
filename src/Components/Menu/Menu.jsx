import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
   makeStyles,
   alpha,
   Grid,
   IconButton,
   Typography,
} from "@material-ui/core";
import { closeMenu } from "../../Redux/appSlice";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
   root: {
      position: "fixed",
      top: 56,
      [theme.breakpoints.up("sm")]: {
         top: 64,
      },
      left: 0,
      backgroundColor: alpha(theme.palette.primary.light, 0.9),
      display: "flex",
      height: "100vh",
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
      zIndex: 999,
   },
   navLinks: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(5),
   },
   linkText: {
      marginTop: theme.spacing(2),
      transition: "0.3s all ease-in-out",
      "&:hover": {
         marginLeft: theme.spacing(1),
      },
   },
   close: {
      position: "absolute",
      top: 20,
      right: 20,
   },
   whiteText: {
      color: "#fff",
   },
   boldText: {
      fontWeight: "bold",
   },
   link: {
      color: "#fff",
      textDecoration: "none",
   },
}));

const Menu = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   return (
      <Grid component="aside" container xs={10} sm={8} className={classes.root}>
         <IconButton
            onClick={() => dispatch(closeMenu())}
            className={classes.close}
         >
            <CloseIcon
               className={classNames(classes.whiteText, classes.boldText)}
            />
         </IconButton>
         <Grid item container direction="column" className={classes.navLinks}>
            <Typography
               variant="h6"
               color="inherit"
               className={classes.linkText}
            >
               <Link to="/products" className={classes.link}>
                  Products
               </Link>
            </Typography>
            <Typography
               variant="h6"
               color="inherit"
               className={classes.linkText}
            >
               <Link to="/account" className={classes.link}>
                  My Account
               </Link>
            </Typography>
         </Grid>
      </Grid>
   );
};

export default Menu;
