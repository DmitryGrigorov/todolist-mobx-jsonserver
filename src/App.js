import React from "react";
import "./App.css";

import { computed, makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Todo {
  id = Math.random();
  title;
  isFinished = false;

  constructor(title) {
    makeAutoObservable(this);

    this.title = title;
  }
}

class TodoList {
  constructor() {
    makeAutoObservable(this);
  }

  todo = '';

  todos = [];

  @computed unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.isFinished).length;
  }

  addTodoLast = () => {
    this.todos.push(new Todo("Last Default Text"))
  };

  addTodoFirst = () => {
    this.todos.unshift(new Todo("First Default Text"))
  };

  deleteTodoLast = () => {
    this.todos.shift()
  };

  deleteTodoFirst = () => {
    this.todos.pop()
  };
}

const TodoView = observer(({ todo }) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        onChange={() => {
          console.log("onChange before", { todo });
          todo.isFinished = !todo.isFinished;
          console.log("onChange after", { todo });
        }}
        checked={todo.isFinished}
      />
      {todo.title}
    </li>
  );
});

const TodoListView = observer((props) => {
  const {
    todoList: { todos,
      addTodoLast,
      addTodoFirst,
      deleteTodoLast,
      deleteTodoFirst
    },

  } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <TodoView todo={todo} key={todo.id} />;
        })}
      </ul>

      <hr />
      <button onClick={addTodoLast}>Add Last</button>
      <button onClick={addTodoFirst}>Add First</button>
      <button onClick={deleteTodoLast}>Delete Last</button>
      <button onClick={deleteTodoFirst}>Delete First</button>
    </div>
  );
});

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
