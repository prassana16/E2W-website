import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // For hamburger and close icons
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import { VscFileCode } from "react-icons/vsc";
import { MdFeaturedPlayList, MdSupportAgent, MdExpandMore } from "react-icons/md";
import logo from '../../public/icon-384x384.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the "Service" dropdown
  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav className="bg-[#00264c] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Right Title */}
        <div className="flex justify-center items-center text-2xl font-bold text-[#F7F2E7]">
          <img src={logo} alt="Logo" className='w-10'/>
          Easy2Work
        </div>

        {/* Left Menu Items (Hidden on mobile, shown on larger screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Home
            </a>
          </li>
          {/* Service Dropdown */}
          <li className="relative">
            <button onClick={toggleServiceDropdown} className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300 flex items-center">
            Services <MdExpandMore className="ml-1" />
            </button>
            {isServiceOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-[#00264c] shadow-lg rounded">
                <li>
                  <a href="#website-development" className="block px-4 py-2 text-[#F7F2E7] hover:bg-[#003366]">Website Development</a>
                </li>
                <li>
                  <a href="#software-development" className="block px-4 py-2 text-[#F7F2E7] hover:bg-[#003366]">Software Product Development</a>
                </li>
                <li>
                  <a href="#seo-development" className="block px-4 py-2 text-[#F7F2E7] hover:bg-[#003366]">SEO Development</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#features" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="https://wa.me/9566031113" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
        
        {/* Hamburger Menu Icon (Hidden on larger screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8 text-[#F7F2E7]" />
            ) : (
              <AiOutlineMenu className="w-8 h-8 text-[#F7F2E7]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#00264c] shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6 mt-10 px-6">
          <li>
            <a href="/" className='text-lg text-[#ffff] flex items-center ' ><RiHome5Line className='mr-2'/>Home</a>
          </li>
          {/* Service Dropdown for Mobile */}
          <li className="text-lg text-[#ffff] flex items-center" onClick={toggleServiceDropdown}>
          <VscFileCode className='mr-2'/> Services <MdExpandMore className='ml-2' />
          </li>
          {isServiceOpen && (
            <ul className="ml-6 space-y-4">
              <li>
                <a href="#website-development" className="text-[#F7F2E7] hover:text-[#FFD700]">Website Development</a>
              </li>
              <li>
                <a href="#software-development" className="text-[#F7F2E7] hover:text-[#FFD700]">Software Product Development</a>
              </li>
              <li>
                <a href="#seo-development" className="text-[#F7F2E7] hover:text-[#FFD700]">SEO Development</a>
              </li>
            </ul>
          )}
          <li>
            <a href="#features" className='text-lg text-[#ffff] flex items-center ' ><MdFeaturedPlayList className='mr-2'/>Features</a>
          </li>
          <li>
            <a href="https://wa.me/9566031113" className='text-lg text-[#ffff] flex items-center ' ><MdSupportAgent className='mr-2' />Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Overlay for when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
