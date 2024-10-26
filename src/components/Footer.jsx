import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';
import { IoLogoWhatsapp } from "react-icons/io";
import logo from '../../public/icon-384x384.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9566031113', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919566031113');
  };

  return (
    <footer className="bg-[#00264c] text-[#F7F2E7] pt-10 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 space-y-8">
        {/* Logo and Company Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Easy2Work Logo" className="w-12 mb-3" />
          <h4 className="text-2xl font-semibold mb-2">Easy2Work</h4>
          <p className="text-sm md:text-base max-w-sm">
            Simplify and manage your business processes with our efficient and user-friendly tools.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-[#FFD700] transition duration-200">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#FFD700] transition duration-200">Features</a>
              </li>
              <li>
                <a href="https://wa.me/9566031113" className="hover:text-[#FFD700] transition duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <address className="not-italic space-y-3">
              <p className="text-sm hover:text-[#FFD700] transition duration-200">
                32, 3rd Cross Street, opposite to Nalli Silks, Kasturba Nagar, Adyar, Chennai, Tamil Nadu 600020
              </p>
              <p className="text-sm hover:text-[#FFD700] transition duration-200">
                Phone: <a href="tel:+919566031113">+91 9566031113</a>
              </p>
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="" className=" transition duration-200 cursor-default">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="" className=" transition duration-200 cursor-default">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="" className=" transition duration-200 cursor-default">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/9566031113" className="hover:text-[#FFD700] transition duration-200">
                <IoLogoWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#FFD700] pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Easy2Work. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8 z-50">
        <button 
          onClick={scrollToTop} 
          className="bg-[#004C4C] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-black transition duration-300"
        >
          <IoIosArrowUp className="text-white w-6 h-6" />
        </button>
      </div>
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <button 
          onClick={handleWhatsApp} 
          className="bg-[#25D366] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-700 transition duration-300"
        >
          <BsWhatsapp className="text-white w-6 h-6" />
        </button>
        <button 
          onClick={handleCall} 
          className="bg-[#007BFF] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <IoCall className="text-white w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
