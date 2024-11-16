import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GPTImage from "../assets/images/GPT5Main.jpg"; // Image for the overlay

const ArticleContent = () => {
  const { id } = useParams(); // Get the article ID from the URL

  // Sample article data with detailed content and images
  const articleDetails = [
    {
      id: 1,
      title: "Breaking: GPT-5 Launch Announced",
      image: GPTImage, // The overlay image
      content: [
        {
          subtitle: "Introduction to GPT-5",
          text: "In an unprecedented announcement, OpenAI has introduced GPT-5. It is expected to surpass GPT-4 in terms of language understanding, image processing, and more.",
          image: "https://via.placeholder.com/600x400",
        },
        {
          subtitle: "What’s New in GPT-5?",
          text: "GPT-5 features include improved context awareness, more human-like responses, and better integration with other AI models. Here's a look at some of the biggest changes...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          subtitle: "The Future of AI with GPT-5",
          text: "With its unprecedented capabilities, GPT-5 could change industries such as healthcare, education, and customer service. Let’s explore some real-world applications...",
          image: "https://via.placeholder.com/600x400",
        },
      ],
    },
    // Add more articles here...
  ];

  // Find the article based on ID
  const article = articleDetails.find((article) => article.id === parseInt(id));

  if (!article) return <p>Article not found</p>; // Show if no article found

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    // Smooth scroll to the section
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#F7F2E7]">
      {/* Top Section: Fullscreen Image with Title Overlay */}
      <div className="relative h-screen mb-16">
        {/* Apply the animation class to the image */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75 animate-zoom-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        <div className="relative z-10 h-full flex items-end justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white text-center px-4 leading-snug">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Left Section: Placeholder */}
          <div className="hidden md:block w-1/4"></div>

          {/* Content Section */}
          <div className="w-full md:w-3/4 pr-8">
            {article.content.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className={`mb-12 ${activeIndex === index ? "border-l-4 border-[#00264C]" : ""}`}
              >
                <h2 className="text-3xl font-semibold text-[#00264C] mt-6 mb-4">
                  {section.subtitle}
                </h2>
                <p className="text-lg text-gray-800">{section.text}</p>
                <img
                  src={section.image}
                  alt={section.subtitle}
                  className="w-full h-64 object-cover mt-4 rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Sticky Index Section */}
          <div className="w-full md:w-1/4 sticky top-16 ml-8 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold text-[#00264C] mb-4">Contents</h3>
            <div className="space-y-4 mt-4">
              {article.content.map((section, index) => (
                <p
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer text-lg text-[#00264C] hover:underline ${
                    activeIndex === index ? "font-bold" : ""
                  }`}
                >
                  {section.subtitle}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContent;
