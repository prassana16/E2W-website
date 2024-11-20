import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa"; // SaaS icon for SaaS services
import { motion } from 'framer-motion';

const SaaSDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#d2faee] to-[#4e8cff] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#090909] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaCloudDownloadAlt /> {/* Cloud download icon for SaaS */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#060606] mb-4">SaaS (Software as a Service) Development</h2>
          <p className="text-lg text-[#201e1e] leading-relaxed">
            SaaS applications are transforming how businesses operate by providing software solutions on-demand. With cloud-hosted services, businesses can access powerful tools without the complexity of traditional software deployments, offering scalability, flexibility, and cost-efficiency.
          </p>
          
          {/* Key Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }} 
            className="mt-10 w-full"
          >
            <div className="bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold text-[#333] mb-6">Key Features of Our SaaS Solutions:</h3>
              <ul className="list-disc list-inside text-[#201e1e] text-lg space-y-4">
                <li>Subscription-based pricing for cost-effective access</li>
                <li>Scalable solutions to support business growth</li>
                <li>Access to applications via any device with an internet connection</li>
                <li>Frequent updates and maintenance to ensure reliability</li>
                <li>High-level security to protect sensitive business data</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Current SaaS Trends */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }} 
            className="mt-16"
          >
            <div className="bg-white bg-opacity-50 backdrop-blur-xl border  shadow-xl rounded-2xl p-8 md:p-10">
              <h3 className="text-3xl font-semibold text-[#333]">Current Trends in SaaS Development</h3>
              <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
                <li><strong>AI and Automation:</strong> Many SaaS solutions are integrating AI and automation to improve decision-making, reduce manual processes, and enhance user experiences.</li>
                <li><strong>Integration with Other Platforms:</strong> Modern SaaS applications are focusing on seamless integration with third-party platforms (CRM, ERP, etc.) to improve functionality and workflow efficiency.</li>
                <li><strong>Mobile-first Design:</strong> As mobile usage increases, SaaS providers are adopting mobile-first strategies to ensure their applications are accessible on smartphones and tablets.</li>
                <li><strong>Customizability:</strong> SaaS platforms are becoming more customizable, allowing businesses to tailor solutions to meet their specific needs.</li>
                <li><strong>Data Security and Compliance:</strong> With the rise of cybersecurity threats, SaaS platforms are focusing on advanced encryption, multi-factor authentication, and compliance with industry regulations (GDPR, HIPAA).</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Call-to-Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, duration: 0.6 }} 
            className="mt-20 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg p-8 border"
          >
            <h3 className="text-3xl font-semibold text-[#201e1e]">Ready to Build Your Custom SaaS Solution?</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Our team specializes in designing and developing SaaS applications that provide value to your business while ensuring scalability, security, and performance. Let’s work together to bring your SaaS product to life and transform how your business operates.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#ff471a] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaaSDevelopment;
