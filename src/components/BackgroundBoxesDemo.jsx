"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence, useMotionTemplate, useTransform } from "framer-motion";
import Easy2workLogo from "/EASY2Work-Logo.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Link } from "react-router-dom";
import { SparklesCore } from "./ui/sparkles";
import { useInView } from "react-intersection-observer";

export function BackgroundBoxesDemo() {
  // Title animation text
  const words = [
    {
      text: "Easy2Work.",
      className: "text-5xl md:text-7xl xl:text-9xl font-bold text-white font-Tinos",
    },
  ];

  // Tagline with changing words
  const taglines = [
    "Elevating Business with Intelligent Solutions",
    "Transforming Ideas into Digital Reality",
    "Enterprise Software Development Experts",
    "AI-Powered Business Solutions",
    "Global Technology Partners"
  ];
  
  const locations = ["USA", "Canada", "Germany", "Singapore", "Dubai"];
  const [currentTagline, setCurrentTagline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controlsLogo = useAnimation();
  const controlsText = useAnimation();
  const controlsTagline = useAnimation();
  const controlsButton = useAnimation();
  const controlsLocations = useAnimation();
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Mouse parallax effect with smoother tracking
  useEffect(() => {
    let previousX = 0;
    let previousY = 0;
    const smoothFactor = 0.1; // Lower = smoother
    
    const handleMouseMove = (e) => {
      const newX = e.clientX / window.innerWidth - 0.5;
      const newY = e.clientY / window.innerHeight - 0.5;
      
      // Apply smoothing
      previousX = previousX + (newX - previousX) * smoothFactor;
      previousY = previousY + (newY - previousY) * smoothFactor;
      
      setMousePosition({
        x: previousX,
        y: previousY,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Enhanced animations when component comes into view
  useEffect(() => {
    if (inView) {
      const staggerDelay = 0.12;
      
      controlsLogo.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
          scale: {
            type: "spring",
            stiffness: 100,
            damping: 10
          }
        }
      });
      
      controlsText.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: staggerDelay, 
          ease: [0.25, 0.1, 0.25, 1] 
        }
      });
      
      controlsTagline.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: staggerDelay * 2, 
          ease: [0.25, 0.1, 0.25, 1] 
        }
      });
      
      controlsLocations.start({
        opacity: 1,
        scale: 1,
        transition: { 
          duration: 0.8, 
          delay: staggerDelay * 3, 
          ease: [0.25, 0.1, 0.25, 1] 
        }
      });
      
      controlsButton.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: staggerDelay * 4, 
          ease: [0.25, 0.1, 0.25, 1] 
        }
      });
    } else {
      controlsLogo.start({ opacity: 0, y: 20, scale: 0.95 });
      controlsText.start({ opacity: 0, y: 30 });
      controlsTagline.start({ opacity: 0, y: 30 });
      controlsLocations.start({ opacity: 0, scale: 0.9 });
      controlsButton.start({ opacity: 0, y: 30 });
    }
  }, [inView, controlsLogo, controlsText, controlsTagline, controlsLocations, controlsButton]);
  // Change tagline with smooth transitions and better responsiveness
  useEffect(() => {
    // Make sure taglines fit properly on different screen sizes
    const handleResize = () => {
      // Force a re-render to update the layout when screen size changes
      setCurrentTagline(currentTagline => currentTagline);
    };

    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [taglines.length]);

  // Advanced gradient animation for background
  const bgRef = useRef(null);
  useEffect(() => {
    if (!bgRef.current) return;
    
    let xDirection = 1;
    let yDirection = 1;
    let time = 0;
    
    const gradientAnimation = () => {
      const animate = () => {
        time += 0.003; // Slower speed for more subtle movement
        
        if (bgRef.current) {
          // Create a more organic, flowing movement
          const x = Math.sin(time) * Math.cos(time * 0.5) * 8; 
          const y = Math.cos(time) * Math.sin(time * 0.3) * 8;
          
          bgRef.current.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
        }
        
        requestAnimationFrame(animate);
      };
      
      return requestAnimationFrame(animate);
    };
    
    const animationId = gradientAnimation();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Main render content with improved accessibility and animations
  return (
    <div
      ref={ref}
      className="h-[90vh] md:h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center"
      aria-label="Easy2Work hero section"
    >
      {/* Enhanced gradient background with improved colors and animation */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, 
            rgba(45,27,105,1) 0%, 
            rgba(77,14,72,0.95) 45%, 
            rgba(98,0,120,0.9) 100%)`,
          backgroundSize: "200% 200%",
          transition: "background-position 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
        aria-hidden="true"
      />

      {/* Improved animated particles with better performance */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={30} // Reduced for better performance
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.4} // Slightly slower for elegance
        />
      </div>
      
      {/* Enhanced decorative elements with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Primary decorative shape */}
        <motion.div
          className="absolute top-1/4 -right-[5%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-purple-500/15 to-transparent backdrop-blur-[80px]"
          style={{
            x: useMotionTemplate`${useTransform(
              () => mousePosition.x * -20,
              (value) => `${value}px`
            )}`,
            y: useMotionTemplate`${useTransform(
              () => mousePosition.y * -20,
              (value) => `${value}px`
            )}`,
          }}
        />
        
        {/* Secondary decorative shape */}
        <motion.div
          className="absolute bottom-1/4 -left-[5%] w-[28vw] h-[28vw] rounded-full bg-gradient-to-br from-pink-500/15 to-transparent backdrop-blur-[80px]"
          style={{
            x: useMotionTemplate`${useTransform(
              () => mousePosition.x * 20,
              (value) => `${value}px`
            )}`,
            y: useMotionTemplate`${useTransform(
              () => mousePosition.y * 20,
              (value) => `${value}px`
            )}`,
          }}
        />
        
        {/* Additional subtle accent shapes */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-[15vw] h-[15vw] rounded-full bg-gradient-to-bl from-blue-500/10 to-transparent backdrop-blur-[60px]"
          style={{
            x: useMotionTemplate`${useTransform(
              () => mousePosition.x * 15,
              (value) => `${value}px`
            )}`,
            y: useMotionTemplate`${useTransform(
              () => mousePosition.y * 15,
              (value) => `${value}px`
            )}`,
          }}
        />
        
        <motion.div
          className="absolute top-1/3 left-1/4 w-[12vw] h-[12vw] rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent backdrop-blur-[60px]"
          style={{
            x: useMotionTemplate`${useTransform(
              () => mousePosition.x * -12,
              (value) => `${value}px`
            )}`,
            y: useMotionTemplate`${useTransform(
              () => mousePosition.y * -12,
              (value) => `${value}px`
            )}`,
          }}
        />
      </div>

      {/* Content container with proper semantic structure */}
      <div className="container relative z-20 px-4 md:px-0 flex flex-col items-center">
        {/* Logo with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={controlsLogo}
          className="mb-8"
        >
          <img 
            src={Easy2workLogo} 
            alt="Easy2Work Logo" 
            className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl"
          />
        </motion.div>
        
        {/* Main heading with improved text generation effect */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controlsText}
          className="text-center mb-6"
        >
          <TextGenerateEffect words={words} />
        </motion.div>
        
        {/* Enhanced animated tagline with smoother transitions */}        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controlsTagline}
          className="text-center mb-12 w-full"
        >
          <div className="relative h-16 sm:h-14 md:h-12" aria-live="polite">
            <AnimatePresence mode="wait">
              <AnimatedTagline key={currentTagline} tagline={taglines[currentTagline]} />
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Enhanced global presence indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controlsLocations}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.2 }
              }}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium 
                        border border-white/20 transition-all duration-300 shadow-lg shadow-purple-900/20"
            >
              {location}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced CTA buttons with better hover effects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controlsButton}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link to="/ContactForm" aria-label="Contact Us">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(98, 0, 120, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-[#2D1B69] rounded-full font-medium 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2D1B69]"
            >
              Get in Touch
            </motion.button>
          </Link>
          
         
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator with better animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Enhanced component for animated tagline with better transitions
const AnimatedTagline = ({ tagline }) => {  return (
    <motion.p
      key={tagline}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light absolute left-0 right-0 px-4 mx-auto"
      style={{ maxWidth: '100%', overflowWrap: 'break-word', hyphens: 'auto' }}
    >
      {tagline}
    </motion.p>
  );
};
