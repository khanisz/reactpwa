import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class QuestionComponent extends Component {
    static defaultProps = {
        question: 'Ulubiona postac disneya?',
        answer: 'no chyba',
        resolution: 'resolution'
      };

  render() {
    return (
      <div>
        {/* //Question */}
        <div>
          <Typography>{this.props.question}</Typography>
        </div>
        {/* //Answer */}
        <div>{this.props.answer}</div>
        {/* //Resolution */}
        <div>{this.props.resolution}</div>
      </div>
    );
  }
}

export default QuestionComponent;
