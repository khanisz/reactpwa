import React, { Component } from "react";
import CardComponent from './CardComponent';


class CardListComponent extends Component {
    constructor(props) {
        super(props);
        const {components} = props;
        const cards = components.map(() =>
            <CardComponent>

            </CardComponent>
        );
    }
    render() {
      return (
        {cards}
      );
    }
  }
  
  export default CardListComponent;