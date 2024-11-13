import React from 'react';
import { motion } from 'framer-motion';
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';

function OurClients() {
  return (
    <section className='bg-[#F7F2E7] py-16 flex flex-col items-center justify-center'>
      <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
        Our Clients
      </h2>
      <motion.div
        className="grid grid-cols-1  md:grid-cols-2 gap-6 md:gap-16  px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Client Card: Grace Scans */}
        <motion.div
          className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300 shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
        >
          <img src={Gracescans} alt="Grace Scans" className='w-16 md:w-20' />
          <h3 className='ml-4 text-lg md:text-2xl font-semibold text-[#00264c] whitespace-nowrap'>
            Grace Scans
          </h3>
        </motion.div>

        {/* Client Card: Baleen Media */}
        <motion.div
          className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300 shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
        >
          <img src={Baleen} alt="Baleen Media" className='w-14 md:w-16' />
          <h3 className='ml-4 text-lg md:text-2xl font-semibold text-[#00264c] whitespace-nowrap'>
            Baleen Media
          </h3>
        </motion.div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="w-full flex justify-center mt-24 space-x-1">
  {[8, 7, 6, 5, 4, 3, 2, 1].map((width, i) => (
    <motion.div
      key={i}
      className={`bg-[#00264c] h-[2px] w-${width}`}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay: i * 0.1,
      }}
    />
  ))}
  {[2, 3, 4, 5, 6, 7, 8].map((width, i) => (
    <motion.div
      key={i + 8}
      className={`bg-[#00264c] h-[2px] w-${width}`}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay: (i + 8) * 0.1,
      }}
    />
  ))}
</div>
    </section>
  );
}

export default OurClients;
