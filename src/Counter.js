import React, { Component } from "react";
import {observable} from "mobx";
// import { observer } from 'mobx-react';

class Counter extends Component {
  @observable
  counter = 0;

  onIncrement = () => {
    this.counter++
  };

  onDecrement = () => {
    this.counter--
  };

  render() {
    console.log("render");
    return (
      <div>
        Counter: {this.counter}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
