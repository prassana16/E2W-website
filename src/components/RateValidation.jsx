import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RateValidationImage from '../assets/images/ModuleImages/e2wRatevalid.png'; // Path to the uploaded image

const RateValidation = () => {
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
           <h2 className="text-3xl md:text-4xl font-bold text-[#fceecf] mb-4 text-center md:text-left">Rate Validation</h2>
<p className="text-[#F7F2E7] text-lg md:text-xl mb-6 text-center md:text-left">
  The Rate Validation feature ensures that your pricing is consistent, competitive, and accurate across all platforms, helping businesses maintain financial accuracy and compliance.
</p>
<ul className="list-disc ml-8 md:ml-6 text-left text-[#F7F2E7] space-y-2">
  <li>Automated checks for rate consistency</li>
  <li>Custom validation rules for services and products</li>
  <li>Integration with financial and billing systems</li>
</ul>

          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={RateValidationImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default RateValidation;