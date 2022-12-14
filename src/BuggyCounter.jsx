import React from "react";

export default class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 2) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <h1 className="link" onClick={this.handleClick}>Click me twice: {this.state.counter}</h1>;
  }
}
