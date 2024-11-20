import React from 'react';
import { FaDesktop } from "react-icons/fa"; // Changed icon to desktop for website development
import { motion } from 'framer-motion';

const WebsiteDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#FA4032] via-[#FF6F59] to-[#FFB6A5] py-16 px-4 font-mono">

  <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">

    {/* Icon and Intro Section */}
    <motion.div 
      className="text-6xl text-[#333]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FaDesktop /> {/* Website development icon */}
    </motion.div>

    <div>
      {/* Header */}
      <h2 className="text-4xl font-semibold text-[#000000] mb-4">Website Development</h2>
      <p className="text-lg text-[#fff] leading-relaxed mb-10">
        A well-crafted website is essential for any business in the digital age. We specialize in building responsive, SEO-friendly, and user-centered websites that leave a lasting impression on your audience and help drive business growth.
      </p>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 gap-8">
        <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Website Development Services:</h3>
          <ul className="list-disc list-inside text-[#191919] text-lg leading-relaxed">
            <li>Custom web design tailored to your brand</li>
            <li>Responsive design for mobile and desktop users</li>
            <li>SEO-friendly structure to enhance visibility</li>
            <li>Fast-loading pages for optimal user experience</li>
            <li>Content Management System (CMS) for easy updates</li>
          </ul>
        </div>

        <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-[#333]">Current Trends in Website Development</h3>
          <p className="text-lg text-[#191919] leading-relaxed">
            The world of website development is always changing. Here are some of the key trends shaping the industry:
          </p>
          <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
            <li><strong>Mobile-First Design:</strong> Designing websites for mobile devices first has become the standard practice as mobile traffic rises.</li>
            <li><strong>Minimalist Web Design:</strong> Clean, simple, and functional designs make it easier for users to navigate and find information.</li>
            <li><strong>Voice Search Optimization:</strong> Optimizing websites for voice search is crucial to staying ahead of the curve.</li>
            <li><strong>Interactive Content:</strong> Quizzes, animations, and videos engage users and improve retention.</li>
            <li><strong>Security Enhancements:</strong> HTTPS, two-factor authentication, and other security measures are now a top priority.</li>
          </ul>
        </div>

        <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-[#333]">Future Trends in Website Development</h3>
          <p className="text-lg text-[#191919] leading-relaxed">
            The future of website development holds exciting possibilities with emerging technologies. Here are some trends to watch out for:
          </p>
          <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
            <li><strong>AI-Powered Personalization:</strong> AI will provide personalized content based on user behavior and preferences.</li>
            <li><strong>Progressive Web Apps (PWA):</strong> Blurring the lines between websites and mobile apps, PWAs offer app-like experiences through the browser.</li>
            <li><strong>Dark Mode:</strong> Gaining popularity for being easier on the eyes and reducing battery usage on OLED screens.</li>
            <li><strong>Motion UI:</strong> Dynamic animations and transitions engage visitors and provide an interactive experience.</li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg">
        <h3 className="text-3xl font-semibold text-[#333]">Ready to Launch Your New Website?</h3>
        <p className="text-lg text-[#191919] mt-4 leading-relaxed">
          Our team is ready to build a stunning, functional website that meets your business needs. Let’s get started on creating a website that works for you and your customers.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#FF4545] transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default WebsiteDevelopment;
