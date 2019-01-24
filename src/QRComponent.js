import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QRComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
      result: "Zeskanuj kod QR",
      scanCorrect: true
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(number) {

    if (number) {
      var array = this.props.components.filter(c => c.position == number);
      if (array.length == 0) {
        this.setState({
          result: "Nie ma karty o takim kodzie",
          scanCorrect : true
        });
      }
    }

    this.props.components.filter(c => c.position == number).forEach(c => {
      c.visible = true;
      this.setState({
        result: "Zeskanowano pomyślnie. Pojawił się nowy wpis w dzienniku",
        scanCorrect : true
      });
    })
    

  }
  handleError(err) {
    console.error(err);
  }
  handleVisibility(number) {
    var component = this.props.components[number];
    if (component) {
      component.visible = true;
    }
    
  }

  render() {
    if (this.state.result != "Zeskanuj kod QR") {
      this.handleVisibility(this.state.result);
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRComponent;
