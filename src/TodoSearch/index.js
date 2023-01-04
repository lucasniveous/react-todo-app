import React from'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {search, setSearch} = React.useContext(TodoContext);
    //functions
    const onSearchValueChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <input
            className='TodoSearch'
            placeholder="Search"
            value={search}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };