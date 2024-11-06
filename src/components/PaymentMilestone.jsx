import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PaymentMilestoneImage from '../assets/images/ModuleImages/e2wpayment.png'; // Path to the uploaded image

const PaymentMilestone = () => {
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
            <h2 className="text-3xl font-Tinos text-[#fceecf] mb-4">Payment Milestones</h2>
<p className="text-[#F7F2E7] font-mono text-lg mb-6">
  Our Payment Manager offers a streamlined approach to track Payment milestones, ensuring timely delivery and effective communication across teams.
</p>
<ul className="list-disc ml-8 md:ml-6 text-left text-[#F7F2E7]">
  <li>Real-time Payment tracking</li>
  <li>Collaborative tools for team communication</li>
  <li>Comprehensive reporting and analytics</li>
</ul>

          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={PaymentMilestoneImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default PaymentMilestone;