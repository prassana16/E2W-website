import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaCheckCircle, 
  FaCog, 
  FaChartPie, 
  FaUsers, 
  FaDatabase, 
  FaFileInvoiceDollar, 
  FaChartLine,
  FaMoneyBillWave,
  FaWhatsapp,
  FaUserMd,
  FaListUl,
  FaRegCalendarCheck
} from "react-icons/fa";
import SEO from './SEO';

const IBMS = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    console.log("IBMS component mounted");
    try {
      // Set a shorter timeout to ensure it loads
      // Load immediately without timeout to prevent blank screens
      setLoading(false);
      
      // Fallback timer in case something goes wrong
      const fallbackTimer = setTimeout(() => {
        console.log("Fallback timer: Setting loading to false");
        setLoading(false);
      }, 1000);

      return () => clearTimeout(fallbackTimer);
    } catch (err) {
      console.error("Error in IBMS loading:", err);
      setError(err);
      setLoading(false);
    }
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
  
  const featureHighlights = [
    {
      title: "Finance & Order Dashboard",
      description: "Efficient, real-time dashboard for finance and order reports. Instantly view service-wise order value, income, and trends with world-class data visualization.",
      icon: <FaChartPie size={32} />,
    },
    {
      title: "Comprehensive Finance Reports",
      description: "Exact, detailed finance reports: income, OPEX, CAPEX, and expense breakdowns. Advanced bank ledger with live balance checks for management.",
      icon: <FaFileInvoiceDollar size={32} />,
    },
    {
      title: "Queue Management",
      description: "Seamless patient queue management for healthcare. Optimize flow, reduce wait times, and boost satisfaction.",
      icon: <FaListUl size={32} />,
    },
    {
      title: "Consultant Management",
      description: "Smart consultant management for health, e-care, and media industries. Effortless scheduling, resource allocation, and performance tracking.",
      icon: <FaUserMd size={32} />,
    },
    {
      title: "Income & Daily Reports",
      description: "Automated daily order and income reports. Instant WhatsApp notifications to owners for real-time business insights.",
      icon: <FaWhatsapp size={32} />,
    },
  ];
  
  const features = [
    {
      title: "Financial Dashboard",
      description: "Efficient finance and order report management dashboard with detailed service-wise analytics and comprehensive revenue tracking.",
      icon: <FaChartPie size={24} />,
      animation: "fadeRight",
    },
    {
      title: "Finance Reports",
      description: "Complete financial reporting with detailed OPEX/CAPEX breakdowns, expense tracking, and advanced bank ledger balance monitoring for management.",
      icon: <FaFileInvoiceDollar size={24} />,
      animation: "fadeLeft",
    },
    {
      title: "Queue Management",
      description: "Streamlined patient queue management system ensuring optimal patient flow and reduced waiting times for healthcare providers.",
      icon: <FaListUl size={24} />,
      animation: "fadeRight",
    },
    {
      title: "Consultant Management",
      description: "Comprehensive consultant management for both healthcare and media industries, optimizing resource allocation and scheduling.",
      icon: <FaUserMd size={24} />,
      animation: "fadeLeft",
    },
    {
      title: "Order Reports",
      description: "Daily income and order reports with automated WhatsApp notifications to owners for real-time business performance monitoring.",
      icon: <FaWhatsapp size={24} />,
      animation: "fadeRight",
    },
    {
      title: "Business Analytics",
      description: "Advanced business intelligence tools that transform raw data into actionable insights for strategic decision-making.",
      icon: <FaChartLine size={24} />,
      animation: "fadeLeft",
    }
  ];

  const benefits = [
    "Comprehensive financial tracking with automatic report generation",
    "Real-time WhatsApp notifications for critical business updates",
    "Detailed service-wise revenue analysis and projections",
    "Complete OPEX/CAPEX breakdown with automated categorization",
    "Optimized patient and client queue management",
    "Specialized consultant scheduling and resource allocation",
    "Streamlined order processing with performance metrics",
    "Bank ledger integration with balance monitoring",
    "Daily and monthly financial summaries delivered automatically",
  ];

  const industries = [
    "Healthcare & Medical Practices",
    "Diagnostic Centers & Labs",
    "Media & Entertainment",
    "Content Creation Studios",
    "Financial Services",
    "Professional Consulting Firms",
    "Technology & Software",
    "Retail & E-commerce",
    "Service-based Businesses",
    "Education & Training Centers",
  ];  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#05f4f9]">Something went wrong</h2>
        <p className="mb-4">We're having trouble loading the IBMS page. Please try again.</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#05f4f9] text-black px-6 py-2 rounded-lg"
        >
          Reload Page
        </button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#05f4f9]"></div>
      </div>
    );
  }

  // Wrap the entire return in a try-catch to prevent blank screens
  try {
    return (
    <section className="bg-black min-h-screen">
      <SEO
        title="IBMS - Intelligent Business Management Software | Easy2Work"
        description="Easy2Work's IBMS: World-class finance, order, and consultant management with stunning dashboards and animation."
        schema={JSON.stringify(ibmsSchema)}
        keywords="IBMS, finance dashboard, queue management, consultant management, business analytics"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black text-white">
        {/* Animated background circles */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: 1.1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, #05f4f9 0%, transparent 70%)' }}
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.1 }}
          animate={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, #05f4f9 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 font-Tinos"
            style={{ color: '#05f4f9', textShadow: '0 2px 24px #05f4f9' }}
          >
            IBMS: World-Class Business Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-10 text-white"
          >
            Elevate your business with elegant dashboards, detailed finance, and fantastic animation.
          </motion.p>          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-10 py-4 rounded-full font-bold text-black bg-[#05f4f9] shadow-lg transition-all duration-300"
            onClick={() => window.location.href = '/ContactForm'}
          >
            Request a Demo
          </motion.button>
        </div>
      </div>
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {featureHighlights.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px #05f4f9' }}
              className="bg-black border-2 border-[#05f4f9] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-all duration-300"
            >
              <div className="mb-4 text-[#05f4f9]">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/80 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Animation Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border-2 border-[#05f4f9] bg-black p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#05f4f9]">Experience the Future of Business Management</h2>
          <p className="text-white text-lg mb-6">All your finance, order, and consultant management in one elegant, animated dashboard. Built for healthcare, e-care, media, and more.</p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-[#05f4f9] text-black font-bold px-6 py-4 rounded-xl shadow-lg">Finance Dashboard</div>
            <div className="bg-black border-2 border-[#05f4f9] text-white px-6 py-4 rounded-xl">Order Reports</div>
            <div className="bg-black border-2 border-[#05f4f9] text-white px-6 py-4 rounded-xl">Consultant Management</div>
            <div className="bg-black border-2 border-[#05f4f9] text-white px-6 py-4 rounded-xl">Queue Management</div>
          </motion.div>
        </motion.div>
      </div>
      {/* CTA Section */}
      <div className="bg-black py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-[#05f4f9]"
        >
          Ready for a world-class IBMS experience?
        </motion.h2>        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-10 py-4 rounded-full font-bold text-black bg-[#05f4f9] shadow-lg transition-all duration-300"
          onClick={() => window.location.href = '/ContactForm'}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );  } catch (err) {
    console.error("Error rendering IBMS component:", err);
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#05f4f9]">Something went wrong</h2>
        <p className="mb-4">We're having trouble displaying the IBMS page. Please try again.</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#05f4f9] text-black px-6 py-2 rounded-lg"
        >
          Reload Page
        </button>
      </div>
    );
  }
};

export default IBMS;