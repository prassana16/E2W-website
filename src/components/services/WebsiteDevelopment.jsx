import React from 'react';
import { FaDesktop } from "react-icons/fa"; // Changed icon to desktop for website development
import { motion } from 'framer-motion';

const WebsiteDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#f2bdad] to-[#ff5f2e] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaDesktop /> {/* Website development icon */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Website Development</h2>
          <p className="text-lg text-[#fff] leading-relaxed">
            A well-crafted website is essential for any business in the digital age. We specialize in building responsive, SEO-friendly, and user-centered websites that leave a lasting impression on your audience and help drive business growth.
          </p>
          
          {/* Key Features */}
          <div className="mt-10 space-y-6">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Website Development Services:</h3>
            <ul className="list-disc list-inside text-[#fff] text-lg leading-relaxed">
              <li>Custom web design tailored to your brand</li>
              <li>Responsive design for mobile and desktop users</li>
              <li>SEO-friendly structure to enhance visibility</li>
              <li>Fast-loading pages for optimal user experience</li>
              <li>Content Management System (CMS) for easy updates</li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="mt-8">
            <img
              src="path/to/website-development-image.jpg" // Replace with actual path
              alt="Website Development"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Current Trends Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Website Development</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              The world of website development is always changing. Here are some of the key trends shaping the industry:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Mobile-First Design:</strong> With mobile traffic continuing to rise, designing websites for mobile devices first has become the standard practice.</li>
              <li><strong>Minimalist Web Design:</strong> Clean, simple, and functional designs are trending, making it easier for users to navigate and find information.</li>
              <li><strong>Voice Search Optimization:</strong> As voice assistants gain popularity, optimizing websites for voice search is crucial to staying ahead of the curve.</li>
              <li><strong>Interactive Content:</strong> Engaging users through interactive elements such as quizzes, animations, and videos helps improve user retention.</li>
              <li><strong>Security Enhancements:</strong> As cyber threats increase, website security (e.g., HTTPS, two-factor authentication) is becoming a top priority.</li>
            </ul>
          </div>

          {/* Future Trends Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Future Trends in Website Development</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              The future of website development holds exciting possibilities with emerging technologies. Here are some trends to watch out for:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>AI-Powered Personalization:</strong> Websites will increasingly use AI to provide personalized content based on user behavior and preferences.</li>
              <li><strong>Progressive Web Apps (PWA):</strong> Blurring the lines between websites and mobile apps, PWAs offer an app-like experience directly through the browser.</li>
              <li><strong>Dark Mode:</strong> Dark mode is gaining popularity as it’s easier on the eyes and reduces battery usage on OLED screens.</li>
              <li><strong>Motion UI:</strong> Websites will use more dynamic animations and transitions to engage visitors and provide an interactive experience.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Launch Your New Website?</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              Our team is ready to build a stunning, functional website that meets your business needs. Let’s get started on creating a website that works for you and your customers.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#ff471a] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
