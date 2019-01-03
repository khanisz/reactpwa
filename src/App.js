import React, { Component } from 'react';
import './App.css';
import Drawer from './Drawer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <h2>About</h2>
    </div>
  );
}



export default App;
