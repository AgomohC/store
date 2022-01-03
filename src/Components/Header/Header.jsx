import React from "react";
import Menu from "../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
   Grid,
   makeStyles,
   Typography,
   AppBar,
   Toolbar,
   IconButton,
   Badge,
   Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../../Redux/appSlice";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   root: {
      paddingLeft: 96,
      paddingRight: 96,
   },
   logo: {
      fontFamily: "Meow Script, cursive",
   },
   btnContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      color: "#fff",
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
   },
   link: {
      color: "#fff",
      textDecoration: "none",
   },
   flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   flexEnd: {
      justifyContent: "flex-end",
   },
   spaceAround: {
      justifyContent: "space-around",
   },

   marginLeftOne: {
      marginLeft: theme.spacing(1),
   },

   marginRightThree: {
      marginRight: theme.spacing(3),
   },
   marginRightFour: {
      marginRight: theme.spacing(4),
   },
   letterSpace: {
      letterSpacing: 2,
   },
   whiteText: {
      color: "#fff",
   },
}));

const Header = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isMenuOpen } = useSelector((state) => state.app);
   const user = useSelector((state) => state.user.user);
   return (
      <>
         <AppBar position="static" color="primary">
            <Toolbar className={classes.root}>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  onClick={() => dispatch(openMenu())}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  className={classNames(classes.logo, classes.letterSpace)}
                  variant="h4"
                  component="h1"
               >
                  <Link to="/" className={classes.link}>
                     Peculiar
                  </Link>
               </Typography>
               <Grid
                  container
                  spacing={10}
                  className={classNames(classes.flex, classes.flexEnd)}
               >
                  <Grid item className={classes.marginRightThree}>
                     <Button
                        variant="text"
                        onClick={() => {
                           navigate("/products");
                        }}
                     >
                        <Typography
                           variant="body1"
                           className={classNames(
                              classes.whiteText,
                              classes.letterSpace
                           )}
                        >
                           Products
                        </Typography>
                     </Button>
                  </Grid>
                  <Grid
                     item
                     className={classNames(classes.flex, classes.spaceAround)}
                  >
                     <Button
                        color="inherit"
                        onClick={() => navigate("/cart")}
                        className={classes.marginRightFour}
                     >
                        <Badge badgeContent={4} color="secondary">
                           <ShoppingCartIcon />
                        </Badge>
                        <Typography
                           variant="body1"
                           className={classNames(
                              classes.marginLeftOne,
                              classes.letterSpace
                           )}
                        >
                           CART
                        </Typography>
                     </Button>

                     {user ? (
                        <>
                           <Button
                              onClick={() => {
                                 navigate("/account");
                              }}
                              className={classes.whiteText}
                           >
                              <AccountCircleIcon />
                              <Typography
                                 variant="body1"
                                 className={classNames(
                                    classes.marginLeftOne,
                                    classes.letterSpace
                                 )}
                              >
                                 {user.username.toUpperCase()}
                              </Typography>
                           </Button>
                        </>
                     ) : (
                        <div className={classes.btnContainer}>
                           <Button
                              variant="text"
                              onClick={() => navigate("/login")}
                              size="small"
                           >
                              <Typography
                                 variant="body1"
                                 className={classNames(
                                    classes.whiteText,
                                    classes.letterSpace
                                 )}
                              >
                                 Log In
                              </Typography>
                           </Button>

                           <Button
                              size="small"
                              variant="contained"
                              onClick={() => navigate("/register")}
                           >
                              <Typography
                                 variant="body1"
                                 className={classes.letterSpace}
                              >
                                 Sign Up
                              </Typography>
                           </Button>
                        </div>
                     )}
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
         {isMenuOpen && <Menu />}
      </>
   );
};

export default Header;
