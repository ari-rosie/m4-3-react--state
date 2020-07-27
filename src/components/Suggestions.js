import React, { useContext } from 'react';
import styled from 'styled-components';

import { InputContext } from './App.js';
import data, { categories } from '../data.js';

const Wrapper = styled.ul `
    width: 500px;
    border: solid black 2px;
    display: ${props => props.showSuggestion === true ? 'block' : 'none'};
`;

const Title = styled.li `    
    background-color: ${props => props.selection === props.title ? 'grey' : 'white'};
    cursor: pointer;
    font-weight: bold;

    span {
        font-weight: normal;
    }
`;

const Category = styled.span `
    color: purple;
    display: block;
`;

const getBookByTitle = (title) => {
    return data.books.find(b => b.title === title);
};

const getCategoryByBook = (book) => {
    for (const c in categories)
        if (categories[c].id === book.categoryId)
            return categories[c].name;  
};


const Book = ({title, handleSelect, highlight, setHighlight}) => {
    const input = useContext(InputContext);
    const book = getBookByTitle(title);
    const start = title.toLowerCase().indexOf(input.input.toLowerCase());
    return (
        <Title 
            title={title}
            selection={highlight} 
            onClick={() => handleSelect(title)} 
            onMouseOver={(e) => {
                setHighlight(e.target.title);
            }} 
            // onMouseOut={(e) => setHighlight('')}
        >
            {title.slice(0, start)}<span>{input.input}</span>{title.slice(start + input.input.length)}
            <Category>{getCategoryByBook(book)}</Category>
        </Title>
    );
};

const Suggestions = ({array, handleSelect, highlight, setHighlight, showSuggestion}) => {    
    console.log(showSuggestion);
    
    return (
        <Wrapper showSuggestion={showSuggestion}>
            {array.map((book => 
                <Book 
                    key={`book-${array.indexOf(book)}`} 
                    title={book} 
                    handleSelect={handleSelect}
                    highlight={highlight}
                    setHighlight={setHighlight}
                />
            ))}
        </Wrapper>
    );
};

export default Suggestions;