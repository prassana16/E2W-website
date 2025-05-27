import React from 'react';
import { motion } from 'framer-motion';
import portfolioSite from '../../assets/images/portfolio-site.png';
import newsSite from '../../assets/images/newsSite.png';
import communityForum from '../../assets/images/communityForum.png';
import blogSite from '../../assets/images/blog-site.png';
import businessSite from '../../assets/images/business-site.png';
import personalSite from '../../assets/images/personal-site.png';
import gracesite from '../../assets/images/gracescans-site.png';
import baleensite from '../../assets/images/baleensite.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WebsiteDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const cards = [
    {
      title: "Tailored Solutions",
      content:
        "We understand that every business is unique. Our team crafts custom websites that align with your brand, vision, and specific requirements.",
    },
    {
      title: "Responsive Design",
      content:
        "Our websites are designed to adapt seamlessly to all devices, ensuring an exceptional user experience on desktops, tablets, and mobile phones.",
    },
    {
      title: "SEO Optimization",
      content:
        "We build websites optimized for search engines, helping you improve visibility and drive organic traffic to your site.",
    },
    {
      title: "Content Management Systems",
      content:
        "We integrate robust content management systems like WordPress, Drupal, and Joomla, empowering you to manage your content with ease.",
    },
    {
      title: "Performance Optimization",
      content:
        "Speed and performance matter. Our websites are optimized to load quickly, ensuring a smooth browsing experience for your users.",
    },
    {
      title: "E-Commerce Solutions",
      content:
        "From intuitive product catalogs to secure payment systems, we create e-commerce websites that convert visitors into customers.",
    },
    {
      title: "Analytics Integration",
      content:
        "We incorporate analytics tools that help you monitor traffic, understand user behavior, and make data-driven decisions.",
    },
    {
      title: "Security and Maintenance",
      content:
        "Protect your website with advanced security measures. We also offer ongoing maintenance to keep your site updated and running smoothly.",
    },
    {
      title: "User-Centric Approach",
      content:
        "Our design philosophy centers on user experience. We ensure your website is intuitive, engaging, and aligned with your users' expectations.",
    },
    {
      title: "Scalable Architecture",
      content:
        "As your business grows, your website should too. We build scalable websites that evolve with your needs.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen flex flex-col items-center font-mono justify-center bg-black" >
      {/* Introduction Section */}
      <motion.div
  className="w-full h-full py-20"  style={{
    background: "#000000",
    color: "white",
    borderTop: "2px solid #05f4f9"
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>

  <div className="text-center max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Website Development
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          Website development is at the heart of establishing your online presence. We design and build modern, user-friendly, and performance-driven websites that effectively communicate your brand and engage your audience.
        </p>
      </div>

      <Slider {...settings} className="w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-full py-8"
          >
            <div
              className="text-white text-center px-6 py-12 rounded-xl"              style={{
                background: "#000000",
                border: "1px solid #05f4f9"
              }}
            >
              <h3 className="text-lg md:text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-sm md:text-lg leading-relaxed">{card.content}</p>
            </div>
          </div>
        ))}
      </Slider>

</motion.div>


