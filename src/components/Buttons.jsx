import React, { Component } from "react";
import "./Buttons.css";
export default class Buttons extends Component {
  render() {
    return (
      <div id="buttonDiv">
        <button id="previous" onClick={this.props.previous}>
          Previous
        </button>
        <button id="next" onClick={this.props.next}>
          Next
        </button>
        <button id="quit" onClick={this.props.end}>End</button>
      </div>
    );
  }
}
