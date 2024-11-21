import React from 'react';
import { FaSearch } from "react-icons/fa"; // Search icon for SEO services
import { motion } from 'framer-motion';

const SEOServices = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#adc7f2] to-[#2e46ff] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaSearch /> {/* Search icon for SEO services */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">SEO Services</h2>
          <p className="text-lg text-[#201e1e] leading-relaxed">
            In today’s digital world, SEO is crucial for improving your website’s visibility and ensuring that your target audience finds you. Our SEO services are designed to optimize your website to rank higher in search engine results, drive organic traffic, and boost your business’s online presence.
          </p>
          
          {/* Key Features */}
          <div className="mt-10 space-y-6 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our SEO Services:</h3>
            <ul className="list-disc list-inside text-[#201e1e] text-lg leading-relaxed">
              <li>Comprehensive SEO audit and analysis</li>
              <li>On-page optimization for better user experience and search rankings</li>
              <li>Keyword research to target high-converting terms</li>
              <li>Technical SEO for faster site speed and improved crawlability</li>
              <li>Link building strategies to enhance domain authority</li>
            </ul>
          </div>
          
        
          
          {/* Current SEO Trends */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Current SEO Trends</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              SEO is constantly evolving, and staying on top of trends is key to success. Here are some of the current trends in the SEO landscape:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>AI and Search Engines:</strong> The rise of AI is changing search engine algorithms, making it crucial to adapt strategies to this shift.</li>
              <li><strong>Core Web Vitals:</strong> Google’s emphasis on user experience metrics like loading speed and interactivity is now a ranking factor.</li>
              <li><strong>Mobile-First Indexing:</strong> With more users accessing websites via mobile devices, Google now primarily uses the mobile version of your website for ranking.</li>
              <li><strong>Voice Search Optimization:</strong> With the rise of smart speakers and virtual assistants, optimizing for voice search is becoming essential for SEO success.</li>
              <li><strong>Video SEO:</strong> Video content continues to rise, and optimizing video content for search engines is an increasingly important strategy.</li>
            </ul>
          </div>

          {/* Future SEO Trends */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Future SEO Trends</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              As search engines continue to evolve, here’s a look at some SEO trends expected to gain importance in the future:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>Zero-Click Searches:</strong> As featured snippets and other SERP features rise, optimizing for these results will be key to staying visible.</li>
              <li><strong>E-A-T (Expertise, Authoritativeness, and Trustworthiness):</strong> Google’s focus on website quality means content needs to demonstrate authority and expertise in the field.</li>
              <li><strong>Natural Language Processing (NLP):</strong> With improvements in NLP, optimizing content for conversational queries and long-tail keywords will be more important.</li>
              <li><strong>Featured Snippets and Rich Results:</strong> As structured data continues to shape search results, optimizing for these rich results will boost visibility.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Boost Your Rankings and Drive More Traffic with Our SEO Services</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Our SEO experts are ready to help your business rise above the competition. Get in touch with us to start optimizing your website for higher search engine rankings and increased organic traffic.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#80C4E9] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;
