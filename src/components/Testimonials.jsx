import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaGlobeAmericas, FaArrowLeft, FaArrowRight, FaUserCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';
import BajajAuto from '../assets/images/bajaj Auto.png';
import BajajFinance from '../assets/images/Bajaj.png';
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef(null);
  const autoplayTimeoutRef = useRef(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Testimonial data with enhanced details
  const testimonials = [
    {
      id: 1,
      name: "Baleen Media",
      company: "Advertising Agency",
      image: Baleen,
      location: "Chennai, India",
      rating: 5,
      text: "The Easy2Work platform has become a core part of our daily business operations. From managing client tasks to team communication, the Easy2Work application delivers performance and accessibility that helps us stay efficient and organized. We’ve seen a clear improvement in productivity since adopting it.",
      project: "Easy2work IBMS Implementation",
    },
    {
      id: 2,
      name: "Grace Scans",
      company: "Medical Scan Center",
      location: "Theni, India",
      image: Gracescans,
      rating: 5,
      text: "The quality of Easy2Work's solutions exceeded our expectations. Their attention to detail and understanding of our industry-specific needs resulted in a custom solution that perfectly addresses our challenges across APAC markets. I highly recommend their services.",
      project: "Easy2work IBMS Implementation",
    },
    {
      id: 3,
      name: "Namma Bajaj Auto",
      company: "Automobile dealership",
      location: "Chennai, India",
      image: BajajAuto,
      rating: 4.5,
      text: "Easy2Work’s Meta Ads services have streamlined our digital marketing in Chennai. The platform is easy to use, results-driven, and flexible to our needs. Their local support team is responsive and always ready to help. We've seen better reach, higher conversions, and real growth.",
      project: "Digital marketing",
    },
    
  ];

  // Reset autoplay timeout when component unmounts or when autoplay state changes
  useEffect(() => {
    if (autoplay) {
      const startAutoplay = () => {
        clearTimeout(autoplayTimeoutRef.current);
        autoplayTimeoutRef.current = setTimeout(() => {
          goToNext();
        }, 5000); // 5 second interval
      };
      
      startAutoplay();
      
      return () => {
        clearTimeout(autoplayTimeoutRef.current);
      };
    }
  }, [autoplay, activeIndex]);
  
  // Pause autoplay when not in view
  useEffect(() => {
    if (!inView) {
      setAutoplay(false);
    } else if (!isDragging) {
      setAutoplay(true);
    }
  }, [inView, isDragging]);

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    // Reset autoplay after manual navigation
    if (autoplay) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    // Reset autoplay after manual navigation
    if (autoplay) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    
    // Reset autoplay after manual navigation
    if (autoplay) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };
  
  // Touch and mouse event handlers for swiping
  const handleDragStart = (e) => {
    setIsDragging(true);
    setAutoplay(false);
    
    const clientX = e.type.includes('mouse') 
      ? e.clientX 
      : e.touches[0].clientX;
      
    setDragStartX(clientX);
    setDragDistance(0);
  };
  
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type.includes('mouse') 
      ? e.clientX 
      : e.touches[0].clientX;
      
    const distance = clientX - dragStartX;
    setDragDistance(distance);
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    if (Math.abs(dragDistance) > 100) { // Threshold for slide change
      if (dragDistance > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    setIsDragging(false);
    setDragDistance(0);
    
    // Resume autoplay after interaction
    setAutoplay(true);
  };
    // Generate an array of rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const roundedRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-cyan" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-cyan" />);
    }
      // Add empty stars to make total of 5
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-black/20 dark:text-white/20" />);
    }
    
    return stars;
  };

  // Animation variants for testimony cards
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };
  
  // Container animation when it comes into view
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  // Animation for individual elements inside the container
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-white dark:bg-black border-t border-b border-cyan/10 overflow-hidden"
    >
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h5 className="text-cyan font-medium mb-2">Testimonials</h5>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Tinos font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-black/80">
            Don't just take our word for it. Here's what our partners and clients around the world have to say about working with Easy2Work.
          </p>
        </motion.div>
        
        {/* Testimonials slider */}
        <motion.div 
          variants={itemVariants}
          className="max-w-5xl mx-auto relative"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {/* Left/Right navigation buttons for desktop */}
          <div className="hidden md:block">            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-black text-cyan hover:bg-cyan hover:text-black p-3 rounded-full shadow-lg z-10 focus:outline-none border border-cyan/30 transform transition-all hover:scale-105 elegant-shadow"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-black text-cyan hover:bg-cyan hover:text-black p-3 rounded-full shadow-lg z-10 focus:outline-none border border-cyan/30 transform transition-all hover:scale-105 elegant-shadow"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
          
          {/* Main testimonial card */}
          <div 
            className="relative overflow-hidden" 
            style={{
              transform: isDragging ? `translateX(${dragDistance}px)` : 'translateX(0)',
              transition: isDragging ? 'none' : 'transform 0.3s ease'
            }}
          >
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"                className="bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden border border-cyan/20 elegant-shadow"
              >
                <div className="lg:flex">
                  {/* Left decoration side with image */}
                  <div className="relative lg:w-2/5 bg-black p-8 flex flex-col justify-between border-r border-cyan/20">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#05f4f9" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                      </svg>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <FaQuoteLeft className="text-3xl text-white/30" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-10 opacity-0 lg:opacity-100">
                          {/* Hidden content on mobile, just for spacing */}
                          Testimonial
                        </div>
                      </div>
                    </div>
                    
                    {/* Image and location */}
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-white/20 shadow-inner mb-3">
                        {testimonials[activeIndex].image ? (
                          <img 
                            src={testimonials[activeIndex].image} 
                            alt={testimonials[activeIndex].name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : (
                          <FaUserCircle className="w-full h-full text-white/80" />
                        )}                        <div 
                          className="absolute inset-0 items-center justify-center bg-black text-white hidden"
                          style={{ display: 'none' }}
                        >
                          <FaUserCircle className="w-3/4 h-3/4" />
                        </div>
                      </div>
                      <div className="flex items-center text-white/80">
                        <FaGlobeAmericas className="text-xs mr-1.5" />
                        <span className="text-sm">{testimonials[activeIndex].location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side with content */}
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <div className="h-full flex flex-col justify-between">
                      <div>                        {/* Project/Service tag */}
                        <div className="inline-block px-3 py-1 rounded-full bg-black/10 dark:bg-black text-black dark:text-cyan text-xs font-semibold mb-4 border border-cyan/30">
                          {testimonials[activeIndex].project}
                        </div>
                        
                        {/* Testimonial text */}
                        <blockquote className="text-black dark:text-white text-lg leading-relaxed mb-6">
                          "{testimonials[activeIndex].text}"
                        </blockquote>
                      </div>
                      
                      <div>                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-1">
                            {renderRatingStars(testimonials[activeIndex].rating)}
                          </div>
                          <span className="ml-2 text-black/60 dark:text-white/60 text-sm">
                            {testimonials[activeIndex].rating}/5
                          </span>
                        </div>
                          {/* Author info */}
                        <div>
                          <h4 className="text-black dark:text-white text-lg font-medium">{testimonials[activeIndex].name}</h4>
                          <p className="text-black/60 dark:text-white/60">
                            {testimonials[activeIndex].position ? `${testimonials[activeIndex].position}, ` : ''}{testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex                    ? "w-8 bg-cyan" 
                    : "w-2.5 bg-white dark:bg-black hover:bg-cyan"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
          
          {/* Autoplay control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`text-xs font-medium px-4 py-2 rounded-full transition-colors ${                autoplay 
                  ? "bg-cyan dark:bg-cyan text-black dark:text-black" 
                  : "bg-white dark:bg-black text-black dark:text-white border border-cyan dark:border-cyan"
              }`}
              aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
            >
              {autoplay ? "Autoplay On" : "Autoplay Off"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
