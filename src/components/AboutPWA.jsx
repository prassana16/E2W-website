import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from "react-icons/fa";

function AboutPWA() {
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
    >
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
        Progressive Web Applications (PWA)
      </h2>

      <motion.div
        className="flex flex-col items-center justify-center p-6 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-md transition-all duration-500 ease-in-out w-2/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="text-6xl mb-4">
          <FaRocket className="text-[#28c836]" />
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-6">
            What is a Progressive Web Application (PWA)?
          </h3>
          <p className="text-base md:text-lg text-[#f8ebcf] mb-4">
            A Progressive Web Application (PWA) combines the best features of web and mobile apps,
            offering fast, reliable, and engaging experiences directly in a browser.
            PWAs work offline, support push notifications, and can be installed on devices like native apps.
          </p>

          

          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-6">
            Our Expertise in PWAs
          </h3>
          <p className="text-base md:text-lg text-[#f8ebcf] mb-4">
            We predicted the rise of PWAs early and have developed several successful products using this technology.
            Our PWAs offer superior performance, reliability, and user experience.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-6">
            Conclusion
          </h3>
          <p className="text-base md:text-lg text-[#f8ebcf]">
            Progressive Web Applications are the future of web experiences, blending the best of web and mobile worlds.
            Contact us to explore how PWAs can revolutionize your business.
          </p>
        </div>

        <button
          className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out"
        >
          Learn More
        </button>
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

export default AboutPWA;
