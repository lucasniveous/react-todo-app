import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
  //function
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Here the modal will be shown')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };