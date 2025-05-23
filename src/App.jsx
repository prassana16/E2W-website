import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Preloader from './components/Preloader';
import Intro from './components/Intro';
import Testimonials from './components/Testimonials';
import OurClients from './components/OurClients';
import Faq from './components/Faq';
import AboutPWA from './components/AboutPWA';
import ContactPopup from './components/ContactPopup';
import ContactForm from './components/ContactForm';
import AboutE2w from './components/AboutE2w';
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
import LeadGenerationServices from './components/services/LeadGenerationServices';
// new service page components
import { FlipWordswebsite } from './components/FlipWordswebsite';
import { FlipWordswebapp } from './components/Flipwordsebapp';
import { FlipWordssaas } from './components/Flipwordssaas';
import { FlipWordsmobile } from './components/Flipwordsmobile';
import { FlipWordsseo } from './components/Flipwordsseo';
import { FlipWordsquality } from './components/Flipwordsquality';
import { FlipWordsstaff } from './components/Flipwordsstaff';
import { FlipWordsui } from './components/Flipwordsui';
import { FlipWordscloud } from './components/Flipwordscloud';
import { FlipWordslead } from './components/Flipwordslead';
// IBMS/ILMS (our solutions)
import IBMS from './components/IBMS';
import ILMS from './components/ILMS';
import AIEnterpriseSolution from './components/AI-Enterprise-Data-Solution';
import AIMedicalLeadPlatform from './components/AI-Medical-Lead-Platform';

// new components
import { BackgroundBoxesDemo } from './components/BackgroundBoxesDemo';
import { HeroScrollDemo } from './components/HeroScrollDemo';
import { E2wProduct } from './components/E2wProduct';
import ClientSlider from './components/ClientsSlider';

// Import SEO component for Home page
import SEO from './components/SEO';

// Google form
import GoogleForm from './components/GoogleForm';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Force finish loading after 2 seconds if not complete
    
    return () => clearTimeout(preloadTimeout);
  }, []);

  return (
    <HelmetProvider> 
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            {/* Home page SEO */}
            <SEO 
                  title="Easy2Work - IBMS & ILMS Solutions | Software Development Company"
                  description="Easy2Work offers enterprise-grade IBMS, ILMS, and custom software development services for businesses in USA, Canada, UK, and India. Innovative IT solutions tailored to your needs."
                  keywords="Easy2Work, IBMS, ILMS, software development, IT services, web development, mobile apps, USA, Canada, UK, India"
                />
          <BackgroundBoxesDemo />
          <AboutE2w />
          <Banner />
          <HeroScrollDemo /> 
          <E2wProduct />

          <Intro />
          <AboutPWA />
          <ClientSlider />
            <OurClients />
            <Testimonials />
            <Faq />
            <ContactPopup />
          </>
        } />
        <Route path="/OurSolutions" element={
          <E2wProduct /> 
          
      }/>
        
        {/* mobile app dev page */}
        <Route path="/MobileAppDevelopment" element={<>
          <FlipWordsmobile />
        <MobileAppDevelopment/></>} />
        {/* web app dev page */}
        <Route path="/WebAppDevelopment" element={<>
          <FlipWordswebapp />
        <WebAppDevelopment/></>} />
        {/* website dev page */}
        <Route path="/WebsiteDevelopment" element={<>
          <FlipWordswebsite />
          <WebsiteDevelopment/>
          </> } />
          {/* seo dev page */}
        <Route path="/SEOServices" element={<>
          <FlipWordsseo />
        <SEOServices/></>} />
        {/* cloud dev page */}
        <Route path="/CloudNativeAppDevelopment" element={<>
          <FlipWordscloud />
        <CloudNativeAppDevelopment/></>} />
        {/* saas dev page */}
        <Route path="/SaaSDevelopment" element={<>
          <FlipWordssaas />
        <SaaSDevelopment/></>} />
        {/* uiux dev page */}
        <Route path="/UIUXDesign" element={<>
          <FlipWordsui />
        <UIUXDesign/></>} />
        {/* quality dev page */}
        <Route path="/QualityAssurance" element={<>
          <FlipWordsquality />
        <QualityAssurance/></>} />
        {/* staff aug dev page */}
        <Route path="/StaffAugmentation" element={<>
          <FlipWordsstaff />
        <StaffAugmentation/></>} />        {/* Lead gen dev page */}
        <Route path="/LeadGenerationServices" element={<>
          <FlipWordslead />
        <LeadGenerationServices/></>} />
        {/* contact us page */}
        <Route path="/ContactForm" element={<><ContactForm/></>} />
        {/* IBMS page */}
        <Route path="/IBMS" element={<>
          <IBMS/></>} />
       {/* ILMS page */}
       <Route path="/ILMS" element={<>
          <ILMS/></>} />
       {/* AI Enterprise Data Solution page */}
       <Route path="/AI-Enterprise-Data-Solution" element={<>
          <AIEnterpriseSolution/></>} />
       {/* AI Medical Lead Platform page */}
       <Route path="/AI-Medical-Lead-Platform" element={<>
          <AIMedicalLeadPlatform/></>} />

      </Routes>
      
      <Footer />
    </Router>
  </HelmetProvider>
  );
}

export default App;
