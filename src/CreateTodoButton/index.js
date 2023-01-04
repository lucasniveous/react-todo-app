import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  //function
  const onClickButton = () => setOpenModal(previousState => !previousState);

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };