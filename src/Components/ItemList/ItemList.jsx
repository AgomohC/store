import React from "react";
import SingleItem from "../SingleItem/SingleItem";
import { CircularProgress, makeStyles, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const mapThroughItems = (items) => {
   return items.map((item, idx) => {
      return <SingleItem key={idx} item={item} />;
   });
};

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   progress: {
      marginTop: theme.spacing(5),
   },
}));

const ItemList = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { pending, items } = useSelector((state) => state.app);
   return (
      <>
         {!pending ? (
            mapThroughItems(items)
         ) : (
            <Grid className={classes.container} container>
               <CircularProgress className={classes.progress} size="6rem" />
            </Grid>
         )}
      </>
   );
};

export default ItemList;
