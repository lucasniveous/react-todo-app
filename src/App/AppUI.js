import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

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
      <div className="todo-container">
        <TodoSearch/>
        <TodoList>
          {error && <p>ERRORRRRRRRRRRRRRRRRRR</p>}
          {loading && (
            <div className="spinner-container">
            <div className="loading-spinner">
            </div>
            </div>
          )}
          {(!loading && !searchedTodos.length && !error) && <p>Create your first todo!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleTodoStatus(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>
      </div>
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal}/>
    </>
  );
}

export { AppUI };
