import React, { Component } from "react";
import Buttons from "./Buttons";
import Data from "./Data";
import "./Questions.css";

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      index: 0,
    };
  }
  render() {
    return (
      <div id="questionDiv">
        <div id="question">
          <p>
            Question {this.state.index + 1}/{this.state.data.length}
          </p>
          <p id="q">{this.state.data[this.state.index].question}</p>
        </div>

        <div id="options">
          <div className="option">
            <p>{this.state.data[this.state.index].optionA}</p>
          </div>
          <div className="option">
            <p>{this.state.data[this.state.index].optionB}</p>
          </div>
          <div className="option">
            <p>{this.state.data[this.state.index].optionC}</p>
          </div>
          <div className="option">
            <p>{this.state.data[this.state.index].optionD}</p>
          </div>
        </div>
        <Buttons />
      </div>
    );
  }
}
