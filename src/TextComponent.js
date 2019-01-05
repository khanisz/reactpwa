import { Typography } from "@material-ui/core";
import React, { Component } from 'react';

class TextComponent extends Component {

    render() {
      return (
            <div>
                <Typography>
                    {this.props.text}
                </Typography>
            </div>
      );
    }
  }

  export default TextComponent;

  