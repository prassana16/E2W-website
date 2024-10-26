import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import rateManagerImage from '../assets/images/ModuleImages/e2wRatemanager.png'; // Path to the uploaded image

const RateManager = () => {
    // Intersection observer hook to trigger animation when the section is in view
    const { ref, inView } = useInView({
      triggerOnce: true, // Only animate once
      threshold: 0.2, // Animate when 20% of the section is visible
    });
  
    return (
      <section ref={ref} className="bg-[#00264c] py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Left Side: Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-Tinos text-[#F7F2E7] mb-4">
              Rate Manager
            </h2>
            <p className="text-[#F7F2E7] text-lg mb-6 font-mono">
              The Rate Manager module is designed to simplify rate management with its user-friendly interface. It allows businesses to search rates, set slab-wise pricing, and define service duration for different campaigns or products with ease.
            </p>
            <ul className="list-disc ml-6 text-[#F7F2E7] font-mono">
              <li>Quick search for pricing details</li>
              <li>Slab-wise pricing for customizable campaigns</li>
              <li>Flexible service duration settings</li>
            </ul>
          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={rateManagerImage} alt="Rate Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
        
      </section>
    );
  };
  
  export default RateManager;
