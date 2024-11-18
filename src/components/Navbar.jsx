import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiHome5Line } from "react-icons/ri";
import { MdExpandMore, MdFeaturedPlayList, MdSupportAgent } from "react-icons/md";
import { VscFileCode } from "react-icons/vsc";
import logo from '/icon-384x384.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServiceOpen(false);
  };

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav className="bg-[#001831] shadow-md p-4 flex flex-col">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-[#F7F2E7]">
          <img src={logo} alt="Logo" className="w-10" />
          Easy2Work
        </div>
        
        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300 flex items-center">
              <RiHome5Line className="mr-1" /> Home
            </a>
          </li>

          {/* Service Dropdown */}
          <li className="relative">
            <button onClick={toggleServiceDropdown} className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300 flex items-center">
              Services <MdExpandMore className="ml-1" />
            </button>

            {isServiceOpen && (
              <ul className="absolute mt-2 w-64 rounded-lg shadow-lg bg-gradient-to-r from-[#00264c] to-[#001831] overflow-hidden z-50">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center px-4 py-3 hover:bg-[#003366] cursor-pointer transition duration-300">
                    <a href={service.path} className="flex items-center text-white font-semibold">
                      <span className="text-lg text-[#FFD700] mr-2">{service.icon}</span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#features" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300 flex items-center">
              <MdFeaturedPlayList className="mr-1" /> Features
            </a>
          </li>
          <li>
            <a href="/Blogs" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Blogs
            </a>
          </li>
          <li>
            <a href="https://wa.me/9566031113" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300 flex items-center">
              <MdSupportAgent className="mr-1" /> Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
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
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#00264c] shadow-lg z-50 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-6 mt-10 px-6">
            <li>
              <a href="/" className="text-lg text-[#ffff] flex items-center">
                <RiHome5Line className="mr-2" /> Home
              </a>
            </li>
            <li className="text-lg text-[#ffff] flex items-center" onClick={toggleServiceDropdown}>
              <VscFileCode className="mr-2" /> Services <MdExpandMore className="ml-2" />
            </li>
            {isServiceOpen && (
              <ul className="ml-6 space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.path} className="text-[#F7F2E7] hover:bg-[#003366] px-4 py-2 rounded block">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <li>
              <a href="#features" className="text-lg text-[#ffff] flex items-center">
                <MdFeaturedPlayList className="mr-2" /> Features
              </a>
            </li>
            <li>
              <a href="/Blogs" className="text-lg text-[#ffff] flex items-center">
                <MdFeaturedPlayList className="mr-2" /> Blogs
              </a>
            </li>
            <li>
              <a href="https://wa.me/9566031113" className="text-lg text-[#ffff] flex items-center">
                <MdSupportAgent className="mr-2" /> Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// Services Array with Icons and Paths
const services = [
  { name: 'Website Development', icon: <VscFileCode />, path: '/WebsiteDevelopment' },
  { name: 'Mobile App Development', icon: <VscFileCode />, path: '/MobileAppDevelopment' },
  { name: 'SEO Services', icon: <VscFileCode />, path: '/SEOServices' },
  { name: 'Cloud Application Development', icon: <VscFileCode />, path: '/CloudNativeAppDevelopment' },
  { name: 'SaaS Solutions', icon: <VscFileCode />, path: '/SaaSDevelopment' },
  { name: 'UI/UX Design', icon: <VscFileCode />, path: '/UIUXDesign' },
  { name: 'Quality Assurance', icon: <VscFileCode />, path: '/QualityAssurance' },
  { name: 'Staff Augmentation', icon: <VscFileCode />, path: '/StaffAugmentation' }
];

export default Navbar;
