import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechInnovate",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Working with Easy2Work has been transformative for our business. Their IBMS solution streamlined our operations and increased our productivity by 35%. The team's expertise and support throughout the implementation process made the transition seamless.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Future Systems",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "The quality of Easy2Work's solutions exceeded our expectations. Their attention to detail and understanding of our industry-specific needs resulted in a custom solution that perfectly addresses our challenges. I highly recommend their services to any business looking to optimize their operations.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Connect",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      text: "Easy2Work's ILMS has revolutionized how we manage our logistics. The platform is intuitive, powerful, and adaptable to our changing needs. Their customer support team is responsive and always ready to help with any questions or issues.",
    },
    {
      id: 4,
      name: "David Park",
      position: "CEO",
      company: "Innovate Solutions",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      text: "We've worked with several software development companies in the past, but Easy2Work stands out for their professionalism, expertise, and commitment to excellence. Their team took the time to understand our business goals and delivered a solution that has significantly improved our efficiency.",
    },
  ];

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
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
    <div className="py-20 bg-gradient-to-b from-primary-800 to-primary-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[450px] md:h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-500 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-10 left-10 text-primary-300 opacity-20">
                  <FaQuoteLeft className="text-6xl" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xl ${
                            i < testimonial.rating
                              ? "text-primary-300"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-gray-100 italic mb-8">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary-300"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-200">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full transition duration-300"
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary-300 w-8"
                      : "bg-primary-600 hover:bg-primary-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full transition duration-300"
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
