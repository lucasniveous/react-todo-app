import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1', []);

    const [search, setSearch] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    //filter results of the array given the text of the search bar
    let searchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(search.toLowerCase());
    });

    //count the number of completed todos and the total number of todos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //toggling todo status
    const toggleTodoStatus = (id) => {
        const idx = todos.findIndex(todo => todo.id === +id);
        const actualState = todos[idx].completed;
        const newState = !actualState; // toggling boolean value
        const newTodos  = [...todos];
        newTodos[idx].completed = newState;

        //updating todos
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos  = [...todos];
        newTodos.push({
                    text,
                    completed: false,
                    id: Date.now()
                });
        //updating todos
        saveTodos(newTodos);
    };

    //deleting todo
    const deleteTodo = (id) => {
        const idx = todos.findIndex(todo => todo.id === +id);
        const newTodos = [...todos];
        newTodos.splice(idx, 1);

        //updating todos
        saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            toggleTodoStatus,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>

    );
}

export { TodoContext, TodoProvider };