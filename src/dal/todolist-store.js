import { computed, makeAutoObservable, action, flow, observable } from "mobx";

import {
  getTodos as getTodosAPI,
  createTodo as createTodoAPI,
  destroyTodo as destroyTodoAPI,
  updateTodo as updateTodoAPI,
} from "../api/todoServices";

//import Todo from "./todo-store";

export default class TodoList {
  @observable isLoading = true;
  @observable todo = "";
  @observable todos = [];

  constructor() {
    makeAutoObservable(this, {
      getTodos: flow.bound,
      createTodo: flow.bound,
      destroyTodoAction: flow.bound,
      updateTodo: flow.bound,
      addTodoLast: flow.bound,
      addTodoFirst: flow.bound,
      deleteTodoLast: flow.bound,
      deleteTodoFirst: flow.bound,
      unfinishedTodoCount: computed,
    });
  }

  get unfinishedTodoCount() {
    console.log(this.todos);
    return this.todos.filter((todo) => !todo.isFinished).length;
  }

  *getTodos() {
    this.isLoading = true;

    const result = yield getTodosAPI();
    this.todos = result;

    this.isLoading = false;
  }

  *createTodo() {
    this.isLoading = true;

    yield createTodoAPI(this.todo);
    this.todos = yield getTodosAPI();
    this.todo = "";

    this.isLoading = false;
  }

  *destroyTodoAction(evt) {
    this.isLoading = true;

    const id = Number(evt.target.dataset.id);
    yield destroyTodoAPI(id);
    this.todos = yield getTodosAPI();

    this.isLoading = false;
  }

  *updateTodo(todo) {
    this.isLoading = true;

    yield updateTodoAPI(todo);
    this.todos = yield getTodosAPI();

    this.isLoading = false;
  }

  *deleteTodoLast() {
    this.isLoading = true;

    yield destroyTodoAPI(this.todos[this.todos.length - 1].id);
    this.todos = yield getTodosAPI();

    this.isLoading = false;
  }

  *deleteTodoFirst() {
    this.isLoading = true;

    yield destroyTodoAPI(this.todos[0].id);
    this.todos = yield getTodosAPI();

    this.isLoading = false;
  }

  *addTodoLast() {
    this.isLoading = true;

    yield createTodoAPI(this.todo);
    this.todos = yield getTodosAPI();
    this.todo = "";

    //yield createTodoAPI(this.todo);

    //this.todos.push(new Todo("Last Default Text"));

    this.isLoading = false;
  }

  *addTodoFirst() {
    this.isLoading = true;

    yield createTodoAPI(this.todo);
    this.todos = yield getTodosAPI();
    this.todo = "";

    this.isLoading = false;
    //this.todos.unshift(new Todo("First Default Text"));
  }

  onChangeInput = (evt) => {
    this.todo = evt.target.value;
  };

  @action
  onKeyPressForInput = (evt) => {
    if (this.todo === "") {
      return;
    }

    if (evt.which === 13) {
      this.createTodo();
    }
  };
}
