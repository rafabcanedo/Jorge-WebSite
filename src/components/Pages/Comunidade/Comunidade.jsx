import React from 'react';
import "./Comunidade.css";
import ReactPlayer from 'react-player';

const Comunidade = () => {
 return(
    <>
    <section className='comunidade-main'>
        <div className='container'>
            <div className='comunidade-title'>
             <h1>COMUNIDADE</h1>
             <h2>Venha transformar o seu mundo através da leitura e aplicação desses clássicos do desenvolvimento pessoal.</h2>
            </div>

            <div className='comunidade-text'>
            <div className='sub-text'>
             Na Comunidade Lendo e Aplicando você vai potencializar a sua maneira de ler livros.
            </div>
            </div>

            <div className='video'>
            <ReactPlayer url='https://www.youtube.com/watch?v=NB7pdAWxkRU&t=3s' />
            </div>

               <div className='comunidade-text'>
               <div className='text-intro'>
                <h4>Assinatura mensal:</h4>
               </div>
               <div className='text-value'>
                <h2>R$ 27,00</h2>
               </div>
            </div>

           <div className='btn_center'>
           <a className='btn_link' href="https://pay.herospark.com/assinatura-mensal-36832" target='_blank'
            rel='nooperner'>
            Quero Me Inscrever
           </a>
           </div>
        </div>
    </section>
   </>
 );
}

export default Comunidade;