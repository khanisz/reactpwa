import React from "react";
import { shallow } from "enzyme";
import QuestionComponent from "./QuestionComponent";

describe("TextComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<QuestionComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<QuestionComponent />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with answer", () => {
    const answer = "Tytul";
    const component = shallow(<QuestionComponent answer={answer} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with resolution", () => {
    const resolution = "Lore ipsum";
    const component = shallow(<QuestionComponent resolution={resolution} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with question, answer", () => {
    const question = 'Pytanie';
    const answer = "Tytul";
    const component = shallow(
      <QuestionComponent question = {question} answer={answer}  />
    );
    expect(component).toMatchSnapshot();
  });


  it("should render correctly with question, answer, resolution", () => {
    const question = "Pytanie";
    const answer = "Tytul";
    const resolution = "Lore ipsum";
    const component = shallow(
      <QuestionComponent
        question={question}
        answer={answer}
        resolution={resolution}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
