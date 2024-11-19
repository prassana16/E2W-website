import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiHome5Line } from "react-icons/ri";
import { MdExpandMore, MdFeaturedPlayList, MdSupportAgent } from "react-icons/md";
import { IoSettingsOutline, IoBookOutline } from "react-icons/io5";
import { VscFileCode } from "react-icons/vsc";
import logo from '/icon-384x384.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isContactBarOpen, setIsContactBarOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServiceModalOpen(false);
  };

  const openServiceModal = () => {
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
  };

  const toggleContactBar = () => {
    setIsContactBarOpen(!isContactBarOpen);
  };

  return (
    <>
      <nav className="bg-[#022b54] p-4 flex flex-col sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center text-2xl md:text-4xl font-bold text-[#F7F2E7]">
            <img src={logo} alt="Logo" className="w-10" />
            Easy2Work
          </div>
          
          {/* Menu Items */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Home
              </a>
            </li>

            {/* Service Modal */}
            <li>
              <button onClick={openServiceModal} className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Services <MdExpandMore className="ml-1" />
              </button>
            </li>

            <li>
              <a href="#features" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Features
              </a>
            </li>
            <li>
              <a href="/Blogs" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Blogs
              </a>
            </li>
            <li>
              <a href="/ContactForm" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Contact Us
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
              <li className="text-lg text-[#ffff] flex items-center" onClick={openServiceModal}>
                <VscFileCode className="mr-2" /> Services <MdExpandMore className="ml-2" />
              </li>
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
                <a href="/ContactForm" className="text-lg text-[#ffff] flex items-center">
                  <MdSupportAgent className="mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Services Modal */}
        {isServiceModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50" onClick={closeServiceModal}>
            <div className="bg-[#00264c] w-96 p-6 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-3 right-3 text-[#F7F2E7]" onClick={closeServiceModal}>
                <AiOutlineClose className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-[#F7F2E7] mb-4">Our Services</h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-[#FFD700] mr-2">{service.icon}</span>
                    <a href={service.path} className="text-[#F7F2E7] font-semibold hover:underline">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Bar */}
      {isContactBarOpen && (
        <div className="bg-[#022b54] text-[#F7F2E7] p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#ffffff] p-2 rounded-md text-[#000000] outline-none"
            />
            <input
              type="text"
              placeholder="Name"
              className="bg-[#ffffff] p-2 rounded-md text-[#000000] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#ffffff] p-2 rounded-md text-[#000000] outline-none"
            />
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <button className="bg-[#FFD700] text-[#022b54] px-4 py-2 rounded-md font-semibold">
              Enquire
            </button>
            <button onClick={toggleContactBar} className="text-[#F7F2E7]">
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Button to toggle the Contact Bar */}
      {!isContactBarOpen && (
        <button onClick={toggleContactBar} className="bg-[#FFD700] text-[#022b54] px-4 py-2 font-semibold w-full text-center">
          Open Enquiry Form
        </button>
      )}
    </>
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
