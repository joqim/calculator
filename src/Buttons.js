import React, { Component } from "react";
export default class Buttons extends Component {
  render() {
    return (
      <div>
        <div>
          <div onClick={this.props.onParenthesis}>
            (
          </div>
          <div onClick={this.props.onParenthesis}>
            )
          </div>
          <div onClick={this.props.onClear}>
            AC
          </div>
          <div onClick={this.props.onBackspace}>
            CE
          </div>
        </div>
        <div>
          <div onClick={this.props.onDigit}>
            1
          </div>
          <div onClick={this.props.onDigit}>
            2
          </div>
          <div onClick={this.props.onDigit}>
            3
          </div>
          <div onClick={this.props.onOperator}>
            *
          </div>
        </div>
        <div>
          <div onClick={this.props.onDigit}>
            4
          </div>
          <div onClick={this.props.onDigit}>
            5
          </div>
          <div onClick={this.props.onDigit}>
            6
          </div>
          <div onClick={this.props.onOperator}>
            /
          </div>
        </div>
        <div>
          <div onClick={this.props.onDigit}>
            7
          </div>
          <div onClick={this.props.onDigit}>
            8
          </div>
          <div onClick={this.props.onDigit}>
            9
          </div>
          <div onClick={this.props.onOperator}>
            -
          </div>
        </div>
        <div>
          <div onClick={this.props.onDigit}>
            0
          </div>
          <div onClick={this.props.onDecimal}>
            .
          </div>
          <div onClick={this.props.onEqual}>
            =
          </div>
          <div onClick={this.props.onOperator}>
            +
          </div>
        </div>
      </div>
    );
  }
}
