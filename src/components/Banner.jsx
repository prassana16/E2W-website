import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

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

import enterprise from '../assets/images/enterprise.png';
import portfolioSite from '../assets/images/portfolio-site.png';
import pwaApp from '../assets/images/pwa-app.png';
import localSEO from '../assets/images/seo3.png';
import microservices from '../assets/images/cloud2.png';
import e2w from '../assets/images/PWAintro2.png';
import prototyping from '../assets/images/ui3.png';
import bugTracking from '../assets/images/qual1.png';
import teamCollaboration from '../assets/images/staff2.png';
import cms from '../assets/images/cms.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const slides = [
    {
      title: 'Website Application Development',
      description: 'Building robust, scalable, and secure web applications tailored to meet your business needs and enhance user engagement.',
      image: cms,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/WebAppDevelopment",
    },
    {
      title: 'Website Development',
      description: 'Crafting dynamic and responsive websites that provide seamless user experiences and drive digital growth.',
      image: portfolioSite,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/WebsiteDevelopment",
    },
    {
      title: 'Mobile App Development',
      description: 'Designing and developing intuitive mobile applications for iOS and Android platforms to meet diverse user needs.',
      image: pwaApp,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/MobileAppDevelopment",
    },
    {
      title: 'SEO Services',
      description: 'Optimizing your website to improve visibility, increase traffic, and achieve top rankings on search engines.',
      image: localSEO,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/SEOServices",
    },
    {
      title: 'Cloud App Development',
      description: 'Leveraging cloud technology to create scalable, resilient applications that meet modern business demands.',
      image: microservices,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/CloudNativeAppDevelopment",
    },
    {
      title: 'Software as a Service',
      description: 'Delivering innovative SaaS solutions to streamline operations, reduce costs, and enhance business efficiency.',
      image: e2w,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/SaaSDevelopment",
    },
    {
      title: 'UI/UX Design',
      description: 'Creating visually appealing and user-friendly designs to deliver exceptional digital experiences.',
      image: prototyping,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/UIUXDesign",
    },
    {
      title: 'Quality Assurance',
      description: 'Ensuring your products meet the highest standards of quality through rigorous testing and validation processes.',
      image: bugTracking,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/QualityAssurance",
    },
    {
      title: 'Staff Augmentation',
      description: 'Providing skilled professionals to help you scale your team, meet project deadlines, and achieve your goals efficiently.',
      image: teamCollaboration,
      bgColor: 'radial-gradient(ellipse at center, #6c0081, #001831)',
      learnMoreLink: "/StaffAugmentation",
    },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("right");

const handleArrowClick = (direction) => {
  setAnimationDirection(direction);
  if (direction === "left") handlePrev();
  else handleNext();
};

  //const [isPaused, setIsPaused] = useState(false);

  // useEffect(() => {
  //   if (!isPaused) {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }
  // }, [isPaused, slides.length]);

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
  className="h-[600px] md:h-[480px] flex flex-col justify-between items-center  relative overflow-hidden"
  style={{ background: slides[currentSlide].bgColor }}
>
  {/* Slide Content */}
  <div className="text-[#fceecf] flex flex-col items-center w-full max-w-screen-xl px-4 py-8">
    <motion.div
      key={currentSlide}
      className="flex flex-col md:flex-row justify-center items-center w-full md:gap-0"
      initial={{ opacity: 0, x: animationDirection === "right" ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: animationDirection === "right" ? -100 : 100 }}
      transition={{ duration: 0.8 }}
    >
      {/* Slide Text */}
      <div className="flex flex-col items-center md:items-start gap-4 md:w-1/2 p-5 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-RozhaOne font-light">
          {slides[currentSlide].title}
        </h2>
        <p className="text-sm md:text-2xl text-[#fceecf] opacity-70">
          {slides[currentSlide].description}
        </p>
        <a
          href={slides[currentSlide].learnMoreLink}
          className="inline-block mt-2 px-2 py-2 md:mt-4 md:px-6 md:py-3 bg-[#fceecf] text-[#003f81] md:text-lg font-semibold rounded-lg hover:bg-[#ffd580] transition duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Slide Image */}
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
  </div>

  {/* Navigation Arrows */}
  <div className="absolute left-4 right-4 bottom-8 flex justify-between items-center px-4">
    <button
      onClick={() => handleArrowClick("left")}
      className="text-[#fceecf] hover:text-[#ffd580] transition duration-300"
      aria-label="Previous Slide"
    >
      <FaRegArrowAltCircleLeft className="w-8 h-8 md:h-12 md:w-12" />
    </button>
    <button
      onClick={() => handleArrowClick("right")}
      className="text-[#fceecf] hover:text-[#ffd580] transition duration-300"
      aria-label="Next Slide"
    >
      <FaRegArrowAltCircleRight className="w-8 h-8 md:h-12 md:w-12" />
    </button>
  </div>
</section>

  );
};

export default Banner;
