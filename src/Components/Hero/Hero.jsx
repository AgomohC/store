import React from "react";
import {
   Grid,
   makeStyles,
   alpha,
   Typography,
   Button,
   withStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import img from "../../assets/background.jpg";
const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "calc(100vh - 56px)",
      height: "auto",
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
         minHeight: "calc(100vh - 48px)",
      },
      [theme.breakpoints.up("sm")]: {
         minHeight: "calc(100vh - 64px)",
      },
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      color: "#fff",
      justifyContent: "center",
      background: `${alpha(theme.palette.grey[900], 0.9)} url(${img})`,
      backgroundBlendMode: "overlay",
      alignItems: "center",
   },
   whiteText: {
      color: "#fff",
   },
   scriptText: {
      fontFamily: "Meow Script, cursive",
      marginBottom: theme.spacing(2),
      maxWidth: 375,
      fontSize: "2rem",
      [theme.breakpoints.up("sm")]: {
         maxWidth: 450,

         fontSize: "3rem",
      },
   },
   bigText: {
      maxWidth: 600,
      marginBottom: theme.spacing(3),
      fontSize: "3.5rem",
      [theme.breakpoints.up("sm")]: {
         maxWidth: 720,
         marginBottom: theme.spacing(6),
         fontSize: "4.5rem",
      },
      [theme.breakpoints.up("md")]: {
         fontSize: "6rem",
      },
   },
   padding: {
      paddingBottom: theme.spacing(4),
   },
}));

const WhiteButton = withStyles({
   root: {
      borderColor: "#fff",
      color: "#fff",
      textTransform: "capitalize",
      paddingLeft: 56,
      paddingRight: 56,
      letterSpacing: 2,
      "&:hover": {
         backgroundColor: "#fff",
         color: "#0b0d17",
      },
   },
})(Button);

const Hero = () => {
   const classes = useStyles();
   const navigate = useNavigate();
   return (
      <Grid container className={classes.container}>
         <Grid item xs={10} className={classes.padding}>
            <Typography
               variant="h3"
               component="h2"
               color="initial"
               className={classes.scriptText}
            >
               The Best Products
            </Typography>
            <Typography
               variant="h1"
               component="h3"
               color="initial"
               className={classes.bigText}
            >
               Be Unique and Stylish
            </Typography>
            <WhiteButton
               variant="outlined"
               size="large"
               onClick={() => navigate("/products")}
            >
               Shop Now!
            </WhiteButton>
         </Grid>
      </Grid>
   );
};

export default Hero;
