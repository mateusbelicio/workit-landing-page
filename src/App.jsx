import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
