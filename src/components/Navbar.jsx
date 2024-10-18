import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // For hamburger and close icons
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import logo from '../../public/icon-384x384.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <a href="#" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
        
        {/* Book Demo Button (Shown on larger screens) */}
        <a href="#" className="hidden md:flex justify-center items-center text-[#F7F2E7] hover:text-[#FFD700] transition duration-300">
          Book Demo <BsBoxArrowUpRight className='ml-1'/>
        </a>

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
            <a href="" className='text-lg text-[#ffff] flex items-center ' ><RiHome5Line className='mr-2'/>Home</a>
          </li>
          <li>
            <a href="" className='text-lg text-[#ffff] flex items-center ' ><MdFeaturedPlayList className='mr-2'/>Features</a>
          </li>
          <li>
            <a href="" className='text-lg text-[#ffff] flex items-center ' ><MdSupportAgent className='mr-2' />ContactUs</a>
          </li>
          <li>
            <a href="" className='text-lg text-[#ffff] flex items-center ' ><BsBoxArrowUpRight className='mr-2'/>Book Demo</a>
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
