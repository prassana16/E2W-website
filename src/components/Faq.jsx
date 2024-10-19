import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
  ];

  return (
    <section className="bg-[#F7F2E7] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-[#00264c] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#00264c] rounded-lg p-5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-2xl font-semibold text-[#00264c]">
                  {faq.question}
                </h3>
                <span className="text-[#00264c]">
                  {activeIndex === index ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-2xl" />
                  )}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-4 text-[#00264c] text-base md:text-lg">
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
