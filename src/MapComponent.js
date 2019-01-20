import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";

var points = "...Loading";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    var { mapPoint } = props;
    if (mapPoint) {
      points = mapPoint.map(c => (
        <MyGreatPlace lat={c.lat} lng={c.lng} text={c.name} />
      ));
    }
  }

  static defaultProps = {
    center: {
      lat: 51.110479,
      lng: 17.033256
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
          {points}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
