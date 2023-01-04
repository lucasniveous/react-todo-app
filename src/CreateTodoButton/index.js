import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {
  //function
  const onClickButton = () => setOpenModal(!openModal);

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