import React from "react";
import {
   makeStyles,
   Card,
   CardMedia,
   Grid,
   CardActions,
   Button,
   Typography,
   CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 500,
      [theme.breakpoints.up("sm")]: {
         // height: 200,
         maxHeight: 400,
      },
   },
   media: {
      height: 140,
      [theme.breakpoints.up("sm")]: {
         height: 200,
      },
   },
   letterSpace: {
      letterSpacing: 3,
   },
}));

const SingleItem = ({ item }) => {
   const classes = useStyles();
   const { id, title, image, price } = item;
   const navigate = useNavigate();
   return (
      <Grid item xs={12} sm={6} lg={3}>
         <Card className={classes.root}>
            <CardMedia
               className={classes.media}
               src={image}
               title={title}
               component="img"
               loading="lazy"
            />
            <CardContent>
               <Typography gutterBottom variant="body1" component="h4">
                  {title.substring(0, 20)}...
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  ${price}
               </Typography>
            </CardContent>

            <CardActions>
               <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/products/${id}`)}
                  className={classes.letterSpace}
               >
                  Learn More
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
};

export default SingleItem;
