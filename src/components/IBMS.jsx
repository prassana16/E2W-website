import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from './SEO'; // Import the SEO component
// BG video
import bg from '/src/Videos/IBMS bg.mp4'
import bg2 from '/src/Videos/IBMS bg2.mp4'
// module images 
import e2wlogin from '../assets/images/e2w-products-laptop/e2wlogout.png';
import e2wclient from '../assets/images/e2w-products-laptop/e2wclient.png';
import e2wquote from '../assets/images/e2w-products-laptop/e2wquote.png';
import e2worder from '../assets/images/e2w-products-laptop/e2worder.png';
import e2wfinance from '../assets/images/e2w-products-laptop/e2wfinance.png';
import e2wratesmanager from '../assets/images/e2w-products-laptop/e2wratesmanager.png';
import e2wratesvalidation from '../assets/images/e2w-products-laptop/e2wratesvalidation.png';
import e2worderreport from '../assets/images/e2w-products-laptop/e2worderreport.png';
import e2wfinancereport from '../assets/images/e2w-products-laptop/e2wfinancereport.png';
import e2wconsultantreport from '../assets/images/e2w-products-laptop/e2wconsultantreport.png';
import e2wusermanager from '../assets/images/e2w-products-laptop/e2wusermanager.png';
import e2wconsultantmanager from '../assets/images/e2w-products-laptop/e2wconsultantmanager.png';
import e2wappointment from '../assets/images/e2w-products-laptop/e2wappointment.png';
import e2wpayment from '../assets/images/e2w-products-laptop/e2wpayment.png';
import e2wlogout from '../assets/images/e2w-products-laptop/e2wlogout.png';
// Module Video
import Vid1 from '/src/Videos/IBMS module.mp4'

export default function IBMS() {

  const ibmsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Easy2Work IBMS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Intelligent Business Management Software (IBMS) for streamlining operations and enhancing productivity across USA, Canada, UK, and India businesses.",
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
    "featureList": "Process Automation, Data Analysis, Business Intelligence, Custom Reporting, Performance Monitoring"
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060e14] to-[#091c2c] text-white">
      <SEO 
        title="IBMS - Intelligent Business Management Software | Easy2Work"
        description="Comprehensive Intelligent Business Management Software (IBMS) solutions by Easy2Work. Streamline operations, boost productivity, and manage business processes efficiently. Available in USA, Canada, UK, and India."
        keywords="IBMS, Intelligent Business Management Software, business process automation, enterprise software, workflow management, business intelligence software, USA IBMS solutions, Canada business software, UK IBMS systems, India business management solutions"
        schema={ibmsSchema}
      />
      <HeroSection />
      <ModulesSection />
    </div>
  );
}

// Hero Section Component
const HeroSection = () => {
  const modulesRef = useRef(null);

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
        <source src={bg2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

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
          Intelligent Business Management Software
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          A comprehensive solution for modern enterprises that streamlines operations, enhances decision-making, and drives growth through intelligent automation, data integration, and smart business insights.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#modules">
            <button className="border hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Get Started
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Module Item Component
const ModuleItem = ({ title, description, imageSrc, isReversed, index }) => {
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
      {/* Content Side */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
      </div>
      
      {/* Image Side */}
      {/* <div className="w-full md:w-1/2 md:px-8">
        <div className="bg-purple-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center">
          <img src={e2wclient} alt={title} className="w-full h-full object-cover" />
        </div>
      </div> */}

      {/* Video Side */}
      <div className="w-full md:w-1/2 md:px-8">
        <div className="bg-teal-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center">
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
  const modulesRef = useRef(null);
  
  const modules = [
    {
      title: "Client & Consultant Management",
      description: "Efficiently organize and track all client and consultant information in one place. Manage relationships, store communication history, and set follow-up reminders to ensure outstanding service delivery.",
      videoSrc: "e2wclient"
    },
    {
      title: "Easy Order & Finance",
      description: "Streamline your order processing and financial operations with our integrated system. Generate invoices, track payments, and manage your cash flow with powerful yet intuitive tools.",
      videoSrc: "finance-management.mp4"
    },
    {
      title: "Rate Card & Quote Sender",
      description: "Create professional quotes and rate cards in minutes. Customize templates to match your brand and send polished proposals directly to clients with just a few clicks.",
      videoSrc: "quote-system.mp4"
    },
    {
      title: "Appointment Manager",
      description: "Take control of your schedule with our smart appointment system. Allow clients to book online, send automated reminders, and eliminate scheduling conflicts to maximize productivity.",
      videoSrc: "appointment-system.mp4"
    },
    {
      title: "Virtual Token System for Patients",
      description: "Reduce wait times and improve patient experience with our digital queue management. Patients receive real-time updates on their position in line and estimated wait times.",
      videoSrc: "token-system.mp4"
    },
    {
      title: "Reports & Insights",
      description: "Transform your data into actionable insights with customizable reports and dashboards. Monitor key performance indicators and make data-driven decisions to grow your business.",
      videoSrc: "reports-insights.mp4"
    }
  ];

  return (
    <section ref={modulesRef} className="py-16" id='modules'>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Our Comprehensive IBMS Modules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our integrated building management solutions designed to enhance efficiency, 
            safety, and sustainability in modern buildings.
          </p>
        </motion.div>
        
        <div className=" space-y-24">
          {modules.map((module, index) => (
            <ModuleItem 
              key={index}
              index={index}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};