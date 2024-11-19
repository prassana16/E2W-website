import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaCloud, FaMobile, FaGlobe, FaCheckCircle, FaPalette, FaCogs, FaUsers } from "react-icons/fa";

const services = [
  {
    name: 'Web Application Development',
    description: 'Building responsive and interactive web applications that cater to your business needs.',
    icon: <FaGlobe className="text-[#28c836]" />,
    path: '/WebApplicationDevelopment'
  },
  {
    name: 'Website Development',
    description: 'Building responsive and interactive websites that cater to your business needs.',
    icon: <FaLaptopCode className="text-[#cf2929]" />,
    path: '/WebsiteDevelopment'
  },
  {
    name: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps with seamless user experiences.',
    icon: <FaMobile className="text-[#ff5f2e]" />,
    path: '/MobileAppDevelopment'
  },
  {
    name: 'SEO Services',
    description: 'Enhancing your online visibility to drive organic traffic and improve search engine rankings.',
    icon: <FaSearch className="text-[#2445ff]" />,
    path: '/SEOServices'
  },
  {
    name: 'Cloud Native Application Development',
    description: 'Developing scalable, reliable, and secure cloud-native applications to meet modern business demands.',
    icon: <FaCloud className="text-[#ffca2a]" />,
    path: '/CloudNativeAppDevelopment'
  },
  {
    name: 'SaaS (Software as a Service)',
    description: 'Providing scalable, on-demand software solutions that simplify business processes.',
    icon: <FaCogs className="text-[#c6dcef]" />,
    path: '/SaaSDevelopment'
  },
  {
    name: 'UI/UX Design',
    description: 'Crafting user-friendly, intuitive interfaces that enhance user experience and engagement.',
    icon: <FaPalette className="text-[#8037ff]" />,
    path: '/UIUXDesign'
  },
  {
    name: 'Quality Assurance',
    description: 'Ensuring high product quality through meticulous testing and performance optimization.',
    icon: <FaCheckCircle className="text-[#8fe132]" />,
    path: '/QualityAssurance'
  },
  {
    name: 'Staff Augmentation',
    description: 'Providing skilled professionals to seamlessly integrate with your team, enhancing productivity and expertise.',
    icon: <FaUsers className="text-[#4863fd]" />,
    path: '/StaffAugmentation'
  },
];

function OurServices() {
  return (
    <section className="flex flex-col items-center justify-center" style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}>
  {/* Decorative Animated Lines */}
  <div className="w-full flex">
    {[...Array(26)].map((_, i) => (
      <motion.div
        key={i}
        className="h-[2px] w-full"
        style={{ background: 'linear-gradient(to bottom, #6c0081, #001831)' }}
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
    className="grid grid-cols-1 md:grid-cols-2  gap-6 px-4 md:px-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {services.map((service, index) => (
      <a href={service.path} key={index} className="w-full">
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-md transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#22162c00] hover:to-[#ffffff1f]"
          style={{ height: '280px' }}
        >
          <div className="text-6xl mb-4">{service.icon}</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-2 text-center">
            {service.name}
          </h3>
          <p className="text-center text-base md:text-lg text-[#f8ebcf]">
            {service.description}
          </p>
        </motion.div>
      </a>
    ))}
  </motion.div>

  {/* Decorative Animated Lines */}
  <div className="w-full flex mt-24">
    {[...Array(26)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-[#F7F2E7] h-[2px] w-full"
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
