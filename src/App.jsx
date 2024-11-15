import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import OurSkills from './components/OurSkills';
import OurServices from './components/OurServices';
import Faq from './components/Faq';
import Blogs from './Blogs'; 
import ArticleContent from "./components/ArticleContent"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Intro />
            <Features />
            <Testimonials />
            <OurClients />
            <OurSkills />
            <OurServices />
            <Faq />
          </>
        } />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/article/:id" element={<ArticleContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
