import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "/EASY2Work-Logo.png"; // Updated path to reference file from public directory

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  // Handle window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setNav(false);
    setSolutionsDropdown(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const toggleNav = () => setNav(!nav);
  
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdown(!solutionsDropdown);
    if (servicesDropdown) setServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    if (solutionsDropdown) setSolutionsDropdown(false);
  };
  // Navbar style based on scroll position - updated to blue theme
  const navbarStyle = {
    backgroundColor: isScrolled ? "rgba(1, 117, 152, 0.9)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
  };

  // Define hover and active states for nav links
  const linkClasses = 
    "text-white hover:text-primary-200 transition duration-300 py-2 relative text-base font-medium";
  
  const activeLinkClasses = 
    "text-primary-100 hover:text-primary-200 transition duration-300 py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-200 text-base font-medium";
  // Dropdown style - updated to blue theme
  const dropdownStyle = {
    backgroundColor: "rgba(1, 117, 152, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  };

  return (
    <div
      className="fixed w-full z-50 h-20 text-white px-4 md:px-8"
      style={navbarStyle}
    >
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Easy2Work Logo"
              className="h-12 cursor-pointer" 
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden lg:flex items-center justify-end flex-1">
          <ul className="flex space-x-8 font-medium items-center">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? activeLinkClasses : linkClasses}
              >
                Home
              </Link>
            </li>
            <li className="relative group">              <button
                className={`flex items-center ${servicesDropdown ? "text-primary-100" : "text-white"} hover:text-primary-200 transition duration-300 py-2 text-base font-medium`}
                onClick={toggleServicesDropdown}
                onMouseEnter={() => setServicesDropdown(true)}
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {/* Services Dropdown */}
              {servicesDropdown && (
                <div
                  className="absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 z-50"
                  style={dropdownStyle}
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >                  <Link
                    to="/WebsiteDevelopment"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Website Development
                  </Link>
                  <Link
                    to="/WebAppDevelopment"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Web App Development
                  </Link>                  <Link
                    to="/MobileAppDevelopment"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    to="/UIUXDesign"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    to="/CloudNativeAppDevelopment"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Cloud Services
                  </Link>
                  <Link
                    to="/SaaSDevelopment"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    SaaS Development
                  </Link>
                  <Link
                    to="/StaffAugmentation"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Staff Augmentation
                  </Link>
                  <Link
                    to="/QualityAssurance"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    Quality Assurance
                  </Link>
                  <Link
                    to="/SEOServices"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    SEO Services
                  </Link>
                </div>
              )}
            </li>
            <li className="relative group">              <button
                className={`flex items-center ${solutionsDropdown ? "text-primary-100" : "text-white"} hover:text-primary-200 transition duration-300 py-2 text-base font-medium`}
                onClick={toggleSolutionsDropdown}
                onMouseEnter={() => setSolutionsDropdown(true)}
              >
                Our Solutions
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {/* Solutions Dropdown */}
              {solutionsDropdown && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50"
                  style={dropdownStyle}
                  onMouseEnter={() => setSolutionsDropdown(true)}
                  onMouseLeave={() => setSolutionsDropdown(false)}
                >                  <Link
                    to="/IBMS"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    IBMS
                  </Link>
                  <Link
                    to="/ILMS"
                    className="block px-4 py-2 text-sm hover:bg-[#05a7be] hover:text-white transition-colors duration-200"
                  >
                    ILMS
                  </Link>
                </div>
              )}
            </li>          </ul>

          {/* Contact Button (Desktop) */}
          <div className="ml-8">
            <Link to="/ContactForm">
              <button className="bg-[#087ea2] hover:bg-[#18c4b8] text-white px-5 py-2 rounded-md transition duration-300 font-medium">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>      {/* Mobile Menu */}
      {nav && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#017598] text-white shadow-lg rounded-b-lg">
          <ul className="px-4 py-2">
            <li className="py-3 border-b border-[#05a7be]">
              <Link
                to="/"
                className="block"
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>            <li className="py-3 border-b border-[#05a7be]">
              <button
                className="flex items-center justify-between w-full"
                onClick={toggleServicesDropdown}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>              {servicesDropdown && (
                <div className="mt-2 space-y-2 pl-4">
                  <Link
                    to="/WebsiteDevelopment"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Website Development
                  </Link>                  <Link
                    to="/WebAppDevelopment"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Web App Development
                  </Link>
                  <Link
                    to="/MobileAppDevelopment"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    to="/UIUXDesign"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    to="/CloudNativeAppDevelopment"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Cloud Services
                  </Link>
                  <Link
                    to="/SaaSDevelopment"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    SaaS Development
                  </Link>
                  <Link
                    to="/StaffAugmentation"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Staff Augmentation
                  </Link>
                  <Link
                    to="/QualityAssurance"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    Quality Assurance
                  </Link>
                  <Link
                    to="/SEOServices"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    SEO Services
                  </Link>
                </div>
              )}
            </li>            <li className="py-3 border-b border-[#05a7be]">
              <button
                className="flex items-center justify-between w-full"
                onClick={toggleSolutionsDropdown}
              >
                Our Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${solutionsDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>              {solutionsDropdown && (
                <div className="mt-2 space-y-2 pl-4">
                  <Link
                    to="/IBMS"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    IBMS
                  </Link>
                  <Link
                    to="/ILMS"
                    className="block py-2 text-sm hover:bg-[#05a7be]/20"
                    onClick={() => setNav(false)}
                  >
                    ILMS
                  </Link>
                </div>
              )}
            </li>            <li className="py-3">
              <Link
                to="/ContactForm"
                className="block"
                onClick={() => setNav(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>          <div className="px-4 py-4">
            <Link to="/ContactForm">
              <button
                className="w-full bg-[#087ea2] hover:bg-[#18c4b8] text-white py-2 rounded-md transition duration-300 font-medium"
                onClick={() => setNav(false)}
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;