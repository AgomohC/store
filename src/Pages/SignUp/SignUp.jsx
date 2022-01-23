import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import {
   makeStyles,
   Typography,
   Button,
   Grid,
   Box,
   TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../Redux/userSlice";
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
   iconContainer: {
      backgroundColor: theme.palette.primary.main,
      height: theme.spacing(5),
      width: theme.spacing(5),
      borderRadius: "50%",
      color: "#fff",
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
const SignUp = () => {
   const classes = useStyles();
   const { user, pending, error, errorMessage } = useSelector(
      (state) => state.user
   );
   const dispatch = useDispatch();

   const isMounted = useRef(false);

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const lastName = data.get("lastName");
      const firstName = data.get("firstName");
      const email = data.get("email");
      const username = data.get("username");
      const password = data.get("password");
      const confirmPassword = data.get("confirmPassword");
      if (password === confirmPassword) {
         dispatch(
            registerUser({
               lastName,
               firstName,
               email,
               username,
               password,
            })
         );
      }
      if (password !== confirmPassword) {
         dispatch(
            openSnackBar({
               text: "Passwords do not correspond",
               severity: "error",
            })
         );
      }
   };
   useEffect(() => {
      if (isMounted.current) {
         if (error) {
            dispatch(
               openSnackBar({
                  severity: "error",
                  text: errorMessage,
               })
            );
         }
      } else {
         isMounted.current = true;
      }
   }, [errorMessage, error, dispatch]);
   return (
      <>
         {user && <Navigate to="/account" />}
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
               <span
                  className={classNames(
                     classes.iconContainer,
                     classes.flex,
                     classes.centerMargin
                  )}
               >
                  <LockOutlinedIcon />
               </span>

               <Typography component="h1" variant="h4">
                  Register
               </Typography>

               <Box
                  component="form"
                  className={classes.marginTopTwo}
                  onSubmit={handleSubmit}
               >
                  <Grid spacing={2} container className={classes.flex}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           fullWidth
                           type="text"
                           id="lastName"
                           label="Last Name"
                           name="lastName"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           fullWidth
                           name="firstName"
                           label="First Name"
                           type="text"
                           id="firstName"
                        />
                     </Grid>
                  </Grid>
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="username"
                     label="Username"
                     type="text"
                     id="username"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="email"
                     label="Email"
                     type="email"
                     id="email"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="confirmPassword"
                     label="Confirm Password"
                     type="password"
                     id="confirmPassword"
                  />

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.marginTopFour}
                     disabled={pending}
                  >
                     <Typography
                        variant="body1"
                        className={classes.letterSpace}
                     >
                        Register
                     </Typography>
                  </Button>

                  <Typography
                     variant="subtitle2"
                     className={classNames(classes.text, classes.marginTopTwo)}
                  >
                     Already a member?
                     <Link
                        to="/login"
                        className={classes.link}
                        data-testid="login-link"
                     >
                        Log in
                     </Link>
                  </Typography>
               </Box>
            </Grid>
         </Grid>
      </>
   );
};

export default SignUp;
