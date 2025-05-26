import React from 'react';
import { motion } from 'framer-motion';
import { IoOptionsOutline } from "react-icons/io5";
import { SiGooglecloudcomposer } from "react-icons/si";
import { BiSolidCustomize } from "react-icons/bi";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { BsRobot, BsGlobe2 } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Intro = () => {  return (    <section className="py-20 md:py-28" id="intro" style={{ 
      background: `linear-gradient(135deg, #ffffff, rgba(5, 244, 249, 0.05))`,
      overflow: 'hidden'
    }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-black mb-6"
          >
            <span className="relative">
              <span className="relative z-10">Next-Gen Software Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan/20"></span>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto"
          >
            Easy2Work provides cutting-edge AI-powered software development services to clients worldwide. Our solutions are designed with global standards to meet the unique needs of businesses in USA, Canada, Germany, Singapore, Dubai and beyond.
          </motion.p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">          {/* Card 1: AI Integration */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <BsRobot className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">AI Integration</h3>
            <p className="text-black/80 leading-relaxed">
              Leverage the power of artificial intelligence across all our solutions to enhance efficiency, automate workflows, and deliver data-driven insights for smarter business decisions.
            </p>
          </motion.div>          {/* Card 2: Global Accessibility */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <BsGlobe2 className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">Global Accessibility</h3>
            <p className="text-black/80 leading-relaxed">
              Our applications are built with international audiences in mind, supporting multiple languages, regional compliance standards, and cultural adaptations for a truly global reach.
            </p>
          </motion.div>          {/* Card 3: Cloud-Native */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <FaCloudUploadAlt className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">Cloud-Native Solutions</h3>
            <p className="text-black/80 leading-relaxed">
              Develop scalable applications on modern cloud infrastructure, ensuring high availability, performance, and security for businesses operating across international markets.
            </p>
          </motion.div>          {/* Card 4: Customizable */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <BiSolidCustomize className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">Fully Customizable</h3>
            <p className="text-black/80 leading-relaxed">
              Tailor our solutions to your specific business requirements with extensive customization options that adapt to your unique processes and workflows.
            </p>
          </motion.div>          {/* Card 5: Enterprise-Grade */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <IoOptionsOutline className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">Enterprise-Grade</h3>
            <p className="text-black/80 leading-relaxed">
              Benefit from robust, secure, and reliable solutions designed to meet the demanding requirements of enterprise-level operations and compliance standards.
            </p>
          </motion.div>          {/* Card 6: Multi-Platform */}
          <motion.div
            className="flex flex-col p-8 rounded-xl shadow-lg bg-white border border-cyan/30 hover:border-cyan transition-all duration-300 elegant-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <MdOutlineSettingsAccessibility className="text-5xl text-cyan" />
            </motion.div>
            <h3 className="text-2xl font-bold text-black mb-4">Multi-Platform</h3>
            <p className="text-black/80 leading-relaxed">
              Access your applications seamlessly across desktop, mobile, and tablet with responsive designs that deliver consistent experiences on any device or platform.
            </p>
          </motion.div>
        </div>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a href="/ContactForm" className="inline-block px-8 py-4 bg-cyan text-black text-lg font-bold rounded-lg hover:shadow-lg hover:bg-black hover:text-cyan elegant-transition border border-cyan/20 transform hover:-translate-y-1">
            Start Your Global Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
