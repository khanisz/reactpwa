import { Typography } from "@material-ui/core";
import React, { Component } from "react";

class TextComponent extends Component {
  render() {
    const styles = {
      root: {
        width: "100%",
        maxWidth: 500,
        padding: 20
      }
    };

    return (
      <div style={{ padding: 15 }}>
        <div style={{ margin: 10 }}>
          <Typography variant="h4" align="center">
            {this.props.text}
          </Typography>
        </div>
        <div>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            felis ultrices, dictum massa in, rutrum justo. Mauris ac enim sed
            purus egestas sodales. Sed imperdiet dolor at laoreet sollicitudin.
            Etiam et mi sed lorem rhoncus varius ac sed arcu. Suspendisse
            potenti. Nullam sed mauris justo. Aliquam fermentum justo risus. Sed
            molestie ex quis tellus cursus, nec auctor purus bibendum. Nam
            pretium iaculis semper. Nullam scelerisque vulputate justo, a
            tincidunt quam mollis non. Proin ornare volutpat lorem sit amet
            lobortis.
          </Typography>
        </div>
      </div>
    );
  }
}

export default TextComponent;
