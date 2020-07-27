import React, { useState, useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Suggestions from './Suggestions';

const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    width: 600px;

    input {
        margin-right: 20px;
        border: 0.5px solid grey;
        border-radius: 4px;
        width: 500px;
        height: 40px;
    }
`;

const handleTyping = (suggestions, input) => {
    if (input.length > 1) {
        return suggestions.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
        .map(book => book.title);
    }
    return [];
};


const Typeahead = ({suggestions, handleSelect, input, setInput}) => {
    const [highlight, setHighlight] = useState('');

    const suggArr = handleTyping(suggestions, input);
    useEffect(() => {
        setHighlight(suggArr[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);
    return (
        <Wrapper>
            <input 
                type='text'
                value={input} 
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