{/* Portfolio Website Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="flex flex-col w-full">
    <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 mt-14 text-center">
      Types of Web Application Development
    </h2>
  <div className="flex flex-col md:flex-row gap-6">
  <img
    src={portfolioSite}
    alt="Portfolio Websites"
    className="w-full md:w-1/2 "
  />
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Portfolio Websites</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Showcase your work and achievements with a professionally designed portfolio website. 
      Perfect for freelancers, artists, and professionals looking to stand out in their field.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Customizable layouts to highlight your unique style and projects.</li>
      <li>Responsive design for an optimal viewing experience on any device.</li>
      <li>Integration with social media and contact forms to connect with potential clients.</li>
      <li>SEO-optimized structure to boost online visibility and attract clients.</li>
    </ul>
  </div>
  </div>
  </div>
</motion.div>



      {/* News Websites Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">News Websites</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Create visually appealing and highly functional news websites that provide real-time updates, seamless categorization, and engaging content layouts to keep readers informed and engaged.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Dynamic content management to publish breaking news instantly.</li>
      <li>Category-based navigation for seamless browsing (e.g., Politics, Sports, Tech).</li>
      <li>Responsive designs that cater to readers on mobile, tablet, or desktop.</li>
      <li>Advertisement integration for monetization opportunities.</li>
      <li>SEO-friendly architecture to maximize visibility and reach.</li>
      <li>Interactive features such as comment sections and polls for reader engagement.</li>
      <li>Real-time notifications for news alerts and updates.</li>
    </ul>
  </div>
  <img
    src={newsSite}
    alt="News Websites"
    className="w-full md:w-1/2 "
  />
</motion.div>


{/* Community Forums Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <img src={communityForum} alt="Community Forums" className="w-full md:w-1/2 " />
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Community Forums</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Build interactive community forums designed to foster communication and collaboration. Whether it's a niche interest group or a professional organization, our forums are equipped to create a thriving digital community.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Threaded discussions for in-depth topic engagement.</li>
      <li>User profiles with customizable settings and avatars.</li>
      <li>Real-time notifications for replies and mentions.</li>
      <li>Moderation tools to ensure a safe and respectful environment.</li>
      <li>Search and categorization for easy access to topics.</li>
      <li>Integration with social media for broader community reach.</li>
    </ul>
  </div>
</motion.div>



     {/* Blog Websites Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Blog Websites</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Create engaging blog websites with user-friendly interfaces that captivate readers and boost your online presence. Whether you're a content creator, business owner, or hobbyist, our blogs cater to diverse needs.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Responsive layouts for seamless reading on any device.</li>
      <li>Content management systems (CMS) for easy publishing.</li>
      <li>Customizable themes and designs to match your style.</li>
      <li>Built-in SEO optimization to enhance visibility.</li>
      <li>Comment sections for fostering reader interaction.</li>
      <li>Analytics integration to track visitor engagement.</li>
    </ul>
  </div>
  <img src={blogSite} alt="Blog Websites" className="w-full md:w-1/2 " />
</motion.div>


      {/* Business Websites Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <img src={businessSite} alt="Business Websites" className="w-full md:w-1/2 " />
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Business Websites</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Empower your business with a professional website that effectively communicates your brand, services, and values to your audience. Designed to enhance your online presence and drive conversions, our business websites are tailored to your industry needs.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Custom designs aligned with your brand identity.</li>
      <li>Responsive layouts for flawless performance on all devices.</li>
      <li>Integration with CRM, payment gateways, and analytics tools.</li>
      <li>Optimized for search engines (SEO) to boost visibility.</li>
      <li>Call-to-action elements to generate leads and sales.</li>
      <li>Scalable features to support business growth.</li>
    </ul>
  </div>
</motion.div>


      {/* Personal Websites Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>
  <div className="flex flex-col justify-center md:w-1/2 text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Personal Websites</h3>
    <p className="text-base md:text-lg leading-relaxed">
      Share your story, showcase your projects, and highlight your achievements with a personal website designed to reflect your unique style and personality. Whether you're building a professional profile or a creative portfolio, we’ve got you covered.
    </p>
    <ul className="list-disc list-inside mt-4 text-base md:text-lg">
      <li>Custom themes to match your personal brand.</li>
      <li>Interactive portfolios to showcase your work effectively.</li>
      <li>Integrated blogs or journals for sharing thoughts and updates.</li>
      <li>Social media links for seamless connectivity.</li>
      <li>Contact forms to enable networking and collaboration opportunities.</li>
      <li>Secure and scalable hosting options.</li>
    </ul>
  </div>
  <img src={personalSite} alt="Personal Websites" className="w-full md:w-1/2 " />
</motion.div>


<motion.div
  className="flex flex-col items-center w-full px-6 py-12 space-y-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  {/* Section Title */}
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Rate Card</h2>
    <p className="text-base md:text-lg text-white">
      Choose the right plan for your business. From essentials to advanced solutions, we have you covered.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
    {/* Basic Plan */}
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Basic</h3>
      <p className="text-xl text-center mb-6">Starts at ₹20,000</p>
      <ul className="space-y-4 text-base md:text-lg">
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Custom website design.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Fully responsive design.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✖</span>
          SEO not included.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Free maintenance for 3 months.
        </li>
      </ul>
      <div className="mt-6 text-center">        <button
          className="px-6 py-3 bg-white text-black rounded-lg font-bold text-lg hover:bg-cyan transition-all"
         onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
        >
          Select Plan
        </button>
      </div>
    </div>

    {/* Advance Plan */}
    <div className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Advance</h3>
      <p className="text-xl text-center mb-6">Contact Us for Pricing</p>
      <ul className="space-y-4 text-base md:text-lg">
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          All features of the Basic plan.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          SEO optimization for higher visibility.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Performance optimization.
        </li>
      </ul>
      <div className="mt-6 text-center">
        <button
          className="px-6 py-3 bg-white text-black rounded-lg font-bold text-lg hover:bg-cyan transition-all"
         onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
        >
          Select Plan
        </button>
      </div>
    </div>

    {/* Pro Plan */}
    <div className="bg-gradient-to-br from-green-700 to-teal-900 text-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Pro</h3>
      <p className="text-xl text-center mb-6">Customized Pricing Available</p>
      <ul className="space-y-4 text-base md:text-lg">
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          All features of the Advance plan.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          E-commerce integration.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Advanced analytics and monitoring.
        </li>
        <li className="flex items-center gap-4">
          <span className="text-cyan text-xl">✔</span>
          Free maintenance for 6 months.
        </li>
      </ul>
      <div className="mt-6 text-center">
        <button
          className="px-6 py-3 bg-white text-black rounded-lg font-bold text-lg hover:bg-cyan transition-all"
         onClick={() => window.open('https://www.easy2work.in/ContactForm', '_blank')}
        >
          Select Plan
        </button>
      </div>
    </div>
  </div>
