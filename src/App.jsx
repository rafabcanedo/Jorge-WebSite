import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

// import Pages
import Header from './components/Navigation/Header';
import Home from './components/Pages/Home/Home';
import Sobre from './components/Pages/Sobre/Sobre';
import Feedback from './components/Pages/Feedback/Feedback';
import Comunidade from './components/Pages/Comunidade/Comunidade';
import Projetos from './components/Pages/Projetos/Projetos';
import Footer from './components/Navigation/Footer';

function App() {
 return (
  <>
  <GlobalStyles />
   <Header />
   <Home />
   <Sobre />
   <Projetos />
   <Comunidade />
   <Feedback />
   <Footer />
  </>
  )
}

export default App;