import React from 'react';
import { FaLaptopCode } from "react-icons/fa"; // Changed icon to laptop code for web development
import { motion } from 'framer-motion';

const WebAppDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#f2bdad] to-[#ff5f2e] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaLaptopCode /> {/* Web app icon */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Web Application Development</h2>
          <p className="text-lg text-[#fff] leading-relaxed">
            In today’s digital landscape, web application development is essential for building interactive and engaging online experiences. We specialize in creating responsive, scalable, and high-performance web applications tailored to your business needs.
          </p>
          
          {/* Key Features */}
          <div className="mt-10 space-y-6">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Web Solutions:</h3>
            <ul className="list-disc list-inside text-[#fff] text-lg leading-relaxed">
              <li>Responsive and adaptive web design</li>
              <li>Cross-browser compatibility</li>
              <li>Seamless user experience (UX) and interface design (UI)</li>
              <li>Scalable architectures to handle growing traffic</li>
              <li>Secure and optimized codebase for fast loading speeds</li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="mt-8">
            <img
              src="path/to/web-development-image.jpg" // Replace with actual path
              alt="Web Application Development"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Current Trends Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Web App Development</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              The web application landscape is constantly evolving. Stay ahead by embracing the latest trends in web development:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Progressive Web Apps (PWA):</strong> These apps combine the best of web and mobile experiences, offering offline capabilities and app-like functionality.</li>
              <li><strong>Single-Page Applications (SPA):</strong> SPAs offer fast, dynamic user experiences by loading content without refreshing the entire page.</li>
              <li><strong>Serverless Architecture:</strong> Serverless computing enables businesses to run applications without managing servers, leading to reduced costs and enhanced scalability.</li>
              <li><strong>AI Integration:</strong> Artificial Intelligence enhances web apps through personalized experiences, chatbots, and data analysis.</li>
              <li><strong>API-first Development:</strong> APIs are central to modern web development, allowing seamless integrations with third-party services and enabling faster development cycles.</li>
            </ul>
          </div>

          {/* Future Trends Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Future Trends in Web App Development</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              As technology advances, several emerging trends will redefine web app development:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>WebAssembly (Wasm):</strong> A new way to run high-performance code on the web, enabling faster load times and native-like performance for web apps.</li>
              <li><strong>Motion UI:</strong> The use of animations to enhance user engagement, providing more intuitive and dynamic interactions.</li>
              <li><strong>Low-Code and No-Code Platforms:</strong> These platforms will continue to grow, enabling non-developers to create and deploy web apps with minimal coding knowledge.</li>
              <li><strong>5G and Web Connectivity:</strong> 5G technology will enable faster internet speeds, improving web app performance, especially for data-heavy applications like streaming and gaming.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Build Your Next Web Application?</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              Contact our expert team to discuss how we can bring your web application vision to life with cutting-edge technologies and user-centric designs.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#ff471a] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
