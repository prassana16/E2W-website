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
      }, 5000);

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
      className=" min-h-screen flex flex-col justify-center items-center gap-52"
      style={{ background: slides[currentSlide].bgColor }}
      onClick={togglePause}
      onTouchStart={togglePause}
    >
      <div className="text-[#fceecf]  flex flex-col justify-center items-center ">
      <AnimatePresence initial={false}>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center w-full max-w-screen-xl py-5 md:py-12 gap-11 md:gap-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center md:items-start gap-4 md:w-1/2 p-5 text-center md:text-left">
            <motion.h2
              className="text-3xl md:text-5xl font-RozhaOne font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              className="text-base md:text-2xl text-[#fceecf] opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>

          <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <motion.img
              src={slides[currentSlide].image}
              alt="Slide Image"
              className="w-full max-w-md rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      </div>

      
    </section>
  );
};

export default Banner;
