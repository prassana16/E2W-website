import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import consultantImage from '../assets/images/ModuleImages/e2wCounsultant.png'; // Path to the uploaded image

const Consultant = () => {
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
            <h2 className="text-3xl md:text-4xl font-Tinos text-[#fceecf] mb-4 text-center md:text-left">Consultant Manager</h2>
<p className="text-[#F7F2E7] font-mono text-lg md:text-xl mb-6 text-center md:text-left">
  The Consultant Manager enables businesses to efficiently manage consultant engagements, track performance, and streamline communication for better collaboration and results.
</p>
<ul className="list-disc ml-8 md:ml-6 text-left text-[#F7F2E7] space-y-2 font-mono">
  <li>Seamless management of consultant profiles and contracts</li>
  <li>Performance tracking and reporting tools</li>
  <li>Easy communication and collaboration through integrated platforms</li>
</ul>

          </motion.div>
  
          {/* Right Side: Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={consultantImage} alt="Client Manager Mockup" className="w-3/4 md:w-full" />
          </motion.div>
  
        </div>
       
      </section>
    );
  };
  
  export default Consultant;