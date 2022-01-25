import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
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
   Fade,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../../Redux/appSlice";
import classNames from "classnames";
import { logOut } from "../../Redux/userSlice";
import CloseIcon from "@material-ui/icons/Close";
import { fetchCartItems } from "../../Redux/cartSlice";
import { resetCart } from "../../Redux/cartSlice";

const useStyles = makeStyles((theme) => ({
   root: {
      [theme.breakpoints.up("lg")]: {
         paddingLeft: 96,
         paddingRight: 96,
      },
      overflow: "hidden",
      position: "relative",
   },
   logo: {
      fontFamily: "Meow Script, cursive",
   },
   btnContainer: {
      display: "flex",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      color: "#fff",
   },
   menuButton: {
      marginRight: theme.spacing(0.5),

      [theme.breakpoints.up("md")]: {
         marginRight: theme.spacing(2),
         display: "none",
      },
   },
   link: {
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
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
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         marginRight: theme.spacing(4),
      },
   },
   letterSpace: {
      letterSpacing: 2,
   },
   letterSpace2: {
      letterSpacing: 1.2,
   },
   whiteText: {
      color: "#fff",
   },
   hideMobile: {
      display: "none",
      [theme.breakpoints.up("md")]: {
         display: "flex",
      },
   },
   hideMini: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "flex",
      },
   },
   transition: {
      transition: "0.3s all ease-out",
      "&:hover": {
         transform: "Scale(1.1)",
      },
   },
}));

const Header = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isMenuOpen } = useSelector((state) => state.app);
   const { cartLength } = useSelector((state) => state.cart);
   const { user } = useSelector((state) => state.user);

   const handleLogout = () => {
      dispatch(logOut());
      dispatch(resetCart());
   };

   useEffect(() => {
      dispatch(fetchCartItems());
   }, [dispatch]);

   return (
      <>
         <AppBar position="static" color="primary">
            <Toolbar className={classes.root} id="back-to-top-anchor">
               {isMenuOpen ? (
                  <IconButton
                     onClick={() => dispatch(closeMenu())}
                     edge="start"
                     className={classNames(
                        classes.transition,
                        classes.menuButton
                     )}
                     color="inherit"
                  >
                     <CloseIcon className={classes.whiteText} />
                  </IconButton>
               ) : (
                  <IconButton
                     edge="start"
                     className={classNames(
                        classes.transition,
                        classes.menuButton
                     )}
                     color="inherit"
                     onClick={() => dispatch(openMenu())}
                  >
                     <MenuIcon />
                  </IconButton>
               )}

               <Typography
                  className={classNames(
                     classes.logo,
                     classes.letterSpace,
                     classes.link
                  )}
                  variant="h4"
                  component="h1"
                  translate="no"
                  onClick={() => {
                     dispatch(closeMenu());
                     navigate("/");
                  }}
               >
                  Peculiar
               </Typography>

               <Grid
                  container
                  spacing={10}
                  className={classNames(classes.flex, classes.flexEnd)}
               >
                  <Grid
                     item
                     className={classNames(
                        classes.marginRightThree,
                        classes.hideMobile
                     )}
                  >
                     <Button
                        variant="text"
                        onClick={() => {
                           navigate("/products");
                        }}
                        className={classes.transition}
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
                        onClick={() => {
                           navigate("/cart");
                           dispatch(closeMenu());
                        }}
                        className={classes.marginRightFour}
                     >
                        <Badge badgeContent={cartLength} color="secondary">
                           <ShoppingCartIcon />
                        </Badge>
                        <Typography
                           variant="body1"
                           className={classNames(
                              classes.marginLeftOne,
                              classes.letterSpace,
                              classes.hideMobile
                           )}
                        >
                           CART
                        </Typography>
                     </Button>

                     {user ? (
                        <div className={classes.btnContainer}>
                           <Button
                              onClick={() => {
                                 navigate("/account");
                              }}
                              className={classNames(
                                 classes.whiteText,
                                 classes.hideMini
                              )}
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
                           <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                              onClick={handleLogout}
                              className={classes.transition}
                           >
                              <Typography
                                 variant="body1"
                                 className={classes.letterSpace2}
                              >
                                 Log Out
                              </Typography>
                           </Button>
                        </div>
                     ) : (
                        <div className={classes.btnContainer}>
                           <Button
                              variant="text"
                              onClick={() => navigate("/login")}
                              size="small"
                              disableRipple
                              disableFocusRipple
                           >
                              <Typography
                                 variant="body1"
                                 className={classNames(
                                    classes.whiteText,
                                    classes.letterSpace2
                                 )}
                              >
                                 Log In
                              </Typography>
                           </Button>

                           <Button
                              size="small"
                              variant="contained"
                              onClick={() => navigate("/register")}
                              className={classNames(
                                 classes.transition,
                                 classes.hideMini
                              )}
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
         {isMenuOpen && (
            <Fade in={isMenuOpen}>
               <Menu />
            </Fade>
         )}
      </>
   );
};

export default Header;
