import { computed, makeAutoObservable } from "mobx";

import Todo from "./todo-store";

export default class TodoList {
  constructor() {
    makeAutoObservable(this);
  }

  todo = "";
  todos = [];

  @computed unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.isFinished).length;
  }

  addTodoLast = () => {
    this.todos.push(new Todo("Last Default Text"));
  };

  addTodoFirst = () => {
    this.todos.unshift(new Todo("First Default Text"));
  };

  deleteTodoLast = () => {
    this.todos.shift();
  };

  deleteTodoFirst = () => {
    this.todos.pop();
  };

  onChangeInput = (evt) => {
    this.todo = evt.target.value;
  };

  onKeyPressForInput = (evt) => {
    if (this.todo === "") {
      return;
    }

    if (evt.which === 13) {
      this.todos.push(new Todo(this.todo));
      this.todo = "";
    }
  };

  onDeleteCurrentItem = (evt) => {
    const id = Number(evt.target.dataset.id);
    const foundIndex = this.todos.findIndex((el) => el.id === id);
    this.todos.splice(foundIndex, 1);
  };
}
