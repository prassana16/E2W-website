import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaCheckCircle, FaCog, FaChartLine, FaUsers, FaDatabase, FaUserShield, FaGlobe } from "react-icons/fa";
import SEO from './SEO';

const IBMS = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.1,
    triggerOnce: false
  });

  // Structured data for SEO
  const ibmsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Easy2Work IBMS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Intelligent Business Management Software (IBMS) for optimizing business processes. Perfect for businesses in USA, Canada, UK, India.",
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
    "featureList": "Process Automation, Business Intelligence, Enterprise Resource Planning, Customer Relationship Management, Supply Chain Management, Human Resource Management"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const features = [
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows, reducing manual effort and increasing operational efficiency across departments.",
      icon: <FaCog />,
    },
    {
      title: "Business Intelligence",
      description: "Gain actionable insights through advanced analytics and reporting tools that transform raw data into strategic business decisions.",
      icon: <FaChartLine />,
    },
    {
      title: "Resource Management",
      description: "Optimize allocation and utilization of human capital, equipment, and other business assets to maximize productivity.",
      icon: <FaUsers />,
    },
    {
      title: "Data Integration",
      description: "Connect and harmonize data across different business systems for a unified view of operations and customer interactions.",
      icon: <FaDatabase />,
    },
    {
      title: "Security & Compliance",
      description: "Ensure adherence to industry regulations with built-in security protocols and compliance management features.",
      icon: <FaUserShield />,
    },
    {
      title: "Global Accessibility",
      description: "Access your business systems securely from anywhere in the world, supporting remote work and international operations.",
      icon: <FaGlobe />,
    }
  ];

  const benefits = [
    "Improved operational efficiency with up to 40% reduction in manual processes",
    "Enhanced decision-making through real-time data analytics and reporting",
    "Streamlined communication across departments and business units",
    "Increased employee productivity and satisfaction",
    "Optimized resource allocation and utilization",
    "Significant cost savings through process optimization",
    "Improved compliance with regulatory requirements",
    "Enhanced customer experience through faster response times",
    "Greater business agility and adaptability to market changes",
  ];

  const industries = [
    "Healthcare & Pharmaceuticals",
    "Manufacturing & Distribution",
    "Financial Services",
    "Retail & E-commerce",
    "Professional Services",
    "Technology & Software",
    "Education & Non-profit",
    "Government & Public Sector",
    "Telecommunications",
    "Transportation & Logistics",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#2D1B69] to-[#5B0737]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* SEO Component */}
      <SEO
        title="IBMS - Intelligent Business Management Software | Easy2Work"
        description="Easy2Work's Intelligent Business Management Software (IBMS) streamlines operations, improves efficiency, and drives growth with advanced process automation."
        schema={JSON.stringify(ibmsSchema)}
        keywords="IBMS, Intelligent Business Management Software, business process automation, ERP solution, workflow optimization, Easy2Work IBMS"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2D1B69] to-[#5B0737] text-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-300/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-Tinos font-bold mb-6"
            >
              Intelligent Business Management Software
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-8"
            >
              Transform your business operations with our all-in-one management solution
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="px-8 py-3 bg-white text-[#2D1B69] rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-4">
                Schedule a Demo
              </button>
              <button className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white rounded-lg font-medium transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Tabs Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'features'
                  ? 'bg-[#2D1B69] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'benefits'
                  ? 'bg-[#2D1B69] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'industries'
                  ? 'bg-[#2D1B69] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Industries
            </button>
          </motion.div>

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#620078]/10 dark:bg-[#620078]/20 text-[#620078] p-3 rounded-lg inline-block mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                Key Benefits of IBMS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <FaCheckCircle className="text-[#620078] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Industries Tab */}
          {activeTab === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                  Industries We Serve
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:bg-[#620078]/10 dark:hover:bg-[#620078]/20 transition-colors"
                    >
                      <p className="text-gray-800 dark:text-gray-200">{industry}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  Don't see your industry? Our solution can be customized for your specific needs.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#2D1B69] to-[#5B0737] py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to transform your business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Get started with IBMS today and experience the difference intelligent business management can make.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-white text-[#620078] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300">
              Contact Sales
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Request a Demo
            </button>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default IBMS;