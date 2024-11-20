import React from 'react';
import { FaLaptopCode } from "react-icons/fa"; // Changed icon to laptop code for web development
import { motion } from 'framer-motion';

const WebAppDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#347928] via-[#67B856] to-[#A0D683] py-16 px-4 font-mono">

    <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
  
      {/* Icon and Intro Section */}
      <motion.div 
        className="text-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaLaptopCode /> {/* Web app icon */}
      </motion.div>
  
      <div>
        {/* Header */}
        <h2 className="text-4xl font-semibold text-[#000000] mb-4">Web Application Development</h2>
        <p className="text-lg text-[#fff] leading-relaxed mb-10">
          In today’s digital landscape, web application development is essential for building interactive and engaging online experiences. We specialize in creating responsive, scalable, and high-performance web applications tailored to your business needs.
        </p>
  
        {/* Key Features Section */}
        <div className="grid grid-cols-1 gap-8">
          <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Web Solutions:</h3>
            <ul className="list-disc list-inside text-[#191919] text-lg leading-relaxed">
              <li>Responsive and adaptive web design</li>
              <li>Cross-browser compatibility</li>
              <li>Seamless user experience (UX) and interface design (UI)</li>
              <li>Scalable architectures to handle growing traffic</li>
              <li>Secure and optimized codebase for fast loading speeds</li>
            </ul>
          </div>
  
          <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-[#333]">Current Trends in Web App Development</h3>
            <p className="text-lg text-[#191919] leading-relaxed">
              The web application landscape is constantly evolving. Stay ahead by embracing the latest trends in web development:
            </p>
            <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
              <li><strong>Progressive Web Apps (PWA):</strong> Combining the best of web and mobile experiences with offline capabilities and app-like functionality.</li>
              <li><strong>Single-Page Applications (SPA):</strong> Offering fast, dynamic user experiences without refreshing the entire page.</li>
              <li><strong>Serverless Architecture:</strong> Running applications without managing servers for cost reduction and scalability.</li>
              <li><strong>AI Integration:</strong> Enhancing web apps with personalized experiences, chatbots, and data analysis.</li>
              <li><strong>API-first Development:</strong> Enabling faster development cycles and seamless integrations with third-party services.</li>
            </ul>
          </div>
  
          <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-[#333]">Future Trends in Web App Development</h3>
            <p className="text-lg text-[#191919] leading-relaxed">
              As technology advances, several emerging trends will redefine web app development:
            </p>
            <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
              <li><strong>WebAssembly (Wasm):</strong> Delivering high-performance code on the web with native-like performance.</li>
              <li><strong>Motion UI:</strong> Animations enhancing engagement and creating dynamic user interactions.</li>
              <li><strong>Low-Code and No-Code Platforms:</strong> Allowing non-developers to create and deploy web apps efficiently.</li>
              <li><strong>5G and Web Connectivity:</strong> Enabling faster performance for data-heavy applications like streaming and gaming.</li>
            </ul>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="mt-16 p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-[#333]">Ready to Build Your Next Web Application?</h3>
          <p className="text-lg text-[#191919] mt-4 leading-relaxed">
            Contact our expert team to discuss how we can bring your web application vision to life with cutting-edge technologies and user-centric designs.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#28a745] transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default WebAppDevelopment;
