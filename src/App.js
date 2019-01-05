import React, { Component } from 'react';
import './App.css';
import Drawer from './Drawer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextComponent from './TextComponent';
import QRComponent from './QRComponent';

class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <Route path="/" component={Drawer} />
            <Route path="/text" component={TextC} />
            <Route path="/qr" component={QRC} />

          </div>
      </Router>
    );
  }
}

function QRC() {
  return (
    <div>
      <QRComponent/>
    </div>
  );
}

function TextC() {
  return (
    <div>
      <TextComponent text="siema"/>
    </div>
  );
}



export default App;
