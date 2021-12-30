import React from "react";
import Menu from "../Menu/Menu";
import {
   Grid,
   makeStyles,
   Typography,
   AppBar,
   Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
   return (
      <>
         <AppBar position="static" color="primary">
            <Toolbar>
               <Typography variant="h6"></Typography>
            </Toolbar>
         </AppBar>
         <Menu />
      </>
   );
};

export default Header;
