import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import History from "./History";
import * as Calculator from "./calculatorGateway";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      formula: [],
      history: [],
      showHistory: false,
      calculationCompleted: false
    };

    this.onDigit = this.onDigit.bind(this);
    this.onOperator = this.onOperator.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onEqual = this.onEqual.bind(this);
    this.onDecimal = this.onDecimal.bind(this);
    this.onParenthesis = this.onParenthesis.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
    this.onHistory = this.onHistory.bind(this);
    this.onHistoryItemClicked = this.onHistoryItemClicked.bind(this);
    this.onClearHistory = this.onClearHistory.bind(this);
  }

  onDigit({ target }) {
    const digit = target.innerText;
    const input = this.state.input;

    if (this.state.calculationCompleted) {
      this.setState({
        input: digit,
        calculationCompleted: false
      });
    } else if (input === "0") {
      this.setState({
        input: digit
      });
    } else if (Calculator.isNotNumber(input)) {
      this.setState({
        input: digit,
        formula: this.state.formula.concat(input)
      });
    } else {
      this.setState({
        input: input.concat(digit)
      });
    }
  }
  onDecimal({ target }) {
    const decimal = target.innerText;
    const input = this.state.input;
    if (this.state.calculationCompleted) {
      this.setState({
        input: `0${decimal}`,
        calculationCompleted: false
      });
    } else if (Calculator.isNotNumber(input)) {
      this.setState({
        input: `0${decimal}`,
        formula: this.state.formula.concat(input)
      });
    } else if (!input.includes(decimal)) {
      this.setState({
        input: input.concat(decimal)
      });
    }
  }
  onOperator({ target }) {
    const operator = target.innerText;
    const input = this.state.input;
    if (Calculator.isOperator(input)) {
      this.setState({
        input: operator,
        calculationCompleted: false
      });
    } else if (input !== "(") {
      this.setState({
        input: operator,
        formula: this.state.formula.concat(this.state.input),
        calculationCompleted: false
      });
    }
  }

  onParenthesis({ target }) {
    const parenthesis = target.innerText;
    const input = this.state.input;

    if (parenthesis === "(") {
      if (
        (Calculator.isNumber(input) && input !== "0") ||
        (Calculator.isNumber(input) &&
          input === "0" &&
          this.state.formula.length > 0) ||
        input === ")"
      ) {
        this.setState({
          input: parenthesis,
          formula: this.state.formula.concat([input, "*"]),
          calculationCompleted: false
        });
      } else if (Calculator.isOperator(input) || input === "(") {
        this.setState({
          input: parenthesis,
          formula: this.state.formula.concat(input),
          calculationCompleted: false
        });
      } else if (
        Calculator.isNumber(input) &&
        input === "0" &&
        this.state.formula.length === 0
      ) {
        this.setState({
          input: parenthesis,
          calculationCompleted: false
        });
      }
    } else {
      const arrayOpenParenthesis = this.state.formula.join("").match(/\(/g);
      const numOpenParenthesis = arrayOpenParenthesis
        ? arrayOpenParenthesis.length
        : 0;

      const arrayCloseParenthesis = this.state.formula.join("").match(/\)/g);
      const numCloseParenthesis = arrayCloseParenthesis
        ? arrayCloseParenthesis.length
        : 0;

      if (
        (Calculator.isNumber(input) || input === ")") &&
        numOpenParenthesis > 0 &&
        numOpenParenthesis > numCloseParenthesis
      ) {
        this.setState({
          input: parenthesis,
          formula: this.state.formula.concat(input),
          calculationCompleted: false
        });
      }
    }
  }

  onClear() {
    this.setState({
      formula: [],
      input: "0",
      calculationCompleted: false
    });
  }

  onBackspace() {
    const input = this.state.input;
    const formula = this.state.formula;
    const currentInputLength = input.length;

    if (input === "Infinity" || input === "-Infinity" || input === "NaN") {
      this.setState({
        input: "0",
        calculationCompleted: false
      });
    } else if (currentInputLength > 1) {
      this.setState({
        input: input.slice(0, currentInputLength - 1),
        calculationCompleted: false
      });
    } else if (input !== "0") {
      this.setState({
        input: "0",
        calculationCompleted: false
      });
    } else if (formula.length > 0) {
      this.setState({
        input: formula[formula.length - 1],
        formula: formula.slice(0, formula.length - 1),
        calculationCompleted: false
      });
    }
  }

  onEqual() {
    const finalFormula = this.state.formula.concat(this.state.input);
    const result = Calculator.evaluate(finalFormula);

    if (!Number.isNaN(result)) {
      const newHistoryItem = {
        formula: finalFormula,
        result: result
      };

      this.setState({
        input: result + "",
        formula: [],
        history: [].concat(newHistoryItem, this.state.history),
        calculationCompleted: true
      });
    }
  }
  onHistory() {
    this.setState({
      showHistory: !this.state.showHistory
    });
  }

  onClearHistory() {
    this.setState({
      history: []
    });
  }

  onHistoryItemClicked({ target }) {
    const number = target.getAttribute("value");
    const input = this.state.input;

    if (Calculator.isNumber(input)) {
      this.setState({
        input: number
      });
    } else {
      this.setState({
        input: number,
        formula: this.state.formula.concat(input)
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display formula={this.state.formula} input={this.state.input} />
          <Buttons
            onBackspace={this.onBackspace}
            onClear={this.onClear}
            onEqual={this.onEqual}
            onDecimal={this.onDecimal}
            onDigit={this.onDigit}
            onOperator={this.onOperator}
            onParenthesis={this.onParenthesis}
          />
        </div>
        <div className="history">
          <span>All History List</span>
          <History
            showHistory={this.state.showHistory}
            history={this.state.history}
            onHistoryItemClicked={this.onHistoryItemClicked}
            onEqual={this.onEqual}
            onClearHistory={this.onClearHistory}
          />
        </div>
      </div>
    );
  }
}

export default App;
