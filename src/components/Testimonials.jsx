import { motion } from 'framer-motion';
import React from 'react';
import { RiStarSFill } from "react-icons/ri";

function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 flex flex-col items-center justify-center px-3">
      <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
        Testimonials
      </h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        {/* Testimonial Card: Baleen Media */}
        <motion.div
          className="px-5 rounded-xl border-2 border-purple-900  text-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false  }}
          
        >
          <div className="flex gap-1 text-yellow-400 text-2xl md:text-3xl mt-6 mb-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <h3 className="font-sans font-semibold text-2xl md:text-3xl">Baleen Media</h3>
          <p className="font-mono mt-4 mb-2 text-base font-thin md:font-medium p-1 pb-3">
            Easy2Work has transformed our workflow at Baleen Media, enabling us to focus on our strengths and achieve impressive results. Their revenue-sharing model has driven mutual growth, and their dedication to innovation and client success makes this partnership truly rewarding. The platform's user-friendly design and adaptable features have made it an indispensable tool in our operations.
          </p>
        </motion.div>

        {/* Testimonial Card: Grace Scans */}
        <motion.div
          className="px-5 rounded-xl border-2 border-purple-900  text-neutral-900 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          
        >
          <div className="flex gap-1 text-yellow-400 text-2xl md:text-3xl mt-6 mb-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <h3 className="font-sans font-semibold text-2xl md:text-3xl">Grace Scans</h3>
          <p className="font-mono mt-4 mb-2 text-base font-thin md:font-medium p-1 pb-3">
            Working with Easy2Work has transformed how we manage our daily operations. Their solutions are not only efficient but also customized to our needs. The revenue-sharing model fosters a real partnership, aligning our goals for shared growth. Their platform has enabled us to scale confidently, and we look forward to building on this successful collaboration.
          </p>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="bg-[#00264c] h-[1px] mt-32 w-8"></div>
      <div className="bg-[#00264c] h-[2px] w-2/3"></div>
      <div className="bg-[#00264c] h-[2px] w-8"></div>
      <div className="bg-[#00264c] h-[2px] w-7"></div>
      <div className="bg-[#00264c] h-[2px] w-6"></div>
      <div className="bg-[#00264c] h-[2px] w-5"></div>
      <div className="bg-[#00264c] h-[2px] w-4"></div>
      <div className="bg-[#00264c] h-[2px] w-3"></div>
      <div className="bg-[#00264c] h-[2px] w-2"></div>
      <div className="bg-[#00264c] h-[2px] w-1"></div>
    </section>
  );
}

export default Testimonials;
