import React, { Component } from "react";

export default class Addition2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      total: 0,
    };
  }
  changeHandler = (e) => {
    const fieldName = e.target.name;
    this.setState({ [fieldName]: +e.target.value });
  };
  //   changeHandler2 = (e) => {
  //     this.setState({ num2: +e.target.value });
  //   };
  findSum = () => {
    this.setState({ total: this.state.num1 + this.state.num2 });
  };
  render() {
    return (
      <>
        <div>Addition Example</div>
        <input name="num1" onChange={this.changeHandler} />
        <input name="num2" onChange={this.changeHandler} />
        <button onClick={this.findSum}>Add</button>
        <p>
          addition of {this.state.num1} and {this.state.num2} is{" "}
          {this.state.total}
        </p>
      </>
    );
  }
}
