"use client";

import React from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';

export function ClientSlider() {
  return (
    <div className="py-16 md:py-20 rounded-md flex flex-col antialiased bg-[#f3f4f6] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* Heading */}
      <h2 className='text-2xl md:text-5xl text-[#00264c] text-center font-Tinos mb-24'>
          Our clients
        </h2>
      
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-[300px]  rounded-lg shadow-lg p-4 flex items-center border border-purple-800 "
            
          >
            <img
              src={item.image}
              alt={item.title}
              className=" h-16 rounded object-cover mr-4"
            />
            <h3 className="text-lg md:text-2xl font-bold text-neutral-900">{item.title}</h3>
          </motion.div>
        ))}

        
      </div>
      <div className="bg-[#00264c] h-[1px] mt-24 w-8"></div>
  <div className="bg-[#00264c] h-[2px]  w-2/3 "></div>
  <div className="bg-[#00264c] h-[2px]  w-8"></div>
  <div className="bg-[#00264c] h-[2px]  w-7"></div>
  <div className="bg-[#00264c] h-[2px]  w-6"></div>
  <div className="bg-[#00264c] h-[2px]  w-5"></div>
  <div className="bg-[#00264c] h-[2px]  w-4"></div>
  <div className="bg-[#00264c] h-[2px]  w-3"></div>
  <div className="bg-[#00264c] h-[2px]  w-2"></div>
  <div className="bg-[#00264c] h-[2px]  w-1"></div>
 
    </div>
  );
}

// Testimonials data
const testimonials = [
  {
    image: Baleen,
    title: "Baleen Media",
  },
  {
    image: Gracescans,
    title: "Grace Scans",
  },
];
