import React from "react";
import { shallow } from "enzyme";
import TextFields from "./TextFields";

describe("TextComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TextFields debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<TextFields />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title", () => {
    const answer = "Tytul";
    const component = shallow(<TextFields answer={answer} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with text", () => {
    const resolution = "Lore ipsum";
    const component = shallow(<TextFields resolution={resolution} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title and text", () => {
    const answer = "Tytul";
    const resolution = "Lore ipsum";
    const component = shallow(
      <TextFields answer={answer} resolution={resolution} />
    );
    expect(component).toMatchSnapshot();
  });
});
