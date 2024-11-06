import React from 'react';
import { motion } from 'framer-motion';
import mobileMockup from '../assets/images/ModuleImages/e2wAbout.png'; // Path to your mobile mockup image

const About = () => {
  return (
    <section className="bg-[#00264c] py-16" id='features'>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Side: Content */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-Tinos text-[#fceecf] mb-4">
            About Easy2Work
          </h2>
          <p className="text-[#F7F2E7] font-mono text-lg mb-6">
            Easy2Work is an all-in-one workflow management system designed to optimize business processes and streamline daily operations. Customization is our value-add. It provides an intuitive interface for managing clients, handling rate cards, processing orders, and governing financial transactions.
          </p>
        </motion.div>

        {/* Right Side: Mobile Mockup */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={mobileMockup} alt="Mobile Mockup" className="" />
        </motion.div>

      </div>
      
    </section>
  );
};

export default About;
