import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import gif from '../assets/images/PWAintro2.png';

function AboutPWA() {
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #017598, #087ea2)' }}
    >
      {/* Decorative Animated Lines */}
      <div className="w-full flex">
        {[...Array(26)].map((_, i) => (
          <motion.div
            key={i}
            className="h-[2px] w-full"
            style={{ background: 'linear-gradient(to bottom, #05a7be, #1ed7cd)' }}
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

      <h2 className="text-2xl md:text-5xl text-[#F7F2E7] text-center font-Tinos mb-8 md:mb-16 mt-16">
  Progressive Web Applications (PWA)
</h2>
<div className="flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-6 w-full ">
  

  <div className="flex flex-col md:flex-row ">
    {/* Left Column */}
    <motion.div
      className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-md w-full max-w-xl md:max-w-7xl  "
      initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
    >
      <div className="text-4xl md:text-6xl mb-4">
        <FaRocket className="text-[#28c836]" />
      </div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-[#ffffff] mb-4 md:mb-6 text-left md:text-center">
          What is a Progressive Web Application (PWA)?
        </h3>
        <p className="text-sm md:text-lg text-[#f8ebcf] mb-4 text-left">
          A Progressive Web Application (PWA) combines the best features of web and mobile apps, 
          offering fast, reliable, and engaging experiences directly in a browser. It’s a solution 
          designed to function seamlessly across all devices and platforms, ensuring a unified user experience.
        </p>
        <p className="text-sm md:text-lg text-[#f8ebcf] mb-4 text-left">
          PWAs are known for their ability to work offline, send push notifications, and load 
          instantly, even in low-network conditions. They remove the barriers of app installation 
          by allowing users to access your application directly from their browsers.
        </p>
        <h3 className="text-xl md:text-3xl font-semibold text-[#ffffff] mb-4 md:mb-6 text-left md:text-center">
          Our Expertise in PWAs
        </h3>
        <p className="text-sm md:text-lg text-[#f8ebcf] mb-4 text-left">
          We anticipated the rise of PWAs early and have developed numerous successful products 
          using this technology. Our team specializes in creating apps that offer superior 
          performance, reliability, and user experience. 
        </p>
        <p className="text-sm md:text-lg text-[#f8ebcf] mb-4 text-left">
          From eCommerce stores that boost sales to business apps that streamline operations, 
          we develop PWAs tailored to your goals. By incorporating advanced features like 
          offline capabilities, app-like interfaces, and high-speed performance, we make your 
          application a delight for users.
        </p>
        <p className="text-sm md:text-lg text-[#f8ebcf] text-left">
          Progressive Web Applications are the future of web experiences, blending the best of 
          web and mobile worlds. Our team is ready to revolutionize your business by building 
          cutting-edge PWAs that redefine user engagement, enhance performance, and increase ROI.
        </p>
      </div>
    </motion.div>
    </div>
        {/* Right Column */}
        <div className="flex flex-col items-center w-full  md:max-w-4xl gap-4 md:gap-6">
          {/* Image Card */}
          <motion.div
            className="w-full items-center flex flex-col p-4 md:p-9"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={gif} alt="PWA illustration" className="w-full overflow-hidden max-w-xs  md:max-w-4xl" />
            {/* <button
              className="mt-4 px-6 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out"
            >
              Learn More About PWA <AiFillCaretRight className="text-2xl" />
            </button> */}
          </motion.div>
        </div>
        {/* Expertise Card */}
  <motion.div
    className="w-full flex flex-col items-center justify-center p-4 md:p-8 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-lg mb-8 md:mb-12 max-w-xl md:max-w-7xl mx-4 text-left"
    initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
  >
    <h3 className="text-2xl md:text-4xl font-semibold text-[#ffffff] mb-4 md:mb-6 text-left">
      Why Choose Us for Your PWA Development
    </h3>
    <p className="text-sm md:text-lg text-[#f8ebcf] mb-4">
      Our company has established itself as a leader in Progressive Web Application technology, 
      backed by years of experience and a portfolio of successful PWA projects. From retail 
      to enterprise solutions, we have built and optimized PWAs that deliver lightning-fast 
      performance, reliable offline access, and engaging user experiences that feel as seamless 
      as native apps.
    </p>
    <p className="text-sm md:text-lg text-[#f8ebcf] mb-4">
      Our PWAs are engineered with cutting-edge technologies like Service Workers, Web App 
      Manifests, and responsive design to ensure cross-platform compatibility. Whether it’s 
      improving website performance, enhancing mobile experiences, or creating scalable 
      business solutions, we offer customized approaches that exceed expectations.
    </p>
    <p className="text-sm md:text-lg text-[#f8ebcf] mb-4">
      What sets us apart is our focus on client satisfaction. We partner with you to understand 
      your business goals, creating PWAs that drive engagement, increase conversions, and build 
      lasting customer loyalty. From small startups to large enterprises, our PWA solutions are 
      built to grow with your business.
    </p>
    <p className="text-sm md:text-lg text-[#f8ebcf]">
      Let us transform your digital presence with reliable, fast, and feature-rich applications 
      that provide a native-like experience and measurable business results. Trust us for future-ready solutions!
    </p>
  </motion.div>
      </div>

      {/* Decorative Animated Lines */}
      <div className="w-full flex mt-16 md:mt-24">
        {[...Array(26)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#f3f4f6] h-[2px] w-full"
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

export default AboutPWA;
