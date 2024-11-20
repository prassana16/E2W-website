import React from 'react';
import { FaMobile } from "react-icons/fa";
import { motion } from 'framer-motion';

const MobileAppDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#FFB84D] via-[#FF7F32] to-[#FF5F2E] py-16 px-4 font-mono">

      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaMobile />
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Mobile App Development</h2>
          <p className="text-lg text-[#201e1e] leading-relaxed">
            In today’s digital landscape, mobile app development is essential for reaching a wider audience. Our mobile solutions focus on building cross-platform applications with engaging and seamless user experiences across both iOS and Android platforms.
          </p>
          
          {/* Key Features */}
          <div className="mt-10 space-y-6 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Mobile Solutions:</h3>
            <ul className="list-disc list-inside text-[#201e1e] text-lg leading-relaxed">
              <li>Customizable cross-platform apps</li>
              <li>Optimized for performance and security</li>
              <li>User-centric design for higher engagement</li>
              <li>Native and hybrid solutions to match your needs</li>
              <li>Robust architecture for scalability and growth</li>
            </ul>
          </div>
          
          
          
          {/* Current Trends Section */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Mobile App Development</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Mobile app development continues to evolve, and staying updated with the latest trends is crucial. Here’s a look at the leading trends shaping the industry:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>Artificial Intelligence & Machine Learning Integration:</strong> From facial recognition to personalized user experiences, AI and ML are redefining app functionality.</li>
              <li><strong>Augmented Reality (AR) & Virtual Reality (VR):</strong> Especially prominent in gaming and retail, AR and VR technologies provide immersive experiences for users.</li>
              <li><strong>5G Technology:</strong> With faster speeds and reduced latency, 5G enables more sophisticated applications, from real-time streaming to seamless AR experiences.</li>
              <li><strong>Blockchain Integration:</strong> Beyond finance, blockchain enhances security, transparency, and reliability in mobile applications.</li>
              <li><strong>Internet of Things (IoT):</strong> IoT integration allows users to control and monitor devices remotely, adding convenience and functionality to mobile applications.</li>
            </ul>
          </div>

          {/* Future Trends Section */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Future Trends in Mobile App Development</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              As mobile technology progresses, we can anticipate several exciting future trends that will transform how users interact with applications:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>Edge Computing:</strong> As a supplement to cloud computing, edge computing will allow apps to process data closer to the source, reducing latency and improving performance.</li>
              <li><strong>Voice-Powered Interfaces:</strong> Voice control is expected to grow, enhancing accessibility and offering hands-free functionality for various applications.</li>
              <li><strong>Wearable Device Compatibility:</strong> With wearables becoming more advanced, seamless integration between mobile apps and wearables will offer enhanced data tracking and personalized experiences.</li>
              <li><strong>Eco-Friendly Development Practices:</strong> Sustainability in app development, including optimized code and low-energy design, will be a focus as users become more environmentally conscious.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Transform Your Business with a Custom Mobile App?</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Get in touch with our expert team to discuss your mobile app development needs. We’ll help you create a scalable, user-friendly, and innovative app that stands out in today’s market.
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

export default MobileAppDevelopment;
