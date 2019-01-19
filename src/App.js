import React, { Component } from "react";
import Drawer from "./Drawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TextComponent from "./TextComponent";
import QRComponent from "./QRComponent";
import MapComponent from "./MapComponent";
import axios from "axios";
import QuestionComponent from "./QuestionComponent";
import ImageComponent from "./ImageComponent";
import CardListComponent from "./CardListComponent";

const URL = "http://localhost:3090/";
const APPID = "5c433356f1d19840d4e49f70";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gra Miejska",
      mapPoint: [],
      components: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(URL + APPID)
      .then(result =>
        this.setState({
          name: result.data.name,
          mapPoint: result.data.mapPoint,
          components: result.data.components,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { name, isLoading } = this.state;
    const { components } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <Router>
          <div>
            <Drawer />
            <div>
              <Route
                exact path="/"
                render={props => <CardListComponent {...props} components={components} />}
              />
              <Route
                 path="/qr"
                render={props => <QRComponent {...props} components={components} />}
              />
              <Route
                path="/text"
                render={props => <TextComponent {...props} text={name} />}
              />
              <Route path="/map" component={MapComponent} />
              <Route path="/question" component={QuestionComponent} />
              <Route
                path="/image"
                render={props => (
                  <ImageComponent
                    {...props}
                    url="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
                  />
                )}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
