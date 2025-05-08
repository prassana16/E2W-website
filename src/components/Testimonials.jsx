import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaGlobeAmericas } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechInnovate",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Working with Easy2Work has been transformative for our business. Their AI-powered IBMS solution streamlined our operations and increased our productivity by 35%. The team's expertise and support throughout the implementation process made the transition seamless across our global offices.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Future Systems",
      location: "Singapore",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "The quality of Easy2Work's solutions exceeded our expectations. Their attention to detail and understanding of our industry-specific needs resulted in a custom solution that perfectly addresses our challenges across APAC markets. I highly recommend their services.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Connect",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      text: "Easy2Work's IBMS has revolutionized how we manage our logistics across North America. The platform is intuitive, powerful, and adaptable to our changing needs. Their customer support team is responsive and always ready to help with any questions or issues.",
    },
    {
      id: 4,
      name: "David Mueller",
      position: "CEO",
      company: "Innovate Solutions",
      location: "Berlin, Germany",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      text: "We've worked with several software development companies in the EU, but Easy2Work stands out for their professionalism, expertise, and commitment to excellence. Their AI integration capabilities have significantly improved our efficiency and competitive edge.",
    },
    {
      id: 5,
      name: "Aisha Al-Mansouri",
      position: "Head of Technology",
      company: "FutureTech Enterprises",
      location: "Dubai, UAE",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      rating: 5,
      text: "Easy2Work delivered an exceptional PWA that has transformed our business operations in the Middle East. Their understanding of regional requirements and attention to detail made all the difference. The team's commitment to quality and innovative solutions is unmatched.",
    },
  ];

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000); // Increased to 6 seconds for better readability
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #017598, #05a7be)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23ffffff" fill-opacity=".05"/%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Global Success Stories
          </h2>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
            See how Easy2Work is transforming businesses across the world with our innovative AI-powered solutions.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[500px] md:h-[450px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-500 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.18)'
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-10 left-10 text-white text-opacity-10">
                  <FaQuoteLeft className="text-8xl" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xl ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-white italic mb-8">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#18c4b8]"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-white text-opacity-80">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-white text-opacity-90">
                      <FaGlobeAmericas className="mr-2" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-white w-8"
                      : "bg-white/50 w-3 hover:bg-white/80"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          
          {/* Global presence indicator */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaGlobeAmericas className="text-white mr-2" />
              <span className="text-white text-sm">USA</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaGlobeAmericas className="text-white mr-2" />
              <span className="text-white text-sm">Canada</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaGlobeAmericas className="text-white mr-2" />
              <span className="text-white text-sm">Germany</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaGlobeAmericas className="text-white mr-2" />
              <span className="text-white text-sm">Singapore</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaGlobeAmericas className="text-white mr-2" />
              <span className="text-white text-sm">UAE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
