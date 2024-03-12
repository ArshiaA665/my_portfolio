import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';

const App = () => {

      return (
    <div class="bg-black bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
     
    </div> 
  );
};

export default App;
