import React from 'react';
import { motion } from 'framer-motion';
import bugTracking from '../../assets/images/qual1.png';
import automationTesting from '../../assets/images/qual2.png';
import performanceTesting from '../../assets/images/qual3.png';

const QualityAssurance = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Quality Assurance Services</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Ensure your software performs flawlessly with our end-to-end quality assurance services. From manual testing to advanced automation, we deliver reliability, efficiency, and customer satisfaction.
        </p>
      </motion.div>

      {/* Bug Tracking Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={bugTracking}
          alt="Bug Tracking"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          loading="lazy" 
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Bug Tracking & Resolution</h3>
          <p className="text-lg leading-relaxed mb-4">
            Identify and fix issues before they impact your users. Our meticulous bug tracking ensures a seamless experience for your audience.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Comprehensive Defect Analysis</li>
            <li>Real-Time Bug Reporting</li>
            <li>Collaboration with Development Teams</li>
            <li>Root Cause Analysis: Address underlying issues to prevent recurring bugs.</li>
            <li>Agile Integration: Ensure bugs are resolved quickly during sprints.</li>
          </ul>
        </div>
      </motion.div>

      {/* Automation Testing Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', color: 'white' }}
      >
        <img
          src={automationTesting}
          alt="Automation Testing"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Automation Testing</h3>
          <p className="text-lg leading-relaxed mb-4">
            Save time and improve accuracy with our cutting-edge automation testing solutions, ensuring consistent quality across all releases.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Custom Test Automation Frameworks</li>
            <li>Regression Testing</li>
            <li>Continuous Integration (CI/CD) Testing</li>
            <li>Cross-Browser Testing: Ensure compatibility across multiple platforms.</li>
            <li>Scalability: Handle complex test scenarios with ease.</li>
          </ul>
        </div>
      </motion.div>

      {/* Performance Testing Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={performanceTesting}
          alt="Performance Testing"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Performance Testing</h3>
          <p className="text-lg leading-relaxed mb-4">
            Assess and enhance your software’s speed, scalability, and reliability to deliver superior performance under any conditions.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Load Testing</li>
            <li>Stress Testing</li>
            <li>Scalability Analysis</li>
            <li>Real-World Simulation: Replicate user scenarios to uncover potential bottlenecks.</li>
            <li>Reporting and Optimization: Deliver actionable insights to improve system performance.</li>
          </ul>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="text-center px-6 md:px-16 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our Quality Assurance Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          With our expertise in QA methodologies, we ensure flawless software performance, enhancing user satisfaction and business success.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Thorough Manual and Automated Testing</li>
          <li>Focus on User Experience and System Reliability</li>
          <li>Timely Delivery of High-Quality Results</li>
          <li>Flexible Testing Solutions Tailored to Your Needs</li>
          <li>Expert QA Engineers with Diverse Domain Knowledge</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-blue-800 to-cyan-600 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Deliver Flawless Software?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Partner with us to ensure your software meets the highest quality standards and exceeds user expectations.
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default QualityAssurance;
