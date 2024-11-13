import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebDevImage from '../assets/images/websitebanner2.png';
import SoftwareDevImage from '../assets/images/softwarebanner2.png';
import SeoImage from '../assets/images/seobanner2.png';
import ItCompanyImage from '../assets/images/bannerimg.png';

const Banner = () => {
  const slides = [
    {
      title: 'Welcome to Easy2Work India',
      description: 'we are collabrating with high quality professionals across the worlds.',
      image: ItCompanyImage,
    },
    {
      title: 'Web Development',
      description: 'Building responsive and scalable websites with the latest technologies.',
      image: WebDevImage,
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions designed to streamline your business operations.',
      image: SoftwareDevImage,
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Optimizing your presence online with SEO strategies and digital marketing campaigns.',
      image: SeoImage,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide automatically every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Change slide on button click
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#00264c] text-[#fceecf] pt-16 bg-[radial-gradient(ellipse_at_center,_#013469,_#00264c)]"
>
      
        {/* Slide Wrapper */}
        <AnimatePresence initial={false}>
          <motion.div
            className="flex justify-center items-center py-7"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4">
              {/* Left Side Content */}
              <div className="flex flex-col items-start space-y-4 md:w-1/2">
                <motion.h2
                  className="text-3xl md:text-5xl font-RozhaOne font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-[#fceecf] opacity-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              {/* Right Side Image */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <motion.img
                  src={slides[currentSlide].image}
                  alt="Slide Image"
                  className="w-full max-w-md rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-1/2 md:bottom-1/2 left-0 right-0 flex justify-between items-center z-10">
          <button
            onClick={handlePrev}
            className="text-[#00264c] p-2 md:p-3 font-bold text-2xl rounded-r-lg md:rounded-r-2xl bg-[#F7F2E7] shadow-md transition"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="text-[#00264c] p-2 md:p-3 font-bold text-2xl rounded-l-lg md:rounded-l-2xl bg-[#F7F2E7] shadow-md transition"
          >
            &#8250;
          </button>
        </div>
      

      {/* Decorative Stripes */}
      <div className="flex items-center justify-center mt-16 z-10">
        {/* Left Decorative Stripes */}
        <div className="w-1/2 flex flex-col items-center ">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((width, i) => (
            <motion.div
              key={i}
              className="bg-[#F7F2E7] h-[3px] md:h-[8px]"
              initial={{ width: '0%' }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Right Decorative Stripes */}
        <div className="w-1/2 flex flex-col items-center">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((width, i) => (
            <motion.div
              key={i + 10}
              className="bg-[#F7F2E7] h-[3px] md:h-[8px]"
              initial={{ width: '0%' }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.5, delay: (i + 10) * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
