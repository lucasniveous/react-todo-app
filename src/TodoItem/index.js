import React from "react";
import "./TodoItem.css";

function TodoItem({completed, text, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✔
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}
      >
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
