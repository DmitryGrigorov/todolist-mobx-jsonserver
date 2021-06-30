import { makeAutoObservable } from "mobx";

class Todo {
  title;
  isFinished = false;

  constructor(title, id) {
    makeAutoObservable(this);

    this.title = title;
    this.id = id;
  }
}

export default Todo;
