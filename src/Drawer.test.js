import React from "react";
import { shallow } from "enzyme";
import Drawer from "./Drawer";

describe("Drawer", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Drawer debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<Drawer />);

    expect(component).toMatchSnapshot();
  });

});
