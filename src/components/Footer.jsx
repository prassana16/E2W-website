import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons
import { IoIosArrowUp } from 'react-icons/io'; // Up arrow icon
import { BsWhatsapp } from 'react-icons/bs'; // WhatsApp icon
import { IoCall } from 'react-icons/io5'; // Phone icon

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9566031113', '_blank'); // Replace with your WhatsApp number
  };

  const handleCall = () => {
    window.open('tel:+919566031113'); // Replace with your phone number
  };

  return (
    <footer className="bg-[#004C4C] text-[#F7F2E7] py-8 relative">
      <div className="container mx-auto px-4">
        {/* Footer Top: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Easy2Work</h4>
            <p className="text-sm">
              We make it easy for you to manage your business with simple and efficient tools.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50] p-1 rounded">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFD700]">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 border-t border-[#FFD700] pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Easy2Work. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8">
        <button 
          onClick={scrollToTop} 
          className="bg-[#004C4C] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[black] transition duration-300"
        >
          <IoIosArrowUp className="text-white w-6 h-6" />
        </button>
      </div>
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <button 
          onClick={handleWhatsApp} 
          className="bg-[#25D366] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[green] transition duration-300"
        >
          <BsWhatsapp className="text-white w-6 h-6" />
        </button>
        <button 
          onClick={handleCall} 
          className="bg-[#007BFF] rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[blue] transition duration-300"
        >
          <IoCall className="text-white w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
