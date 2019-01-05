import React, { Component } from "react";
var Blur = require("react-blur");

class BlurComponent extends Component {
  render() {
    return (
      <Blur img="/images/panda.jpg" blurRadius={5} enableStyles>
        The content.
      </Blur>
    );
  }
}

export default BlurComponent;
