import React from 'react';
import "./Sobre.css";

const Sobre = () => {
 return(
  <div className='sobre-main'>
   <div className='sobre-container'>
    <div className='sobre-title'>
     <h1>SOBRE</h1>
    </div>
    
    <div className='text-about'>
     <div className='text-title'>
     <h3>Um Pouco Sobre Minha História</h3>
     </div>
     <div className='text-history'>
     Eu sou Jorge Andrade, professor a mais de 15 anos,
     desde de sempre buscando conhecimento inovador. <br />
     Hoje trabalho como mentor de produtividade e tenho
     uma paixão de transformar a vida das pessoas para elas 
     alcançarem seus objetivos com clareza, foco e disciplina.
     </div>
    </div>
   </div>
  </div>
 );
}

export default Sobre;