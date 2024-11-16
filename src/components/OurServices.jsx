import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaCloud, FaMobile, FaGlobe, FaCheckCircle, FaPalette, FaCogs } from "react-icons/fa";

const services = [
  {
    name: 'Web Development',
    description: 'Building responsive and interactive web applications that cater to your business needs.',
    icon: <FaGlobe className="text-[#4CAF50]" />
  },
  {
    name: 'Website Development',
    description: 'Building responsive and interactive websites that cater to your business needs.',
    icon: <FaLaptopCode className="text-[#af4c4c]" />
  },
  {
    name: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps with seamless user experiences.',
    icon: <FaMobile className="text-[#FF5722]" />
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
  {
    name: 'SaaS (Software as a Service)',
    description: 'Providing scalable, on-demand software solutions that simplify business processes.',
    icon: <FaCogs className="text-[#6C757D]" />
  },
  {
    name: 'PaaS (Platform as a Service)',
    description: 'Offering cloud-based platforms that support fast and efficient application development.',
    icon: <FaCloud className="text-[#17A2B8]" />
  },
  {
    name: 'UI/UX Design',
    description: 'Crafting user-friendly, intuitive interfaces that enhance user experience and engagement.',
    icon: <FaPalette className="text-[#673AB7]" />
  },
  {
    name: 'Quality Assurance',
    description: 'Ensuring high product quality through meticulous testing and performance optimization.',
    icon: <FaCheckCircle className="text-[#8BC34A]" />
  },
];

function OurServices() {
  return (
    <section className=' flex flex-col items-center justify-center ' style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}>
      {/* Decorative Animated Lines */}
      <div className="w-full flex">
        {[...Array(26)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-[#F7F2E7] h-[2px] w-full`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl text-[#F7F2E7] text-center font-Tinos mb-16 mt-16">
        What We Provide As A Service
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-md hover:bg-gradient-to-r hover:from-[#22162c00] hover:to-[#ffffff1f] transition-all duration-500 ease-in-out"
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-4">
              {service.name}
            </h3>
            <p className="text-center text-base md:text-lg text-[#f8ebcf]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Animated Lines */}
      <div className="w-full flex mt-24">
        {[...Array(26)].map((_, i) => (
          <motion.div
            key={i}
            className={`bg-[#F7F2E7] h-[2px] w-full`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default OurServices;
