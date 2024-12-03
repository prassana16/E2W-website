import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="min-h-screen flex flex-col items-center  font-mono justify-center" style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}>
      {/* E-commerce Platforms Section */}
  <motion.div
    className="flex flex-col items-center gap-12 w-full h-full px-3 md:px-6 py-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="text-center max-w-6xl">
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">Web Application Development</h2>
      <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
        Web application development is essential for creating digital platforms that offer interactive, engaging, and user-centric experiences. We specialize in building scalable and responsive solutions tailored to meet diverse business needs.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full ">
      {/* Cards */}
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Understanding Your Business Goals</h3>
        <p className="text-sm md:text-base leading-relaxed">
          Every successful web application starts with a deep understanding of your business objectives. Our team collaborates with you to identify your goals, target audience, and the core purpose of your application.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Innovative Technology Stack</h3>
        <p className="text-sm md:text-base leading-relaxed">
          Our expertise spans modern frameworks like React.js, Angular, and Vue.js for front-end development, and Node.js, Python, and .NET for the back-end. We ensure your web app is fast, reliable, and secure.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Scalable and Responsive Design</h3>
        <p className="text-sm md:text-base leading-relaxed">
          We craft applications that perform seamlessly across devices and can scale with your business as it grows. Our designs provide an intuitive experience for users on any device.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Focus on Security</h3>
        <p className="text-sm md:text-base leading-relaxed">
          Our development process includes advanced security protocols, data encryption, and regular vulnerability assessments to protect your users' information.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Custom Features and Integrations</h3>
        <p className="text-sm md:text-base leading-relaxed">
          From integrating third-party APIs to implementing payment gateways, we ensure your application is equipped with all the functionalities needed to succeed.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Agile Development Process</h3>
        <p className="text-sm md:text-base leading-relaxed">
          By following an agile development process, we provide regular updates, allowing you to review progress and suggest changes at every stage of the development cycle.
        </p>
      </div>

      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Post-Development Support</h3>
        <p className="text-sm md:text-base leading-relaxed">
          We provide post-development support and maintenance to ensure your application remains updated, bug-free, and performs optimally.
        </p>
      </div>

      {/* New Card 1 */}
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Analytics and Insights</h3>
        <p className="text-sm md:text-base leading-relaxed">
          Gain valuable insights with integrated analytics tools. Track user engagement, monitor performance, and make data-driven decisions to enhance your web application’s effectiveness.
        </p>
      </div>

      {/* New Card 2 */}
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-lg md:text-2xl font-bold mb-2">Continuous Improvement</h3>
        <p className="text-sm md:text-base leading-relaxed">
          We prioritize long-term success by offering continuous improvement plans. With regular updates and feature enhancements, your application stays relevant and competitive.
        </p>
      </div>
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
    <ul className="list-disc list-inside text-lg mt-4">
              <li>Customizable product catalogs</li>
              <li>Secure payment gateways</li>
              <li>Inventory management tools</li>
              <li>User-friendly interfaces for seamless shopping</li>
              <li>Real-time order tracking</li>
            </ul>
  </div>
  </div>
</motion.div>


      {/* CMS Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Content Management Systems (CMS)</h3>
          <p className="text-lg leading-relaxed">
            Building user-friendly CMS platforms to streamline content creation and management, enabling businesses to maintain control over their digital assets.
          </p>
          <ul className="list-disc list-inside text-lg mt-4">
            <li>Organize, edit, and publish content efficiently</li>
            <li>Manage blogs, articles, and media files</li>
            <li>Easy integration with third-party tools</li>
          </ul>
        </div>
        <img src={cms} alt="Content Management Systems" className="w-full md:w-1/2 rounded-lg" />
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
          <ul className="list-disc list-inside text-lg mt-4">
            <li>Track leads and sales processes</li>
            <li>Improve customer satisfaction with personalized interactions</li>
            <li>Automate repetitive tasks</li>
          </ul>
        </div>
      </motion.div>

      {/* Enterprise Solutions Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Solutions</h3>
          <p className="text-lg leading-relaxed">
            Developing scalable enterprise applications to enhance operational efficiency, collaboration, and data management across various departments.
          </p>
          <ul className="list-disc list-inside text-lg mt-4">
            <li>Departmental integration</li>
            <li>Data management and analytics</li>
            <li>Efficient collaboration tools</li>
          </ul>
        </div>
        <img src={enterprise} alt="Enterprise Solutions" className="w-full md:w-1/2 rounded-lg" />
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
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
          <p className="text-lg leading-relaxed">
            Building social networking applications that foster communication and community engagement with modern features and user-friendly interfaces.
          </p>
        </div>
        <img src={social} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

     {/* Portfolio Section */}
<div className="w-full flex flex-col items-center">
  <div className="grid grid-cols-1  w-full">
    {/* Wellness Section */}
    <motion.div
      className="p-6 shadow-lg text-center"
      style={{ background: 'linear-gradient(138deg, rgb(22 0 85), rgb(89, 6, 204))', color: 'white' }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl md:text-5xl text-gray-100 font-semibold text-center mb-6">
        Our Portfolio
      </h3>
      <div className="flex justify-center mb-4">
        <img
          src={wellness}
          alt="Wellness"
          className="w-[70%] md:w-[70%] object-contain" // 30% smaller than its original width
        />
      </div>
      <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
        Wellness PWA Software
      </h4>
      <p className="text-neutral-100 text-lg">
        A Fitness tracking and lifestyle platform
      </p>
    </motion.div>

    {/* Easy2Work Section */}
    <motion.div
      className="p-6 shadow-lg text-center"
      style={{ background: 'linear-gradient(138deg, rgb(22 0 85), rgb(89, 6, 204))', color: 'white' }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center mb-4">
        <img
          src={e2w}
          alt="Easy2Work"
          className="w-[70%] md:w-[70%] object-contain" // 30% smaller than its original width
        />
      </div>
      <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
        Easy2Work PWA Software
      </h4>
      <p className="text-neutral-100 text-lg">
        A Workflow management application
      </p>
    </motion.div>
  </div>
</div>


      {/* Call-to-Action Card */}
      <div className="w-full ">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center "
          style={{ background: 'linear-gradient(to bottom, #001831, #59257c )' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let’s bring your web application idea to life. Reach out to our expert team and discover how we can help you create an impactful digital experience.
          </p>
          <a href="/ContactForm"><button className="px-8 py-3 bg-[#ffffff] text-purple-900 text-lg rounded-lg shadow-md hover:bg-[#1e7c32] transition duration-300 ease-in-out">
            Contact Us
          </button></a>
          <div className="border-b border-[#f8d996] pt-16 w-full  text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
