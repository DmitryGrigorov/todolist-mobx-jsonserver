import { makeAutoObservable } from "mobx";

class Todo {
  id = Math.random();
  title;
  isFinished = false;

  constructor(title) {
    makeAutoObservable(this);

    this.title = title;
  }
}

export default Todo;
