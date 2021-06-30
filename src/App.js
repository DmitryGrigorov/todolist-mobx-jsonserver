import React from "react";

import "./App.css";
import Todo from "./dal/todo-store";
import TodoList from "./dal/todolist-store";

import TodoListView from "./components/todolist";

const store = new TodoList();

store.todos.push(new Todo("deal 1"), new Todo("deal 2"));

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
