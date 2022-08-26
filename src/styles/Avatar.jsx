import React from 'react';
import styled from 'styled-components';
import Image from '../assets/images/logoJorge.jpg';

const AvatarContainer = styled.div`
    position: absolute;
    //top: 0;
    right: 10%;
    width: 510px;
 img{
  width: 100%;
  height: auto;
 }
 @media (max-width: 64em) {
   min-width: 40vh;
 }
`;

const Avatar = () => {
 return (
  <AvatarContainer>
    <img src={Image} />
  </AvatarContainer>
 )
}

export default Avatar;