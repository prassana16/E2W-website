import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaArrowUp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaChevronRight,
  FaHeart
} from "react-icons/fa";

// Using the logo from the public directory
import logo from "/EASY2Work-Logo.png";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "50px" 
  });

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const iconVariants = {
    hover: (i) => ({
      y: -5,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    initial: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutE2w" },
    { name: "Services", path: "#" },
    { name: "Products", path: "#" },
    { name: "Careers", path: "/Careers" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact", path: "/ContactForm" },
  ];

  const services = [
    { name: "Web App Development", path: "/WebAppDevelopment" },
    { name: "Mobile App Development", path: "/MobileAppDevelopment" },
    { name: "UI/UX Design", path: "/UIUXDesign" },
    { name: "PWA Development", path: "/PWA" },
    { name: "Cloud Services", path: "/CloudServices" },
    { name: "SAAS Development", path: "/SAAS" },
    { name: "SEO Services", path: "/SEO" },
  ];

  const solutions = [
    { name: "IBMS", path: "/IBMS" },
    { name: "ILMS", path: "/ILMS" },
    { name: "AI Medical Lead Platform", path: "/AI-Medical-Lead-Platform" },
  ];  // Only LinkedIn as social media as per requirement
  const socialMedia = [
    { 
      icon: <FaLinkedinIn />, 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/easy2work-india/" 
    }
  ];
  return (
    <footer className="relative bg-black text-white pt-16 overflow-hidden border-t border-cyan/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[-10%] w-[30%] h-[30%] rounded-full opacity-10 bg-cyan blur-3xl"></div>
        <div className="absolute bottom-0 right-[-5%] w-[25%] h-[25%] rounded-full opacity-10 bg-cyan blur-3xl"></div>
      </div>

      {/* Scroll to top button with enhanced animation */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}            onClick={scrollToTop}
            className="fixed bottom-4 left-2 bg-white text-black p-3 rounded-full shadow-lg z-50 hover:bg-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main footer content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Easy2Work Logo" className="h-12 w-12 mr-3" />              <h3 className="text-2xl font-bold font-Tinos bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan">
                Easy2Work
              </h3>
            </div>              <p className="text-white/80 mb-6">
              Transforming businesses with intelligent software solutions. We create innovative enterprise applications, websites, and mobile apps to help your business thrive in the digital world.
            </p>
            {/* Only LinkedIn social media as per requirement */}
            <div className="flex space-x-4">
              {socialMedia.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  custom={index}
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-white/10 text-white hover:bg-white/20 rounded-full p-2.5 transition-colors duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-Tinos">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-cyan transition-colors duration-300 flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-xs text-cyan group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-Tinos">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>                  <Link
                    to={service.path}
                    className="text-white/80 hover:text-cyan transition-colors duration-300 flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-xs text-cyan group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-Tinos">Our Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>                  <Link
                    to={solution.path}
                    className="text-white/80 hover:text-cyan transition-colors duration-300 flex items-center group"
                  >
                    <FaChevronRight className="mr-2 text-xs text-cyan group-hover:translate-x-1 transition-transform duration-300" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 font-Tinos">Contact Us</h4>
            <ul className="space-y-4">              <li className="flex items-start">                <FaMapMarkerAlt className="mt-1 mr-3 text-cyan" />
                <span className="text-white/80">No.32, 3rd Cross St, Kasturba Nagar, Adyar, Chennai, Tamil Nadu 600020</span>
              </li>              <li className="flex items-center"><FaEnvelope className="mr-3 text-cyan" />
                <a href="mailto:sales@esy2work.in" className="text-white/80 hover:text-cyan transition-colors">
                  sales@easy2work.in
                </a>
              </li>{/* Phone number removed */}
              <li className="flex items-center">
                <FaGlobe className="mr-3 text-cyan" />
                <span className="text-white/80">Global Presence</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter subscription - could be added here */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 pt-8 pb-12 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>              <p className="text-center md:text-left text-white/80 text-sm">
                &copy; {currentYear} Easy2Work. All rights reserved. Made with <FaHeart className="inline-block text-cyan mx-1" /> for innovation.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
