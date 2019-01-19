import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import MyGreatPlace from "./my_great_place.jsx";

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 51.11,
      lng: 17.0
    },
    zoom: 14
  };

  render() {
    return (
      <div style={{ height: "91vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAN_7EdSgJsXIE-2z87T-mz3hIDH-S9GjQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MyGreatPlace lat={51.109306} lng={17.030001} text={"1"} />
          <MyGreatPlace lat={51.107756} lng={17.027516} text={"2"} />
          <MyGreatPlace lat={51.111528} lng={17.038073} text={"3"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
