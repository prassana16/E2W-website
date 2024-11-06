import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FinanceManagerImage from '../assets/images/ModuleImages/e2wFinance.png'; // Path to the uploaded image

const FinanceManager = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
   
    return (
      <section ref={ref} className="bg-[#00264c] py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Left Side: Content */}
          <motion.div 
            className="md:w-1/2 text-center md:text-start"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
           <h2 className="text-3xl md:text-4xl font-Tinos text-[#fceecf] mb-4 text-center md:text-left">Finance Manager</h2>
<<<<<<< HEAD
<p className="text-[#F7F2E7] font-mono text-lg md:text-xl mb-6 text-center md:text-left">
=======
<p className="text-[#F7F2E7] text-lg md:text-xl mb-6 text-center md:text-left font-mono">
>>>>>>> 6131c8b18e9cb06b96c7ec784121d8de1bc3e7ea
  The Finance Manager empowers businesses to efficiently manage client data with features like customized lead source tracking, quick client search, and secure cloud storage for peace of mind.
</p>
<ul className="list-disc ml-8 md:ml-6 text-left text-[#F7F2E7] space-y-2 font-mono">
  <li>Custom lead source capture and tracking</li>
  <li>Seamless client search functionality</li>
  <li>Secure cloud-based data storage</li>
</ul>

          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={FinanceManagerImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default FinanceManager;