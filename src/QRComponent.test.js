import React from "react";
import { shallow } from "enzyme";
import QRComponent from "./QRComponent";

describe("QRComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<QRComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<QRComponent />);
    expect(component).toMatchSnapshot();
  });

});
