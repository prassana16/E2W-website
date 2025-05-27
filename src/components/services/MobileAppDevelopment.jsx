import React from 'react';
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nativeApp from '../../assets/images/native-app.png';
import hybridApp from '../../assets/images/hybrid-app.png';
import pwaApp from '../../assets/images/pwa-app.png';
import enterpriseApp from '../../assets/images/enterprise-app.png';
import socialApp from '../../assets/images/social-app.png';

const MobileAppDevelopment = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Top Mobile App Development Services in India | Easy2Work</title>
        <meta name="description" content="Leading mobile app development company in India offering native, hybrid & PWA solutions. Transform your business with our cutting-edge mobile applications." />
        <meta name="keywords" content="mobile app development India, Android app development, iOS app development, React Native, Flutter, PWA, enterprise mobile apps, app developers in India" />
        <meta property="og:title" content="Premium Mobile App Development Services in India | Easy2Work" />
        <meta property="og:description" content="Top-rated mobile app development company delivering innovative solutions for businesses across India. Native, hybrid & PWA development expertise." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://easy2work.com/services/mobile-app-development" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Mobile App Development",
              "provider": {
                "@type": "Organization",
                "name": "Easy2Work",
                "url": "https://easy2work.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Mobile Application Development",
              "description": "Premium mobile app development services including native, hybrid and progressive web apps for businesses across India."
            }
          `}
        </script>
      </Helmet>
        <section
        className="min-h-screen flex flex-col items-center font-mono justify-center"
        style={{ background: '#000000', color: 'white' }}
      >
        {/* Hero Section with Indian Market Focus */}
        <motion.div          className="w-full h-full py-20"
          style={{
            background: "#000000",
            backgroundSize: "cover",
            borderTop: "2px solid #05f4f9",
            borderBottom: "2px solid #05f4f9"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center max-w-6xl mx-auto mb-12 px-4">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
              Premium Mobile App Development Services in India
            </h1>
            <p className="text-sm md:text-lg leading-relaxed">
              Elevate your business with cutting-edge mobile applications designed for the Indian market. 
              Our expert developers create intuitive, scalable, and high-performance mobile experiences 
              that connect your brand with over 750 million smartphone users across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">iOS Development</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Android Development</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">React Native</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Flutter</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Kotlin</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Swift</span>
            </div>
          </div>

          <Slider {...settings} className="w-full md:px-12">
            {/* Native Apps slider content */}
            <div className="px-4">
              <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Native Mobile Applications</h3>
                <p className="text-sm md:text-lg mb-4">
                  Our native apps are built specifically for iOS or Android
                  platforms, offering optimized performance, enhanced security, and
                  full access to device features.
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src={nativeApp}
                    alt="Native App Screenshot"
                    className="rounded-lg max-w-full h-auto shadow-lg"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
              </div>
            </div>

            {/* Hybrid Apps slider content */}
            <div className="px-4">
              <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Hybrid Applications</h3>
                <p className="text-sm md:text-lg mb-4">
                  Our hybrid apps combine the best of both worlds, offering
                  cross-platform functionality with a single codebase, reducing
                  development time and costs.
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src={hybridApp}
                    alt="Hybrid App Screenshot"
                    className="rounded-lg max-w-full h-auto shadow-lg"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
              </div>
            </div>

            {/* PWA slider content */}
            <div className="px-4">
              <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Progressive Web Apps</h3>
                <p className="text-sm md:text-lg mb-4">
                  Our PWAs deliver app-like experiences through web browsers,
                  offering offline capabilities, push notifications, and fast
                  loading times without the need for app store downloads.
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src={pwaApp}
                    alt="PWA Screenshot"
                    className="rounded-lg max-w-full h-auto shadow-lg"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </motion.div>

        {/* Why Choose Us for Mobile App Development in India */}
        <motion.div
          className="w-full py-16 px-6"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Why Choose Easy2Work for Mobile App Development in India?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-primary-400/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">India-Centric Solutions</h3>
                <p className="text-center">
                  We design apps that cater specifically to Indian users, with multi-language support, low-data consumption features, and offline capabilities essential for the Indian market.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-primary-400/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Performance Optimized</h3>
                <p className="text-center">
                  Our apps are optimized for the diverse range of devices used across India, ensuring smooth performance even on entry-level smartphones and varying network conditions.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="rounded-full bg-primary-400/30 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Local Expertise</h3>
                <p className="text-center">
                  Our team understands the unique challenges and opportunities in the Indian digital ecosystem, from UPI integration to compliance with Indian regulations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>        {/* Native Apps Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img src={nativeApp} alt="Native Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Native Apps</h3>
            <p className="text-lg leading-relaxed">
              Develop high-performance native applications optimized for iOS and Android platforms, ensuring security, scalability, and superior user experiences.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Platform-specific designs leveraging native APIs.</li>
              <li>Seamless integration with device hardware (camera, GPS, etc.).</li>
              <li>Enhanced performance and reliability for end-users.</li>
              <li>Optimized for App Store and Play Store compliance.</li>
            </ul>
          </div>
        </motion.div>

        {/* Our Technology Stack */}        <motion.div
          className="w-full py-16 px-6"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">KT</span>
                </div>
                <h3 className="text-lg font-medium text-center">Kotlin</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">SW</span>
                </div>
                <h3 className="text-lg font-medium text-center">Swift</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">RN</span>
                </div>
                <h3 className="text-lg font-medium text-center">React Native</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">FL</span>
                </div>
                <h3 className="text-lg font-medium text-center">Flutter</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">FB</span>
                </div>
                <h3 className="text-lg font-medium text-center">Firebase</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">UPI</span>
                </div>
                <h3 className="text-lg font-medium text-center">UPI Integration</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">AWS</span>
                </div>
                <h3 className="text-lg font-medium text-center">AWS</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/20 w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold">GC</span>
                </div>
                <h3 className="text-lg font-medium text-center">Google Cloud</h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hybrid Apps Section */}        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Hybrid Apps</h3>
            <p className="text-lg leading-relaxed">
              Create cross-platform applications with a single codebase, delivering cost-effective solutions without compromising on functionality or user experience.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Faster development cycles with reduced costs.</li>
              <li>Consistent experience across iOS and Android.</li>
              <li>Flexible architecture using frameworks like React Native and Flutter.</li>
              <li>Simpler maintenance and updates.</li>
            </ul>
          </div>
          <img src={hybridApp} alt="Hybrid Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </motion.div>

        {/* Progressive Web Apps Section */}        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img src={pwaApp} alt="Progressive Web Apps (PWAs)" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Progressive Web Apps (PWAs)</h3>
            <p className="text-lg leading-relaxed">
              Deliver cutting-edge PWAs that combine the best of web and mobile technologies to provide fast, reliable, and engaging experiences.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Offline functionality with service workers.</li>
              <li>App-like feel with push notifications and fast loading.</li>
              <li>SEO-friendly for improved discoverability.</li>
              <li>Reduced app development and maintenance costs.</li>
            </ul>
          </div>
        </motion.div>

        {/* Success Stories/Case Studies - Indian Specific */}        <motion.div
          className="w-full py-16 px-6"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Success Stories in India</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="h-48 bg-primary-800/50"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Healthcare App for Indian Market</h3>
                    <span className="bg-cyan text-black text-xs px-3 py-1 rounded-full">Completed</span>
                  </div>
                  <p className="mb-4">Developed a telemedicine app optimized for rural India with low-bandwidth video calling and offline prescription management. Achieved 150,000+ downloads in 6 months.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Firebase</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">WebRTC</span>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-sm font-medium text-primary-300 hover:text-white">View Case Study →</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="h-48 bg-primary-800/50"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">E-commerce Platform for Tier-2 Cities</h3>
                    <span className="bg-cyan text-black text-xs px-3 py-1 rounded-full">Completed</span>
                  </div>
                  <p className="mb-4">Created a lightweight e-commerce app for Tier-2 and Tier-3 Indian cities with vernacular language support and integrated with popular Indian payment solutions.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">React Native</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">UPI</span>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-sm font-medium text-primary-300 hover:text-white">View Case Study →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Networking Apps Section */}        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
            <p className="text-lg leading-relaxed">
              Design feature-rich social networking apps that foster connectivity and interaction, ensuring a smooth and engaging user experience.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Real-time messaging and multimedia sharing.</li>
              <li>Customizable user profiles and activity feeds.</li>
              <li>Robust privacy controls and secure authentication.</li>
              <li>Integration with social media platforms.</li>
            </ul>
          </div>
          <img src={socialApp} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </motion.div>

        {/* Enterprise Mobile Apps Section */}        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img src={enterpriseApp} alt="Enterprise Mobile Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Mobile Apps</h3>
            <p className="text-lg leading-relaxed">
              Create enterprise-grade applications tailored to improve business workflows, enhance productivity, and foster seamless collaboration.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Custom solutions for business operations and analytics.</li>
              <li>Integration with existing enterprise software systems.</li>
              <li>Secure data storage and compliance with industry standards.</li>
              <li>Scalable architecture for future business needs.</li>
            </ul>
          </div>
        </motion.div>

        {/* Indian Market Compliance */}        <motion.div
          className="w-full py-16 px-6"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Compliance with Indian Regulations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                <p>
                  Our mobile apps comply with India's data protection regulations including the upcoming Personal Data Protection Bill, ensuring your users' data stays secure and private.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Localization</h3>
                <p>
                  Full support for Indian languages and cultural nuances, making your app accessible to India's diverse population across different regions.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Payment Integrations</h3>
                <p>
                  Seamless integration with Indian payment gateways, UPI, net banking, and other localized payment methods preferred by Indian consumers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call-to-Action Card */}
        <div className="w-full">
          <motion.div
            className="p-10 shadow-lg text-center flex flex-col items-center"          style={{
              background: 'linear-gradient(to bottom, #000000, #05f4f9)',
              backgroundImage: "url('../../assets/images/india-pattern-light.png')",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Ready to Transform Your Mobile Presence in India?
            </h3>
            <p className="text-lg text-white max-w-3xl mb-8">
              Let's create a powerful, user-friendly mobile application that connects with your Indian audience and drives business growth across the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/ContactForm"
                className="px-8 py-3 bg-white text-primary-700 rounded-lg hover:bg-primary-100 transition duration-300 font-medium shadow-lg"
              >
                Contact Us Today
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition duration-300 font-medium"
              >
                View Portfolio
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>Trusted by leading Indian businesses</p>
              <div className="flex flex-wrap justify-center gap-8 mt-4">
                <span className="font-semibold">Client Logo 1</span>
                <span className="font-semibold">Client Logo 2</span>
                <span className="font-semibold">Client Logo 3</span>
                <span className="font-semibold">Client Logo 4</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section - Focused on Indian Context */}        <motion.div
          className="w-full py-16 px-6"
          style={{ background: 'linear-gradient(135deg, #000000, #05f4f9)', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">What is the average cost of developing a mobile app in India?</h3>
                <p>
                  The cost varies based on complexity, features, and platforms. For simple apps, it may start from ₹3-5 lakhs, while complex enterprise applications can cost upwards of ₹15-20 lakhs. We provide detailed estimates after understanding your specific requirements.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">How long does it take to develop a mobile app?</h3>
                <p>
                  Typically, a feature-rich app takes 3-6 months from conceptualization to launch. Simple apps might be completed in 2-3 months, while complex enterprise solutions can take 6-9 months. Our agile development approach ensures you see regular progress throughout the development cycle.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Do you provide support for apps after launch?</h3>
                <p>
                  Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, performance optimization, feature updates, and compatibility with new OS versions. We recommend our maintenance packages to ensure your app stays current with evolving technology and user expectations.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">How do you optimize apps for the Indian market?</h3>
                <p>
                  We implement specific optimizations for the Indian context, including low-data consumption modes, offline functionality, multi-language support for Indian languages, integration with popular Indian payment gateways, and ensuring the app works well on the diverse range of devices common in India.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MobileAppDevelopment;
