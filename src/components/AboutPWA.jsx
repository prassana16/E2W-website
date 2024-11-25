import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import gif from '../assets/images/PWAintro2.png'

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

      {/* Expertise Card */}
      <motion.div
        className="w-[95%] flex flex-col items-center justify-center p-8  bg-[#000000a4] rounded-2xl border border-purple-400 shadow-lg text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-[#ffffff] mb-6 ">
          Why Choose Us for Your PWA Development
        </h3>
        <p className="text-base md:text-lg text-[#f8ebcf] mb-4 max-w-4xl">
          Our company has established itself as a leader in Progressive Web Application technology, 
          backed by years of experience and a portfolio of successful PWA projects. From retail 
          to enterprise solutions, we have built and optimized PWAs that deliver lightning-fast 
          performance, reliable offline access, and engaging user experiences that feel as seamless 
          as native apps.
        </p>
        <p className="text-base md:text-lg text-[#f8ebcf] mb-4 max-w-4xl">
          Leveraging our deep expertise in web technologies, we customize every PWA to meet 
          unique client needs, ensuring accessibility, smooth navigation, and exceptional 
          performance across devices. Our commitment to innovation means we stay on the cutting 
          edge of PWA advancements, bringing you the best in scalability, speed, and user engagement.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 w-full">
        {/* Left Column */}
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-[#000000a4] rounded-2xl border border-purple-400 shadow-md w-full"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
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
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#ffffff] mb-6">
              Our Expertise in PWAs
            </h3>
            <p className="text-base md:text-lg text-[#f8ebcf] mb-4">
              We anticipated the rise of PWAs early and have developed numerous successful products 
              using this technology. Our PWAs offer superior performance, reliability, and user 
              experience. Progressive Web Applications are the future of web experiences, blending 
              the best of web and mobile worlds. Contact us to explore how PWAs can revolutionize 
              your business.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col items-center w-full gap-6">
          {/* Image Card */}
          <motion.div
            className="w-full items-center flex flex-col p-6 md:p-9"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={gif} alt="PWA illustration" className="w-full overflow-hidden" />
            {/* <button
              className="mt-4 px-6 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out"
            >
              Learn More About PWA <AiFillCaretRight className="text-2xl" />
            </button> */}
          </motion.div>
        </div>
      </div>

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
