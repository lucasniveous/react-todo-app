import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = React.useState('');

  //filter results of the array given the text of the search bar
  let searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  //count the number of completed todos and the total number of todos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //toggling todo status
  const toggleTodoStatus = (text) => {
    const idx = todos.findIndex(todo => todo.text === text);
    const actualState = todos[idx].completed;
    const newState = !actualState; // toggling boolean value
    const newTodos  = [...todos];
    newTodos[idx].completed = newState;

    //updating todos
    saveTodos(newTodos);
  };

  //deleting todo
  const deleteTodo = (text) => {
    const idx = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(idx, 1);

    //updating todos
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      toggleTodoStatus={toggleTodoStatus}
      deleteTodo={deleteTodo}
      />
  );
}

export default App;
