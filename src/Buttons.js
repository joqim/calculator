import React, { Component } from "react";
export default class Buttons extends Component {
  render() {
    return (
      <div style={{ marginTop: "-50px"}}>
        <div className="row-1">
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onParenthesis}>
            (
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onParenthesis}>
            )
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onClear}>
            AC
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onBackspace}>
            CE
          </button>
        </div>
        <div className="row-1" style={{ marginTop: "5px"}}>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            1
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            2
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            3
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            *
          </button>
        </div>

        <div className="row-1" style={{ marginTop: "5px"}}>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            4
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            5
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            6
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            /
          </button>
        </div>
        <div className="row-1" style={{ marginTop: "5px"}}>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            7
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            8
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            9
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            -
          </button>
        </div>
        <div className="row-1" style={{ marginTop: "5px"}}>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDigit}>
            0
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            %
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            ^
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onOperator}>
            +
          </button>
        </div>

        <div className="row-2" style={{ marginTop: "5px"}}>
          <button style={{ marginRight: "10px", height: "70px"}} type="button" class="btn btn-light btn-lg" onClick={this.props.onDecimal}>
            .
          </button>
          <button style={{ marginRight: "10px"}} type="button" class="btn btn-outline-primary" onClick={this.props.onEqual}>
            =
          </button>
        </div>
      </div>
    );
  }
}
