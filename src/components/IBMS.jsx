import React, { useEffect, useState, useRef } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, useInView } from "framer-motion";
import { FaCheckCircle, FaCog, FaChartLine, FaUsers } from "react-icons/fa";


const IBMS = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      title: "Business Process Automation",
      description: "Streamline your operations by automating repetitive tasks, saving time and reducing errors.",
      icon: <FaCog className="text-4xl text-primary-100" />
    },
    {
      title: "Data Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and customizable reporting.",
      icon: <FaChartLine className="text-4xl text-primary-100" />
    },
    {
      title: "Team Collaboration Tools",
      description: "Improve communication and teamwork with built-in collaboration features.",
      icon: <FaUsers className="text-4xl text-primary-100" />
    }
  ];

  const modules = [
    "Client Management",
    "Finance Management",
    "Order Management",
    "Rate Management",
    "Payment Milestone",
    "Quote Generator",
    "Staff Management",
    "Task Management",
    "Project Management",
    "Document Management"
  ];

  const managementFeatures = [
    "Centralized data management",
    "Customizable workflows",
    "Seamless integration with existing systems",
    "Advanced security features",
    "Multi-device accessibility"
  ];
  
  const benefits = [
    {
      title: "Increased Productivity",
      description: "Automate routine tasks and streamline workflows to save time and increase output."
    },
    {
      title: "Cost Reduction",
      description: "Minimize operational costs by optimizing resource allocation and reducing inefficiencies."
    },
    {
      title: "Enhanced Decision Making",
      description: "Access real-time data and analytics to make informed strategic decisions."
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Provide better service through faster response times and personalized interactions."
    },
    {
      title: "Streamlined Communication",
      description: "Facilitate seamless information sharing between departments and team members."
    },
    {
      title: "Adaptable Growth",
      description: "Scale your operations efficiently with a system that grows with your business."
    }
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-primary-500">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-100 mx-auto"></div>
          <p className="mt-4 text-white text-xl">Loading IBMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-700 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Gradient background replacing video */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-700"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
        
        <div className="container mx-auto px-4 z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent Business Management System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A comprehensive solution designed to streamline operations, enhance productivity, and drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#modules">
                <button className="bg-primary-300 hover:bg-primary-200 text-white px-6 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                  Explore Modules
                </button>
              </a>
              <a href="/ContactForm">
                <button className="border border-primary-300 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                  Request Demo
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforming Business Operations
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  IBMS is a state-of-the-art business management platform that integrates all aspects of your operations into a single, unified system. It's designed to eliminate inefficiencies, automate routine tasks, and provide real-time insights for better decision-making.
                </p>
                <p className="text-lg text-gray-200 mb-6">
                  Whether you're a small business or a large enterprise, our scalable solution adapts to your specific needs, helping you stay competitive in today's fast-paced market.
                </p>
                <ul className="space-y-3">
                  {managementFeatures.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-primary-100 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Image placeholder replacing video */}
                <div className="bg-primary-800 h-64 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <FaChartLine className="text-6xl text-primary-100 mb-4" />
                    <p className="text-primary-100 text-xl">Business Intelligence Dashboard</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary-700 to-primary-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Features
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              IBMS offers a comprehensive set of features designed to address all aspects of business management.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-transform hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Modules Section */}
      <section id="modules" className="py-20 bg-gradient-to-b from-primary-600 to-primary-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IBMS Modules
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Our modular architecture allows you to start with what you need and expand as your business grows.
            </p>
          </motion.div>
          
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-400 rounded-lg p-6 text-center hover:bg-primary-300 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold">{module}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-primary-500 to-primary-400">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of IBMS
            </h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Experience transformative results with our comprehensive business management solution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-primary-200 rounded-full p-2 mr-4 mt-1">
                  <FaCheckCircle className="text-primary-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-800">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-400 to-primary-300 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get started with IBMS today and experience the difference in your business operations. Contact us for a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/ContactForm">
                <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                  Request Demo
                </button>
              </a>
              <a href="/AboutE2w">
                <button className="border border-white hover:bg-primary-400 px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default IBMS;