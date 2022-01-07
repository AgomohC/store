import React from "react";
import SingleItem from "../SingleItem/SingleItem";
import { CircularProgress, makeStyles, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import classNames from "classnames";

const mapThroughItems = (items) => {
   return items.map((item, idx) => {
      return <SingleItem key={idx} item={item} />;
   });
};

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
   },
   progress: {
      padding: theme.spacing(10),
   },
}));

const ItemList = () => {
   const classes = useStyles();

   const { pending, items } = useSelector((state) => state.app);
   return (
      <>
         {!pending ? (
            <Grid
               className={classes.container}
               container
               item
               spacing={4}
               xs={10}
               sm={8}
            >
               {mapThroughItems(items)}
            </Grid>
         ) : (
            <Grid
               className={classNames(classes.progress, classes.container)}
               container
            >
               <CircularProgress size="5rem" />
            </Grid>
         )}
      </>
   );
};

export default ItemList;
