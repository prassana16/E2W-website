import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebDevImage from '../assets/images/webdev2.png';
import SoftwareDevImage from '../assets/images/mobileapp2.png';
import SeoImage from '../assets/images/seobanner4.png';
import ItCompanyImage from '../assets/images/bannerimg.png';
import CloudImage from '../assets/images/cloudbanner3.png';
import WebsiteImage from '../assets/images/websitedev2.png';
import Websiteapp from '../assets/images/websiteapp.png';
import Websitedevelopment from '../assets/images/website.png';
import Mobileapp from '../assets/images/mobileapp.png';
import seo from '../assets/images/seo.png';
import software from '../assets/images/software.png';
import quality from '../assets/images/quality.png';
import UIUX from '../assets/images/UIUX.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const slides = [
    {
      title: 'Website Application Development',
      description: 'Building robust, scalable, and secure web applications tailored to meet your business needs and enhance user engagement.',
      image: Websiteapp,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/WebAppDevelopment",
    },
    {
      title: 'Website Development',
      description: 'Crafting dynamic and responsive websites that provide seamless user experiences and drive digital growth.',
      image: Websitedevelopment,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/WebsiteDevelopment",
    },
    {
      title: 'Mobile App Development',
      description: 'Designing and developing intuitive mobile applications for iOS and Android platforms to meet diverse user needs.',
      image: Mobileapp,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/MobileAppDevelopment",
    },
    {
      title: 'SEO Services',
      description: 'Optimizing your website to improve visibility, increase traffic, and achieve top rankings on search engines.',
      image: seo,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/SEOServices",
    },
    {
      title: 'Cloud App Development',
      description: 'Leveraging cloud technology to create scalable, resilient applications that meet modern business demands.',
      image: CloudImage,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/CloudNativeAppDevelopment",
    },
    {
      title: 'Software as a Service',
      description: 'Delivering innovative SaaS solutions to streamline operations, reduce costs, and enhance business efficiency.',
      image: software,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/SaaSDevelopment",
    },
    {
      title: 'UI/UX Design',
      description: 'Creating visually appealing and user-friendly designs to deliver exceptional digital experiences.',
      image: UIUX,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/UIUXDesign",
    },
    {
      title: 'Quality Assurance',
      description: 'Ensuring your products meet the highest standards of quality through rigorous testing and validation processes.',
      image: quality,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/QualityAssurance",
    },
    {
      title: 'Staff Augmentation',
      description: 'Providing skilled professionals to help you scale your team, meet project deadlines, and achieve your goals efficiently.',
      image: SeoImage,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/StaffAugmentation",
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
            <motion.a
                href={slides[currentSlide].learnMoreLink}
                className="inline-block mt-4 px-6 py-3 bg-[#fceecf] text-[#003f81] text-lg font-semibold rounded-lg hover:bg-[#ffd580] transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                Learn More
              </motion.a>
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
