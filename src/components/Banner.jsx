import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaGlobeAmericas,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import portfolioSite from "../assets/images/portfolio-site.png";
import pwaApp from "../assets/images/pwa-app.png";
import localSEO from "../assets/images/seo3.png";
import microservices from "../assets/images/cloud2.png";
import e2w from "../assets/images/PWAintro2.png";
import prototyping from "../assets/images/ui3.png";
import bugTracking from "../assets/images/qual1.png";
import teamCollaboration from "../assets/images/staff2.png";
import cms from "../assets/images/cms.png";

import Navbar from "./Navbar";

const Banner = () => {
  const slides = [
    {
      title: "Web Application Development",
      description:
        "Building robust, scalable, and AI-enabled web applications tailored to meet your global business needs with cutting-edge technology.",
      image: cms,
      bgColor: "linear-gradient(135deg, #017598, #05a7be)",
      learnMoreLink: "/WebAppDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4" />,
    },
    {
      title: "Website Development",
      description:
        "Creating responsive, SEO-optimized websites with international market focus that drive engagement and enhance your global digital presence.",
      image: portfolioSite,
      bgColor: "linear-gradient(135deg, #05a7be, #18c4b8)",
      learnMoreLink: "/WebsiteDevelopment",
      icon: <FaGlobeAmericas className="text-4xl mb-4" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Designing intuitive cross-platform mobile applications that deliver exceptional user experiences for global audiences.",
      image: pwaApp,
      bgColor: "linear-gradient(135deg, #18c4b8, #1ed7cd)",
      learnMoreLink: "/MobileAppDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4" />,
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Leveraging artificial intelligence to create intelligent, adaptive applications that transform data into actionable insights.",
      image: localSEO,
      bgColor: "linear-gradient(135deg, #05a7be, #087ea2)",
      learnMoreLink: "/SEOServices",
      icon: <FaRobot className="text-4xl mb-4" />,
    },
    {
      title: "Cloud-Native Applications",
      description:
        "Developing scalable, secure cloud-native applications designed for global operations with high availability and performance.",
      image: microservices,
      bgColor: "linear-gradient(135deg, #087ea2, #017598)",
      learnMoreLink: "/CloudNativeAppDevelopment",
      icon: <FaGlobeAmericas className="text-4xl mb-4" />,
    },
    {
      title: "SaaS Development",
      description:
        "Building enterprise-grade SaaS solutions that streamline operations and enhance efficiency for businesses worldwide.",
      image: e2w,
      bgColor: "linear-gradient(135deg, #017598, #05a7be)",
      learnMoreLink: "/SaaSDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, culturally-adaptive user interfaces that provide exceptional digital experiences across global markets.",
      image: prototyping,
      bgColor: "linear-gradient(135deg, #05a7be, #18c4b8)",
      learnMoreLink: "/UIUXDesign",
      icon: <FaGlobeAmericas className="text-4xl mb-4" />,
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring software meets the highest international standards through comprehensive testing and validation processes.",
      image: bugTracking,
      bgColor: "linear-gradient(135deg, #18c4b8, #1ed7cd)",
      learnMoreLink: "/QualityAssurance",
      icon: <FaLaptopCode className="text-4xl mb-4" />,
    },
    {
      title: "Staff Augmentation",
      description:
        "Providing skilled global professionals to help you scale your team and achieve your technology goals efficiently.",
      image: teamCollaboration,
      bgColor: "linear-gradient(135deg, #05a7be, #087ea2)",
      learnMoreLink: "/StaffAugmentation",
      icon: <FaGlobeAmericas className="text-4xl mb-4" />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [typedText, setTypedText] = useState("");
  const fullText = "Global Technology Partners";
  const typingSpeed = 100; // milliseconds per character

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Auto-slide every 5 seconds for better readability

      return () => clearInterval(interval); // Cleanup
    }
  }, [isPaused, slides.length]);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const handleNext = () => {
    setAnimationDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setAnimationDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative min-h-screen overflow-hidden" id="services">
      {/* Background with our brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#087ea2] to-[#05a7be]"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-6 h-8"
          >
            <span className="text-white">{typedText}</span>
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Delivering innovative AI-powered solutions to businesses across the
            globe, with a focus on scalability, security, and exceptional user
            experience.
          </motion.p>
        </div>

        {/* Slide Content */}
        <div
          className="w-full max-w-6xl mx-auto px-4 py-8 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="flex flex-col md:flex-row justify-center items-center w-full md:gap-8"
              initial={{
                opacity: 0,
                x: animationDirection === "right" ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: animationDirection === "right" ? -100 : 100,
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Slide Text */}
              <div className="flex flex-col items-center md:items-start gap-4 md:w-1/2 p-5 text-center md:text-left">
                <div className="bg-white/10 p-4 rounded-full">
                  {slides[currentSlide].icon}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base md:text-lg text-white/90">
                  {slides[currentSlide].description}
                </p>
                <a
                  href={slides[currentSlide].learnMoreLink}
                  className="inline-block mt-4 px-6 py-3 bg-white text-[#087ea2] text-lg font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Learn More
                </a>
              </div>

              {/* Slide Image */}
              <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <motion.div
                  className="relative overflow-hidden rounded-xl border-2 border-white/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10"></div>
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full max-w-md object-cover rounded-lg"
                    style={{ maxHeight: "300px" }}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 z-20">
          <button
            onClick={() => handleArrowClick("left")}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition duration-300 backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <FaRegArrowAltCircleLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => handleArrowClick("right")}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition duration-300 backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <FaRegArrowAltCircleRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
