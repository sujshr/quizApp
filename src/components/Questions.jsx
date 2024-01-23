import React, { Component } from "react";
import Buttons from "./Buttons";
import Data from "./quizQuestion.json";
import "./Questions.css";
import Result from "./Result";
export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      index: 0,
      visibility: "none",
      visibility2: "none",
      score: 0,
    };
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.queryEnd = this.queryEnd.bind(this);
    this.cancleEnd = this.cancleEnd.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  goToPrevious() {
    if (this.state.index > 0) {
      this.setState((previousState) => {
        return {
          index: previousState.index - 1,
        };
      });
    }
  }
  goToNext() {
    console.log(this.state.index);
    if (this.state.index < this.state.data.length - 1) {
      this.setState((previousState) => {
        return {
          index: previousState.index + 1,
        };
      });
    }
  }

  queryEnd() {
    if (this.state.visibility == "none") {
      this.setState(() => {
        return {
          visibility: "flex",
        };
      });
    }
  }

  cancleEnd() {
    this.setState(() => {
      return {
        visibility: "none",
      };
    });
  }

  showResult() {
    this.setState(() => {
      return {
        visibility2: "flex",
      };
    });
  }

  render() {
    return (
      <div id="questionDiv">
        <div id="endQuizDiv" style={{ display: this.state.visibility }}>
          <h2>Sure to end the quiz?</h2>
          <div id="endButtonDiv">
            <button id="cancleButton" onClick={this.cancleEnd}>
              Cancle
            </button>
            <button id="endButton" onClick={this.showResult}>
              End
            </button>
          </div>
        </div>
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
        <Buttons
          previous={this.goToPrevious}
          next={this.goToNext}
          end={this.queryEnd}
        />
        <Result score="" display={this.state.visibility2} />
      </div>
    );
  }
}
