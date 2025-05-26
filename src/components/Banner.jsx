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
import { useInView } from "react-intersection-observer";

// Import images
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

const Banner = () => {  const slides = [    {
      title: "Web Application Development",
      description:
        "Building robust, scalable, and AI-enabled web applications tailored to meet your global business needs with cutting-edge technology.",
      image: cms,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/WebAppDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4 text-cyan" />,
    },
    {
      title: "Website Development",
      description:
        "Creating responsive, SEO-optimized websites with international market focus that drive engagement and enhance your global digital presence.",
      image: portfolioSite,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/WebsiteDevelopment",
      icon: <FaGlobeAmericas className="text-4xl mb-4 text-cyan" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Designing intuitive cross-platform mobile applications that deliver exceptional user experiences for global audiences.",
      image: pwaApp,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/MobileAppDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4 text-cyan" />,
    },    {      title: "AI-Powered Solutions",
      description:
        "Leveraging artificial intelligence to create intelligent, adaptive applications that transform data into actionable insights.",
      image: localSEO,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/SEOServices",
      icon: <FaRobot className="text-4xl mb-4 text-cyan" />,
    },
    {      title: "Cloud-Native Applications",
      description:
        "Developing scalable, secure cloud-native applications designed for global operations with high availability and performance.",
      image: microservices,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/CloudNativeAppDevelopment",
      icon: <FaGlobeAmericas className="text-4xl mb-4 text-cyan" />,
    },    {
      title: "SaaS Development",
      description:
        "Building enterprise-grade SaaS solutions that streamline operations and enhance efficiency for businesses worldwide.",      image: e2w,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/SaaSDevelopment",
      icon: <FaLaptopCode className="text-4xl mb-4 text-cyan" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, culturally-adaptive user interfaces that provide exceptional digital experiences across global markets.",      image: prototyping,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/UIUXDesign",
      icon: <FaGlobeAmericas className="text-4xl mb-4 text-cyan" />,
    },    {
      title: "Quality Assurance",
      description:
        "Ensuring software meets the highest international standards through comprehensive testing and validation processes.",      image: bugTracking,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/QualityAssurance",
      icon: <FaLaptopCode className="text-4xl mb-4 text-cyan" />,
    },
    {
      title: "Staff Augmentation",
      description:
        "Providing skilled global professionals to help you scale your team and achieve your technology goals efficiently.",      image: teamCollaboration,
      bgColor: "from-black to-black-medium",
      learnMoreLink: "/StaffAugmentation",
      icon: <FaGlobeAmericas className="text-4xl mb-4 text-cyan" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Handle automatic slide change
  useEffect(() => {
    let slideTimer;
    
    if (!isPaused && inView) {
      slideTimer = setTimeout(() => {
        if (!transitioning) {
          goToNextSlide();
        }
      }, 5000);
    }
    
    return () => {
      if (slideTimer) clearTimeout(slideTimer);
    };
  }, [currentIndex, transitioning, isPaused, inView]);

  // Functions to handle slide navigation
  const goToPreviousSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };

  const goToNextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (transitioning || index === currentIndex) return;
    
    setTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNextSlide();
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      goToPreviousSlide();
    }
    setIsPaused(false);
  };

  // Framer Motion variants
  const slideVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <div 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Navbar />
      
      {/* Main slider */}
      <AnimatePresence initial={false} custom={currentIndex > (currentIndex - 1 + slides.length) % slides.length ? "right" : "left"}>
        <motion.div
          key={currentIndex}
          custom={currentIndex > (currentIndex - 1 + slides.length) % slides.length ? "right" : "left"}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"          className={`absolute inset-0 flex flex-col md:flex-row items-center w-full h-screen bg-gradient-to-r ${slides[currentIndex].bgColor}`}
        >
          {/* Content section */}
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white space-y-6 pt-24 md:pt-0 order-2 md:order-1">
              {/* Icon with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block p-4 border border-cyan/30 backdrop-blur-md rounded-xl mb-4 elegant-shadow"
              >
                {slides[currentIndex].icon}
              </motion.div>
              
              {/* Title with animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-Tinos leading-tight"
              >
                {slides[currentIndex].title}
              </motion.h1>
              
              {/* Description with animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 max-w-lg"
              >
                {slides[currentIndex].description}
              </motion.p>
              
              {/* CTA button with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >                <Link
                  to={slides[currentIndex].learnMoreLink}
                  className="inline-block px-8 py-4 mt-6 bg-cyan text-black rounded-full font-semibold hover:bg-black hover:text-cyan elegant-transition border border-cyan/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            
            {/* Image section */}
            <div className="w-full md:w-1/2 relative order-1 md:order-2 h-[40vh] md:h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="object-contain max-h-[70vh] max-w-full rounded-lg shadow-2xl border border-cyan/30 elegant-shadow"
                />
                
                {/* Decorative elements */}
                <div className="absolute -z-10 w-60 h-60 bg-cyan/10 rounded-full blur-3xl top-1/4 -left-20"></div>
                <div className="absolute -z-10 w-80 h-80 bg-cyan/5 rounded-full blur-3xl -bottom-10 -right-10"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
        {/* Navigation arrows */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center space-x-6 z-20">
        <button
          onClick={goToPreviousSlide}
          className="p-2 text-cyan/70 hover:text-cyan transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaRegArrowAltCircleLeft className="w-8 h-8" />
        </button>
        
        {/* Indicator dots */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan scale-125" : "bg-cyan/40 hover:bg-cyan/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNextSlide}
          className="p-2 text-cyan/70 hover:text-cyan transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaRegArrowAltCircleRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
