import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "tom"
  };

  lag() {
    console.log(this);
  }

  log = () => {
    console.log(this);
  };

  render() {
    this.lag();
    this.log();
    return <div>{this.state.name}</div>;
  }
}
