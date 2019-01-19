import React, { Component } from "react";
import TextComponent from "./TextComponent";
import QuestionComponent from "./QuestionComponent";
import ImageComponent from "./ImageComponent";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { component } = this.props;
    let card;
    if ((component.visible == true)) {
      if (component.type == "textC") {
        card = <TextComponent title={component.title} text={component.text} />;
      } else if (component.type == "imageC") {
        card = (
          <ImageComponent
            title={component.title}
            text={component.text}
            url={component.url}
          />
        );
      } else if (component.type == "questionC") {
        card = (
          <QuestionComponent
            title={component.title}
            question={component.question}
            answer={component.answer}
            resolution={component.resolution}
          />
        );
      }
    }

    return <div>{card}</div>;
  }
}

export default CardComponent;
