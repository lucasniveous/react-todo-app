import React from "react";
import { TodoContext } from "../TodoContext";
import './Todoform.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onTextAreaChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    };

    return (
        <form onSubmit={onAdd}>
            <label>Write your new TODO</label>
            <textarea
                placeholder="Telling Lucas that he is hired"
                value={newTodoValue}
                onChange={onTextAreaChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Add
                </button>
            </div>
        </form>
    );

};

export {TodoForm};