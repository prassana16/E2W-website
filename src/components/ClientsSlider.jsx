"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Client company logos
import Baleen from '../assets/images/Baleen media 2.png';
import Gracescans from '../assets/images/Grace Scans 2.png';
import Preschool from '../assets/images/Preschool4.png';
import Bajaj from '../assets/images/bajaj Auto.png';
import Shabari from '../assets/images/shabari2.png';
import Footcare from '../assets/images/footcare2.png';

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
  const [cardWidth, setCardWidth] = useState("100%");

  useEffect(() => {
    const updateWidth = () => {
      const isMobile = window.innerWidth <= 768;
      const newWidth = `${(isMobile ? 200 : 100) / testimonials.length}%`;
      setCardWidth(newWidth);
    };

    updateWidth(); // set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (    <div className="py-16 md:py-20 rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
      <h2 className='text-2xl md:text-5xl text-black dark:text-white text-center font-Tinos mb-6 md:mb-24'>
        Our Clients
      </h2>

      <div className="w-full overflow-hidden relative h-full ">
        <motion.div
          className="flex w-full"
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
              className="flex-shrink-0 bg-white rounded-md md:rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 flex items-center justify-center border md:border-2 border-black dark:border-cyan"
              style={{ width: cardWidth }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-md object-contain transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
          {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 md:w-94 w-20  bg-gradient-to-r from-white to-transparent dark:from-black z-10" />
        <div className="absolute inset-y-0 right-0 md:w-94 w-20  bg-gradient-to-l from-white to-transparent dark:from-black z-10" />
      </div>

      {/* Decorative lines */}
      <div className="bg-black dark:bg-cyan h-[1px] mt-8 w-8"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-2/3 "></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-8"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-7"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-6"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-5"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-4"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-3"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-2"></div>
  <div className="bg-black dark:bg-cyan h-[2px]  w-1"></div>
    </div>
  );
}
