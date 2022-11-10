import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import History from "./History";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: [],
      history: [],
      input: "0",
      isShowHistory: false,
      afterCalculation: false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display formula={this.state.formula} input={this.state.input} />
          <Buttons />
        </div>
        <div className="history">
          <span>History</span>
          <History />
        </div>
      </div>
    );
  }
}

export default App;
