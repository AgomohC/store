import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   Grid,
   Typography,
   Button,
   makeStyles,
   Typographyes,
   InputBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   container: {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(4),
      padding: theme.spacing(6),
   },
   textContainer: {},
}));

const AccountInfo = () => {
   const classes = useStyles();
   const {
      user: { firstName, lastName, email, username },
   } = useSelector((state) => state.user);
   return (
      <Grid
         container
         className={classes.container}
         justifyContent="center"
         alignItems="center"
      >
         <Grid item xs={10} className={classes.textContainer}>
            <Typography variant="h3" color="initial">
               Profile
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Typography variant="h6" color="initial">
               Name
            </Typography>
            <Typography variant="body1" color="initial">
               {firstName} {lastName}
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Typography variant="h6" color="initial">
               Username
            </Typography>
            <Typography variant="body1" color="initial">
               {username}
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Typography variant="h6" color="initial">
               Email
            </Typography>
            <Typography variant="body1" color="initial">
               {email}
            </Typography>
         </Grid>
         <Grid item xs={10}>
            <Button variant="contained" color="primary" fullWidth>
               Delete Account
            </Button>
         </Grid>
      </Grid>
   );
};

export default AccountInfo;
