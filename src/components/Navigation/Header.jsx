import React from 'react';
import "./Header.css";
import Logo from './Logo';
import Button from './Button';

const Header = () => {
 return(
  <header className='header-main'>
   <Logo />
    <nav>
    </nav>
    <div className='contato-header'>
     <Button text="Contato" link="https://contate.me/jorgeandrade" />
    </div>
  </header>
 );
}

export default Header;