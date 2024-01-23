import React, { Component } from "react";

export default class Result extends Component {
  refresh = () => {
    // Reload the page
    window.location.reload();
  };

  render() {
    return (
      <div id="result" style={{ display: this.props.display }}>
        <h2>You Scored: {this.props.score}</h2>
        <p>Total Questions : 0</p>
        <p>You Attempted: {this.props.attempted}</p>
        <button id="playAgain" onClick={this.refresh}>
          Play Again
        </button>
      </div>
    );
  }
}