</motion.div>



      {/* Portfolio Section */}
<div className="w-full flex flex-col items-center">
  <div className="grid grid-cols-1  w-full">
    {/* Wellness Section */}
    <motion.div
      className="p-6 shadow-lg text-center"
      style={{ background: 'linear-gradient(138deg, #000000, #05f4f9)', color: '#ffffff' }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl md:text-5xl text-white font-semibold text-center mb-6">
        Our Portfolio
      </h3>
      <div className="flex justify-center mb-4">
        <img
          src={gracesite}
          alt="Wellness"
          className="w-[100%] md:w-[70%] object-contain" // 30% smaller than its original width
        />
      </div>
      <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
        Grace Scans 
      </h4>
      <p className="text-neutral-100 text-lg">
      Business Website for Health Care industry.
      </p>
      {/* Button to view website */}
  <a
    href="https://www.gracescans.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="mt-4 px-4 py-2 bg-black
    00 text-white text-md md:text-lg rounded-lg hover:bg-cyan transition duration-300 ease-in-out">
      View Website
    </button>
  </a>
    </motion.div>

    {/* Easy2Work Section */}
    <motion.div
  className="p-6 shadow-lg text-center"
  style={{ background: 'linear-gradient(138deg, #000000, #05f4f9)', color: '#ffffff' }}
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="flex justify-center mb-4">
    <img
      src={baleensite}
      alt="Easy2Work"
      className="w-[100%] md:w-[70%] object-contain" // 30% smaller than its original width
    />
  </div>
  <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
    Baleen Media
  </h4>
  <p className="text-neutral-100 text-lg">
    Business Website for Ad Agency.
  </p>
  {/* Button to view website */}
  <a
    href="https://www.baleenmedia.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="mt-4 px-4 py-2 bg-black
    00 text-white text-md md:text-lg rounded-lg hover:bg-cyan transition duration-300 ease-in-out">
      View Website
    </button>
  </a>
</motion.div>

  </div>
</div>

      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, #000000, #05f4f9 )' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Build Your Website?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let us help you create a stunning website that drives results. Contact our team today to get started!
          </p>
          <a href="/ContactForm">
            <button className="px-8 py-3 bg-[#ffffff] text-black text-lg rounded-lg shadow-md hover:bg-[#05f4f9] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </a>
          <div className="border-b border-[#05f4f9] pt-16 md:w-[85%] w-full text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
