import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import About from './components/About';
import ClientManager from './components/ClientManager';
import QuoteSender from './components/QuoteSender';
import RateManager from './components/RateManager';
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <ClientManager />
      <QuoteSender />
      <RateManager />
      <Footer />

    </div>
  );
}

export default App;
