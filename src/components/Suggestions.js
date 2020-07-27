import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul `
    width: 500px;
    border: solid black 2px;
    display: ${props => props.showSuggestion === true ? 'block' : 'none'};
`;

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
            // onMouseOut={(e) => setHighlight('')}
        >{title}</Title>
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