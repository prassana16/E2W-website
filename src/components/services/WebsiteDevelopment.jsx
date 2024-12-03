import React from 'react';
import { motion } from 'framer-motion';
import portfolioSite from '../../assets/images/portfolio-site.png';
import newsSite from '../../assets/images/newsSite.png';
import communityForum from '../../assets/images/communityForum.png';
import blogSite from '../../assets/images/blog-site.png';
import businessSite from '../../assets/images/business-site.png';
import personalSite from '../../assets/images/personal-site.png';
import gracesite from '../../assets/images/gracescans-site.png';
import baleensite from '../../assets/images/baleensite.png';

const WebsiteDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen flex flex-col items-center font-mono justify-center" style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}>
      {/* Introduction Section */}
      <motion.div
        className="flex flex-col items-center justify-between gap-6 w-full p-6 h-full"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col justify-center text-center mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">Website Development</h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Website development is at the core of a strong digital presence. We specialize in creating modern, responsive, and visually appealing websites that enhance user experience and drive engagement.
          </p>
        </div>
      </motion.div>

      {/* Portfolio Website Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <img src={portfolioSite} alt="Portfolio Websites" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4 text-center">Portfolio Websites</h3>
          <p className="text-lg leading-relaxed">
            Showcase your work and achievements with a professionally designed portfolio website. Perfect for freelancers, artists, and professionals looking to stand out.
          </p>
        </div>
      </motion.div>

      {/* News Websites Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <div className="flex flex-col justify-center md:w-1/2">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">News Websites</h3>
    <p className="text-lg leading-relaxed">
      Create visually appealing and highly functional news websites that provide real-time updates, seamless categorization, and engaging content layouts to keep readers informed.
    </p>
  </div>
  <img src={newsSite} alt="News Websites" className="w-full md:w-1/2 rounded-lg" />
</motion.div>

{/* Community Forums Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <img src={communityForum} alt="Community Forums" className="w-full md:w-1/2 rounded-lg" />
  <div className="flex flex-col justify-center md:w-1/2">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Community Forums</h3>
    <p className="text-lg leading-relaxed">
      Build interactive community forums designed to foster communication and collaboration, with features like threaded discussions, user profiles, and moderation tools.
    </p>
  </div>
</motion.div>


      {/* Blog Websites Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Blog Websites</h3>
          <p className="text-lg leading-relaxed">
            Create engaging blog websites with user-friendly interfaces, perfect for sharing ideas, tutorials, or news while keeping readers hooked.
          </p>
        </div>
        <img src={blogSite} alt="Blog Websites" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

      {/* Business Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src={businessSite} alt="Business Websites" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Business Websites</h3>
          <p className="text-lg leading-relaxed">
            Empower your business with a professional website that communicates your brand, services, and values effectively to your audience.
          </p>
        </div>
      </motion.div>

      {/* Personal Websites Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Personal Websites</h3>
          <p className="text-lg leading-relaxed">
            Share your personal story, projects, and achievements with a beautifully designed personal website tailored to your style.
          </p>
        </div>
        <img src={personalSite} alt="Personal Websites" className="w-full md:w-1/2 rounded-lg" />
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
          src={gracesite}
          alt="Wellness"
          className="w-[100%] md:w-[70%] object-contain" // 30% smaller than its original width
        />
      </div>
      <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
        Grace Scans 
      </h4>
      <p className="text-neutral-100 text-lg">
      Business Website for Health Care industry.
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
          src={baleensite}
          alt="Easy2Work"
          className="w-[100%] md:w-[70%] object-contain" // 30% smaller than its original width
        />
      </div>
      <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
       Baleen Media 
      </h4>
      <p className="text-neutral-100 text-lg">
        Business Website for Ad Agency.
      </p>
    </motion.div>
  </div>
</div>

      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, #001831, #59257c )' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Build Your Website?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let us help you create a stunning website that drives results. Contact our team today to get started!
          </p>
          <a href="/ContactForm">
            <button className="px-8 py-3 bg-[#ffffff] text-purple-900 text-lg rounded-lg shadow-md hover:bg-[#1e7c32] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </a>
          <div className="border-b border-[#f8d996] pt-16 md:w-[85%] w-full text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
