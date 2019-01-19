import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QRComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "Zeskanuj kod QR",
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(number) {
    var component = this.props.components[number];
    if (component) {
      component.visible = true;
    }
    
    if (number) {
      this.setState({
        result: "Zeskanowano pomyślnie. Pojawił się nowy wpis w dzienniku"
      });
    }
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
