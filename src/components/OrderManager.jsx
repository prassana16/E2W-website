import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OrderManagerImage from '../assets/images/ModuleImages/e2wOrder.png'; // Path to the uploaded image

const OrderManager = () => {
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
            <h2 className="text-3xl md:text-4xl font-Tinos text-[#fceecf] mb-4 text-center md:text-left">Order Manager</h2>
<p className="text-[#F7F2E7] font-mono text-lg md:text-xl mb-6 text-center md:text-left">
  The Order Manager simplifies the way businesses handle orders, from tracking lead sources to organizing client information with fast search capabilities and secure cloud storage.
</p>
<ul className="list-disc ml-8 md:ml-6 text-left text-[#F7F2E7] space-y-2">
  <li>Custom lead source tracking for orders</li>
  <li>Quick and easy client search</li>
  <li>Secure cloud storage for client data</li>
</ul>

          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={OrderManagerImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default OrderManager;