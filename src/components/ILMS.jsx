import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from './SEO';

export default function ILMS() {
  const [activeTab, setActiveTab] = useState('features');

  const ilmsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Easy2Work ILMS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Intelligent Lead Management Software (ILMS) for optimizing sales processes and converting prospects. Perfect for businesses in USA, Canada, UK, and India.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Easy2Work",
      "url": "https://easy2work.in"
    },
    "featureList": "Lead Scoring, Lead Nurturing, Sales Pipeline Management, Analytics Dashboard, CRM Integration"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f3d2e] to-[#0a2a1f] text-white">
      <SEO 
        title="ILMS - Intelligent Lead Management Software | Easy2Work"
        description="Advanced Intelligent Lead Management Software (ILMS) by Easy2Work. Convert prospects, optimize sales processes, and increase revenue with our customizable lead management solutions for USA, Canada, UK, and India."
        keywords="ILMS, Intelligent Lead Management Software, sales automation, lead generation software, CRM integration, lead nurturing, lead scoring, USA lead management, Canada sales software, UK lead nurturing software, India CRM solutions"
        schema={ilmsSchema}
      />
      <HeroSection />
      <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'features' && <FeaturesSection />}
      {activeTab === 'modules' && <ModulesSection />}
      {activeTab === 'benefits' && <BenefitsSection />}
      {activeTab === 'demo' && <DemoSection />}
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image (replacing video) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0f3d2e] z-0">
        {/* Gradient background as fallback for removed video */}
        <div className="w-full h-full bg-gradient-to-b from-[#0f3d2e] to-[#0a2a1f] opacity-80"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 bg-green-700 text-white text-sm rounded-full mb-4">Sales Automation Solution</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Intelligent Lead Management Software
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Capture, qualify, track, and convert your leads with precision and automation. ILMS empowers your sales pipeline with smart lead routing, follow-up tracking, and conversion analytics.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#modules">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
              Explore ILMS
            </button>
          </a>
          <a href="#demo">
            <button className="border border-green-500 hover:bg-green-900 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
              Request Demo
            </button>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span>Lead Tracking</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Automated Follow-ups</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Conversion Analytics</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Tabs Section Component
const TabsSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-[#072018] sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto py-4 scrollbar-hide">
          <button
            onClick={() => setActiveTab('features')}
            className={`px-6 py-2 mx-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'features' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Key Features
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-6 py-2 mx-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'modules' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Core Modules
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-2 mx-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'benefits' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sales Benefits
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-6 py-2 mx-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === 'demo' 
                ? 'bg-green-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Intelligent Lead Scoring",
      description: "Automatically qualify and prioritize leads based on engagement, behavior, and demographic data to focus on the most promising opportunities."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Automated Follow-up Sequences",
      description: "Create personalized email and SMS sequences that nurture leads through their buyer journey without manual intervention."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Comprehensive Analytics",
      description: "Gain insights into conversion rates, campaign performance, and sales team effectiveness with detailed, customizable dashboards."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Multi-channel Lead Capture",
      description: "Collect leads from your website, social media, email campaigns, and events with unified tracking and attribution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Sales Pipeline Visualization",
      description: "Track deals in progress with intuitive visual pipelines. Move opportunities through stages and forecast revenue with accuracy."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: "CRM Integration",
      description: "Seamlessly connect with popular CRM systems to ensure data consistency and provide a complete view of customer interactions."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Powerful Features for Modern Sales Teams</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our Intelligent Lead Management Software delivers the tools you need to convert more prospects into customers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gradient-to-br from-[#0c3d2e] to-[#0a2a1f] p-8 rounded-xl shadow-lg border border-green-900/30 hover:border-green-600/50 transition-all duration-300 hover:shadow-green-900/10 h-full"
    >
      <div className="text-green-500 mb-4">{feature.icon}</div>
      <h3 className="text-xl text-white font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
};

// Module Item Component
const ModuleItem = ({ title, description,  isReversed, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-24 px-4 md:px-8 lg:px-16`}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
        <div className="flex space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-100">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            User-Friendly
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-100">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Customizable
          </span>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:px-8">
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center transform transition-all duration-500 hover:scale-[1.02]">
          {/* Image placeholder replacing video */}
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-green-200 text-lg">{title} Visualization</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Modules Section Component
const ModulesSection = () => {
  const modules = [
    {
      title: "Lead Capture & Routing",
      description: "Automatically capture leads from websites, social media, and forms. Assign leads to the right team members using intelligent routing based on rules you define."
    },
    {
      title: "Follow-Up Scheduler",
      description: "Never miss a follow-up again. Schedule reminders, automate messages, and keep your pipeline warm with consistent engagement."
    },
    {
      title: "Sales Pipeline Tracker",
      description: "Visualize and manage every stage of your sales funnel. Monitor lead status, conversion rates, and team performance in real time."
    },
    {
      title: "Automated Notifications",
      description: "Send personalized alerts, reminders, and updates via email or SMS to nurture leads and improve engagement."
    },
    {
      title: "Analytics & Reports",
      description: "Gain insights with detailed analytics on lead sources, conversion timelines, and campaign effectiveness."
    }
  ];

  return (
    <section id="modules" className="py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">ILMS Core Modules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our suite of tools designed to make your lead management smarter, faster, and more efficient.
          </p>
        </motion.div>

        <div className="space-y-24">
          {modules.map((module, index) => (
            <ModuleItem 
              key={index}
              index={index}
              title={module.title}
              description={module.description}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Higher Conversion Rates",
      description: "Convert up to 50% more leads by ensuring timely follow-ups and personalized communication throughout the sales process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Shorter Sales Cycles",
      description: "Reduce time-to-close by identifying high-quality leads early and automating routine follow-up tasks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Improved Lead Quality",
      description: "Focus your team's efforts on the most promising opportunities with automated lead scoring and qualification.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Enhanced Team Productivity",
      description: "Empower your sales team to handle more leads with less effort through automation of repetitive tasks and intelligent lead prioritization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed strategic decisions based on comprehensive analytics and insights into your sales pipeline.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Increased Revenue",
      description: "Boost your bottom line by capturing more leads, improving conversion rates, and maximizing the lifetime value of each customer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Sales Benefits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how ILMS transforms your sales process and drives measurable results for your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gradient-to-br from-[#0d3627] to-[#071e14] p-8 rounded-xl shadow-lg hover:shadow-green-900/20 transition-all duration-300 border border-green-900/20 hover:border-green-600/30"
    >
      <div className="text-green-500 mb-4">{benefit.icon}</div>
      <h3 className="text-xl text-white font-bold mb-3">{benefit.title}</h3>
      <p className="text-gray-400">{benefit.description}</p>
    </motion.div>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-900/30 to-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            value="40%" 
            label="Average Increase in Lead Conversion" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <StatItem 
            value="65%" 
            label="Reduction in Manual Follow-ups" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatItem 
            value="28%" 
            label="Shorter Sales Cycles" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatItem 
            value="3.5x" 
            label="ROI in the First Year" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

// Stat Item Component
const StatItem = ({ value, label, icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="text-center p-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</h3>
      <p className="text-green-300">{label}</p>
    </motion.div>
  );
};

// Demo Section Component
const DemoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="demo" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 md:p-12 shadow-xl border border-green-500/20"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See ILMS in Action</h2>
              <p className="text-lg text-gray-300 mb-6">
                Experience how our Intelligent Lead Management Software can transform your sales process. 
                Schedule a personalized demo tailored to your specific business needs.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Customized demo for your industry</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Live walkthrough of key modules</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Implementation and pricing discussion</span>
                </li>
              </ul>
              <a href="#contact">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                  Request Your Demo
                </button>
              </a>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/20">
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-green-700 rounded-full mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Live Demo</h3>
                  <p className="text-gray-400 text-sm">30-45 minutes</p>
                </div>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  Our product specialists will guide you through the platform and answer all your questions.
                </p>
                <div className="text-center">
                  <span className="text-green-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    No obligation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ILMS has completely transformed our sales process. We've seen a 45% increase in lead conversion rates within just three months.",
      name: "David Wilson",
      position: "Sales Director, TechGrowth Inc.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "The automated follow-up sequences have saved our team countless hours while ensuring no lead falls through the cracks.",
      name: "Jennifer Taylor",
      position: "Marketing Manager, SalesPro",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "The insights from the analytics dashboard have helped us refine our approach and focus on the most profitable customer segments.",
      name: "Michael Roberts",
      position: "CEO, LeadGen Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a2a1f] to-[#071a14]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from businesses that have transformed their sales process with our ILMS solution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gradient-to-br from-[#0d3626] to-[#071a12] p-8 rounded-xl shadow-lg"
    >
      <div className="mb-6">
        <svg className="h-8 w-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H10zm0 2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2zm2 3c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm3 0c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm3 0c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm-6 4c-.6 0-1 .4-1 1v1c0 2.2 1.8 4 4 4s4-1.8 4-4v-1c0-.6-.4-1-1-1h-6z" />
        </svg>
        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
      </div>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-green-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

// CTA Section Component
const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-5xl mx-auto bg-gradient-to-r from-green-800/40 to-emerald-900/40 rounded-2xl p-10 shadow-xl text-center border border-green-500/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Boost Your Sales Performance?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Join hundreds of successful businesses that have transformed their lead management and sales process with our ILMS solution.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demo">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
              Schedule a Demo
            </button>
          </a>
          <a href="/contact">
            <button className="border border-green-500 hover:bg-green-900 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
              Contact Sales
            </button>
          </a>
        </div>
        <p className="mt-6 text-green-400">
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your data is secure with us
          </span>
        </p>
      </motion.div>
    </section>
  );
};
