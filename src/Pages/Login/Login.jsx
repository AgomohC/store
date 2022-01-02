import React from "react";
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
import { loginUser } from "../../Redux/userSlice";
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
   marginTopThree: {
      marginTop: theme.spacing(3),
   },
   text: {
      color: theme.palette.grey[600],
      letterSpacing: 2.5,
   },
   letterSpace: {
      letterSpacing: 2,
   },
}));
const Login = () => {
   const classes = useStyles();
   const { user, pending } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const username = data.get("username");
      const password = data.get("password");
      dispatch(loginUser({ username, password }));
   };

   return (
      <>
         {user && <Navigate to="/account" />};
         <Grid
            className={classNames(
               classes.container,
               classes.flex,
               classes.letterSpace
            )}
            container
         >
            <Grid
               className={classes.formContainer}
               item
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
                  <LockOutlinedIcon data-testid="icon" />
               </span>

               <Typography component="h1" variant="h4">
                  Sign in
               </Typography>

               <Box
                  component="form"
                  className={classes.marginTopTwo}
                  onSubmit={handleSubmit}
                  data-testid="form"
               >
                  <TextField
                     required
                     fullWidth
                     type="text"
                     className={classes.marginTopTwo}
                     id="username"
                     label="Username"
                     name="username"
                     autoFocus
                     data-testid="username"
                  />
                  <TextField
                     required
                     fullWidth
                     className={classes.marginTopTwo}
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     data-testid="password"
                  />

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.marginTopThree}
                     data-testid="submit-btn"
                     disabled={pending}
                  >
                     <Typography
                        variant="body1"
                        className={classes.letterSpace}
                     >
                        Sign In
                     </Typography>
                  </Button>

                  <Typography
                     variant="subtitle2"
                     className={classNames(classes.text, classes.marginTopTwo)}
                  >
                     Don't have an account?
                     <Link
                        to="/register"
                        className={classes.link}
                        data-testid="register-link"
                     >
                        Sign Up
                     </Link>
                  </Typography>
               </Box>
            </Grid>
         </Grid>
      </>
   );
};

export default Login;
