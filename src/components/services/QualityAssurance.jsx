import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icon representing quality and assurance
import { motion } from 'framer-motion';

const QualityAssurance = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#8fe132] to-[#007ba7] py-16 px-4 md:px-16 font-mono text-white items-center justify-center">
      {/* Header Section */}
      <div className="text-center max-w-screen-lg mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quality Assurance
        </motion.h1>
        <p className="text-lg md:text-xl leading-relaxed text-black">
          Excellence is at the heart of everything we do. Our Quality Assurance (QA) services ensure every product we deliver is reliable, functional, and user-friendly. Let us help you build software that works flawlessly.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1  gap-10 max-w-screen-lg mx-auto mt-16 p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg ">
        {/* Feature List */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black ">Why Choose Our QA Services?</h2>
          <ul className="space-y-6 text-gray-800">
            {[
              { icon: <FaCheckCircle />, title: 'Functional Testing', desc: 'Ensure all features operate smoothly and meet specifications.' },
              { icon: <FaCheckCircle />, title: 'Performance Testing', desc: 'Optimize for speed and efficiency under different workloads.' },
              { icon: <FaCheckCircle />, title: 'Security Testing', desc: 'Safeguard sensitive data with robust security protocols.' },
              { icon: <FaCheckCircle />, title: 'Usability Testing', desc: 'Deliver an intuitive and seamless user experience.' },
              { icon: <FaCheckCircle />, title: 'Automated Testing', desc: 'Reduce time-to-market with efficient automated processes.' },
            ].map(({ icon, title, desc }) => (
              <motion.li
                key={title}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl text-[#333]">{icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-lg ">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        
      </div>

      {/* Trends Section */}
      <div className="max-w-screen-lg mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Current and Future QA Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: 'Current Trends',
              points: [
                'Automated Testing: Efficient, fast, and scalable.',
                'Shift-Left Testing: Catch bugs earlier in the process.',
                'CI/CD Pipelines: Integrate testing with continuous delivery.',
                'AI-Powered Testing: Smarter and faster defect detection.',
                'Agile/DevOps Practices: Collaboration for speed and quality.',
              ],
            },
            {
              title: 'Future Trends',
              points: [
                'Blockchain Testing: Secure and transparent systems.',
                'IoT Testing: Seamless communication for connected devices.',
                'RPA: Automation for repetitive and precise testing.',
                'Performance Engineering: Scalability from day one.',
                'Hyperautomation: AI-powered end-to-end processes.',
              ],
            },
          ].map(({ title, points }) => (
            <motion.div
              key={title}
              className="bg-[#333] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <ul className="list-disc list-inside space-y-4 text-gray-300">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold mb-4">Ready to Deliver Excellence?</h2>
        <p className="text-lg leading-relaxed mb-6">
          Let our Quality Assurance experts ensure your product is built to perfection. Contact us to get started!
        </p>
        <button className="px-8 py-3 bg-[#333] text-white text-lg rounded-lg shadow-lg hover:bg-[#8fe132] transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default QualityAssurance;
