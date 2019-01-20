import React, { Component } from "react";
import CardComponent from "./CardComponent";

var cards = "...Loading";

class CardListComponent extends Component {
  constructor(props) {
    super(props);
    var { components } = props;
    if (components) {
      cards = components.map((c) => <CardComponent component={c}/>);
    }
  }
  render() {
    return <div>{cards}</div>;
  }
}

export default CardListComponent;
