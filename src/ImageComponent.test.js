import React from "react";
import { shallow } from "enzyme";
import ImageComponent from "./ImageComponent";

describe("ImageComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ImageComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<ImageComponent />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title", () => {
    const title = "Tytul";
    const component = shallow(<ImageComponent title={title} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with text", () => {
    const text = "Lore ipsum";
    const component = shallow(<ImageComponent text={text} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title and text", () => {
    const title = "Tytul";
    const text = "Lore ipsum";
    const component = shallow(<ImageComponent title={title} text={text} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with title, text, url", () => {
    const title = "Tytul";
    const text = "Lore ipsum";
    const url ='url';
    const component = shallow(<ImageComponent title={title} text={text} url={url} />);
    expect(component).toMatchSnapshot();
  });


});
