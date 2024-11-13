import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaBullhorn, FaCloud } from "react-icons/fa";

const services = [
  {
    name: 'Web Development',
    description: 'Building responsive and interactive web applications that cater to your business needs.',
    icon: <FaLaptopCode className="text-[#4CAF50]" />
  },
  {
    name: 'Website Development',
    description: 'Building responsive and interactive websites that cater to your business needs.',
    icon: <FaLaptopCode className="text-[#af4c4c]" />
  },
  {
    name: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps with seamless user experiences.',
    icon: <FaLaptopCode className="text-[#FF5722]" />
  },
  {
    name: 'SEO Services',
    description: 'Enhancing your online visibility to drive organic traffic and improve search engine rankings.',
    icon: <FaSearch className="text-[#3F51B5]" />
  },
  {
    name: 'Cloud Native Application Development',
    description: 'Developing scalable, reliable, and secure cloud-native applications to meet modern business demands.',
    icon: <FaCloud className="text-[#FFC107]" />
  },
];

function OurServices() {
  return (
    <section className='bg-[#F7F2E7] py-16 flex flex-col items-center justify-center p-3'>
      <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
        Our Services
      </h2>
      <motion.div
        className="grid grid-cols-1  md:grid-cols-2 gap-5 px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-[#F7F2E7] rounded-3xl border border-gray-300 shadow-md transform hover:bg-gradient-to-l hover:from-[#00264c2d] hover:to-[#ffffff98] transition-all duration-500 ease-in-out"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00264c] mb-2">
              {service.name}
            </h3>
            <p className="text-center text-sm md:text-base text-gray-600 px-2">
              {service.description}
            </p>
          </motion.div>
        ))}
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

export default OurServices;
