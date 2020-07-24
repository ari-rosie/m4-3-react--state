import React from 'react';
import styled from 'styled-components';

const Title = styled.li `    
    background-color: ${props => props.selection === props.title ? 'grey' : 'white'};
    cursor: pointer;
`;



const Book = ({title, handleSelect, highlight, setHighlight}) => {

    return (
        <Title 
            title={title}
            selection={highlight} 
            onClick={() => handleSelect(title)} 
            onMouseOver={(e) => {
                setHighlight(e.target.title);
            }} 
            onMouseOut={(e) => setHighlight('')}
        >{title}</Title>
    );
};

const Suggestions = ({array, handleSelect, highlight, setHighlight}) => {    
    return (
        <ul>
            {array.map((book => 
                <Book 
                    key={`book-${array.indexOf(book)}`} 
                    title={book} 
                    handleSelect={handleSelect}
                    highlight={highlight}
                    setHighlight={setHighlight}
                />
            ))}
        </ul>
    );
};

export default Suggestions;