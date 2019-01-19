import React, { Component } from "react";
import CardComponent from "./CardComponent";

const cards = 'SIema';

class CardListComponent extends Component {
  constructor(props) {
    super(props);
    const { components } = props;
    const cards = "Siema";
    // const cards = components.map(() =>
    //     <CardComponent>

    //     </CardComponent>
    // );
  }
  render() {
    return <div>{cards}</div>;
  }
}

export default CardListComponent;
