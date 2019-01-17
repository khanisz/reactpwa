import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextFields from './TextFields';

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
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 10,
    marginRight: 10
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
};

function QuestionComponent(props) {
  const { classes } = props;

  const bull = <span className={classes.bullet}>•</span>;
  const { text } = props;
  var value = "";
  function handleSubmit(event) {
    alert("A name was submitted: " + value);
    event.preventDefault();
  }
  function handleChange(event) {
    value = event.target.value;
  }

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
        <TextFields>

        </TextFields>
      </CardContent>
    </Card>
  );
}

QuestionComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionComponent);
