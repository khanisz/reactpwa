import React from "react";
import { shallow } from "enzyme";
import CardComponent from "./CardListComponent";

describe("CardComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<CardComponent />);
    expect(component).toMatchSnapshot();
  });


  it("should render correctly with text components", () => {
    const component1 = {
      position: 1,
      type: "textC",
      title: "Morderstwo",
      text: "Breslau, 1938 rok. Przedmieście. Brutalnie zamordowano oficera.",
      visible: true
    };
    const component = shallow(<CardComponent component={component1} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with image components", () => {
    const component1 = {
      position: 2,
      type: "imageC",
      title: "Kawiarnia",
      url:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/12/8e/old-cafe.jpg",
      text:
        "W pobliskiej kawiarni czeka żona zmarłego. Posiada ona kluczowe informacje o morderstwie.",
      visible: true
    };
    const component = shallow(<CardComponent component={component1} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with question components", () => {
    const component1 = {
      position: 4,
      type: "questionC",
      title: "Narzędzie zbrodni",
      question: "Jakiej broni użyto?",
      answer: "sztylet",
      resolution: "Tylko Anna oraz Tomasz mieli dostęp do narzędzia zbrodni.",
      visible: false
    };
    const component = shallow(<CardComponent component={component1} />);
    expect(component).toMatchSnapshot();
  });
});
