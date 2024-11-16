import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebDevImage from '../assets/images/webdev2.png';
import SoftwareDevImage from '../assets/images/mobileapp2.png';
import SeoImage from '../assets/images/seobanner4.png';
import ItCompanyImage from '../assets/images/bannerimg.png';
import CloudImage from '../assets/images/cloudbanner3.png';
import WebsiteImage from '../assets/images/websitedev2.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Banner = () => {
  const slides = [
    {
      title: 'Welcome to Easy2Work',
      description: 'We are collaborating with high quality professionals across Singapore and the rest of the world.',
      image: ItCompanyImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Website Development',
      description: 'Creating websites designed to engage users and drive growth through responsive design.',
      image: WebsiteImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Web Development',
      description: 'Building interactive applications to elevate experiences, streamline workflows, and boost growth.',
      image: WebDevImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Mobile App Development',
      description: 'Developing apps that offer smooth experiences and cutting-edge functionalities across platforms.',
      image: SoftwareDevImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'Cloud App Development',
      description: 'Creating scalable, resilient applications utilizing the full capabilities of cloud technologies.',
      image: CloudImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
    {
      title: 'SEO Services',
      description: 'Boosting your online presence with targeted SEO and comprehensive digital marketing strategies.',
      image: SeoImage,
      bgColor: 'radial-gradient(ellipse at center, #003f81, #001831)',
    },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      className="text-[#fceecf] h-full md:pt-16 "
      style={{ background: slides[currentSlide].bgColor }}
      onClick={togglePause}
      onTouchStart={togglePause}
    >
      
      <AnimatePresence initial={false}>
        <motion.div
          className="flex justify-center items-center py-5 md:py-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl  ">
            <div className="flex flex-col items-start gap-4 md:w-1/2  p-5 ">
              <motion.h2
                className="text-2xl md:text-5xl font-RozhaOne font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                className="text-base md:text-xl text-[#fceecf] opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>

            <div className="relative md:w-1/2  mt-8 md:mt-0">
              <motion.img
                src={slides[currentSlide].image}
                alt="Slide Image"
                className="w-full max-w-md rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute gap-5 left-0 right-0 flex justify-center items-center z-10">
        <button
          onClick={handlePrev}
          className="text-[#000000] p-1 md:p-3 font-bold text-2xl rounded-l-lg hover:bg-[#fce0ae] shadow-md transition"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="text-[#000000] p-1 md:p-3 font-bold text-2xl rounded-r-lg hover:bg-[#fce0ae]  shadow-md transition"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="w-full flex mt-24">
        {Array.from({ length: 26 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#F7F2E7] h-[2px] w-full"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
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
