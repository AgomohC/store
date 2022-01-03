import React from "react";
import { Grid, makeStyles, alpha, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import img from "../../assets/background.jpg";
const useStyles = makeStyles((theme) => ({
   container: {
      height: "75vh",
      // backgroundImage: ,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      color: "#fff",
      justifyContent: "center",
      background: `${alpha(theme.palette.grey[900], 0.9)} url(${img})`,
      backgroundBlendMode: "overlay",
   },
   whiteText: {
      color: "#fff",
   },
   scriptText: {
      fontFamily: "Meow Script, cursive",
   },
}));

const Hero = () => {
   const classes = useStyles();
   const navigate = useNavigate();
   return (
      <Grid container className={classes.container}>
         <Grid item xs={10}>
            <Typography
               variant="h4"
               component="h2"
               color="initial"
               className={classes.scriptText}
            >
               The Best Products At The Best Prices
            </Typography>
            <Typography variant="h2" component="h3" color="initial">
               Be Unique and Stylish
            </Typography>
            <Button
               variant="outlined"
               size="large"
               onClick={() => navigate("/products")}
            >
               Shop Now!
            </Button>
         </Grid>
      </Grid>
   );
};

export default Hero;
