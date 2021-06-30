import React from "react";
import { observer } from "mobx-react";

const TodoView = observer(({ todo, onDeleteCurrentItem }) => {
  return (
    <li key={todo.id}>
      <span onClick={onDeleteCurrentItem} data-id={todo.id} className="cross">
        X
      </span>
      <input
        type="checkbox"
        onChange={() => {
          todo.isFinished = !todo.isFinished;
        }}
        checked={todo.isFinished}
      />
      {todo.title}
    </li>
  );
});

export default TodoView;
