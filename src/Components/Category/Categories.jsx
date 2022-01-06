import React from "react";
import { Button, Typography, Grid, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
   container: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginTop: theme.spacing(3),
      },
   },
   padding: {
      padding: theme.spacing(1),
   },
}));

const Categories = () => {
   const classes = useStyles();
   const { categories } = useSelector((state) => state.app);

   return (
      <Grid container className={classes.container}>
         {categories.map((category) => (
            <Grid item className={classes.padding}>
               <Button size="small" color="primary" variant="contained">
                  {category}
               </Button>
            </Grid>
         ))}
      </Grid>
   );
};

export default Categories;
