import React from 'react';
import "./Home.css";
import Avatar from '../../../styles/Avatar';
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';

const Home = () => {
 return(
  <section className='home-main'>
   <div className='home-container'>
    <div className='home-box'>
    <div className='home-left'>
    <h3>Seja Bem Vindo</h3>
     <h1>
      Eu sou <span>Jorge Andrade</span>
     </h1>
     <h2>
      um <span>Mentor de Produtividade e gestão de tempo</span>  
     </h2>
    
     <p>
      Professor a mais de 15 anos, mentor de produtividade e 
      um apaixonado por conhecimento. Desenvolveu a paixão pela leitura desde a infância e se tornou um leitor voraz que coloca em prática toda a sabedoria adquirida através das leituras.</p>
    </div>
    </div>

    <div className='home-box'>
    <Avatar />
    </div>
   </div>
  </section>
 );
}

export default Home;