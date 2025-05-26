import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  const faqs = [
    {
      question: "What is Easy2Work?",
      answer: "Easy2Work is a workflow management system designed to streamline business operations by offering customizable tools for managing clients, processing orders, and handling financial transactions."
    },
    {
      question: "How can I customize my workflow?",
      answer: "You can customize workflows by modifying templates, setting custom rates, adjusting processes, and personalizing various aspects of your business operations through our user-friendly interface."
    },
    {
      question: "Is there a mobile app for Easy2Work?",
      answer: "Yes! Easy2Work offers a mobile-friendly interface so you can manage your business processes anytime, anywhere through your mobile browser."
    },
    {
      question: "How secure is my data on Easy2Work?",
      answer: "Your data is securely stored in the cloud with high-level encryption protocols to ensure confidentiality and safety at all times."
    },
    {
      question: "Can I integrate other services with Easy2Work?",
      answer: "Yes, Easy2Work supports integration with a variety of third-party services, allowing you to create a seamless experience across different tools and platforms."
    }
  ];  return (
    <section className="bg-white dark:bg-black pb-16 border-t border-cyan/10">
      {/* Decorative Animated Lines */}
  <div className="w-full flex ">
    {[...Array(26)].map((_, i) => (
      <motion.div
        key={i}
        className="h-[2px] w-full"
        style={{ background: 'linear-gradient(to right, transparent, #05f4f9, transparent)' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
      
        <div className="container mx-auto px-4 pt-16">
        
        
       
        <h2 className="text-4xl md:text-5xl text-black dark:text-white text-center font-Tinos mb-16">
          <span className="relative">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-cyan/20"></span>
          </span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-cyan/30 rounded-lg p-5 transition-all duration-300 ${
                activeIndex === index ? 'bg-black/5 shadow-lg' : 'bg-white'
              } elegant-transition`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-2xl font-semibold text-black">
                  {faq.question}
                </h3>
                <span className="text-cyan">
                  {activeIndex === index ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-2xl" />
                  )}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-4 text-black/80 text-base md:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
