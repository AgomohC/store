import React from "react";
import { makeStyles, alpha, InputBase, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import { searchBarFunction } from "../../Redux/appSlice";
import { setSearchBarValue } from "../../Redux/appSlice";

const useStyles = makeStyles((theme) => ({
   container: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginTop: theme.spacing(4),
      },
   },

   search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      backgroundColor: alpha(theme.palette.primary.light, 0.35),
      transition: "0.3s all ease-in-out",
      "&:hover": {
         backgroundColor: alpha(theme.palette.primary.light, 0.55),
      },
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         height: theme.spacing(6),
         maxWidth: 600,
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   inputRoot: {
      color: "inherit",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
   },
}));

const Input = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { searchValue } = useSelector((state) => state.app);

   const handleChange = (event) => {
      dispatch(setSearchBarValue(event.target.value));
      dispatch(searchBarFunction(event.target.value));
   };

   return (
      <Grid container className={classes.container}>
         <div className={classes.search}>
            <div className={classes.searchIcon}>
               <SearchIcon />
            </div>
            <InputBase
               placeholder="Find Item"
               classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
               }}
               inputProps={{ "aria-label": "search" }}
               value={searchValue}
               onChange={handleChange}
               name="searchValue"
            />
         </div>
      </Grid>
   );
};

export default Input;
