// SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Call the onSearch function passed as a prop
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Search events..."
                value={query}
                onChange={handleChange} // Call handleChange on input change
            />
        </SearchContainer>
    );
};

// Styled Components
const SearchContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
`;

const SearchInput = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export default SearchBar;
