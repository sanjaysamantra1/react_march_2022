import React, { Component } from "react";

export default class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        Class Comp - Counter value is
        <button onClick={this.decrement}>Decrement</button>
        {this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
