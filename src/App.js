import React, { Component } from 'react';
import './App.css';
import Drawer from './Drawer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextComponent from './TextComponent';

class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <Route path="/" component={Drawer} />
            <Route path="/about" component={About} />
          </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <TextComponent text="siema"/>
    </div>
  );
}



export default App;
