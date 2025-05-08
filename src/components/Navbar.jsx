import { useState, useRef, useEffect } from 'react';
import { RiHome5Line } from "react-icons/ri";
import { MdExpandMore, MdExpandLess, MdFeaturedPlayList, MdSupportAgent } from "react-icons/md";
import { FaLaptopCode, FaSearch, FaCloud, FaMobile, FaGlobe, FaCheckCircle, FaPalette, FaCogs, FaUsers, FaBars, FaTimes, FaRobot } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { IoMdAnalytics } from "react-icons/io";
import { BsBuilding, BsBook, BsLightning } from "react-icons/bs";

// Normally this would be imported from your public directory
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
    
    // Cleanup timeouts when component unmounts
    return () => {
      if (servicesRef.current?.timeout) clearTimeout(servicesRef.current.timeout);
      if (solutionsRef.current?.timeout) clearTimeout(solutionsRef.current.timeout);
    };
  }, []);

  // Handle scroll effect and cleanup overflow when component unmounts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
  
  // Add touch handlers for swipe to close functionality
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    
    // If swiping right (and menu is open), close the menu
    if (isOpen && deltaX > 70) {
      setIsOpen(false);
      document.body.style.overflow = '';
      setTouchStartX(null);
    }
  };
  
  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const toggleServices = (e) => {
    // Stop event propagation
    if (e) e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
    if (window.innerWidth <= 1068) {
      setIsSolutionsOpen(false); // On mobile, close other accordion when opening one
      setIsAIDropdownOpen(false);
    }
  };

  const toggleSolutions = (e) => {
    // Stop event propagation
    if (e) e.stopPropagation();
    setIsSolutionsOpen(!isSolutionsOpen);
    if (window.innerWidth <= 1068) {
      setIsServicesOpen(false); // On mobile, close other accordion when opening one
    }
  };

  const toggleAIDropdown = (e) => {
    // Stop event propagation
    if (e) e.stopPropagation();
    setIsAIDropdownOpen(!isAIDropdownOpen);
  };
  
  // Handle clicks inside the mobile menu to prevent them from closing dropdowns
  const handleMobileMenuClick = (e) => {
    // Prevent clicks within the mobile menu from closing dropdowns
    // unless they are explicitly on the dropdown headers
    e.stopPropagation();
  };

  // Handle dropdown item click
  const handleDropdownItemClick = (e) => {
    // Stop event from bubbling up to parent elements
    e.stopPropagation();
    // For desktop view only, we might want to close the menu after selecting an item
    if (window.innerWidth >= 768) {
      // Only close dropdown if on desktop
      if (isServicesOpen) setIsServicesOpen(false);
      if (isSolutionsOpen) setIsSolutionsOpen(false);
      if (isAIDropdownOpen) setIsAIDropdownOpen(false);
    }
  };

  // Services data with icons and paths
  const services = [
    {
      name: 'Web Application Development',
      icon: <FaGlobe className="text-purple-600 text-xl" />,
      description: 'Custom web applications tailored to your business needs',
      path: '/WebAppDevelopment'
    },
    {
      name: 'Website Development',
      icon: <FaLaptopCode className="text-purple-600 text-xl" />,
      description: 'Responsive and engaging websites for any industry',
      path: '/WebsiteDevelopment'
    },
    {
      name: 'Mobile App Development',
      icon: <FaMobile className="text-purple-600 text-xl" />,
      description: 'Native and cross-platform mobile applications',
      path: '/MobileAppDevelopment'
    },
    {
      name: 'SEO Services',
      icon: <FaSearch className="text-purple-600 text-xl" />,
      description: 'Boost your visibility and reach your target audience',
      path: '/SEOServices'
    },
    {
      name: 'Cloud Native Development',
      icon: <FaCloud className="text-purple-600 text-xl" />,
      description: 'Scalable applications built for the cloud',
      path: '/CloudNativeAppDevelopment'
    },
    {
      name: 'SaaS Development',
      icon: <FaCogs className="text-purple-600 text-xl" />,
      description: 'Software as a Service solutions for recurring revenue',
      path: '/SaaSDevelopment'
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette className="text-purple-600 text-xl" />,
      description: 'User-centered design that delights your customers',
      path: '/UIUXDesign'
    },
    {
      name: 'Quality Assurance',
      icon: <FaCheckCircle className="text-purple-600 text-xl" />,
      description: 'Comprehensive testing for bug-free applications',
      path: '/QualityAssurance'
    },
    {
      name: 'Staff Augmentation',
      icon: <FaUsers className="text-purple-600 text-xl" />,
      description: 'Extend your team with our skilled professionals',
      path: '/StaffAugmentation'
    },
    {
      name: 'Lead Generation',
      icon: <IoMdAnalytics className="text-purple-600 text-xl" />,
      description: 'Data-driven strategies to grow your customer base',
      path: '/LeadGenerationServices'
    },
  ];

  // Solutions data
  const solutions = [
    {
      name: 'IBMS',
      description: 'Integrated Business Management System',
      icon: <BsBuilding className="text-purple-600 text-xl" />,
      path: '/IBMS'
    },
    {
      name: 'ILMS',
      description: 'Integrated Learning Management System',
      icon: <BsBook className="text-purple-600 text-xl" />,
      path: '/ILMS'
    }
  ];

  // AI Solutions data
  const aiSolutions = [
    {
      name: 'AI-Powered Enterprise Data Cleansing & Deduplication SaaS Solution',
      description: 'Enhance data quality with our intelligent cleansing tools',
      icon: <FaCogs className="text-purple-600 text-xl" />,
      path: '/AI-Enterprise-Data-Solution'
    },
    {
      name: 'AI-Powered Medical Lead Generation & Intelligence Platform',
      description: 'Smart lead generation specialized for healthcare providers',
      icon: <IoMdAnalytics className="text-purple-600 text-xl" />,
      path: '/AI-Medical-Lead-Platform'
    }
  ];

  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? ' shadow-lg' : 'bg-transparent '
      }`}
    >
      {/* Optional Overlay for better contrast */}
      <div className={`absolute inset-0  ${
        scrolled ? ' bg-black opacity-80' : ' bg-black opacity-10'
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center text-2xl md:text-3xl font-bold text-white z-10">
            <img src={logo} alt="Easy2Work Logo" className="w-10 md:w-12 " />
            <span className="text-white">
              Easy2Work
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 z-10">
            <a 
              href="/" 
              className="text-white hover:text-purple-400 transition-all duration-300 text-lg font-medium"
            >
              Home
            </a>
            
            {/* Services Dropdown - WITH HOVER & CLICK */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => {
                clearTimeout(servicesRef.current?.timeout);
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesRef.current.timeout = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 90); // Keep menu open for 70ms after hover out
              }}
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="text-white hover:text-purple-400 transition-all duration-300 text-lg font-medium flex items-center"
              >
                Services
              </button>
              
              {/* Services Mega Menu */}
              {isServicesOpen && (
                <div className="absolute transform -translate-x-3/4 mt-6 w-screen max-w-6xl bg-white/95 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden z-50 border border-purple-100">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {services.map((service, index) => (
                        <a 
                          key={index} 
                          href={service.path}
                          className="p-4 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200 transition-all duration-300 flex flex-col group"
                          onClick={handleDropdownItemClick}
                        >
                          <div className="flex items-start">
                            <div className="mr-3 mt-1 bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-all duration-300">
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-all duration-300">
                                {service.name}
                              </h3>
                              <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Solutions Dropdown - WITH HOVER & CLICK */}
            <div 
              className="relative" 
              ref={solutionsRef}
              onMouseEnter={() => {
                clearTimeout(solutionsRef.current?.timeout);
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                solutionsRef.current.timeout = setTimeout(() => {
                  setIsSolutionsOpen(false);
                }, 90); // Keep menu open for 70ms after hover out
              }}
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsSolutionsOpen(!isSolutionsOpen);
                }}
                className="text-white hover:text-purple-400 transition-all duration-300 text-lg font-medium flex items-center"
              >
                Our Solutions
              </button>
              
              {/* Solutions Dropdown Menu - Enhanced with AI section */}
              {isSolutionsOpen && (
                <div className="absolute -left-96 mt-6 w-auto min-w-max bg-white/95 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden z-50 border border-purple-100">
                  <div className="flex">
                    {/* Left side - Existing solutions */}
                    <div className="w-72 border-r border-purple-100">
                      {/* Added heading for Enterprise Solutions */}
                      <div className="p-3 bg-purple-50 border-b border-purple-100">
                        <h3 className="text-base font-semibold text-purple-700">Enterprise Solutions</h3>
                      </div>
                      
                      {solutions.map((solution, index) => (
                        <a 
                          key={index} 
                          href={solution.path}
                          className="block p-4 hover:bg-purple-50 transition-all duration-300 border-b border-purple-100 last:border-b-0"
                          onClick={handleDropdownItemClick}
                        >
                          <div className="flex items-center">
                            <div className="mr-3 bg-purple-100 p-2 rounded-lg">{solution.icon}</div>
                            <div>
                              <h3 className="text-base font-semibold text-gray-800">{solution.name}</h3>
                              <p className="text-gray-600 text-xs mt-1">{solution.description}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    {/* Right side - Upcoming features and AI solutions */}
                    <div className="w-80">
                      {/* Added heading for Future Solutions */}
                      <div className="p-3 bg-purple-50 border-b border-purple-100">
                        <h3 className="text-base font-semibold text-purple-700">Future Solutions</h3>
                      </div>
                      
                      <div className="border-b border-purple-100">
                        <div className="p-4">
                          <div className="flex items-center">
                            <BsLightning className="text-purple-600 text-xl mr-2" />
                            <h3 className="text-lg font-semibold text-gray-800">Upcoming Features</h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* AI Solutions Dropdown */}
                      <div 
                        className="relative"
                        ref={aiDropdownRef}
                      >
                        <button 
                          onClick={toggleAIDropdown}
                          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 hover:bg-purple-50 px-4 py-3 transition-all duration-300 border-b border-purple-100"
                        >
                          <span className="flex items-center">
                            <FaRobot className="mr-3 text-purple-600 text-lg" /> 
                            <span className="font-medium">AI-driven Solutions</span>
                          </span>
                          {isAIDropdownOpen ? 
                            <MdExpandLess className="text-lg" /> : 
                            <MdExpandMore className="text-lg" />
                          }
                        </button>
                        
                        {isAIDropdownOpen && (
                          <div className="py-2 space-y-1">
                            {aiSolutions.map((solution, index) => (
                              <a 
                                key={index} 
                                href={solution.path}
                                className="block px-4 py-2 hover:bg-purple-50 transition-all duration-300"
                                onClick={handleDropdownItemClick}
                              >
                                <div className="pl-6">
                                  <h4 className="text-sm font-medium text-gray-700 hover:text-purple-700">{solution.name}</h4>
                                  <p className="text-gray-600 text-xs mt-1">{solution.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="/ContactForm" 
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-purple-400 transition-all duration-300 p-2 focus:outline-none active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div 
        ref={mobileMenuRef}
        className={`absolute top-0 right-0 h-screen w-full max-w-xs bg-gray-900/95 backdrop-blur-lg z-50 shadow-2xl transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto flex flex-col`}
        style={{ touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleMobileMenuClick}
      >
        {/* Close button and logo on mobile */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Easy2Work Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Easy2Work
            </span>
          </div>
          <button 
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mobile menu items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-6 py-4 space-y-1">
            <a 
              href="/" 
              className="flex items-center text-gray-300 hover:text-white hover:bg-purple-800/30 px-4 py-3 rounded-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              <RiHome5Line className="mr-3 text-lg text-purple-400" /> 
              <span>Home</span>
            </a>
            
            {/* Mobile Services Accordion */}
            <div className="border-b border-gray-700 pb-1">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleServices(e);
                }} 
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white hover:bg-purple-800/30 px-4 py-3 rounded-lg transition-all duration-300"
              >
                <span className="flex items-center">
                  <VscFileCode className="mr-3 text-lg text-purple-400" /> 
                  <span>Services</span>
                </span>
                {isServicesOpen ? 
                  <MdExpandLess className="text-lg" /> : 
                  <MdExpandMore className="text-lg" />
                }
              </button>
              
              {isServicesOpen && (
                <div 
                  className="pr-4 py-2 space-y-1 bg-gray-800/30 rounded-lg mt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {services.map((service, index) => (
                    <a 
                      key={index} 
                      href={service.path}
                      className="flex items-center text-gray-400 hover:text-white py-2 px-3 rounded-md transition-all duration-300 z-50"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <span className="mr-2 text-sm">{service.icon}</span>
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Solutions Accordion */}
            <div className="border-b border-gray-700 pb-1">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSolutions(e);
                }} 
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white hover:bg-purple-800/30 px-4 py-3 rounded-lg transition-all duration-300"
              >
                <span className="flex items-center">
                  <MdFeaturedPlayList className="mr-3 text-lg text-purple-400" /> 
                  <span>Our Solutions</span>
                </span>
                {isSolutionsOpen ? 
                  <MdExpandLess className="text-lg" /> : 
                  <MdExpandMore className="text-lg" />
                }
              </button>
              
              {isSolutionsOpen && (
                <div 
                  className="pr-4 py-2 space-y-1 bg-gray-800/30 rounded-lg mt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Enterprise Solutions heading for mobile */}
                  <div className="px-3 py-2 text-gray-300 border-b border-gray-700">
                    <span className="text-sm font-medium text-purple-400">Enterprise Solutions</span>
                  </div>
                  
                  {/* Existing solutions */}
                  {solutions.map((solution, index) => (
                    <a 
                      key={index} 
                      href={solution.path}
                      className="flex items-center text-gray-400 hover:text-white py-2 px-3 rounded-md transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <span className="mr-2 text-sm">{solution.icon}</span>
                      <span className="text-sm">{solution.name}</span>
                    </a>
                  ))}
                  
                  {/* Future Solutions heading for mobile */}
                  <div className="px-3 py-2 text-gray-300 border-t border-b border-gray-700 mt-2">
                    <span className="text-sm font-medium text-purple-400">Future Solutions</span>
                  </div>
                  
                  {/* Upcoming Features Section */}
                  <div className="pt-2">
                    <div className="flex items-center px-3 py-2 text-gray-300">
                      <BsLightning className="mr-2 text-sm text-purple-400" />
                      <span className="text-sm font-medium">Upcoming Features</span>
                    </div>
                    
                    {/* AI Solutions Dropdown */}
                    <div className="px-3 border-t border-gray-700 mt-1 pt-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAIDropdown(e);
                        }}
                        className="flex items-center justify-between w-full text-left text-gray-400 hover:text-white py-2 transition-all duration-300"
                      >
                        <span className="flex items-center">
                          <FaRobot className="mr-2 text-sm text-purple-400" /> 
                          <span className="text-sm">AI-driven Solutions</span>
                        </span>
                        {isAIDropdownOpen ? 
                          <MdExpandLess className="text-sm" /> : 
                          <MdExpandMore className="text-sm" />
                        }
                      </button>
                      
                      {isAIDropdownOpen && (
                        <div className="pl-6 space-y-2 mt-1">
                          {aiSolutions.map((solution, index) => (
                            <a 
                              key={index} 
                              href={solution.path}
                              className="block text-gray-500 hover:text-white py-1 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <span className="text-xs">{solution.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="/ContactForm" 
              className="flex items-center text-gray-300 hover:text-white hover:bg-purple-800/30 px-4 py-3 rounded-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              <MdSupportAgent className="mr-3 text-lg text-purple-400" /> 
              <span>Contact Us</span>
            </a>
          </nav>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`absolute inset-0 bg-black/70 z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
    </nav>
  );
};

export default Navbar;