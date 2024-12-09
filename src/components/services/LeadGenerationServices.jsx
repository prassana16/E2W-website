import React from 'react';
import { motion } from 'framer-motion';
import targetedLeads from '../../assets/images/lead1.png';
import emailCampaigns from '../../assets/images/lead2.png';
import analyticsOptimization from '../../assets/images/lead3.png';
import paidAds from '../../assets/images/lead4.png';

const LeadGenerationServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-green-700 to-teal-500 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Lead Generation Services</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Supercharge your sales pipeline with our expert lead generation services. We provide targeted, high-quality leads to fuel your business growth.
        </p>
      </motion.div>

      {/* Targeted Leads Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={targetedLeads}
          alt="Targeted Leads"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Targeted Lead Generation</h3>
          <p className="text-lg leading-relaxed mb-4">
            Reach the right audience with our precise targeting techniques that ensure high conversion rates.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Industry-Specific Targeting</li>
            <li>Demographic and Behavioral Filters</li>
            <li>Custom Lead Qualification Criteria</li>
            <li>Scalable Solutions for Growing Businesses</li>
            <li>Real-Time Lead Updates</li>
          </ul>
        </div>
      </motion.div>

      {/* Email Campaigns Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #065f46, #0ea5e9)', color: 'white' }}
      >
        <img
          src={emailCampaigns}
          alt="Email Campaigns"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Email Campaigns</h3>
          <p className="text-lg leading-relaxed mb-4">
            Engage your audience with personalized email campaigns designed to drive conversions and foster relationships.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Custom Email Templates</li>
            <li>Personalization and Automation</li>
            <li>Lead Nurturing Campaigns</li>
            <li>Performance Analytics</li>
            <li>High Deliverability Rates</li>
          </ul>
        </div>
      </motion.div>

      
      {/* Analytics and Optimization Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={paidAds}
          alt="Analytics and Optimization"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Analytics & Optimization</h3>
          <p className="text-lg leading-relaxed mb-4">
            Leverage data-driven insights to refine your lead generation strategies and maximize ROI.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Comprehensive Campaign Analytics</li>
            <li>A/B Testing for Improved Results</li>
            <li>Lead Scoring and Prioritization</li>
            <li>Real-Time Performance Dashboards</li>
            <li>Continuous Optimization Strategies</li>
          </ul>
        </div>
      </motion.div>

      {/* Meta Ads and Google Ads Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={analyticsOptimization}
          alt="Meta Ads and Google Ads"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Meta Ads and Google Ads</h3>
          <p className="text-lg leading-relaxed mb-4">
            Accelerate lead generation with our strategic ad campaigns on Meta (formerly Facebook) and Google. We ensure your business gets seen by the right audience at the right time.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Customized Ad Campaigns</li>
            <li>Keyword and Audience Targeting</li>
            <li>High-Performance Landing Pages</li>
            <li>Retargeting Strategies to Reengage Visitors</li>
            <li>Performance Tracking and Optimization</li>
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
        style={{ background: 'linear-gradient(135deg, #065f46, #0ea5e9)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our Lead Generation Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          We deliver qualified leads tailored to your business needs, helping you grow faster and achieve your goals efficiently.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Tailored Strategies for Your Business</li>
          <li>Proven Expertise in B2B and B2C Leads</li>
          <li>Dedicated Support and Transparent Reporting</li>
          <li>Focus on Long-Term Relationships</li>
          <li>High ROI and Scalable Solutions</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-green-800 to-teal-600 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Generate High-Quality Leads?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Let us help you grow your business with targeted, high-converting leads.
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-green-900 text-lg rounded-lg hover:bg-green-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default LeadGenerationServices;
