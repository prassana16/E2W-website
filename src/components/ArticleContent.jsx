import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GPTImage from '../assets/images/GPT5Main.jpg';


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
    {
      id: 2,
      title: "The Future of Quantum Computing",
      image: "https://via.placeholder.com/1200x600", // The overlay image
      content: [
        {
          subtitle: "What is Quantum Computing?",
          text: "Quantum computing is a new type of computing that leverages the principles of quantum mechanics to solve complex problems. Here’s an overview of how it works...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          subtitle: "Potential Applications of Quantum Computing",
          text: "From drug discovery to cryptography, quantum computing could revolutionize various fields. This section explores some of the most exciting applications of quantum tech...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          subtitle: "Challenges and Opportunities",
          text: "Despite its promises, quantum computing still faces significant challenges, such as error correction and hardware limitations. Let's dive into these issues and the opportunities they present...",
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
    <section className="bg-[#F7F2E7] py-16">
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Left Section: Article Content */}
          <div className="w-full md:w-3/4 pr-8">
            {/* Title and Image Overlay */}
            <div className="relative mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60"
              />
              <h1 className="text-5xl font-extrabold text-[#00264C] leading-tight relative z-10 p-8">
                {article.title}
              </h1>
            </div>

            <div>
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
                </div>
              ))}
            </div>

            {/* Related Articles Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-extrabold text-[#00264C]">Related Articles</h3>
              <div className="mt-6 space-y-4">
                {articleDetails
                  .filter((relatedArticle) => relatedArticle.id !== article.id) // Filter out the current article
                  .map((relatedArticle) => (
                    <div key={relatedArticle.id} className="space-y-2">
                      <h4 className="text-xl text-[#00264C] font-semibold">{relatedArticle.title}</h4>
                      <p className="text-gray-600">{relatedArticle.content[0].text}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Section: Subtitles Index */}
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
