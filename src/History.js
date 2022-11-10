import React, { Component } from "react";
export default class History extends Component {
  render() {
    return (
      <div>
        {this.props.history.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.formula.join("")}</div>
              <div
                value={item.result}
              >
                ={item.result}
              </div>
            </div>
          );
        })}

        <button>
          Clear
        </button>
      </div>
    );
  }
}
