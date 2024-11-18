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
// services
import MobileAppDevelopment from './components/services/MobileAppDevelopment';
import WebAppDevelopment from './components/services/WebAppDevelopment';
import WebsiteDevelopment from './components/services/WebsiteDevelopment';
import SEOServices from './components/services/SEOServices';
import CloudNativeAppDevelopment from './components/services/CloudNativeAppDevelopment';
import SaaSDevelopment from './components/services/SaaSDevelopment';
import UIUXDesign from './components/services/UIUXDesign';
import QualityAssurance from './components/services/QualityAssurance';
import StaffAugmentation from './components/services/StaffAugmentation';
// Blogs
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
            <OurServices />
            <OurSkills />
            <OurClients />
            <Testimonials />
            <Features />
            <Intro />
            <Faq />
          </>
        } />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/article/:id" element={<ArticleContent />} />
        <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment/>} />
        <Route path="/WebAppDevelopment" element={<WebAppDevelopment/>} />
        <Route path="/WebsiteDevelopment" element={<WebsiteDevelopment/>} />
        <Route path="/SEOServices" element={<SEOServices/>} />
        <Route path="/CloudNativeAppDevelopment" element={<CloudNativeAppDevelopment/>} />
        <Route path="/SaaSDevelopment" element={<SaaSDevelopment/>} />
        <Route path="/UIUXDesign" element={<UIUXDesign/>} />
        <Route path="/QualityAssurance" element={<QualityAssurance/>} />
        <Route path="/StaffAugmentation" element={<StaffAugmentation/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
