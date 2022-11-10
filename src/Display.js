import React, { Component } from "react";
export default class Display extends Component {
  render() {
    return (
      <div>
        <form>
          <textarea
            value={this.props.formula.join("")}
            readOnly
          ></textarea>
          <textarea
            readOnly
            value={this.props.input}
          ></textarea>
        </form>
      </div>
    );
  }
}