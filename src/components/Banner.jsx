import React from 'react';
import { motion } from 'framer-motion';
import btm from '../assets/images/pagebtm.png';
import Bimg from '../assets/images/bannerimg.png';

const Banner = () => {
  return (
    <section className="bg-[#00264c] text-[#F7F2E7] md:pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20 text-center font-mono">
        
        {/* Animated Heading */}
        <div className="flex flex-col items-center space-y-6 md:space-y-10 md:mx-16 pb-8">
          <motion.h1
            className="text-6xl lg:text-9xl font-bold mb-4 text-left font-Destine w-full "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Discussion
          </motion.h1>
          <motion.h1
            className="text-6xl lg:text-9xl font-bold mb-4 text-right font-Destine w-full "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Resolution
          </motion.h1>
        </div>

        {/* ---------------Image Section--------------- */}
        <div className="flex items-center justify-center my-6">
          <img
            src={Bimg}
            alt="Banner Image"
            className="w-full max-w-sm md:max-w-lg lg:max-w-2xl"
          />
        </div>

        {/* Animated Paragraph */}
        <motion.p
          className="text-sm md:text-lg lg:text-xl mb-8 text-white max-w-xl mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Empowering businesses to streamline daily operations and boost productivity, one task at a time."
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="bg-[#F7F2E7] text-[#00264c] font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-[#FF7F50] hover:text-[#F7F2E7] transition duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
      
      {/* Bottom Image */}
      <img src={btm} alt="Bottom Image" className="w-full" />
    </section>
  );
};

export default Banner;
