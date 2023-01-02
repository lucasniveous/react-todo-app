import React from'react';
import './TodoSearch.css'

function TodoSearch( {search, setSearch} ) {
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