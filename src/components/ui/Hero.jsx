import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';

const Hero = ({ 
  title, 
  subtitle,
  description,
  image,
  primaryCTA = "Contact Us",
  secondaryCTA = "Learn More",
  primaryCTALink = "/ContactForm",
  secondaryCTALink = "/AboutE2w",
}) => {
  // Track if component is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Animation for the hero content
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Mouse parallax effect
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
        x: previousX * 20, // Adjust magnitude of movement
        y: previousY * 20,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    },
  };
  
  return (
    <section ref={ref} className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-white dark:bg-black border-b border-cyan/10">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" 
               style={{
                 backgroundImage: 'radial-gradient(#05f4f9 1px, transparent 1px)', 
                 backgroundSize: '30px 30px'
               }} 
          />
        </div>
        
        {/* Gradient blobs */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full opacity-10 bg-cyan blur-3xl"
          animate={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className="absolute -bottom-[20%] -left-[10%] w-[30%] h-[30%] rounded-full opacity-10 bg-cyan blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        
        {/* Animated lines */}
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="h-px w-16 md:w-32 bg-cyan/30"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: inView ? 1 : 0, 
                opacity: inView ? 1 : 0 
              }}
              transition={{ 
                delay: i * 0.2 + 0.5, 
                duration: 0.8,
                ease: "easeOut" 
              }}
              style={{ originX: 0 }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-black dark:text-cyan bg-cyan/10 dark:bg-black border border-cyan/20 rounded-full animate-border-pulse">
                {subtitle || "Intelligent Enterprise Solutions"}
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white"
              variants={itemVariants}
            >
              <span className="relative">
                {title || "Transform Your Business With"}
                <span className="relative z-10 text-shimmer-cyan"> AI-Powered</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-cyan/20"></span>
              </span>
              <br />
              <span className="text-black dark:text-white">Enterprise Software</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-black/80 dark:text-white/80 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {description || "Custom software solutions designed to optimize your business processes, enhance operational efficiency, and drive growth in the global marketplace."}
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button 
                variant="primary" 
                size="lg" 
                to={primaryCTALink}
                icon={<FaArrowRight />}
              >
                {primaryCTA}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                to={secondaryCTALink}
              >
                {secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Image container with highlight effects */}
              <motion.div
                className="rounded-2xl overflow-hidden border-2 border-cyan/20 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: mousePosition.x * 0.05,
                  rotateX: mousePosition.y * -0.05,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              >
                <img 
                  src={image || "/bannerimg.png"} 
                  alt="Easy2Work Enterprise Solutions" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Cyan overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-70"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan"></div>
              </motion.div>
              
              {/* Background shine effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan/50 via-transparent to-cyan/50 -z-10 blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
