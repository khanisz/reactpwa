import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
  const { text } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        />
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" />
        <Typography component="p">
          Breslau, 1938 rok. Przenieście się w czasie i poznajcie największą
          tajemnicę przedwojennego Wrocławia. Znika kobieta podejrzana o zdradę
          oraz śledzący ją na zlecenie męża detektywi. Teraz wszystko w Waszych
          rękach. Zanim jednak odnajdziecie trop, najpierw musicie odnaleźć
          siebie nawzajem w podziemiach Starego Miasta...
        </Typography>
      </CardContent>
    </Card>
  );
}

TextComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextComponent);
