import React, { Component } from "react";
import Drawer from "./Drawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TextComponent from "./TextComponent";
import QRComponent from "./QRComponent";
import MapComponent from "./MapComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Drawer />
            <div>
              <Route path="/qr" component={QRComponent} />
              <Route
                path="/text"
                render={props => <TextComponent {...props} text="stext22" />}
              />
              <Route path="/map" component={MapComponent} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
