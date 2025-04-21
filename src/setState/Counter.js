import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  changeCount = () => {
    this.setState(
      // state object
      {
        count: this.state.count + 1,
      },
      // a callback function
      () => {
        console.log("Count after setState: ", this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
        </div>
        <button onClick={() => this.changeCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
