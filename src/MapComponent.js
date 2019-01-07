import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import MyGreatPlace from './my_great_place.jsx';

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
      <div style={{ height: "95vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAN_7EdSgJsXIE-2z87T-mz3hIDH-S9GjQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        
          <MyGreatPlace lat={51.109306} lng={17.030001} text={'A'}/>
          <MyGreatPlace lat={51.107756} lng={17.027516} text={'B'}/>
          <MyGreatPlace lat={51.111528} lng={17.038073} text={'C'}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
