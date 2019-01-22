import React from "react";
import { shallow } from "enzyme";
import MapComponent from "./MapComponent";

describe("MapComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MapComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<MapComponent />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 1 map Point", () => {
    const mapPoint = [
      {
        name: "1",
        lat: 51.109306,
        lng: 17.030001
      }
    ];
    const component = shallow(<MapComponent mapPoint={mapPoint} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 2 map Points", () => {
    const mapPoint = [
      {
        name: "1",
        lat: 51.109306,
        lng: 17.030001
      },
      {
        name: "2",
        lat: 51.107756,
        lng: 17.027516
      }
    ];
    const component = shallow(<MapComponent mapPoint={mapPoint} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 3 map Points", () => {
    const mapPoint = [
      {
        name: "1",
        lat: 51.109306,
        lng: 17.030001
      },
      {
        name: "2",
        lat: 51.107756,
        lng: 17.027516
      },
      {
        name: "3",
        lat: 51.111528,
        lng: 17.038073
      }
    ];
    const component = shallow(<MapComponent mapPoint={mapPoint} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 0 map Points", () => {
    const mapPoint = [];
    const component = shallow(<MapComponent mapPoint={mapPoint} />);
    expect(component).toMatchSnapshot();
  });
});
