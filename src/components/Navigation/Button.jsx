import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
 display: inline-block;
 background-color: #010326;
 color: #fff;
 outline: none;
 border: none;
 font-size: 0.875em;
 padding: 0.9rem 2.3rem;
 border-radius: 50px;
 cursor: pointer;
 transition: all 0.2s ease;
 &:hover {
     transform: scale(1.1);
 }
`

const Button = ({text, link}) => {
    return (
    <Btn>
     <a href={link} arial-label={text} target="_blank" rel="noreferrer">
      {text}
     </a>
    </Btn>
    )
}

export default Button;