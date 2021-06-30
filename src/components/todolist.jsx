import React from "react";
import { observer } from "mobx-react";
import TodoView from "./todo";

const TodoListView = observer((props) => {
  const {
    todoList: {
      todo,
      todos,
      addTodoLast,
      addTodoFirst,
      deleteTodoLast,
      deleteTodoFirst,
      onChangeInput,
      onKeyPressForInput,
      onDeleteCurrentItem,
    },
  } = props;

  return (
    <div>
      <input
        type="text"
        onChange={onChangeInput}
        value={todo}
        onKeyPress={onKeyPressForInput}
      />
      <hr />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoView
              key={todo.id}
              todo={todo}
              onDeleteCurrentItem={onDeleteCurrentItem}
            />
          );
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

export default TodoListView;
