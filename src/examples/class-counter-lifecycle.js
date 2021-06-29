import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter % 3 === 0) {
      console.log("shouldComponentUpdate === return false");
      return false;
    }

    console.log("shouldComponentUpdate === return true");
    return true;
  }

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
