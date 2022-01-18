import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   Grid,
   Typography,
   Button,
   makeStyles,
   withStyles,
} from "@material-ui/core";
import { logOut } from "../../Redux/userSlice";
import { resetCart } from "../../Redux/cartSlice";

const useStyles = makeStyles((theme) => ({
   container: {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(4),
      padding: theme.spacing(4),
   },
   profileCard: {
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
      padding: theme.spacing(3),
   },
   alertContainer: {
      backgroundColor: theme.palette.error.light,
      padding: theme.spacing(2),
      color: theme.palette.common.white,
   },
   marginTopOne: {
      marginTop: theme.spacing(1),
   },
   marginTopThree: {
      marginTop: theme.spacing(3),
   },
   marginLeftTwo: {
      marginLeft: theme.spacing(4),
   },
}));

const WarningButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.error.main,
      backgroundColor: "transparent",
      color: theme.palette.primary,
      letterSpacing: 2,
      paddingRight: theme.spacing(6),
      transition: "0.3s all ease-in-out",
      paddingLeft: theme.spacing(6),
      "&:hover": {
         transform: "Scale(1.05)",
         color: theme.palette.common.white,
         borderColor: theme.palette.error.main,
         backgroundColor: theme.palette.error.main,
      },
   },
}))(Button);

const AccountInfo = () => {
   const classes = useStyles();
   const {
      user: { firstName, lastName, email, username },
   } = useSelector((state) => state.user);

   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logOut());
      dispatch(resetCart());
   };
   return (
      <Grid
         container
         className={classes.container}
         justifyContent="center"
         alignItems="center"
      >
         <Grid
            container
            item
            xs={12}
            sm={8}
            md={6}
            className={classes.profileCard}
         >
            <Grid item xs={10} className={classes.textContainer}>
               <Typography variant="h4" color="initial">
                  Profile
               </Typography>
            </Grid>
            <Grid item xs={10} className={classes.marginTopThree}>
               <Typography variant="subtitle2" color="initial">
                  Name
               </Typography>
               <Typography variant="subtitle1" color="initial">
                  {firstName} {lastName}
               </Typography>
            </Grid>
            <Grid item xs={10} className={classes.marginTopThree}>
               <Typography variant="subtitle2" color="initial">
                  Username
               </Typography>
               <Typography variant="subtitle1" color="initial">
                  {username}
               </Typography>
            </Grid>
            <Grid item xs={10} className={classes.marginTopThree}>
               <Typography variant="subtitle2" color="initial">
                  Email
               </Typography>
               <Typography variant="subtitle1" color="initial">
                  {email}
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.marginTopThree}>
               <WarningButton
                  variant="outlined"
                  onClick={handleLogout}
                  color="primary"
                  f
               >
                  Log Out
               </WarningButton>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default AccountInfo;
