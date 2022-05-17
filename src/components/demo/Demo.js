/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      name: "sachin",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("get derived state from props", props, state);
  //   return { name: props.name };
  // }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the name was " + prevState.name;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated name is " + this.state.name;
  }
  componentDidMount() {
    console.log("componentDidMount");
    // 1. AJAX   2.DOM
    document.getElementById("div1").style.color = "red";
  }
  render() {
    console.log("render");
    return (
      <div>
        Demo - {this.state.name} <br />
        <button onClick={() => this.setState({ name: "rahul" })}>
          update data
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
