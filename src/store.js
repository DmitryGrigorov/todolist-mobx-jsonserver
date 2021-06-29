import { makeAutoObservable, computed } from "mobx";

class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };

  @computed
  getResult() {
    return 20 + 20
  }
}

export const counterStore = new CounterStore();
