import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <Features  />
      <Testimonials />
      <OurClients />
      <Faq />
      <Footer />  
      

    </div>
  );
}

export default App;
