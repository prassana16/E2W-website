import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaCheckCircle, FaCog, FaChartLine, FaUsers } from "react-icons/fa";
import SEO from './SEO';

const IBMS = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
    "featureList": "Business Process Automation, Data Analytics & Reporting, Team Collaboration Tools, Client Management, Finance Management, Order Management"
  };

  // Keep the original features, modules, and benefits from the current IBMS
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#620078] to-[#3b095a] text-white">
      <SEO 
        title="IBMS - Intelligent Business Management Software | Easy2Work"
        description="Advanced Intelligent Business Management Software (IBMS) by Easy2Work. Optimize business processes and increase productivity with specialized features for business management."
        keywords="IBMS, Intelligent Business Management Software, Client Management, Finance Management, Order Management, Rate Management, Payment Milestone, Quote Generator, Staff Management, Task Management, Project Management, Document Management"
        schema={ibmsSchema}
      />
      <HeroSection />
      <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'features' && <FeaturesSection features={features} />}
      {activeTab === 'modules' && <ModulesSection modules={modules} />}
      {activeTab === 'benefits' && <BenefitsSection benefits={benefits} />}
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#620078] z-0">
        {/* Gradient background */}
        <div className="w-full h-full bg-gradient-to-b from-[#620078] to-[#3b095a] opacity-80"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Intelligent Business Management System
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A comprehensive solution designed to streamline operations, enhance productivity, and drive growth for your business.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="bg-white text-[#620078] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300">
            Request Demo
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Tabs Section Component
const TabsSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-[#4b0661] py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-1 md:space-x-4 overflow-x-auto">
          <TabButton 
            isActive={activeTab === 'features'} 
            onClick={() => setActiveTab('features')}
            label="Features"
          />
          <TabButton 
            isActive={activeTab === 'modules'} 
            onClick={() => setActiveTab('modules')}
            label="Modules"
          />
          <TabButton 
            isActive={activeTab === 'benefits'} 
            onClick={() => setActiveTab('benefits')}
            label="Benefits"
          />
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ isActive, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm md:text-base font-medium rounded-lg whitespace-nowrap transition-colors duration-200 ${
        isActive 
          ? 'bg-white text-[#620078]' 
          : 'text-white hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );
};

// Features Section Component
const FeaturesSection = ({ features }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#4b0661]/50 backdrop-blur-sm p-8 rounded-xl shadow-xl"
            >
              <div className="mb-4 text-[#e6c9f4]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Modules Section Component
const ModulesSection = ({ modules }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">IBMS Modules</h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {modules.map((module, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#7a1092] hover:bg-[#9c3cd7] rounded-lg p-6 text-center shadow-md transition-colors duration-300"
            >
              <h3 className="font-medium">{module}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = ({ benefits }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits of IBMS</h2>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#4b0661]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-200">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <section className="py-16 bg-[#7a1092]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="85%" label="Productivity Increase" />
          <StatItem value="40%" label="Cost Reduction" />
          <StatItem value="95%" label="Customer Satisfaction" />
          <StatItem value="24/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </motion.div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "IBMS has transformed how we manage our business operations. The automation features have saved us countless hours of manual work.",
      author: "Sarah Johnson",
      role: "Operations Director, TechCorp"
    },
    {
      content: "The analytics capabilities of IBMS provide us with insights we never had before. Decision-making is now faster and data-driven.",
      author: "Michael Chen",
      role: "CEO, Innovate Solutions"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#4b0661]/50 p-8 rounded-xl shadow-lg"
            >
              <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-[#7a1092]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start optimizing your business processes today with Easy2Work IBMS
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="bg-white text-[#620078] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            Get Started
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IBMS;