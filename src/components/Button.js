import React from 'react';
import styled from 'styled-components';

const Btn = styled.button `
    background-color: blue;
    color: whitesmoke;
    width: 60px;
    border-radius: 4px;
    border: none;
`;

const Button = ({func, btn}) => {
    return (
        <Btn onClick={func}>{btn}</Btn>
    );
};

export default Button;