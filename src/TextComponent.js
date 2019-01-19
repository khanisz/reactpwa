import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function TextComponent(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const { title, text } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        />
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" />
        <Typography component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

TextComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextComponent);
