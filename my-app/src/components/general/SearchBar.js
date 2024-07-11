import React from 'react';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                value={title}
                onChange={handleInput}
                className="searchBarInput"
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;

