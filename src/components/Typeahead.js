import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Suggestions from './Suggestions';

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 50px;

    input {
        margin-right: 20px;
        border: 0.5px solid grey;
        border-radius: 4px;
        height: 40px;
    }
`;

const handleTyping = (suggestions, input) => {
    if (input.length > 1) {
        return suggestions.filter(book => book.title.toLowerCase().startsWith(input.toLowerCase()))
        .map(book => book.title);
    }
    return [];
};


const Typeahead = ({suggestions, handleSelect, input, setInput}) => {
    const [highlight, setHighlight] = useState('');

    const suggArr = handleTyping(suggestions, input);
    console.log(highlight);
    return (
        <Wrapper>
            <input 
                type='text'
                value={highlight || input} 
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSelect(highlight) }
            />
            <Button 
                func={() => setInput('')} 
                btn={'Clear'}
            />
            <Suggestions 
                array={suggArr} 
                handleSelect={handleSelect}
                highlight={highlight}
                setHighlight={setHighlight}
            />
        </Wrapper>
    );
};

export default Typeahead;