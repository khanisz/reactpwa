import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextFields from "./TextFields";

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

  const { title, question, answer, resolution } = props;

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
        <Typography component="p">{question}</Typography>
        <TextFields answer={answer} resolution={resolution} />
      </CardContent>
    </Card>
  );
}

QuestionComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionComponent);
