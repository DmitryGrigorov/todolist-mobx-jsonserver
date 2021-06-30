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

export default TodoView;
