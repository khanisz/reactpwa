import React from "react";
import { shallow } from "enzyme";
import CardListComponent from "./CardListComponent";

describe("CardListComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardListComponent debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with no props", () => {
    const component = shallow(<CardListComponent />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 0 components", () => {
    const components = [];
    const component = shallow(<CardListComponent components={components} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 1 components", () => {
    const components = [
      {
        position: 1,
        type: "textC",
        title: "Morderstwo",
        text: "Breslau, 1938 rok. Przedmieście. Brutalnie zamordowano oficera.",
        visible: true
      }
    ];
    const component = shallow(<CardListComponent components={components} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 2 components", () => {
    const components = [
        {
            "position": 1,
            "type": "textC",
            "title": "Morderstwo",
            "text": "Breslau, 1938 rok. Przedmieście. Brutalnie zamordowano oficera.",
            "visible" : true
        },
        {
            "position": 2,
            "type": "imageC",
            "title": "Kawiarnia",
            "url" : "https://media-cdn.tripadvisor.com/media/photo-s/09/54/12/8e/old-cafe.jpg",
            "text": "W pobliskiej kawiarni czeka żona zmarłego. Posiada ona kluczowe informacje o morderstwie.",
            "visible" : true
        }
    ];
    const component = shallow(<CardListComponent components={components} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 3 components", () => {
    const components = [        {
        "position": 1,
        "type": "textC",
        "title": "Morderstwo",
        "text": "Breslau, 1938 rok. Przedmieście. Brutalnie zamordowano oficera.",
        "visible" : true
    },
    {
        "position": 2,
        "type": "imageC",
        "title": "Kawiarnia",
        "url" : "https://media-cdn.tripadvisor.com/media/photo-s/09/54/12/8e/old-cafe.jpg",
        "text": "W pobliskiej kawiarni czeka żona zmarłego. Posiada ona kluczowe informacje o morderstwie.",
        "visible" : true
    },
    {
        "position": 3,
        "type": "imageC",
        "title": "Miejsce zbrodni",
        "text": "Na miejscu widać ofiarę leżącą w pokoju. To najpewniej liczne rany kłute doprowadziły ją do tego stanu.",
        "url": "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU5MTY4OTAyMTUxMDIyMjI5/5_dp263790.jpg",
        "visible" : false
    }];
    const component = shallow(<CardListComponent components={components} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with 4 different components", () => {
    const components = [        {
        "position": 1,
        "type": "textC",
        "title": "Morderstwo",
        "text": "Breslau, 1938 rok. Przedmieście. Brutalnie zamordowano oficera.",
        "visible" : true
    },
    {
        "position": 2,
        "type": "imageC",
        "title": "Kawiarnia",
        "url" : "https://media-cdn.tripadvisor.com/media/photo-s/09/54/12/8e/old-cafe.jpg",
        "text": "W pobliskiej kawiarni czeka żona zmarłego. Posiada ona kluczowe informacje o morderstwie.",
        "visible" : true
    },
    {
        "position": 3,
        "type": "imageC",
        "title": "Miejsce zbrodni",
        "text": "Na miejscu widać ofiarę leżącą w pokoju. To najpewniej liczne rany kłute doprowadziły ją do tego stanu.",
        "url": "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU5MTY4OTAyMTUxMDIyMjI5/5_dp263790.jpg",
        "visible" : false
    },
    {
        "position": 4,
        "type": "questionC",
        "title": "Narzędzie zbrodni",
        "question": "Jakiej broni użyto?",
        "answer": "sztylet",
        "resolution": "Tylko Anna oraz Tomasz mieli dostęp do narzędzia zbrodni.",
        "visible" : false
    }];
    const component = shallow(<CardListComponent components={components} />);
    expect(component).toMatchSnapshot();
  });
});
