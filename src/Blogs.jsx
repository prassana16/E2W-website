import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Import Link from React Router
import ItCompanyImage from './assets/images/bannerimg.png';
import GPTImage from './assets/images/GPT5Main.jpg';

const Blogs = () => {
  const [hoveredArticle, setHoveredArticle] = useState(1);

  const heroArticles = [
    {
      id: 1,
      title: "Breaking: GPT-5 Launch Announced",
      image: GPTImage,
      description: "AI beyond imagination—OpenAI takes the next leap!",
    },
    {
      id: 2,
      title: "The Future of Quantum Computing",
      image: ItCompanyImage,
      description: "Exploring the potential of quantum supremacy in 2024.",
    },
    {
      id: 3,
      title: "Web 3.0: Decentralizing the Internet",
      image: GPTImage,
      description: "How Web 3.0 is reshaping the way we browse and transact.",
    },
    {
      id: 4,
      title: "Top 5 Tech Trends to Watch in 2024",
      image: ItCompanyImage,
      description: "From 6G to AI ethics—what's shaping the tech landscape?",
    },
  ];

  return (
    <section className="bg-[#F7F2E7]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6">
            {heroArticles.map((article) => (
              <motion.div
                key={article.id}
                className="group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: article.id * 0.2 }}
                onMouseEnter={() => setHoveredArticle(article.id)} // Set the hovered article
                onMouseLeave={() => setHoveredArticle(1)} // Reset to the first article on mouse leave
              >
                <Link to={`/article/${article.id}`}>
                  <h1 className="text-3xl md:text-5xl font-bold text-[#00264C] leading-snug">
                    <span className="relative group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-[#00264C] after:scale-x-0">
                      {article.title}
                    </span>
                  </h1>
                </Link>
                <p className="text-gray-600 text-lg mt-2">{article.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Use motion.div for smooth transitions */}
            <motion.img
              key={hoveredArticle} // Trigger re-render on hover change
              src={
                heroArticles.find((article) => article.id === hoveredArticle).image
              }
              alt="Hero Section"
              className="rounded-lg shadow-lg w-full h-full object-cover" // Ensure the image fills the container
              initial={{ opacity: 0 }} // Start with opacity 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              transition={{ duration: 0.5 }} // Smooth transition duration
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
