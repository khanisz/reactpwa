import React from "react";
import { shallow } from "enzyme";
import TextComponent from "./TextComponent";

describe("TextComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TextComponent debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<TextComponent />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title", () => {
    const title = "Tytul";
    const component = shallow(<TextComponent title={title} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with text", () => {
    const text = "Lore ipsum";
    const component = shallow(<TextComponent text={text} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title and text", () => {
    const title = "Tytul";
    const text = "Lore ipsum";
    const component = shallow(<TextComponent title={title} text={text} />);
    expect(component).toMatchSnapshot();
  });
});
