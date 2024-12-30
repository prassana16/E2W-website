import React from 'react';
import { motion } from 'framer-motion';
import onPageSEO from '../../assets/images/seo1.png';
import offPageSEO from '../../assets/images/seo2.png';
import localSEO from '../../assets/images/seo3.png';

const SEOServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      {/* Introduction */}
      <motion.div
  className="flex flex-col items-center gap-12 w-full h-full px-3 md:px-6 py-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="text-center max-w-6xl">
    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">
      SEO Services
    </h2>
    <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
      Search Engine Optimization (SEO) is essential for improving your website's visibility and driving organic traffic. We specialize in developing tailored SEO strategies to help you rank higher, attract the right audience, and grow your business online.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full ">
    {/* Cards */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Comprehensive SEO Audit</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our SEO audit identifies key areas for improvement, including site structure, content optimization, and technical issues, to boost your search engine rankings.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Keyword Research and Strategy</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We identify high-performing keywords and develop a strategic plan to target terms that align with your audience's search behavior and business goals.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">On-Page Optimization</h3>
      <p className="text-sm md:text-base leading-relaxed">
        From optimizing meta tags and headings to improving content structure, we ensure your website is fully optimized for search engines.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Technical SEO</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We address technical issues such as crawl errors, site speed, mobile-friendliness, and schema markup to improve your website’s performance in search engines.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Content Creation and Optimization</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Engaging and SEO-friendly content is key to success. We create or refine your content to resonate with both users and search engines.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Local SEO Services</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Boost your visibility in local searches with Google My Business optimization, local citations, and geo-targeted strategies.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Link Building Strategies</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We employ ethical and effective link-building techniques to improve your domain authority and drive referral traffic to your site.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Analytics and Reporting</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Track your progress with regular reports and actionable insights. We monitor traffic, rankings, and conversions to measure the effectiveness of our SEO efforts.
      </p>
    </div>

    {/* New Card 1 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">E-Commerce SEO</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Optimize your online store for higher visibility in product searches and improved conversions. From product descriptions to category pages, we ensure your store is SEO-ready.
      </p>
    </div>

    {/* New Card 2 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Competitor Analysis</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Gain an edge over competitors by understanding their SEO strategies. We analyze their strengths and weaknesses to refine your approach.
      </p>
    </div>
  </div>
</motion.div>


      {/* On-Page SEO Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={onPageSEO}
          alt="On-Page SEO"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            On-Page SEO
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Optimize your website's content, structure, and meta information to
            improve its ranking on search engine results pages (SERPs).
          </p>
          <ul className="list-disc  space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Keyword Research and Optimization</li>
            <li>Title Tags, Meta Descriptions, and Headers</li>
            <li>Internal Linking and Content Quality</li>
            <li>Content Optimization: Ensure all content is optimized for readability and keyword density to meet both user intent and search engine algorithms.</li>
            <li>Image Optimization: Compress and tag images with descriptive alt text for faster loading speeds and better accessibility.            </li>
          </ul>
        </div>
      </motion.div>

      {/* Off-Page SEO Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
      >
        <img
          src={offPageSEO}
          alt="Off-Page SEO"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Off-Page SEO
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Enhance your website's reputation and authority by building
            high-quality backlinks and engaging with external platforms.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Link Building and Backlink Analysis</li>
            <li>Social Media Marketing</li>
            <li>Online Reputation Management</li>
            <li>Guest Blogging: Collaborate with industry-relevant blogs to publish high-quality content that links back to your website.</li>
            <li>Competitor Analysis: Track and analyze your competitors' backlink profiles to identify new opportunities and stay ahead in rankings.</li>
          </ul>
        </div>
      </motion.div>

      {/* Local SEO Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={localSEO}
          alt="Local SEO"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          loading="lazy" // Enable lazy loading
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
  <h3 className="text-2xl md:text-4xl font-semibold mb-4">Technical SEO</h3>
  <p className="text-lg leading-relaxed mb-4">
    Optimize the technical aspects of your website to enhance search engine crawling, indexing, and overall performance.
  </p>
  <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
    <li>Website Speed Optimization</li>
    <li>Mobile-Friendly Design and Responsiveness</li>
    <li>Structured Data Markup (Schema.org)</li>
    <li>XML Sitemap Creation and Submission</li>
    <li>Robots.txt File Optimization</li>
    <li>Fixing Crawl Errors and Broken Links</li>
    <li>HTTPS Implementation for Secure Browsing</li>
    <li>Canonical Tags to Avoid Duplicate Content Issues</li>
  </ul>
</div>

      </motion.div>

      {/* About SEO Section */}
      <motion.div
        className="text-center px-6 md:px-16 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our SEO Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          Our SEO process involves in-depth research, technical audits, and
          consistent optimization to ensure long-term success for your business.
        </p>
        <ul className="list-disc space-y-2  md:text-xl text-left md:space-y-5 pl-6 max-w-3xl mx-auto">
          <li>Increase Organic Traffic and Lead Generation</li>
          <li>Improve Online Visibility and Brand Awareness</li>
          <li>Boost ROI with Targeted SEO Strategies</li>
          <li>Dedicated Support Team: A team of SEO experts is available for consultation and support, ensuring your specific business needs are addressed.</li>
          <li>Data-Driven Results: Monthly performance reports with detailed insights into traffic, keyword rankings, and ROI metrics to track progress effectively.</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Boost Your Online Presence?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Partner with us for tailored SEO solutions that deliver measurable
          results. Contact our team today to get started!
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default SEOServices;