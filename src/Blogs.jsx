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
    {
      id: 5,
      title: "Mastering SEO in 2024: Top Strategies for Success",
      image:GPTImage,
      description: "Dominate search rankings with the latest SEO techniques and trends.",
    },
    {
      id: 6,
      title: "The Evolution of Digital Marketing: Trends for the Next Decade",
      image:GPTImage,
      description: "From AI to personalization—how digital marketing is transforming businesses.",
    },
    {
      id: 7,
      title: "Cloud Computing in 2024: The Future of Scalable Solutions",
      image:GPTImage,
      description: "Learn how cloud technologies are driving innovation and flexibility.",
    },
    {
      id: 8,
      title: "The Role of UI/UX in Modern Web Design",
      image:GPTImage,
      description: "Why great design is more than aesthetics—it's about user experience.",
    },
    {
      id: 9,
      title: "Cybersecurity in 2024: Protecting Your Business in the Digital Age",
      image:GPTImage,
      description: "Key cybersecurity trends and tips to keep your data safe.",
    },
    {
      id: 10,
      title: "Mobile-First Strategies: How to Build for the Future",
      image:GPTImage,
      description: "Why optimizing for mobile is no longer optional in today’s digital world.",
    },
    {
      id: 11,
      title: "How AI is Transforming Digital Marketing Campaigns",
      image:GPTImage,
      description: "Explore how AI tools are personalizing marketing efforts like never before.",
    },
    {
      id: 12,
      title: "Data Analytics: Turning Numbers into Business Insights",
      image:GPTImage,
      description: "How businesses can leverage data for informed decision-making.",
    },
    {
      id: 13,
      title: "Chatbots and Beyond: The Future of Customer Engagement",
      image:GPTImage,
      description: "AI-driven tools to enhance customer experience in real-time.",
    },
    {
      id: 14,
      title: "PPC Advertising Trends: Maximizing ROI in 2024",
      image:GPTImage,
      description: "Tips to get the most out of pay-per-click advertising campaigns.",
    },
    {
      id: 15,
      title: "The Importance of Brand Storytelling in Digital Marketing",
      image:GPTImage,
      description: "Connect with your audience through compelling narratives.",
    },
    {
      id: 16,
      title: "The Rise of Progressive Web Apps (PWAs)",
      image:GPTImage,
      description: "Why PWAs are becoming the go-to choice for mobile-friendly websites.",
    },
    {
      id: 17,
      title: "Voice Search Optimization: Are You Ready for the Future?",
      image:GPTImage,
      description: "How to optimize your website for the growing voice search market.",
    },
    {
      id: 18,
      title: "The Role of Automation in Digital Marketing",
      image:GPTImage,
      description: "Streamline your marketing efforts with cutting-edge automation tools.",
    },
    {
      id: 19,
      title: "Building a Strong Online Presence for Small Businesses",
      image:GPTImage,
      description: "Affordable strategies to grow your business in the digital era.",
    },
    {
      id: 20,
      title: "Content Marketing Strategies for 2024: What Works Now",
      image:GPTImage,
      description: "Create engaging content that drives traffic and conversions.",
    }
    
  ];

  return (
    <section className="bg-gradient-to-b from-[#F7F2E7] to-[#EAE6D9] pb-12">
      {/* Hero Section */}
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative shadow-2xl overflow-hidden"
      >
        {/* Hero Image */}
        <motion.img
          key={hoveredArticle}
          src={
            heroArticles.find((article) => article.id === hoveredArticle).image
          }
          alt="Hero Section"
          className="w-full max-h-[550px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
       
      </motion.div>
    </div>

  <div className=" mx-auto px-6 sm:px-8 lg:px-16">
    

    {/* Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 mt-12">
      {heroArticles.map((article) => (
        <motion.div
          key={article.id}
          className="border border-purple-900 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 space-y-4 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: article.id * 0.1 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="rounded-md w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold text-[#00264C] group-hover:text-[#0070F3] transition duration-300">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {article.description}
          </p>
          <Link
            to={`/article/${article.id}`}
            className="text-sm font-bold text-[#0070F3] hover:underline"
          >
            Read More →
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>



  );
};

export default Blogs;
