import React from "react";
import { observer } from "mobx-react-lite";

const TodoView = observer(({ todo, onDeleteCurrentItem, updateTodo }) => {
  return (
    <li key={todo.id}>
      <span onClick={onDeleteCurrentItem} data-id={todo.id} className="cross">
        X
      </span>
      <input
        type="checkbox"
        onChange={() => {
          console.log({
            ...todo,
            isFinished: !todo.isFinished,
          });
          updateTodo({
            ...todo,
            isFinished: !todo.isFinished,
          });
        }}
        checked={todo.isFinished}
      />
      {todo.title}
    </li>
  );
});

export default TodoView;
