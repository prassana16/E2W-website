import React from 'react';
import { motion } from 'framer-motion';
import targetedLeads from '../../assets/images/lead1.png';
import emailCampaigns from '../../assets/images/lead2.png';
import analyticsOptimization from '../../assets/images/lead3.png';
import paidAds from '../../assets/images/lead4.png';
import e2w from '../../assets/images/PWAintro2.png';

const LeadGenerationServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-purple-100 to-violet-100 text-gray-900">
    {/* Introduction */}
    <motion.div
      className="flex flex-col items-center text-center py-16 px-6 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
        Intelligent Business Lead Management
      </h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-gray-600">
        We provide an intelligent approach to business lead management. Combining expertise in JavaScript, SEO, Google Ads, and Meta Ads, our platform, EasyToWork, integrates powerful tools to help you generate, manage, and close quality leads.
      </p>
    </motion.div>
  
    {/* Lead Generation via Digital Marketing */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-4">
          Lead Generation via Digital Marketing
        </h3>
        <p className="text-lg leading-relaxed mb-4 text-gray-600">
          Harness the power of digital marketing to generate leads. Through strategic Google Ads, Meta Ads, and SEO, we help you attract high-quality prospects.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 text-gray-600">
          <li>Google Ads & Meta Ads for Targeted Leads</li>
          <li>Comprehensive SEO Strategy for Organic Growth</li>
          <li>Lead Generation Across Multiple Channels</li>
          <li>Scalable Solutions for Every Business Size</li>
          <li>Advanced Targeting for Higher Conversions</li>
        </ul>
      </div>
      <img
          src={analyticsOptimization}
          alt="Meta Ads and Google Ads"
          className="w-full md:w-1/2 "
        />
    </motion.div>
  
    {/* EasyToWork IBMS Software */}
    <motion.div
      className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)', color: '#4B5563' }}
    >
      <div className="flex flex-col md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-semibold text-purple-800 mb-4">
          EasyToWork IBMS: Lead Manager & Report Modules
        </h3>
        <p className="text-lg leading-relaxed mb-4 text-gray-600">
          Our EasyToWork Intelligent Business Management Software (IBMS) features Lead Manager and Lead Report modules that streamline lead handling and provide detailed insights, helping you manage leads with ease and efficiency.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 text-gray-600">
          <li>Lead Manager: Organize, Track, and Prioritize Leads</li>
          <li>Lead Reports: Real-Time Performance Insights</li>
          <li>Comprehensive Lead Scoring and Analysis</li>
          <li>Seamless Integration with All Marketing Channels</li>
          <li>Simple, User-Friendly Interface for Quick Navigation</li>
        </ul>
      </div>
      <img
          src={e2w}
          alt="Meta Ads and Google Ads"
          className="w-full md:w-1/2 "
        />
    </motion.div>
  
    {/* Why Our Service is Different */}
    <motion.div
      className="text-center px-6 md:px-16 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ background: 'linear-gradient(135deg, #e6e7ff, #d1d2f2)', color: 'black' }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-6">
        Why Choose Our Lead Management Services?
      </h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-gray-600">
        Unlike traditional lead generation services, we provide advanced management and closing strategies. Our approach helps you not only generate quality leads but also ensures they are effectively managed and converted into business opportunities.
      </p>
      <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto text-gray-600">
        <li>Advanced Lead Management Tools in EasyToWork</li>
        <li>Proven Expertise in JavaScript & Digital Marketing</li>
        <li>Continuous Support to Close Leads Effectively</li>
        <li>Real-Time Reporting for Smarter Decisions</li>
        <li>Scalable Solutions for Businesses of All Sizes</li>
      </ul>
    </motion.div>
  
    {/* Call-to-Action Card */}
    <motion.div
      className="text-center px-6 py-12 bg-gradient-to-r from-purple-600 to-violet-500 shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
        Ready to Manage & Close High-Quality Leads?
      </h3>
      <p className="text-lg md:text-xl leading-relaxed mb-8 text-white">
        Let us help you optimize your lead generation and management process, ensuring you close more deals with ease and efficiency.
      </p>
      <a href="/ContactForm">
        <button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button>
      </a>
    </motion.div>
  </section>
  

  );
};

export default LeadGenerationServices;
