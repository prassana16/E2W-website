import React from 'react';
import { motion } from 'framer-motion';
import nativeApp from '../../assets/images/native-app.png';
import hybridApp from '../../assets/images/hybrid-app.png';
import pwaApp from '../../assets/images/pwa-app.png';
import gamingApp from '../../assets/images/gaming-app.png';
import enterpriseApp from '../../assets/images/enterprise-app.png';
import socialApp from '../../assets/images/social-app.png';

const MobileAppDevelopment = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center font-mono justify-center"
      style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
    >
      {/* Mobile App Development Section */}
      <motion.div
        className="flex flex-col items-center justify-between gap-6 w-full p-6 h-full"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col justify-center text-center mb-16">
          <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">Mobile App Development</h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Crafting innovative and user-friendly mobile applications for various platforms, ensuring seamless experiences and exceptional performance tailored to meet unique business needs.
          </p>
        </div>
      </motion.div>

      {/* Native Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img src={nativeApp} alt="Native Apps" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Native Apps</h3>
          <p className="text-lg leading-relaxed">
            Developing native mobile applications for iOS and Android to provide high performance, secure, and platform-optimized user experiences.
          </p>
        </div>
      </motion.div>

      {/* Hybrid Apps Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Hybrid Apps</h3>
          <p className="text-lg leading-relaxed">
            Building hybrid mobile applications using frameworks like React Native and Flutter to ensure cross-platform compatibility and cost efficiency.
          </p>
        </div>
        <img src={hybridApp} alt="Hybrid Apps" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

      {/* PWA Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <img src={pwaApp} alt="Progressive Web Apps (PWAs)" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Progressive Web Apps (PWAs)</h3>
          <p className="text-lg leading-relaxed">
            Delivering cutting-edge PWAs that combine the best of web and mobile apps, ensuring fast, reliable, and engaging user experiences.
          </p>
        </div>
      </motion.div>

      {/* Gaming Apps Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Gaming Apps</h3>
          <p className="text-lg leading-relaxed">
            Creating immersive gaming applications with rich graphics, smooth performance, and engaging gameplay experiences for various platforms.
          </p>
        </div>
        <img src={gamingApp} alt="Gaming Apps" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

      {/* Enterprise Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <img src={enterpriseApp} alt="Enterprise Apps" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Apps</h3>
          <p className="text-lg leading-relaxed">
            Designing enterprise-grade mobile apps to streamline workflows, enhance productivity, and improve collaboration across organizations.
          </p>
        </div>
      </motion.div>

      {/* Social Networking Apps Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
          <p className="text-lg leading-relaxed">
            Developing feature-rich social networking apps to foster connectivity and engagement with seamless user interfaces and real-time interactions.
          </p>
        </div>
        <img src={socialApp} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, #001831, #59257c )' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Start Your Mobile App Project?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let’s bring your mobile app idea to life. Reach out to our expert team and discover how we can help you create an impactful digital experience.
          </p>
          <a href="/ContactForm">
            <button className="px-8 py-3 bg-[#ffffff] text-purple-900 text-lg rounded-lg shadow-md hover:bg-[#1e7c32] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </a>
          <div className="border-b border-[#f8d996] pt-16 w-full text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;
