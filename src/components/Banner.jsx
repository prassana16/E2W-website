import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="bg-[#F7F2E7] text-[#2C2C2C] pt-16">
      <div className="container mx-auto text-center px-4 py-16 ">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Easy2Work
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Empowering businesses to streamline daily operations and boost productivity, one task at a time."
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="bg-[#004C4C] text-[#FFD700] font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#FF7F50] hover:text-[#F7F2E7] transition duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
      <div className="flex justify-center items-center pt-16">
        <div className="p-[1px] w-full bg-[#004C4C]"></div><div className="p-[1px] w-full bg-[#004C4C]"></div>
      </div>
    </section>
  );
};

export default Banner;
