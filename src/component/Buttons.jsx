import React, { Component } from "react";
import './Buttons.css'
export default class Buttons extends Component {
  render() {
    return (
      <div id="buttonDiv">
        <button id="previous">Previous</button>
        <button id="next">Next</button>
        <button id="quit">Quit</button>
      </div>
    );
  }
}
