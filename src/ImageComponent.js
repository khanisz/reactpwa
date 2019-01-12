import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 450,
    margin: 10
  },
  media: {
    height: 300
  }
};

function ImageComponent(props) {
  const { classes } = props;
  const { url } = props;
  return (
    <div>
      <div style={{height: 10}}>

      </div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </div>
  );
}

ImageComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageComponent);
