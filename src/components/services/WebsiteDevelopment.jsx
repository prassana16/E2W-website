import React from 'react';
import { motion } from 'framer-motion';
import gracesite from '../../assets/images/gracescans-site.png';
import baleensite from '../../assets/images/baleensite.png';
import portfolioImg from '../../assets/images/slide1.png';
import newsImg from '../../assets/images/slide4.png';
import forumsImg from '../../assets/images/slide5.png';
import blogImg from '../../assets/images/slide3.png';
import businessImg from '../../assets/images/slide6.png';
import personalImg from '../../assets/images/slide2.png';

const WebsiteDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Website Development
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Create engaging, fast, and scalable websites tailored to your needs. From personal blogs to business websites, we craft solutions that stand out.
        </p>
      </motion.div>

      {/* Portfolio Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={portfolioImg}
          alt="Portfolio Websites"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Portfolio Websites
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Showcase your skills, projects, and achievements with beautifully designed portfolio websites.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Visually Stunning Designs</li>
            <li>Easy Navigation</li>
            <li>Highlight Your Expertise</li>
            <li>Responsive and SEO-Friendly</li>
          </ul>
        </div>
      </motion.div>

      {/* News Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #1c92d2, #f2fcfe)', color: 'black' }}
      >
        <img
          src={newsImg}
          alt="News Websites"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            News Websites
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Deliver up-to-date news and information with well-structured, scalable news websites.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Dynamic Content Updates</li>
            <li>Optimized for High Traffic</li>
            <li>Responsive Design</li>
            <li>Enhanced User Engagement</li>
          </ul>
        </div>
      </motion.div>

      {/* Community Forums Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={forumsImg}
          alt="Community Forums"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Community Forums
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Build interactive community forums that foster discussions and collaboration among users.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Interactive User Interface</li>
            <li>Moderation Tools</li>
            <li>Real-Time Notifications</li>
            <li>Customizable Features</li>
          </ul>
        </div>
      </motion.div>

      {/* Blog Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #1c92d2, #f2fcfe)', color: 'black' }}
      >
        <img
          src={blogImg}
          alt="Blog Websites"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Blog Websites
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Share your ideas and stories with beautifully designed, content-driven blog websites.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Customizable Themes</li>
            <li>Easy-to-Use CMS</li>
            <li>SEO Optimization</li>
            <li>Social Media Integration</li>
          </ul>
        </div>
      </motion.div>

      {/* Business Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={businessImg}
          alt="Business Websites"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Business Websites
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Expand your reach with professional business websites that showcase your brand and services.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Professional Design</li>
            <li>Lead Generation Tools</li>
            <li>Integrated Analytics</li>
            <li>Custom Features</li>
          </ul>
        </div>
      </motion.div>

      {/* Personal Websites Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #1c92d2, #f2fcfe)', color: 'black' }}
      >
        <img
          src={personalImg}
          alt="Personal Websites"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Personal Websites
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Create a personal website that reflects your unique style, personality, and vision.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Customizable Layout</li>
            <li>Showcase Your Story</li>
            <li>SEO-Friendly</li>
            <li>Responsive Across Devices</li>
          </ul>
        </div>
      </motion.div>
      {/* Portfolio Section */}
      <div className="w-full  ">
        
        <div className="grid grid-cols-1 ">
          <motion.div
            className="p-6 shadow-lg text-center "
            style={{ background: 'linear-gradient(138deg, rgb(22 0 85), rgb(89, 6, 204))', color: 'white' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-5xl text-gray-100 font-semibold text-center mb-6">Our Portfolio</h3>
            <img src={gracesite} alt="Wellness" className="mb-4 " />
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
            <img src={baleensite} alt="Easy2Work" className="mb-4" />
            <h4 className="text-xl md:text-3xl  font-semibold text-neutral-100">Easy2Work PWA Software</h4>
            <p className="text-neutral-100 text-lg">A Workflow management application</p>
          </motion.div>
        </div>
      </div>

      {/* Call-to-Action Card */}
      <div className="w-full ">
        <motion.div
          className="p-10 shadow-lg text-center bg-gradient-to-r from-purple-800 to-indigo-900"
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let’s bring your web application idea to life. Reach out to our expert team and discover how we can help you create an impactful digital experience.
          </p>
          <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
