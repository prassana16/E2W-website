import React from 'react';
import { motion } from 'framer-motion';
import nativeApps from '../../assets/images/1.png';
import hybridApps from '../../assets/images/6.png';
import pwaApps from '../../assets/images/2.png';
import gamingApps from '../../assets/images/4.png';
import enterpriseApps from '../../assets/images/3.png';
import socialApps from '../../assets/images/6.png';

const MobileAppDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Mobile Application Development
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Build cutting-edge mobile applications tailored to your business needs. From native to hybrid solutions, we ensure exceptional performance and user experiences.
        </p>
      </motion.div>

      {/* Native Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={nativeApps}
          alt="Native Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Native Apps
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Develop platform-specific apps for iOS and Android to deliver unmatched speed and reliability.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>High Performance</li>
            <li>Platform-Specific Features</li>
            <li>Enhanced User Experience</li>
            <li>Built with Swift, Kotlin, or Objective-C</li>
          </ul>
        </div>
      </motion.div>

      {/* Hybrid Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #6a4aff, #3c1dc9)', color: 'white' }}
      >
        <img
          src={hybridApps}
          alt="Hybrid Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Hybrid Apps
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Leverage hybrid technology to build apps with cross-platform compatibility and faster development cycles.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Single Codebase for All Platforms</li>
            <li>Faster Development and Deployment</li>
            <li>Reduced Maintenance Costs</li>
            <li>Powered by React Native, Flutter, and Ionic</li>
          </ul>
        </div>
      </motion.div>

      {/* Progressive Web Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={pwaApps}
          alt="Progressive Web Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Progressive Web Apps (PWAs)
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Build web apps that provide native-like performance and offline capabilities for seamless user experience.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Works Offline</li>
            <li>App-Like Experience</li>
            <li>Cost-Effective and Lightweight</li>
            <li>Quick Load Times</li>
          </ul>
        </div>
      </motion.div>

      {/* Gaming Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={gamingApps}
          alt="Gaming Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Gaming Apps
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Design immersive and interactive gaming experiences optimized for mobile platforms.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Stunning Graphics</li>
            <li>Real-Time Multiplayer</li>
            <li>AR/VR Capabilities</li>
            <li>Optimized for Low Latency</li>
          </ul>
        </div>
      </motion.div>

      {/* Enterprise Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={enterpriseApps}
          alt="Enterprise Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Enterprise Apps
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Develop robust enterprise applications that enhance productivity and streamline operations.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Custom Business Solutions</li>
            <li>Integration with Existing Systems</li>
            <li>Secure and Scalable</li>
            <li>Designed for Large Teams</li>
          </ul>
        </div>
      </motion.div>

      {/* Social Networking Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={socialApps}
          alt="Social Networking Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Social Networking Apps
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Create engaging and feature-rich social networking platforms to connect users seamlessly.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Real-Time Messaging</li>
            <li>Social Media Integration</li>
            <li>User-Friendly Interfaces</li>
            <li>Customizable User Profiles</li>
          </ul>
        </div>
      </motion.div>
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

export default MobileAppDevelopment;
