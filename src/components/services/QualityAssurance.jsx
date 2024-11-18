import React from 'react';
import { FaCheckCircle } from "react-icons/fa"; // Icon representing quality and assurance
import { motion } from 'framer-motion';

const QualityAssurance = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#c0e8e8] to-[#007ba7] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaCheckCircle /> {/* Quality assurance icon */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Quality Assurance</h2>
          <p className="text-lg text-[#fff] leading-relaxed">
            Quality Assurance (QA) ensures that every product meets our high standards of reliability, functionality, and usability. Our QA team applies rigorous testing methods to deliver robust solutions, minimizing issues and optimizing user satisfaction.
          </p>
          
          {/* Key QA Services */}
          <div className="mt-10 space-y-6">
            <h3 className="text-2xl font-semibold text-[#333]">Key QA Services We Provide:</h3>
            <ul className="list-disc list-inside text-[#fff] text-lg leading-relaxed">
              <li>Functional Testing to verify core features work as intended</li>
              <li>Performance Testing for smooth operation under various loads</li>
              <li>Security Testing to safeguard data and prevent vulnerabilities</li>
              <li>Usability Testing to ensure a seamless user experience</li>
              <li>Automated Testing for fast and efficient defect detection</li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="mt-8">
            <img
              src="path/to/quality-assurance-image.jpg" // Replace with actual path
              alt="Quality Assurance Process"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Current QA Trends */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Quality Assurance</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              QA practices are continuously evolving to meet the demands of modern applications. Here are the latest trends in QA that enhance efficiency and ensure top-notch quality:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Automated Testing:</strong> Automation helps QA teams cover more test cases in less time, increasing efficiency and reducing manual effort.</li>
              <li><strong>Shift-Left Testing:</strong> Testing earlier in the development cycle to identify issues sooner and streamline delivery.</li>
              <li><strong>Continuous Integration/Continuous Delivery (CI/CD):</strong> QA integrated with CI/CD pipelines supports quick releases and continuous testing.</li>
              <li><strong>AI-Powered Testing:</strong> Artificial intelligence optimizes test coverage, identifies patterns, and predicts areas prone to defects.</li>
              <li><strong>Agile and DevOps Practices:</strong> QA collaborates closely with development to ensure a fast, iterative testing process aligned with Agile and DevOps practices.</li>
            </ul>
          </div>

          {/* Future QA Trends */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Future Trends in Quality Assurance</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              As technology advances, Quality Assurance will continue to adapt, with several key trends expected to shape the future of QA:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Blockchain Testing:</strong> Ensures data integrity, transparency, and security in blockchain applications.</li>
              <li><strong>IoT Testing:</strong> As IoT expands, QA will focus on ensuring reliable communication between connected devices.</li>
              <li><strong>Robotic Process Automation (RPA):</strong> RPA will assist QA teams in handling repetitive testing tasks and enhancing accuracy.</li>
              <li><strong>Performance Engineering:</strong> Moving beyond simple performance testing to focus on overall system performance and scalability from the beginning of development.</li>
              <li><strong>Hyperautomation:</strong> Leveraging AI and machine learning for end-to-end automation, from test design to test execution and defect logging.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Deliver a Flawless Experience?</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              Our QA team is dedicated to ensuring your product meets the highest standards. Let us help you achieve a flawless, user-friendly, and reliable application.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#007ba7] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
