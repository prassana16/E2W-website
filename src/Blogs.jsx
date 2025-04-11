import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Import Link from React Router
import ItCompanyImage from './assets/images/quantum.jpg';
import GPTImage from './assets/images/GPT5Main.jpg';
import web3 from './assets/images/wed3.jpg';
import trends from "./assets/images/tech-trends.jpg"
import AIDigi from './assets/images/Blog-img/AI-digi.jpg'; 
import Automation from './assets/images/Blog-img/Automation.jpg';
import BrandStorytelling from './assets/images/Blog-img/Brand-Storytelling.jpg';
import Chatbots from './assets/images/Blog-img/Chatbots.jpg';
import CloudComp from './assets/images/Blog-img/Cloud-comp.jpg';
import ContentMarketing from './assets/images/Blog-img/Content-Marketing.jpg';
import Cybersecurity from './assets/images/Blog-img/Cybersecurity.jpg';
import DataAnalytics from './assets/images/Blog-img/Data Analytics.jpg';
import EvolutionDigi from './assets/images/Blog-img/Evolution-digi.jpg';
import MasteringSEO from './assets/images/Blog-img/Mastering-SEO.jpg';
import MobileFirst from './assets/images/Blog-img/Mobile-First.jpg';
import PPCAdvertising from './assets/images/Blog-img/PPC-Advertising.jpg';
import PWAs from './assets/images/Blog-img/PWAs.jpg';
import RoleOfUIUX from './assets/images/Blog-img/Role-of-UIUX.jpg';
import SmallBusinesses from './assets/images/Blog-img/Small-Businesses.jpg';
import VoiceSearch from './assets/images/Blog-img/Voice-Search.jpg';
import banner from './assets/images/Blog-img/blog-banner.jpg';

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
      image: web3,
      description: "How Web 3.0 is reshaping the way we browse and transact.",
    },
    {
      id: 4,
      title: "Top 5 Tech Trends to Watch in 2024",
      image: trends,
      description: "From 6G to AI ethics—what's shaping the tech landscape?",
    },
    {
      id: 5,
      title: "Mastering SEO in 2024: Top Strategies for Success",
      image: MasteringSEO,
      description: "Dominate search rankings with the latest SEO techniques and trends.",
    },
    {
      id: 6,
      title: "The Evolution of Digital Marketing: Trends for the Next Decade",
      image: EvolutionDigi,
      description: "From AI to personalization—how digital marketing is transforming businesses.",
    },
    {
      id: 7,
      title: "Cloud Computing in 2024: The Future of Scalable Solutions",
      image: CloudComp,
      description: "Learn how cloud technologies are driving innovation and flexibility.",
    },
    {
      id: 8,
      title: "The Role of UI/UX in Modern Web Design",
      image: RoleOfUIUX,
      description: "Why great design is more than aesthetics—it's about user experience.",
    },
    {
      id: 9,
      title: "Cybersecurity in 2024: Protecting Your Business in the Digital Age",
      image: Cybersecurity,
      description: "Key cybersecurity trends and tips to keep your data safe.",
    },
    {
      id: 10,
      title: "Mobile-First Strategies: How to Build for the Future",
      image: MobileFirst,
      description: "Why optimizing for mobile is no longer optional in today’s digital world.",
    },
    {
      id: 11,
      title: "How AI is Transforming Digital Marketing Campaigns",
      image: AIDigi,
      description: "Explore how AI tools are personalizing marketing efforts like never before.",
    },
    {
      id: 12,
      title: "Data Analytics: Turning Numbers into Business Insights",
      image: DataAnalytics,
      description: "How businesses can leverage data for informed decision-making.",
    },
    {
      id: 13,
      title: "Chatbots and Beyond: The Future of Customer Engagement",
      image: Chatbots,
      description: "AI-driven tools to enhance customer experience in real-time.",
    },
    {
      id: 14,
      title: "PPC Advertising Trends: Maximizing ROI in 2024",
      image: PPCAdvertising,
      description: "Tips to get the most out of pay-per-click advertising campaigns.",
    },
    {
      id: 15,
      title: "The Importance of Brand Storytelling in Digital Marketing",
      image: BrandStorytelling,
      description: "Connect with your audience through compelling narratives.",
    },
    {
      id: 16,
      title: "The Rise of Progressive Web Apps (PWAs)",
      image: PWAs,
      description: "Why PWAs are becoming the go-to choice for mobile-friendly websites.",
    },
    {
      id: 17,
      title: "Voice Search Optimization: Are You Ready for the Future?",
      image: VoiceSearch,
      description: "How to optimize your website for the growing voice search market.",
    },
    {
      id: 18,
      title: "The Role of Automation in Digital Marketing",
      image: Automation,
      description: "Streamline your marketing efforts with cutting-edge automation tools.",
    },
    {
      id: 19,
      title: "Building a Strong Online Presence for Small Businesses",
      image: SmallBusinesses,
      description: "Affordable strategies to grow your business in the digital era.",
    },
    {
      id: 20,
      title: "Content Marketing Strategies for 2024: What Works Now",
      image: ContentMarketing,
      description: "Create engaging content that drives traffic and conversions.",
    },
  
    
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
      src={banner}
      alt="Hero Section"
      className="w-full max-h-[550px] object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    
    {/* Title Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <h1 className="text-4xl md:text-5xl lg:text-8xl text-white font-bold text-center ">
        WELCOME TO OUR BLOG
      </h1>
    </div>
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
