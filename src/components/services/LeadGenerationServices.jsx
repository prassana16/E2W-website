import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeadGenerationServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const cards = [
    {
      title: "Strategic Lead Capture",
      content:
        "We design and implement lead capture systems tailored to your business goals, targeting the right audience with customized approaches.",
    },
    {
      title: "Email Marketing Campaigns",
      content:
        "Our expertly crafted email campaigns nurture prospects through the sales funnel with personalized, engaging content that drives conversions.",
    },
    {
      title: "Social Media Lead Generation",
      content:
        "Leverage the power of social platforms with our targeted campaigns designed to attract quality leads from your ideal customer segments.",
    },
    {
      title: "Content Marketing Strategies",
      content:
        "We develop compelling content that positions your brand as an authority, attracting potential customers and capturing their information.",
    },
    {
      title: "PPC & Search Engine Marketing",
      content:
        "Drive immediate traffic and leads with our optimized pay-per-click campaigns across search engines and social media platforms.",
    },
    {
      title: "Landing Page Optimization",
      content:
        "We create conversion-focused landing pages that transform visitors into leads with persuasive design and compelling calls-to-action.",
    },
    {
      title: "Lead Qualification & Scoring",
      content:
        "Our systems help you identify your most promising leads, allowing your sales team to focus on high-potential opportunities.",
    },
    {
      title: "Marketing Automation",
      content:
        "Streamline your lead generation with automated workflows that nurture prospects through every stage of the customer journey.",
    },
    {
      title: "Analytics & Performance Tracking",
      content:
        "Gain valuable insights with our comprehensive tracking and reporting tools that measure campaign effectiveness and ROI.",
    },
    {
      title: "Lead Nurturing Systems",
      content:
        "We implement strategic follow-up processes to guide leads toward conversion, building relationships that result in loyal customers.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (    <section className="min-h-screen flex flex-col items-center font-mono justify-center bg-black" >
      {/* Introduction Section */}
      <motion.div
        className="w-full h-full py-20"
        style={{
          background: "#000000",
          borderTop: "2px solid #05f4f9",
          color: "white",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Lead Generation Services
          </h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Lead generation is the lifeblood of business growth. Our comprehensive lead generation services help you attract, qualify, and convert prospects into loyal customers through strategic marketing campaigns and optimization techniques.
          </p>
        </div>

        <Slider {...settings} className="w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full py-8"
            >
              <div
                className="text-white text-center px-6 py-12 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h3 className="text-lg md:text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm md:text-lg leading-relaxed">{card.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Lead Generation Strategy Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col w-full">
          <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 mt-14 text-center">
            Our Lead Generation Approach
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
              <h3 className="text-xl md:text-3xl font-semibold mb-4">Strategic Lead Acquisition</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Our strategic approach to lead generation focuses on attracting high-quality prospects who are most likely to convert into valuable customers. We employ a multi-channel strategy to maximize your reach and effectiveness.
              </p>
              <ul className="list-disc list-inside mt-4 text-base md:text-lg">
                <li>Comprehensive audience research and targeting</li>
                <li>Multi-channel lead generation campaigns</li>
                <li>Custom lead capture forms and landing pages</li>
                <li>A/B testing to optimize conversion rates</li>
                <li>Lead scoring and qualification systems</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg md:text-2xl font-semibold mb-3">Our Lead Generation Process</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <p>Identify target audience & create buyer personas</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <p>Design tailored lead generation campaigns</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <p>Implement multi-channel marketing strategies</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <p>Capture & qualify leads with scoring systems</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <p>Nurture leads through automated follow-up</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <p>Analyze, optimize, and scale successful strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Types Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col justify-center md:w-1/2 text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Digital Lead Generation</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Our digital lead generation services leverage the latest online marketing strategies to attract and convert qualified leads for your business across various digital channels.
          </p>
          <ul className="list-disc list-inside mt-4 text-base md:text-lg">
            <li>Search engine marketing (SEM) and PPC campaigns</li>
            <li>Social media lead generation advertising</li>
            <li>Content marketing and SEO-optimized lead magnets</li>
            <li>Email marketing sequences and automation</li>
            <li>Retargeting campaigns to capture lost opportunities</li>
            <li>Analytics and conversion rate optimization</li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-white/10 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4 text-center">Digital Lead Generation Channels</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-800/30 p-4 rounded-lg text-center">
              <h5 className="font-semibold mb-2">Search Engines</h5>
              <p className="text-sm">Google, Bing, Yahoo</p>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg text-center">
              <h5 className="font-semibold mb-2">Social Media</h5>
              <p className="text-sm">Facebook, LinkedIn, Instagram</p>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg text-center">
              <h5 className="font-semibold mb-2">Content Marketing</h5>
              <p className="text-sm">Blogs, Guides, Webinars</p>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg text-center">
              <h5 className="font-semibold mb-2">Email Marketing</h5>
              <p className="text-sm">Newsletters, Sequences</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* B2B Lead Generation Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="md:w-1/2 bg-white/10 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4 text-center">B2B Lead Generation Strategies</h4>
          <div className="space-y-4">
            <div className="bg-purple-800/30 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">LinkedIn Targeting</h5>
              <p className="text-sm">Connect with decision-makers through highly targeted LinkedIn campaigns and InMail messaging.</p>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Account-Based Marketing</h5>
              <p className="text-sm">Personalized marketing strategies focused on high-value accounts and key stakeholders.</p>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Industry Events & Webinars</h5>
              <p className="text-sm">Capture leads through virtual and in-person events tailored to your industry.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2 text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">B2B Lead Generation</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Our B2B lead generation services are designed to connect your business with qualified decision-makers in your target industries, shortening sales cycles and improving conversion rates.
          </p>
          <ul className="list-disc list-inside mt-4 text-base md:text-lg">
            <li>Account-based marketing campaigns</li>
            <li>LinkedIn and professional network targeting</li>
            <li>Industry-specific content and thought leadership</li>
            <li>Webinars and virtual events for lead capture</li>
            <li>Multi-touch attribution for complex B2B sales cycles</li>
            <li>CRM integration for seamless lead management</li>
          </ul>
        </div>
      </motion.div>

      {/* Rate Card Section */}
      <motion.div
        className="flex flex-col items-center w-full px-6 py-12 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Rate Card</h2>
          <p className="text-base md:text-lg text-gray-200">
            Choose the right lead generation package for your business goals and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Basic Plan */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Starter</h3>
            <p className="text-xl text-center mb-6">Starts at ₹25,000/month</p>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Single channel lead generation
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Basic lead capture forms
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Monthly performance reports
              </li>
              <li className="flex items-center gap-4">
                <span className="text-red-400 text-xl">✖</span>
                Advanced lead scoring
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all"
                onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
              >
                Select Plan
              </button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Growth</h3>
            <p className="text-xl text-center mb-6">Starts at ₹45,000/month</p>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Multi-channel lead generation
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Custom landing pages
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Lead nurturing sequences
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Basic lead scoring
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all"
                onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
              >
                Select Plan
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-green-700 to-teal-900 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Enterprise</h3>
            <p className="text-xl text-center mb-6">Contact for Custom Pricing</p>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                All Growth plan features
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Advanced lead scoring & qualification
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                CRM integration & automation
              </li>
              <li className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✔</span>
                Dedicated lead generation strategist
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-3 bg-white text-teal-900 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all"
                onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: '#000000', borderTop: '2px solid #05f4f9' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Generate Quality Leads?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let our expert team help you create and implement a lead generation strategy that drives growth for your business.
          </p>
          <a href="/ContactForm">
            <button className="px-8 py-3 bg-[#ffffff] text-black text-lg rounded-lg hover:bg-[#05f4f9] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </a>
          <div className="border-b border-[#05f4f9] pt-16 md:w-[85%] w-full text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadGenerationServices;