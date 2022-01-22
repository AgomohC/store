import React from "react";
import { Fab, makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
   root: {
      position: "fixed",
      bottom: theme.spacing(4),
      right: theme.spacing(4),
   },
}));

const ScrollTop = (props) => {
   const classes = useStyles();
   const { children, window } = props;

   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
   });
   const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
         "#back-to-top-anchor"
      );

      if (anchor) {
         anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
   };
   return (
      <Zoom in={trigger}>
         <div
            onClick={handleClick}
            role="presentation"
            className={classes.root}
         >
            {children}
         </div>
      </Zoom>
   );
};

const ScrollBtn = (props) => {
   return (
      <ScrollTop {...props}>
         <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
         </Fab>
      </ScrollTop>
   );
};
export default ScrollBtn;
