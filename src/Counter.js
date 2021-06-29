import React from "react";
import { observer } from "mobx-react";

const Counter = observer(({ counterStore }) => {
  console.log(counterStore);
  return (
    <div>
      Counter: {counterStore.counter}
      <button onClick={counterStore.onIncrement}>Increment</button>
      <button onClick={counterStore.onDecrement}>Decrement</button>
      <hr/>
      {counterStore.getResult()}
    </div>
  );
});

export default Counter;
