import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

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

const Typeahead = ({suggestions, handleSelect}) => {
    const [input, setInput] = useState('');
    return (
        <Wrapper>
            <input 
                type='text'
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSelect(input) }
            />
            <Button func={() => setInput('')} btn={'Clear'}/>
        </Wrapper>
    );
};

export default Typeahead;