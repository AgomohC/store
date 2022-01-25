import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
}));

const Error = () => {
   const classes = useStyles();
   const navigate = useNavigate();
   return (
      <Grid
         className={classes.container}
         direction="column"
         alignItems="center"
         container
         item
      >
         <Typography variant="h4" color="initial">
            Page Not Found
         </Typography>
         <Button
            color="primary"
            onClick={() => navigate("/")}
            variant="contained"
            className={classes.marginTopTwo}
         >
            Back to home
         </Button>
      </Grid>
   );
};

export default Error;
