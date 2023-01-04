import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodoStatus,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <p>ERRORRRRRRRRRRRRRRRRRR</p>}
        {loading && <p>Loading... Please wait</p>}
        {(!loading && !searchedTodos.length && !error) && <p>Create your first todo!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodoStatus(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <p>Holisss</p>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppUI };
