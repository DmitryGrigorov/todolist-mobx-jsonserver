import {computed, makeAutoObservable, action, flow} from "mobx";

import {
  getTodos as getTodosAPI,
  createTodo as createTodoAPI,
  destroyTodo as destroyTodoAPI
} from '../api/todoServices'

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

  @action
  getTodos = () => {
    getTodosAPI().then((data) => {
      console.log('getTodos', data);
      this.todos = data;
    })
  }

  @action
  destroyTodoAction = (id) => {
    destroyTodoAPI(id)
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

  creatingFetch = flow(function* (store) {
    const result = yield createTodoAPI(store.todo)

    return result
  })

  @action
  onKeyPressForInput = (evt) => {

    if (this.todo === "") {
      return;
    }

    if (evt.which === 13) {
      const result = this.creatingFetch();


      this.todos.push(new Todo(this.todo, data.id));
      this.todo = "";
    }
  };

  onDeleteCurrentItem = (evt) => {
    const id = Number(evt.target.dataset.id);
    const foundIndex = this.todos.findIndex((el) => el.id === id);
    this.todos.splice(foundIndex, 1);

    this.destroyTodoAction(id);
  };
}
