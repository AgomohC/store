import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProductsInCategories } from "../../Redux/appSlice";

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
   letterSpace: {
      letterSpacing: 3,
   },
}));

const Categories = () => {
   const classes = useStyles();
   const { categories } = useSelector((state) => state.app);
   const dispatch = useDispatch();

   return (
      <Grid container className={classes.container}>
         {categories.map((category, idx) => (
            <Grid item key={idx} className={classes.padding}>
               <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => dispatch(getProductsInCategories(category))}
                  className={classes.letterSpace}
               >
                  {category}
               </Button>
            </Grid>
         ))}
      </Grid>
   );
};

export default Categories;
