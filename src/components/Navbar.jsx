import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiHome5Line } from "react-icons/ri";
import { MdExpandMore, MdFeaturedPlayList, MdSupportAgent } from "react-icons/md";
import { FaLaptopCode, FaSearch, FaCloud, FaMobile, FaGlobe, FaCheckCircle, FaPalette, FaCogs, FaUsers } from "react-icons/fa";
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
      <nav className="bg-[#59247f] p-4 flex flex-col sticky top-0 z-50 shadow-xl">
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

            {/* <li>
              <a href="#features" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Features
              </a>
            </li> */}
            {/* <li>
              <a href="/Blogs" className="text-[#F7F2E7] md:text-lg hover:text-[#FFD700] transition duration-300 flex items-center">
                 Blogs
              </a>
            </li> */}
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

        {/* // Services Modal */}
         {isServiceModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50" onClick={closeServiceModal}>
            <div className="bg-[#00264c] w-96 p-6 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-3 right-3 text-[#F7F2E7]" onClick={closeServiceModal}>
                <AiOutlineClose className="w-6 h-6" />
              </button>
              <h2 className="text-3xl font-bold text-[#F7F2E7] mb-4">Our Services</h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">{service.icon}</span>
                    <a href={service.path} className="text-[#F7F2E7] font-semibold hover:underline text-xl">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </nav>

      
    </>
  );
};

// Services Array with Icons and Paths
const services = [
  {
    name: 'Web Application Development',
    icon: <FaGlobe className="text-[#28c836]" />,
    path: '/WebAppDevelopment'
  },
  {
    name: 'Website Development',
    icon: <FaLaptopCode className="text-[#cf2929]" />,
    path: '/WebsiteDevelopment'
  },
  {
    name: 'Mobile App Development',
    icon: <FaMobile className="text-[#ff5f2e]" />,
    path: '/MobileAppDevelopment'
  },
  {
    name: 'SEO Services',
    icon: <FaSearch className="text-[#2445ff]" />,
    path: '/SEOServices'
  },
  {
    name: 'Cloud Native Application Development',
    icon: <FaCloud className="text-[#ffca2a]" />,
    path: '/CloudNativeAppDevelopment'
  },
  {
    name: 'SaaS (Software as a Service)',
    icon: <FaCogs className="text-[#c6dcef]" />,
    path: '/SaaSDevelopment'
  },
  {
    name: 'UI/UX Design',
    icon: <FaPalette className="text-[#8037ff]" />,
    path: '/UIUXDesign'
  },
  {
    name: 'Quality Assurance',
    icon: <FaCheckCircle className="text-[#8fe132]" />,
    path: '/QualityAssurance'
  },
  {
    name: 'Staff Augmentation',
    icon: <FaUsers className="text-[#4863fd]" />,
    path: '/StaffAugmentation'
  },
];

export default Navbar;
