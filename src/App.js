import React, { Component } from "react";
import "./App.css";
import Drawer from "./Drawer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextComponent from "./TextComponent";
import QRComponent from "./QRComponent";
import MapComponent from "./MapComponent";

class App extends Component {
  render() {
    return (
      <div>

      
      <Drawer/>
      <Router>
        <div>
          {/* <Route path="/" component={Drawer} /> */}
          <Route path="/qr" component={QRComponent} />
          <Route path="/text2" render={(props) => <TextComponent {...props} text='siema222' />} />
          <Route path="/map" component = {MapComponent} />
        </div>
      </Router>
      </div>
    );
  }
}



export default App;
