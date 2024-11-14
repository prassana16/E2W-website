import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebDevImage from '../assets/images/webdev2.png';
import SoftwareDevImage from '../assets/images/mobileapp2.png';
import SeoImage from '../assets/images/seobanner4.png';
import ItCompanyImage from '../assets/images/bannerimg.png';
import CloudImage from '../assets/images/cloudbanner3.png';
import WebsiteImage from '../assets/images/websitedev2.png'
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const slides = [
    {
      title: 'Welcome to Easy2Work ',
      description: 'we are collabrating with high quality professionals across the world.',
      image: ItCompanyImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Website Development',
      description: 'Crafting responsive and dynamic websites that enhance user engagement and drive business growth.',
      image: WebsiteImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Web Development',
      description: 'Creating responsive and interactive web applications that elevate user experience, streamline workflows, and accelerate business growth.',
      image: WebDevImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile apps with seamless user experiences and innovative functionalities.',
      image: SoftwareDevImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Cloud Native Application Development',
      description: 'Building scalable, resilient applications that leverage the full power of cloud-native technologies.',
      image: CloudImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'SEO Services',
      description: 'Optimizing your presence online with SEO strategies and digital marketing campaigns.',
      image: SeoImage,
      bgColor:'radial-gradient(ellipse at center, #003f81, #001831)',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide automatically every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Change slide on button click
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className=" text-[#fceecf] pt-16 "
    style={{ background: slides[currentSlide].bgColor }}
>
      
        {/* Slide Wrapper */}
        <AnimatePresence initial={false}>
          <motion.div
            className="flex justify-center items-center py-7"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4">
              {/* Left Side Content */}
              <div className="flex flex-col items-start space-y-4 md:w-1/2">
                <motion.h2
                  className="text-3xl md:text-5xl font-RozhaOne font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-[#fceecf] opacity-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              {/* Right Side Image */}
              <div className="relative md:w-1/2  mt-8 md:mt-0">
                <motion.img
                  src={slides[currentSlide].image}
                  alt="Slide Image"
                  className="w-full max-w-md  rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute gap-5  left-0 right-0 flex justify-center  items-center z-10">
          <button
            onClick={handlePrev}
            className="text-[#00264c] p-1 md:p-3 font-bold text-2xl rounded-l-lg  bg-[#F7F2E7] shadow-md transition"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="text-[#00264c] p-1 md:p-3 font-bold text-2xl rounded-r-lg  bg-[#F7F2E7] shadow-md transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      

      {/* Decorative Animated Lines */}
    <div className="w-full flex  mt-24 ">
      {[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].map((width, i) => (
        <motion.div
          key={i}
          className={`bg-[#F7F2E7] h-[2px] w-full `}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1,2,4,6,8,10,12,12,10,8,6,4,2,1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: i * 0.2,
          }}
        />
      ))}
      
    </div>
    </section>
  );
};

export default Banner;
