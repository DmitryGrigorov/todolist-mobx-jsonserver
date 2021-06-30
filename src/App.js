import React from "react";

import "./App.css";
import TodoList from "./dal/todolist-store";

import TodoListView from "./components/todolist";

const store = new TodoList();


function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
