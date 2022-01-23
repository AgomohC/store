import React, { useEffect } from "react";
import {
   Grid,
   makeStyles,
   Typography,
   CircularProgress,
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
   },
   progress: {
      padding: theme.spacing(7),
   },
   font: {
      marginLeft: theme.spacing(2),
   },
}));

const Redirect = ({ url }) => {
   const classes = useStyles();
   useEffect(() => {
      window.location.href = url;
   }, [url]);
   return (
      <Grid
         container
         alignItems="center"
         justifyContent="center"
         className={classNames(classes.progress, classes.container)}
      >
         <CircularProgress size="5rem" />
         <Typography variant="body2" className={classes.font} color="initial">
            Redirecting...
         </Typography>
      </Grid>
   );
};

export default Redirect;
