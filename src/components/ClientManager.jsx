import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clientManagerImage from '../assets/images/ModuleImages/e2wClient.png'; // Path to the uploaded image

const ClientManager = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
   
    return (
      <section ref={ref} className="bg-[#00264c] py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Left Side: Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#fceecf] mb-4">Client Manager</h2>
            <p className="text-[#F7F2E7] text-lg mb-6">
              Our Client Manager helps businesses manage client data efficiently with lead source capture, easy client search, and secure cloud storage.
            </p>
            <ul className="list-disc ml-6 text-[#F7F2E7]">
              <li>Customized lead source capture</li>
              <li>Easy client search functionality</li>
              <li>Secure data storage at cloud</li>
            </ul>
          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={clientManagerImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default ClientManager;