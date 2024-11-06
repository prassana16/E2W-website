import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import quoteSenderImage from '../assets/images/ModuleImages/e2wQuote.png'; // Path to the uploaded image

const QuoteSender = () => {
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
            <h2 className="text-3xl md:text-4xl font-Tinos text-[#fceecf] mb-4">
              Quote Sender
            </h2>
            <p className="text-[#F7F2E7] font-mono text-lg mb-6">
              The Quote Sender tool simplifies the process of creating and sending quotes with dynamic margin adjustments, slab-wise pricing, and the ability to download quotes seamlessly.
            </p>
            <ul className="list-disc ml-6 text-[#F7F2E7] font-mono">
              <li>Quick search for products and services</li>
              <li>Dynamic margin settings for flexible pricing</li>
              <li>Downloadable quotes for client convenience</li>
            </ul>
          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={quoteSenderImage} alt="Quote Sender Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
        
      </section>
    );
  };
  
  export default QuoteSender;
