import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ilmsBg from '/src/Videos/ILMS.mp4';
import Vid1 from '/src/Videos/IBMS module.mp4'
import SEO from './SEO'; // Import the SEO component
export default function ILMS() {

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
    <div className="min-h-screen bg-gradient-to-b from-[#0f3d2e] to-[#0f3d2e] text-white">
      <SEO 
        title="ILMS - Intelligent Lead Management Software | Easy2Work"
        description="Advanced Intelligent Lead Management Software (ILMS) by Easy2Work. Convert prospects, optimize sales processes, and increase revenue with our customizable lead management solutions for USA, Canada, UK, and India."
        keywords="ILMS, Intelligent Lead Management Software, sales automation, lead generation software, CRM integration, lead nurturing, lead scoring, USA lead management, Canada sales software, UK lead nurturing software, India CRM solutions"
        schema={ilmsSchema}
      />
      <HeroSection />
      <ModulesSection />
    </div>
  );
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={ilmsBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Intelligent Lead Management Software
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-300"
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
        >
          <a href="#modules">
            <button className="border border-white hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition duration-300">
              Get Started
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Module Item Component
const ModuleItem = ({ title, description, videoSrc, isReversed, index }) => {
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
      </div>

      <div className="w-full md:w-1/2 md:px-8">
        <div className="bg-green-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={Vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
      description: "Automatically capture leads from websites, social media, and forms. Assign leads to the right team members using intelligent routing based on rules you define.",
      videoSrc: "lead-capture.mp4"
    },
    {
      title: "Follow-Up Scheduler",
      description: "Never miss a follow-up again. Schedule reminders, automate messages, and keep your pipeline warm with consistent engagement.",
      videoSrc: "follow-up.mp4"
    },
    {
      title: "Sales Pipeline Tracker",
      description: "Visualize and manage every stage of your sales funnel. Monitor lead status, conversion rates, and team performance in real time.",
      videoSrc: "pipeline-tracker.mp4"
    },
    {
      title: "Automated Notifications",
      description: "Send personalized alerts, reminders, and updates via email or SMS to nurture leads and improve engagement.",
      videoSrc: "notifications.mp4"
    },
    {
      title: "Analytics & Reports",
      description: "Gain insights with detailed analytics on lead sources, conversion timelines, and campaign effectiveness.",
      videoSrc: "analytics.mp4"
    }
  ];

  return (
    <section id="modules" className="py-16">
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
              videoSrc={module.videoSrc}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
