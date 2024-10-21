import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons
import { IoIosArrowUp } from 'react-icons/io'; // Up arrow icon
import { BsWhatsapp } from 'react-icons/bs'; // WhatsApp icon
import { IoCall } from 'react-icons/io5'; 
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";// Phone icon
import logo from '../../public/icon-384x384.png'
import top from '../assets/images/paagetop.png'

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
    <footer className="bg-[#00264c] text-[#F7F2E7]  relative">
      <img src={top} alt="" className='w-full'/>
      <div className="container mx-auto px-4 py-8">
        {/* Footer Top: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Info with Address and Logo */}
          <div>
            {/* Company Logo */}
            <div className="flex">
            <img src={logo} alt="" className='w-8 h-8'/>
            <h4 className="text-lg font-semibold mb-4">Easy2Work</h4>
            </div>
            <p className="text-sm mb-2">
              We make it easy for you to manage your business with simple and efficient tools.
            </p>

          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/" className="text-sm hover:text-[#FFD700]  p-1 rounded">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm hover:text-[#FFD700]  p-1 rounded">
                  Features
                </a>
              </li>
              <li>
                <a href="https://wa.me/9566031113" className="text-sm hover:text-[#FFD700]  p-1 rounded">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact info</h4>
            <ul>
              
              <li>
                <a href="https://maps.app.goo.gl/iPVwCYA3zkgCykvJ6" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50]  rounded">
                <p className="text-sm mb-2">
              <strong>Address:</strong> 32, 3rd Cross Street, Diagonally, opposite to Nalli Silks, Kasturba Nagar, Adyar, Chennai, Tamil Nadu 600020
            </p>
                </a>
                <li>
              <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11014.63542433299!2d80.2516293!3d13.0026267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267104b2e6ab9%3A0x50d624131e47e020!2sBaleen%20Media!5e1!3m2!1sen!2sin!4v1729500729930!5m2!1sen!2sin"
        width="150"
        height="150"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
              </li>

                
              </li>
              <li>
                <a href="https://wa.me/9566031113" className="text-sm hover:text-[#FFD700] hover:bg-[#FF7F50]  rounded ">
                <p className="text-sm mt-4">
              <strong>Phone:</strong> +91 9566031113 {/* Replace with actual phone number */}
            </p>
                </a>
              </li>
              
            </ul>
          </div>
          

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/baleenmedia" className="hover:text-[#FFD700]">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@baleenmedia" className="hover:text-[#FFD700]">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/baleen.media" className="hover:text-[#FFD700]">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/9566031113" className="hover:text-[#FFD700]">
                <IoLogoWhatsapp className="w-6 h-6" />
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
