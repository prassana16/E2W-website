import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
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
      title: "Website Application Development",
      description:
        "Building robust, scalable, and secure web applications tailored to meet your business needs and enhance user engagement.",
      image: cms,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/WebAppDevelopment",
    },
    {
      title: "Website Development",
      description:
        "Crafting dynamic and responsive websites that provide seamless user experiences and drive digital growth.",
      image: portfolioSite,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/WebsiteDevelopment",
    },
    {
      title: "Mobile App Development",
      description:
        "Designing and developing intuitive mobile applications for iOS and Android platforms to meet diverse user needs.",
      image: pwaApp,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/MobileAppDevelopment",
    },
    {
      title: "SEO Services",
      description:
        "Optimizing your website to improve visibility, increase traffic, and achieve top rankings on search engines.",
      image: localSEO,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/SEOServices",
    },
    {
      title: "Cloud App Development",
      description:
        "Leveraging cloud technology to create scalable, resilient applications that meet modern business demands.",
      image: microservices,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/CloudNativeAppDevelopment",
    },
    {
      title: "Software as a Service",
      description:
        "Delivering innovative SaaS solutions to streamline operations, reduce costs, and enhance business efficiency.",
      image: e2w,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/SaaSDevelopment",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating visually appealing and user-friendly designs to deliver exceptional digital experiences.",
      image: prototyping,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/UIUXDesign",
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring your products meet the highest standards of quality through rigorous testing and validation processes.",
      image: bugTracking,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/QualityAssurance",
    },
    {
      title: "Staff Augmentation",
      description:
        "Providing skilled professionals to help you scale your team, meet project deadlines, and achieve your goals efficiently.",
      image: teamCollaboration,
      bgColor: "radial-gradient(ellipse at center, #017598, #014066)",
      learnMoreLink: "/StaffAugmentation",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [typedText, setTypedText] = useState("");
  const fullText = "Empowering Digital Success";
  const typingSpeed = 100; // milliseconds per character

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Auto-slide every 3 seconds

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
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={BGvid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-600/40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Innovative Business Solutions for the Digital Age
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-6 h-8"
          >
            <span className="text-accent-200">{typedText}</span>
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            Transform your business with our suite of intelligent management
            systems, customized digital solutions, and expert consulting
            services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/ContactForm">
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                Get Started
              </button>
            </Link>
            <Link to="/AboutE2w">
              <button className="border border-accent-400 hover:bg-accent-800/30 text-white px-8 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-1 h-8 rounded-full bg-white/30 overflow-hidden">
            <motion.div
              className="w-full bg-accent-400 h-full"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Slide Content */}
      <div className="text-white flex flex-col items-center w-full max-w-screen-xl px-4 py-8">
        <motion.div
          key={currentSlide}
          className="flex flex-col md:flex-row justify-center items-center w-full md:gap-0"
          initial={{
            opacity: 0,
            x: animationDirection === "right" ? 100 : -10,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: animationDirection === "right" ? -10 : 100 }}
          transition={{ duration: 0.1 }}
        >
          {/* Slide Text */}
          <div className="flex flex-col items-center md:items-start gap-4 md:w-1/2 p-5 text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-RozhaOne font-light">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-2xl text-white opacity-70">
              {slides[currentSlide].description}
            </p>
            <a
              href={slides[currentSlide].learnMoreLink}
              className="inline-block mt-2 px-2 py-2 md:mt-4 md:px-6 md:py-3 bg-primary-600 text-white md:text-lg font-semibold rounded-lg hover:bg-primary-500 transition duration-300"
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
              transition={{ duration: 0.2 }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 bottom-8 flex justify-between items-center px-4">
        <button
          onClick={() => handleArrowClick("left")}
          className="text-accent-300 hover:text-accent-200 transition duration-300"
          aria-label="Previous Slide"
        >
          <FaRegArrowAltCircleLeft className="w-8 h-8 md:h-12 md:w-12" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          className="text-accent-300 hover:text-accent-200 transition duration-300"
          aria-label="Next Slide"
        >
          <FaRegArrowAltCircleRight className="w-8 h-8 md:h-12 md:w-12" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
