import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 51.11,
      lng: 17.02
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "95vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAN_7EdSgJsXIE-2z87T-mz3hIDH-S9GjQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={51.110662}
            lng={17.029335}
            text={"Kreyser Avrora"}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
