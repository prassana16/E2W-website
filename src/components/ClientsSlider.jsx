"use client";

import React from "react";
import { motion } from "framer-motion";

// Replace these imports with your actual image paths
import Baleen from '../assets/images/Baleen Media.png';
import Gracescans from '../assets/images/Grace Scans2.png';
import Preschool from '../assets/images/Preschool2.png';
import Bajaj from '../assets/images/Bajaj.png';
import Shabari from '../assets/images/Shabari.png';
import Footcare from '../assets/images/Footcare.png';

const testimonials = [
  { image: Baleen, title: "Baleen Media" },
  { image: Gracescans, title: "Grace Scans" },
  { image: Preschool, title: "Preschool" },
  { image: Bajaj, title: "Bajaj" },
  { image: Shabari, title: "Shabari" },
  { image: Footcare, title: "Footcare" },
];

export default function ClientSlider() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-16 md:py-20 rounded-md flex flex-col antialiased bg-[#f3f4f6] dark:bg-black items-center justify-center relative overflow-hidden">
      <h2 className='text-2xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16 md:mb-24'>
        Our Clients
      </h2>

      <div className="w-full overflow-hidden relative  ">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0  bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 flex items-center justify-center border-2 border-purple-800 "
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className=" w-auto object-contain  transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 md:w-96 w-20  bg-gradient-to-r from-[#f3f4f6] to-transparent dark:from-black z-10" />
        <div className="absolute inset-y-0 right-0 md:w-96 w-20  bg-gradient-to-l from-[#f3f4f6] to-transparent dark:from-black z-10" />
      </div>

      {/* Decorative lines */}
      <div className="bg-[#00264c] h-[1px] mt-8 w-8"></div>
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
