import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const defaultTodos = [
  { text: "Texto 1", completed: true },
  { text: "Texto 2", completed: false },
  { text: "Texto 3", completed: false },
];

function App() {
  //states
  const [todos, setTodos] = React.useState(defaultTodos)
  const [search, setSearch] = React.useState('');

  let searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        search={search}
        setSearch={setSearch}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
