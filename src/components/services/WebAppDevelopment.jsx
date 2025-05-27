import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import enterprise from '../../assets/images/enterprise.png';
import lms from '../../assets/images/lms.png';
import crm from '../../assets/images/crm.png';
import e_com from '../../assets/images/e-commerce.png';
import social from '../../assets/images/social.png';
import e2w from '../../assets/images/PWAintro2.png';
import wellness from '../../assets/images/wellness-pwa.png';

const WebAppDevelopment = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen flex flex-col items-center font-mono justify-center" style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}>
      {/* E-commerce Platforms Section */}
      <motion.div
        className="w-full h-full py-20"
        style={{ background: "linear-gradient(135deg, #05f4f9, #000000)", color: "white" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Web Application Development
          </h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Web application development merges creativity with technical prowess
            to create dynamic, interactive, and user-friendly digital
            experiences. Our team harnesses cutting-edge technologies to build
            web applications that inspire engagement and drive business growth.
          </p>
        </div>

        <Slider {...settings} className="w-full md:px-12">
          {/* E-commerce slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">E-commerce Applications</h3>
              <p className="text-sm md:text-lg mb-4">
                Our e-commerce web applications provide a seamless shopping
                experience with secure payment gateways, intuitive product
                catalogs, and responsive designs that adapt to any device.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={e_com}
                  alt="E-commerce Application Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* LMS slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Learning Management Systems</h3>
              <p className="text-sm md:text-lg mb-4">
                Enable digital education and training with our LMS solutions,
                featuring course creation tools, progress tracking, and
                interactive multimedia content.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={lms}
                  alt="LMS Application Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* CRM slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Customer Relationship Management</h3>
              <p className="text-sm md:text-lg mb-4">
                Streamline customer interactions with our CRM applications,
                offering lead management, sales tracking, and automated
                follow-ups to nurture relationships.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={crm}
                  alt="CRM Application Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center gap-6 w-full p-6 md:md:h-screen"
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      > 
        <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 mt-14 text-center">Types of Web Application Development</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={e_com} alt="E-commerce Platforms" className="w-full md:w-1/2 rounded-lg" loading="lazy" />
          <div className="flex flex-col justify-center md:w-1/2">
            <h3 className="text-xl md:text-3xl font-semibold mb-4 text-center">E-commerce Platforms</h3>
            <p className="text-lg leading-relaxed">
              Build powerful online stores with our e-commerce web applications, featuring secure payment processing, inventory management, and customer analytics.
            </p>
            <ul className="list-disc list-inside text-lg mt-4">
              <li>Custom product catalogs and search functionality</li>
              <li>Multiple payment gateway integrations</li>
              <li>Inventory and order management systems</li>
              <li>Mobile-responsive shopping experiences</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CRM Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img src={crm} alt="Customer Relationship Management" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Customer Relationship Management (CRM)</h3>
          <p className="text-lg leading-relaxed">
            Creating CRM systems to manage customer interactions, improve customer satisfaction, and foster long-term relationships with tailored engagement solutions.
          </p>
          <ul className="list-disc list-inside text-lg mt-4">
            <li>Track leads and sales processes</li>
            <li>Improve customer satisfaction with personalized interactions</li>
            <li>Automate repetitive tasks</li>
          </ul>
        </div>
      </motion.div>

      {/* Enterprise Solutions Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col justify-center md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Solutions</h3>
          <p className="text-lg leading-relaxed">
            Develop robust enterprise applications that streamline operations, enhance productivity, and provide valuable business insights through comprehensive dashboards.
          </p>
          <ul className="list-disc list-inside text-lg mt-4">
            <li>Custom workflow automation</li>
            <li>Department collaboration tools</li>
            <li>Business intelligence and reporting</li>
            <li>Integration with existing enterprise systems</li>
          </ul>
        </div>
        <img src={enterprise} alt="Enterprise Solutions" className="w-full md:w-1/2 rounded-lg" />
      </motion.div>

      {/* LMS Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-8 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={lms}
          alt="Learning Management Systems"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center md:w-1/2 text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Learning Management Systems (LMS)</h3>
          <p className="text-lg leading-relaxed mb-4">
            Learning Management Systems are revolutionizing the way education and corporate training are delivered. We specialize in designing intuitive LMS platforms that cater to a wide variety of industries, providing tools to enhance the learning experience.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Personalized Learning Paths: Create tailored course structures to meet individual user needs.</li>
            <li className="mb-2">Interactive Features: Integrate quizzes, polls, and live sessions to keep learners engaged.</li>
            <li className="mb-2">Gamification: Boost motivation with badges, leaderboards, and achievement rewards.</li>
          </ul>
        </div>
      </motion.div>

      {/* Social Networking Apps Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-8 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col justify-center md:w-1/2 text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
          <p className="text-lg leading-relaxed mb-4">
            Social networking apps are pivotal in building connections, fostering communities, and enhancing communication. We excel in crafting feature-rich and user-friendly social platforms that meet the demands of modern users.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Customizable Profiles: Allow users to create and customize their profiles with ease.</li>
            <li className="mb-2">Messaging and Chat: Integrate real-time chat, video calls, and group messaging features.</li>
            <li className="mb-2">Content Sharing: Enable users to post and share multimedia content such as photos, videos, and stories.</li>
            <li className="mb-2">Push Notifications: Keep users informed about likes, comments, and new connections in real time.</li>
          </ul>
        </div>
        <img
          src={social}
          alt="Social Networking Apps"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Portfolio Section */}
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 w-full">
          {/* Wellness Section */}
          <motion.div
            className="p-6 shadow-lg text-center"
            style={{ background: 'linear-gradient(138deg, #000000, #000000)', color: 'white' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-5xl text-white font-semibold text-center mb-6">
              Our Portfolio
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src={wellness}
                alt="Wellness"
                className="w-[70%] md:w-[70%] object-contain" // 30% smaller than its original width
              />
            </div>
            <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
              Wellness PWA Software
            </h4>
            <p className="text-neutral-100 text-lg">
              A Fitness tracking and lifestyle platform
            </p>
          </motion.div>

          {/* Easy2Work Section */}
          <motion.div
            className="p-6 shadow-lg text-center"
            style={{ background: 'linear-gradient(138deg, #05f4f9, #000000)', color: 'white' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={e2w}
                alt="Easy2Work"
                className="w-[70%] md:w-[70%] object-contain" // 30% smaller than its original width
              />
            </div>
            <h4 className="text-xl md:text-3xl font-semibold text-neutral-100">
              Easy2Work PWA Software
            </h4>
            <p className="text-neutral-100 text-lg">
              A Workflow management application
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, #05f4f9, #000000)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Ready to Build Your Web Application?
          </h3>
          <p className="text-lg text-white max-w-3xl mb-8">
            Let's create a powerful, user-friendly web application that aligns with your business goals and exceeds user expectations.
          </p>
          <a
            href="/ContactForm"
            className="px-8 py-3 bg-white text-primary-700 rounded-lg hover:bg-primary-100 transition duration-300 font-medium"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
