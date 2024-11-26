import React from 'react';
import { motion } from 'framer-motion';
import gracesite from '../../assets/images/gracescans-site.png';
import baleensite from '../../assets/images/baleensite.png';
import wellness from '../../assets/images/wellness-pwa.png';
import e2w from '../../assets/images/PWAintro2.png';
import e_com from '../../assets/images/e-commerce2.png';
import cms from '../../assets/images/cms.png';
import crm from '../../assets/images/crm.png';
import enterprise from '../../assets/images/enterprise.png';
import lms from '../../assets/images/lms.png';
import social from '../../assets/images/social.png';

const WebAppDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center  font-mono" style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}>
      {/* E-commerce Platforms Section */}
<motion.div
  className="flex flex-col  items-center justify-between gap-6 w-full p-6 h-full"
  style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="flex flex-col justify-center  text-center mb-16">
    <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">Web Application Development</h2>
    <p className="text-sm md:text-lg leading-relaxed">
      Web application development is essential for creating digital platforms that offer interactive, engaging, and user-centric experiences. We specialize in building scalable and responsive solutions tailored to meet diverse business needs.
    </p>
    
    </div>
    
    </motion.div>
  
  
  <motion.div
  className="flex flex-col  items-center justify-center gap-6 w-full p-6 md:md:h-screen"
  style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
> 
<h2 className="text-xl md:text-4xl font-semibold text-white mb-4 mt-14 text-center">Types of Web Application Development</h2>
  <div className="flex flex-col md:flex-row  items-center gap-6 ">
  <img src={e_com} alt="E-commerce Platforms" className="w-full md:w-1/2 rounded-lg" />
  <div className="flex flex-col justify-center md:w-1/2">
    <h3 className="text-xl md:text-3xl font-semibold mb-4 text-center">E-commerce Platforms</h3>
    <p className="text-lg leading-relaxed">
      Developing robust e-commerce solutions to help businesses reach customers worldwide, providing a seamless shopping experience and secure transaction handling.
    </p>
  </div>
  </div>
</motion.div>


      {/* CMS Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img src={cms} alt="Content Management Systems" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Content Management Systems (CMS)</h3>
          <p className="text-lg leading-relaxed">
            Building user-friendly CMS platforms to streamline content creation and management, enabling businesses to maintain control over their digital assets.
          </p>
        </div>
      </motion.div>

      {/* CRM Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img src={crm} alt="Customer Relationship Management" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Customer Relationship Management (CRM)</h3>
          <p className="text-lg leading-relaxed">
            Creating CRM systems to manage customer interactions, improve customer satisfaction, and foster long-term relationships with tailored engagement solutions.
          </p>
        </div>
      </motion.div>

      {/* Enterprise Solutions Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <img src={enterprise} alt="Enterprise Solutions" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Solutions</h3>
          <p className="text-lg leading-relaxed">
            Developing scalable enterprise applications to enhance operational efficiency, collaboration, and data management across various departments.
          </p>
        </div>
      </motion.div>

      {/* LMS Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src={lms} alt="Learning Management Systems" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Learning Management Systems (LMS)</h3>
          <p className="text-lg leading-relaxed">
            Designing LMS platforms to facilitate online education and training programs, offering personalized learning experiences and progress tracking.
          </p>
        </div>
      </motion.div>

      {/* Social Networking Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <img src={social} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
          <p className="text-lg leading-relaxed">
            Building social networking applications that foster communication and community engagement with modern features and user-friendly interfaces.
          </p>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="w-full  ">
        
        <div className="grid grid-cols-1 ">
          <motion.div
            className="p-6 shadow-lg text-center"
            style={{ background: 'linear-gradient(138deg, rgb(22 0 85), rgb(89, 6, 204))', color: 'white' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-5xl text-gray-100 font-semibold text-center mb-6">Our Portfolio</h3>
            <img src={wellness} alt="Wellness" className="mb-4" />
            <h4 className="text-xl md:text-3xl  font-semibold text-neutral-100">Wellness PWA Software</h4>
            <p className="text-neutral-100 text-lg">A Fitness tracking and lifestyle platform</p>
          </motion.div>

          <motion.div
            className="p-6 shadow-lg text-center"
            style={{ background: 'linear-gradient(138deg, rgb(22 0 85), rgb(89, 6, 204))' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={e2w} alt="Easy2Work" className="mb-4" />
            <h4 className="text-xl md:text-3xl  font-semibold text-neutral-100">Easy2Work PWA Software</h4>
            <p className="text-neutral-100 text-lg">A Workflow management application</p>
          </motion.div>
        </div>
      </div>

      {/* Call-to-Action Card */}
      <div className="w-full ">
        <motion.div
          className="p-10 shadow-lg text-center"
          style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let’s bring your web application idea to life. Reach out to our expert team and discover how we can help you create an impactful digital experience.
          </p>
          <button className="px-8 py-3 bg-[#ffffff] text-purple-900 text-lg rounded-lg shadow-md hover:bg-[#1e7c32] transition duration-300 ease-in-out">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
