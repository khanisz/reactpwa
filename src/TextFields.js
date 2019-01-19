import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  pos: {
    padding: 4
  }
});

class TextFields extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
    answered: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { answer, resolution } = this.props;
    let texty;
    console.log(this.state.answered);
    if (this.state.name ==  answer ) {
      this.state.answered = true;
      console.log('jest ok');
    }
    if (this.state.answered) {
      texty = <div>Wskazówka: {resolution}</div>;
    } else {
      texty = <div />;
    }

    return (
      <div>
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Odpowiedź"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </form>
        </div>
        <div>{texty}</div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
