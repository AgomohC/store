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
   marginTopThree: {
      marginTop: theme.spacing(3),
   },
   marginLeftTwo: {
      marginLeft: theme.spacing(4),
   },
}));

const DangerButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.error.main,
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
         borderColor: theme.palette.error.main,
         backgroundColor: theme.palette.error.main,
      },
   },
}))(Button);
const WarningButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.error.main,
      backgroundColor: "transparent",
      color: theme.palette.primary,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
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
               >
                  Log Out
               </WarningButton>
               <DangerButton
                  variant="contained"
                  className={classes.marginLeftTwo}
               >
                  Delete Account
               </DangerButton>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default AccountInfo;
