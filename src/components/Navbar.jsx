import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "/EASY2Work-Logo.png"; // Updated path to reference file from public directory

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
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
    setServicesDropdown(false);
    setProductsDropdown(false);
  }, [location.pathname]);

  // Create a state for tracking mouse position for dropdown hover
  const toggleNav = () => setNav(!nav);
  
  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    if (productsDropdown) setProductsDropdown(false);
  };
  
  const toggleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
    if (servicesDropdown) setServicesDropdown(false);
  };

  // Navbar style based on scroll position
  const navbarStyle = {
    backgroundColor: isScrolled ? "rgba(98, 0, 120, 0.9)" : "transparent", // Changed to new dark magenta with transparency
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    transition: "all 0.3s ease-in-out",
  };

  // Define hover and active states for nav links
  const linkClasses = 
    "text-white hover:text-primary-200 transition duration-300 py-2 relative";
  
  const activeLinkClasses = 
    "text-primary-100 hover:text-primary-200 transition duration-300 py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-200";

  // Dropdown style
  const dropdownStyle = {
    backgroundColor: "rgba(98, 0, 120, 0.95)", // Changed to new dark magenta with transparency
    backdropFilter: "blur(10px)",
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

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? activeLinkClasses : linkClasses}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutE2w"
              className={location.pathname === "/AboutE2w" ? activeLinkClasses : linkClasses}
            >
              About
            </Link>
          </li>
          <li className="relative group">
            <button
              className={`flex items-center ${servicesDropdown ? "text-primary-100" : "text-white"} hover:text-primary-200 transition duration-300 py-2`}
              onClick={toggleServicesDropdown}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
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
                className="absolute left-0 mt-2 w-60 rounded-md shadow-lg py-1 z-50"
                style={dropdownStyle}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/WebAppDevelopment"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Web App Development
                </Link>
                <Link
                  to="/MobileAppDevelopment"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Mobile App Development
                </Link>
                <Link
                  to="/UIUXDesign"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  UI/UX Design
                </Link>
                <Link
                  to="/PWA"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  PWA Development
                </Link>
                <Link
                  to="/CloudServices"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Cloud Services
                </Link>
                <Link
                  to="/SAAS"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  SAAS Development
                </Link>
                <Link
                  to="/Consultant"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Consultancy Services 
                </Link>
                <Link
                  to="/ContentWriting"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Content Development
                </Link>
                <Link
                  to="/SEO"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  SEO Services
                </Link>
              </div>
            )}
          </li>
          <li className="relative group">
            <button
              className={`flex items-center ${productsDropdown ? "text-primary-100" : "text-white"} hover:text-primary-200 transition duration-300 py-2`}
              onClick={toggleProductsDropdown}
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              Products
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
            {/* Products Dropdown */}
            {productsDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50"
                style={dropdownStyle}
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <Link
                  to="/IBMS"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  IBMS
                </Link>
                <Link
                  to="/ILMS"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  ILMS
                </Link>
                <Link
                  to="/E2wProduct"
                  className="block px-4 py-2 text-sm hover:bg-primary-400 hover:text-white"
                >
                  Easy2Work PWA
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/Clients"
              className={location.pathname === "/Clients" ? activeLinkClasses : linkClasses}
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/Careers"
              className={location.pathname === "/Careers" ? activeLinkClasses : linkClasses}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/Blogs"
              className={location.pathname === "/Blogs" ? activeLinkClasses : linkClasses}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/ContactForm"
              className={location.pathname === "/ContactForm" ? activeLinkClasses : linkClasses}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:flex">
          <Link to="/ContactForm">
            <button className="bg-primary-300 hover:bg-primary-200 text-white px-5 py-2 rounded-md transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-primary-500 text-white">
          <ul className="px-4 py-2">
            <li className="py-3 border-b border-primary-400">
              <Link
                to="/"
                className="block"
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-3 border-b border-primary-400">
              <Link
                to="/AboutE2w"
                className="block"
                onClick={() => setNav(false)}
              >
                About
              </Link>
            </li>
            <li className="py-3 border-b border-primary-400">
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
              </button>
              {servicesDropdown && (
                <div className="mt-2 space-y-2 pl-4">
                  <Link
                    to="/WebAppDevelopment"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Web App Development
                  </Link>
                  <Link
                    to="/MobileAppDevelopment"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    to="/UIUXDesign"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    to="/PWA"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    PWA Development
                  </Link>
                  <Link
                    to="/CloudServices"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Cloud Services
                  </Link>
                  <Link
                    to="/SAAS"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    SAAS Development
                  </Link>
                  <Link
                    to="/Consultant"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Consultancy Services
                  </Link>
                  <Link
                    to="/ContentWriting"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Content Development
                  </Link>
                  <Link
                    to="/SEO"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    SEO Services
                  </Link>
                </div>
              )}
            </li>
            <li className="py-3 border-b border-primary-400">
              <button
                className="flex items-center justify-between w-full"
                onClick={toggleProductsDropdown}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsDropdown ? "rotate-180" : ""}`}
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
              {productsDropdown && (
                <div className="mt-2 space-y-2 pl-4">
                  <Link
                    to="/IBMS"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    IBMS
                  </Link>
                  <Link
                    to="/ILMS"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    ILMS
                  </Link>
                  <Link
                    to="/E2wProduct"
                    className="block py-2 text-sm"
                    onClick={() => setNav(false)}
                  >
                    Easy2Work PWA
                  </Link>
                </div>
              )}
            </li>
            <li className="py-3 border-b border-primary-400">
              <Link
                to="/Clients"
                className="block"
                onClick={() => setNav(false)}
              >
                Clients
              </Link>
            </li>
            <li className="py-3 border-b border-primary-400">
              <Link
                to="/Careers"
                className="block"
                onClick={() => setNav(false)}
              >
                Careers
              </Link>
            </li>
            <li className="py-3 border-b border-primary-400">
              <Link
                to="/Blogs"
                className="block"
                onClick={() => setNav(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/ContactForm"
                className="block"
                onClick={() => setNav(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="px-4 py-4">
            <Link to="/ContactForm">
              <button
                className="w-full bg-primary-300 hover:bg-primary-200 text-white py-2 rounded-md transition duration-300"
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