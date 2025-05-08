import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaRobot, FaMobileAlt, FaUsers } from 'react-icons/fa';

const AboutE2w = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section 
      className="w-full py-16 md:py-24" 
      id="about-easy2work"
      style={{ background: 'linear-gradient(135deg, #fcfcfc, #f5f5f5)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#017598]">
            About <span className="text-[#05a7be]">Easy2Work</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            A globally recognized AI-powered software development company delivering innovative solutions that transform businesses around the world.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              <strong>Easy2Work</strong> is a forward-thinking technology company specializing in developing <strong>AI-powered software solutions</strong> and <strong>Progressive Web Applications (PWAs)</strong> for businesses across the USA, Canada, Germany, Singapore, Dubai, and beyond.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our flagship product, the <strong>Intelligent Business Management Software (IBMS)</strong>, is a comprehensive workflow management system designed to optimize operations and drive growth for organizations of all sizes.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a team of expert developers and consultants, we craft tailored digital solutions that help our international clients navigate the complexities of modern business while staying ahead in an increasingly competitive global market.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#18c4b8]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#017598]">Our Global Technology Stack</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#05a7be] rounded-full p-2 mr-4 text-white">
                    <FaRobot />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#05a7be]">AI Integration</h4>
                    <p className="text-gray-700">Leveraging artificial intelligence to create smarter, adaptive business solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#087ea2] rounded-full p-2 mr-4 text-white">
                    <FaGlobeAmericas />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#087ea2]">Global Architecture</h4>
                    <p className="text-gray-700">Building applications that scale internationally with multi-language support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#18c4b8] rounded-full p-2 mr-4 text-white">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#18c4b8]">Responsive PWAs</h4>
                    <p className="text-gray-700">Creating cross-platform applications that work seamlessly on any device</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-8 bg-white shadow-lg rounded-xl border border-[#18c4b8]/20 hover:border-[#18c4b8] transition-colors duration-300">
            <div className="text-[#05a7be] text-3xl mb-4">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#017598]">Global Reach</h3>
            <p className="text-gray-700">
              Serving clients across continents with solutions adapted to regional business requirements and compliance standards.
            </p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border border-[#18c4b8]/20 hover:border-[#18c4b8] transition-colors duration-300">
            <div className="text-[#05a7be] text-3xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#017598]">Industry Expertise</h3>
            <p className="text-gray-700">
              Specialized in developing intelligent software solutions that address specific challenges across diverse international markets.
            </p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border border-[#18c4b8]/20 hover:border-[#18c4b8] transition-colors duration-300">
            <div className="text-[#05a7be] text-3xl mb-4">
              <FaRobot />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#017598]">AI-Powered Solutions</h3>
            <p className="text-gray-700">
              Implementing advanced artificial intelligence to enhance business processes and deliver smarter, more efficient workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutE2w;
