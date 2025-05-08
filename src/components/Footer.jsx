import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";
// Using the logo from the public directory instead of assets/images
import logo from "/EASY2Work-Logo.png";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
    { name: "Blogs", path: "/Blogs" },
    { name: "Contact", path: "/ContactForm" },
  ];

  const services = [
    { name: "Web App Development", path: "/WebAppDevelopment" },
    { name: "Mobile App Development", path: "/MobileAppDevelopment" },
    { name: "UI/UX Design", path: "/UIUXDesign" },
    { name: "PWA Development", path: "/PWA" },
    { name: "Cloud Services", path: "/CloudServices" },
    { name: "SAAS Development", path: "/SAAS" },
    { name: "Consultancy Services", path: "/Consultant" },
    { name: "Content Development", path: "/ContentWriting" },
    { name: "SEO Services", path: "/SEO" },
  ];

  const products = [
    { name: "IBMS", path: "/IBMS" },
    { name: "ILMS", path: "/ILMS" },
    { name: "Easy2Work PWA", path: "/E2wProduct" },
  ];

  return (
    <footer className="bg-primary-900 text-white pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Easy2Work Logo" className="h-12" />
            </Link>
            <p className="text-gray-300 mb-6">
              Easy2Work provides innovative business solutions designed to
              streamline workflows, enhance productivity, and drive growth for
              your business.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 hover:bg-primary-300 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 hover:bg-primary-300 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 hover:bg-primary-300 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 hover:bg-primary-300 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-100 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary-100 transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Our Products</h3>
            <ul className="space-y-2 mb-6">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="text-gray-300 hover:text-primary-100 transition duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-primary-100">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Business Avenue,</p>
              <p className="mb-2">Tech District, City 12345</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@easy2work.com"
                  className="hover:text-primary-100 transition duration-300"
                >
                  info@easy2work.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-100 transition duration-300"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Easy2Work. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-primary-100 transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-100 transition duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary-100 transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-300 hover:bg-primary-200 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
