import React from "react";
import {
   IconButton,
   Typography,
   Grid,
   makeStyles,
   Link,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "auto",
      height: 360,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      backgroundColor: theme.palette.primary.main,
   },
   waveWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      overflow: "hidden",
      lineHeight: 0,
   },
   waveSvg: {
      position: "relative",
      display: "block",
      width: "calc(168% + 1.3px)",
      height: 150,
      [theme.breakpoints.up("sm")]: {
         width: "calc(100% + 1.3px)",
         height: 110,
         transform: "rotateY(180deg)",
      },
   },

   wavePath: {
      fill: "#fff",
   },
   whiteText: {
      color: theme.palette.common.white,
   },
   centerText: {
      textAlign: "center",
   },
   marginTopOne: {
      marginTop: theme.spacing(1),
   },
}));

const Footer = () => {
   const classes = useStyles();
   const year = new Date().getFullYear();
   return (
      <Grid container direction="column" className={classes.container}>
         <div className={classes.waveWrapper}>
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
               className={classes.waveSvg}
            >
               <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className={classes.wavePath}
               ></path>
            </svg>
         </div>
         <Grid item>
            <Link href="mailto:chinaemerema@gmail.com" target="_blank">
               <IconButton>
                  <EmailIcon className={classes.whiteText} />
               </IconButton>
            </Link>
            <Link href="https://github.com/AgomohC" target="_blank">
               <IconButton>
                  <GitHubIcon className={classes.whiteText} />
               </IconButton>
            </Link>
            <Link href="https://twitter.com/femto_ace" target="_blank">
               <IconButton>
                  <TwitterIcon className={classes.whiteText} />
               </IconButton>
            </Link>
         </Grid>
         <Grid item>
            <Typography
               variant="body1"
               className={classNames(
                  classes.centerText,
                  classes.whiteText,
                  classes.marginTopOne
               )}
            >
               &copy; {year} Chinaemerem Agomoh.
            </Typography>
            <Typography
               variant="body1"
               className={classNames(
                  classes.centerText,
                  classes.whiteText,
                  classes.marginTopOne
               )}
            >
               All rights reserved
            </Typography>
         </Grid>
      </Grid>
   );
};

export default Footer;
