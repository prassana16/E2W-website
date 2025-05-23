import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiHome5Line } from "react-icons/ri";
import { MdExpandMore, MdExpandLess, MdFeaturedPlayList, MdSupportAgent } from "react-icons/md";
import { FaLaptopCode, FaSearch, FaCloud, FaMobile, FaGlobe, FaCheckCircle, FaPalette, FaCogs, FaUsers, FaBars, FaTimes, FaRobot } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { IoMdAnalytics } from "react-icons/io";
import { BsBuilding, BsBook, BsLightning } from "react-icons/bs";

// Logo import
const logo = "/EASY2Work-Logo.png";

// Add a global style for when mobile menu is open
if (typeof document !== 'undefined') {
  // Only run in browser environment
  const style = document.createElement('style');
  style.innerHTML = `
    body.overflow-hidden {
      overflow: hidden;
      position: relative;
      height: 100%;
    }
  `;
  document.head.appendChild(style);
}

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  
  const navbarRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const aiDropdownRef = useRef(null);
  
  // Initialize the refs with objects that can hold timeout properties
  useEffect(() => {
    servicesRef.current = { ...servicesRef.current, timeout: null };
    solutionsRef.current = { ...solutionsRef.current, timeout: null };
    aiDropdownRef.current = { ...aiDropdownRef.current, timeout: null };
    
    // Cleanup timeouts when component unmounts
    return () => {
      if (servicesRef.current?.timeout) clearTimeout(servicesRef.current.timeout);
      if (solutionsRef.current?.timeout) clearTimeout(solutionsRef.current.timeout);
      if (aiDropdownRef.current?.timeout) clearTimeout(aiDropdownRef.current.timeout);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      document.body.classList.remove('overflow-hidden');
    }
  }, [location.pathname]);

  // Handle scroll effect with improved threshold and cleanup
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Lower threshold for faster reaction
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body overflow when component unmounts
      if (typeof window !== 'undefined') {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);
  
  // Clean up body overflow when menu closes
  useEffect(() => {
    if (!isOpen && typeof window !== 'undefined') {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const toggleMenu = () => {
    // Add a class to prevent scrolling when menu is open
    if (!isOpen) {
      if (typeof window !== 'undefined') {
        document.body.classList.add('overflow-hidden');
      }
    } else {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('overflow-hidden');
      }
    }
    setIsOpen(!isOpen);
  };
  
  // Add touch handlers for swipe to close functionality with improved sensitivity
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    
    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;
    
    // If swiped left more than 70px, close the menu
    if (diff > 70) {
      setIsOpen(false);
      if (typeof window !== 'undefined') {
        document.body.classList.remove('overflow-hidden');
      }
      setTouchStartX(null);
    }
  };
  
  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  // Enhanced mouseover handlers for desktop dropdown menus
  const handleServicesMouseOver = () => {
    if (servicesRef.current?.timeout) {
      clearTimeout(servicesRef.current.timeout);
    }
    setIsServicesOpen(true);
  };
  
  const handleServicesMouseOut = () => {
    servicesRef.current.timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Slightly shorter timeout for better responsiveness
  };

  const handleSolutionsMouseOver = () => {
    if (solutionsRef.current?.timeout) {
      clearTimeout(solutionsRef.current.timeout);
    }
    setIsSolutionsOpen(true);
  };
  
  const handleSolutionsMouseOut = () => {
    solutionsRef.current.timeout = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  const handleAIDropdownMouseOver = () => {
    if (aiDropdownRef.current?.timeout) {
      clearTimeout(aiDropdownRef.current.timeout);
    }
    setIsAIDropdownOpen(true);
  };
  
  const handleAIDropdownMouseOut = () => {
    aiDropdownRef.current.timeout = setTimeout(() => {
      setIsAIDropdownOpen(false);
    }, 150);
  };
  
  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.05,
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }),
  };

  // Enhanced dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -5,
      scaleY: 0.95,
      transformOrigin: "top",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scaleY: 1,
      transition: { 
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.03,
        delayChildren: 0.03
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scaleY: 0.95,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };
  
  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.07
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  // Navigation links with active state styling
  const isActive = (path) => {
    return location.pathname === path ? "text-white" : "text-gray-100/90";
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 
          'bg-gradient-to-r from-[#2D1B69]/95 to-[#5B0737]/95 py-2 shadow-lg backdrop-blur-md' : 
          'bg-transparent py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="Easy2Work Logo"
              className="h-10 w-10 object-contain"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            />
            <motion.span 
              className="hidden sm:block font-Tinos text-lg lg:text-xl font-bold text-white tracking-wider"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Easy2Work
            </motion.span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <motion.div 
              className="flex space-x-1" 
              initial="hidden" 
              animate="visible"
            >
              {/* Home */}
              <motion.div 
                custom={0} 
                variants={menuItemVariants}
                className="relative"
              >
                <Link
                  to="/"
                  className={`flex items-center px-3 py-2 text-sm font-medium ${isActive("/")} hover:text-white transition-colors duration-200`}
                >
                  <RiHome5Line className="mr-1" size={18} />
                  Home
                </Link>
              </motion.div>
              
             
              
              {/* Services Dropdown */}
              <motion.div 
                custom={2} 
                variants={menuItemVariants}
                className="relative"
                ref={servicesRef}
                onMouseEnter={handleServicesMouseOver}
                onMouseLeave={handleServicesMouseOut}
              >
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium text-gray-100/90 hover:text-white transition-colors duration-200`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <FaLaptopCode className="mr-1" size={16} />
                  Services
                  {isServicesOpen ? (
                    <MdExpandLess className="ml-1" size={18} />
                  ) : (
                    <MdExpandMore className="ml-1" size={18} />
                  )}
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-1 w-64 bg-gradient-to-b from-[#2D1B69]/95 to-[#5B0737]/95 backdrop-blur-lg rounded-xl shadow-xl shadow-purple-900/20 border border-white/10 overflow-hidden"
                    >
                      <div className="p-2">
                        {/* Services dropdown content */}
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/WebAppDevelopment"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <VscFileCode className="mr-3 text-purple-300" size={18} />
                            <span>Web Application Development</span>
                          </Link>
                        </motion.div>

                        {/* Additional service items... (can be expanded in full implementation) */}
                        
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/MobileAppDevelopment"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaMobile className="mr-3 text-purple-300" size={18} />
                            <span>Mobile App Development</span>
                          </Link>
                        </motion.div>

                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/WebsiteDevelopment"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaGlobe className="mr-3 text-purple-300" size={18} />
                            <span>Website Development</span>
                          </Link>
                        </motion.div>
                        
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/SEOServices"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaSearch className="mr-3 text-purple-300" size={18} />
                            <span>SEO Services</span>
                          </Link>
                        </motion.div>
                        
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/CloudNativeAppDevelopment"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaCloud className="mr-3 text-purple-300" size={18} />
                            <span>Cloud Native Development</span>
                          </Link>
                        </motion.div>
                        
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/UIUXDesign"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaPalette className="mr-3 text-purple-300" size={18} />
                            <span>UI/UX Design</span>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Solutions Dropdown */}
              <motion.div 
                custom={3} 
                variants={menuItemVariants}
                className="relative"
                ref={solutionsRef}
                onMouseEnter={handleSolutionsMouseOver}
                onMouseLeave={handleSolutionsMouseOut}
              >
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium text-gray-100/90 hover:text-white transition-colors duration-200`}
                  aria-expanded={isSolutionsOpen}
                  aria-haspopup="true"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  <FaCheckCircle className="mr-1" size={16} />
                  Solutions
                  {isSolutionsOpen ? (
                    <MdExpandLess className="ml-1" size={18} />
                  ) : (
                    <MdExpandMore className="ml-1" size={18} />
                  )}
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-1 w-64 bg-gradient-to-b from-[#2D1B69]/95 to-[#5B0737]/95 backdrop-blur-lg rounded-xl shadow-xl shadow-purple-900/20 border border-white/10 overflow-hidden"
                    >
                      <div className="p-2">
                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/IBMS"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <FaCogs className="mr-3 text-purple-300" size={18} />
                            <span>IBMS</span>
                          </Link>
                        </motion.div>

                        <motion.div variants={dropdownItemVariants}>
                          <Link
                            to="/ILMS"
                            className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <IoMdAnalytics className="mr-3 text-purple-300" size={18} />
                            <span>ILMS</span>
                          </Link>
                        </motion.div>

                        {/* AI Solutions - with nested dropdown */}
                        <motion.div 
                          variants={dropdownItemVariants}
                          className="relative"
                          ref={aiDropdownRef}
                          onMouseEnter={handleAIDropdownMouseOver}
                          onMouseLeave={handleAIDropdownMouseOut}
                        >                          <button
                            className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                            aria-expanded={isAIDropdownOpen}
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsAIDropdownOpen(!isAIDropdownOpen);
                            }}
                          >
                            <div className="flex items-center">
                              <FaRobot className="mr-3 text-purple-300" size={18} />
                              <span>AI Solutions</span>
                            </div>
                            {isAIDropdownOpen ? (
                              <MdExpandLess size={18} />
                            ) : (
                              <MdExpandMore size={18} />
                            )}
                          </button>
                            <AnimatePresence>
                            {isAIDropdownOpen && (                              <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute left-0 md:left-full ml-1 top-0 md:top-0 w-full md:w-72 bg-gradient-to-b from-[#2D1B69]/95 to-[#5B0737]/95 backdrop-blur-lg rounded-xl shadow-xl shadow-purple-900/20 border border-white/10 overflow-hidden z-10"
                              >
                                <div className="p-2">
                                  <motion.div variants={dropdownItemVariants}>
                                    <Link
                                      to="/AI-Enterprise-Data-Solution"
                                      className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                                      onClick={() => {
                                        setIsAIDropdownOpen(false);
                                        setIsSolutionsOpen(false);
                                        setIsOpen(false);
                                      }}
                                    >
                                      <BsLightning className="mr-3 text-amber-300" size={18} />
                                      <span>AI Enterprise Data Solution</span>
                                    </Link>
                                  </motion.div>
                                  <motion.div variants={dropdownItemVariants}>
                                    <Link
                                      to="/AI-Medical-Lead-Platform"
                                      className="flex items-center px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200"
                                      onClick={() => {
                                        setIsAIDropdownOpen(false);
                                        setIsSolutionsOpen(false);
                                        setIsOpen(false);
                                      }}
                                    >
                                      <BsLightning className="mr-3 text-red-300" size={18} />
                                      <span>AI Medical Lead Platform</span>
                                    </Link>
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Additional nav items */}
              <motion.div 
                custom={4} 
                variants={menuItemVariants}
                className="relative"
              >
                <Link
                  to="/ContactForm"
                  className={`flex items-center px-3 py-2 text-sm font-medium ${isActive("/ContactForm")} hover:text-white transition-colors duration-200`}
                >
                  <MdSupportAgent className="mr-1" size={18} />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div 
              custom={5} 
              variants={menuItemVariants}
              className="ml-4"
            >
              <Link 
                to="/ContactForm" 
                className="px-4 py-2 bg-white hover:bg-white/90 text-[#2D1B69] rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <FaTimes size={22} />
              ) : (
                <FaBars size={22} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-gradient-to-b from-[#2D1B69] to-[#5B0737] shadow-xl z-50 lg:hidden overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={mobileMenuRef}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                  <img src={logo} alt="Easy2Work Logo" className="h-10 w-10 object-contain" />
                  <span className="font-Tinos text-lg font-bold text-white">Easy2Work</span>
                </Link>
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 text-white"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FaTimes size={22} />
                </motion.button>
              </div>

              <div className="space-y-1">
                <motion.div variants={mobileMenuItemVariants}>
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-3 text-white hover:bg-white/10 rounded-lg"
                  >
                    <RiHome5Line className="mr-3" size={18} />
                    Home
                  </Link>
                </motion.div>

                <motion.div variants={mobileMenuItemVariants}>
                  <Link
                    to="/AboutE2w"
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-3 text-white hover:bg-white/10 rounded-lg"
                  >
                    <BsBuilding className="mr-3" size={18} />
                    About Us
                  </Link>
                </motion.div>

                {/* Services dropdown - mobile */}
                <motion.div variants={mobileMenuItemVariants} className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-3 text-white hover:bg-white/10 rounded-lg"
                    aria-expanded={isServicesOpen}
                  >
                    <div className="flex items-center">
                      <FaLaptopCode className="mr-3" size={18} />
                      Services
                    </div>
                    {isServicesOpen ? (
                      <MdExpandLess size={20} />
                    ) : (
                      <MdExpandMore size={20} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 overflow-hidden"
                      >
                        <div className="border-l-2 border-white/20 pl-4 py-2 space-y-1">
                          {/* Mobile menu service links */}
                          <Link
                            to="/WebAppDevelopment"
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg"
                          >
                            <VscFileCode className="mr-3 text-purple-300" size={16} />
                            Web Application Development
                          </Link>
                          <Link
                            to="/MobileAppDevelopment"
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg"
                          >
                            <FaMobile className="mr-3 text-purple-300" size={16} />
                            Mobile App Development
                          </Link>
                          {/* More mobile service links would be added here */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Solutions dropdown - mobile */}
                <motion.div variants={mobileMenuItemVariants} className="space-y-1">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="flex items-center justify-between w-full px-3 py-3 text-white hover:bg-white/10 rounded-lg"
                    aria-expanded={isSolutionsOpen}
                  >
                    <div className="flex items-center">
                      <FaCheckCircle className="mr-3" size={18} />
                      Solutions
                    </div>
                    {isSolutionsOpen ? (
                      <MdExpandLess size={20} />
                    ) : (
                      <MdExpandMore size={20} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 overflow-hidden"
                      >
                        <div className="border-l-2 border-white/20 pl-4 py-2 space-y-1">
                          <Link
                            to="/IBMS"
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg"
                          >
                            <FaCogs className="mr-3 text-purple-300" size={16} />
                            IBMS
                          </Link>
                          <Link
                            to="/ILMS"
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg"
                          >
                            <IoMdAnalytics className="mr-3 text-purple-300" size={16} />
                            ILMS
                          </Link>
                          {/* AI Products in mobile menu */}
                          <button
                            onClick={() => setIsAIDropdownOpen(!isAIDropdownOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white rounded-lg"
                          >
                            <div className="flex items-center">
                              <FaRobot className="mr-3 text-purple-300" size={16} />
                              AI Solutions
                            </div>
                            {isAIDropdownOpen ? (
                              <MdExpandLess size={16} />
                            ) : (
                              <MdExpandMore size={16} />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {isAIDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                <div className="border-l-2 border-white/20 pl-3 py-2 space-y-1">
                                  <Link
                                    to="/AI-Enterprise-Data-Solution"
                                    onClick={toggleMenu}
                                    className="flex items-center px-3 py-2 text-xs text-white/80 hover:bg-white/10 hover:text-white rounded-lg"
                                  >
                                    <BsLightning className="mr-3 text-amber-300" size={14} />
                                    AI Enterprise Data Solution
                                  </Link>
                                  <Link
                                    to="/AI-Medical-Lead-Platform"
                                    onClick={toggleMenu}
                                    className="flex items-center px-3 py-2 text-xs text-white/80 hover:bg-white/10 hover:text-white rounded-lg"
                                  >
                                    <BsLightning className="mr-3 text-red-300" size={14} />
                                    AI Medical Lead Platform
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={mobileMenuItemVariants}>
                  <Link
                    to="/ContactForm"
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-3 text-white hover:bg-white/10 rounded-lg"
                  >
                    <MdSupportAgent className="mr-3" size={18} />
                    Contact Us
                  </Link>
                </motion.div>
              </div>
              
              {/* Mobile CTA */}
              <motion.div 
                variants={mobileMenuItemVariants}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <Link
                  to="/ContactForm"
                  onClick={toggleMenu}
                  className="flex items-center justify-center px-4 py-3 bg-white text-[#2D1B69] rounded-xl text-sm font-medium w-full"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;