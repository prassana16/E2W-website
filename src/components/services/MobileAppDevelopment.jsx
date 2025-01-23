import React from 'react';
import { motion } from 'framer-motion';
import nativeApp from '../../assets/images/native-app.png';
import hybridApp from '../../assets/images/hybrid-app.png';
import pwaApp from '../../assets/images/pwa-app.png';
import gamingApp from '../../assets/images/gaming-app.png';
import enterpriseApp from '../../assets/images/enterprise-app.png';
import socialApp from '../../assets/images/social-app.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileAppDevelopment = () => {
  const cards = [
    {
      title: "Custom Mobile Solutions",
      content:
        "We build tailored mobile applications designed to address your specific business challenges and create seamless user experiences.",
    },
    {
      title: "Native and Cross-Platform Development",
      content:
        "We specialize in creating robust, high-performance applications tailored to meet the needs of diverse platforms. For native development, we leverage platform-specific technologies like Swift for iOS and Kotlin for Android.",
    },
    {
      title: "User-Centric Design",
      content:
        "We prioritize usability and aesthetics to craft intuitive applications that not only look stunning but also deliver seamless interactions.",
    },
    {
      title: "Robust Backend Development",
      content:
        "We develop scalable back-end systems using secure and efficient architectures to support your mobile app's functionality.",
    },
    {
      title: "Third-Party Integrations",
      content:
        "Modern applications thrive on their ability to connect with a wide range of third-party services, and we ensure these integrations are seamless and efficient.",
    },
    {
      title: "Focus on Performance",
      content:
        "Delivering a flawless user experience requires applications that are not only visually appealing but also exceptionally fast, reliable, and efficient.",
    },
    {
      title: "Advanced Security Features",
      content:
        "Security is at the forefront of our development process, ensuring that your app and its users are safeguarded against potential threats.",
    },
    {
      title: "Agile Development Approach",
      content:
        "Our agile development approach ensures that your app is delivered efficiently, on time, and within budget, all while maintaining the highest quality standards.",
    },
    {
      title: "Post-Launch Support",
      content:
        "We offer comprehensive post-launch support to ensure your app remains up-to-date, secure, and fully functional.",
    },
    {
      title: "Analytics and Insights",
      content:
        "Track app usage, monitor performance, and make data-driven improvements with integrated analytics tools.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Animation speed (0.5 seconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // 1-second interval
    arrows: false, // Disable manual arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section
    className="min-h-screen flex flex-col items-center font-mono justify-center"
    style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
    >
      {/* Mobile App Development Section */}
      <motion.div
      className="w-full h-full py-20"
      style={{
        background: "linear-gradient(to bottom, #001831, #59257c)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      >

      <div className="text-center max-w-6xl">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">
          Mobile App Development
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
          Mobile app development transforms ideas into functional, user-friendly
          applications. We specialize in creating innovative and scalable mobile
          apps that meet the unique needs of businesses and their users.
        </p>
      </div>

      <Slider {...settings} className="w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-full py-8"
          >
            <div
              className="text-white text-center px-6 py-12 rounded-xl"
              style={{
                background: "conic-gradient( #001831, #59257c)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-lg md:text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-sm md:text-lg leading-relaxed">{card.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    
  </motion.div>

      {/* Native Apps Section */}
      <motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <img src={nativeApp} alt="Native Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Native Apps</h3>
    <p className="text-lg leading-relaxed">
      Develop high-performance native applications optimized for iOS and Android platforms, ensuring security, scalability, and superior user experiences.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg">
      <li>Platform-specific designs leveraging native APIs.</li>
      <li>Seamless integration with device hardware (camera, GPS, etc.).</li>
      <li>Enhanced performance and reliability for end-users.</li>
      <li>Optimized for App Store and Play Store compliance.</li>
    </ul>
  </div>
</motion.div>


     {/* Hybrid Apps Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Hybrid Apps</h3>
    <p className="text-lg leading-relaxed">
      Build cost-effective hybrid apps using technologies like React Native and Flutter, ensuring cross-platform compatibility without sacrificing performance.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg">
      <li>Single codebase for iOS and Android platforms.</li>
      <li>Faster development cycles and reduced costs.</li>
      <li>Responsive UI components with native-like performance.</li>
      <li>Broad support for third-party plugins and tools.</li>
    </ul>
  </div>
  <img src={hybridApp} alt="Hybrid Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
</motion.div>


      {/* PWA Apps Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <img src={pwaApp} alt="Progressive Web Apps (PWAs)" className="w-full md:w-1/2 rounded-lg shadow-lg" />
  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Progressive Web Apps (PWAs)</h3>
    <p className="text-lg leading-relaxed">
      Deliver cutting-edge PWAs that combine the best of web and mobile technologies to provide fast, reliable, and engaging experiences.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg">
      <li>Offline functionality with service workers.</li>
      <li>App-like feel with push notifications and fast loading.</li>
      <li>SEO-friendly for improved discoverability.</li>
      <li>Reduced app development and maintenance costs.</li>
    </ul>
  </div>
</motion.div>

      {/* Social Networking Apps Section */}
<motion.div
  className="flex flex-col-reverse md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
>
  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Social Networking Apps</h3>
    <p className="text-lg leading-relaxed">
      Design feature-rich social networking apps that foster connectivity and interaction, ensuring a smooth and engaging user experience.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg">
      <li>Real-time messaging and multimedia sharing.</li>
      <li>Customizable user profiles and activity feeds.</li>
      <li>Robust privacy controls and secure authentication.</li>
      <li>Advanced analytics for user engagement tracking.</li>
    </ul>
  </div>
  <img src={socialApp} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
</motion.div>

      {/* Enterprise Apps Section */}
<motion.div
  className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
  style={{ background: 'linear-gradient(135deg, #6c49ff, #5022c2)', color: 'white' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>
  <img src={enterpriseApp} alt="Enterprise Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" loading="lazy" />
  <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
    <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Apps</h3>
    <p className="text-lg leading-relaxed">
      Create enterprise-grade applications tailored to improve business workflows, enhance productivity, and foster seamless collaboration.
    </p>
    <ul className="list-disc list-inside mt-4 text-lg">
      <li>Custom solutions for business operations and analytics.</li>
      <li>Integration with existing enterprise software systems.</li>
      <li>Secure data storage and compliance with industry standards.</li>
      <li>Scalable architecture for future business needs.</li>
    </ul>
  </div>
</motion.div>
      {/* Call-to-Action Card */}
      <div className="w-full">
        <motion.div
          className="p-10 shadow-lg text-center flex flex-col items-center"
          style={{ background: 'linear-gradient(to bottom, #001831, #59257c )' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-3xl font-semibold text-neutral-100 mb-4">Ready to Start Your Mobile App Project?</h3>
          <p className="text-sm md:text-lg text-neutral-100 mb-8">
            Let’s bring your mobile app idea to life. Reach out to our expert team and discover how we can help you create an impactful digital experience.
          </p>
          <a href="/ContactForm">
            <button className="px-8 py-3 bg-[#ffffff] text-purple-900 text-lg rounded-lg shadow-md hover:bg-[#1e7c32] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </a>
          <div className="border-b border-[#f8d996] pt-16 w-full text-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;
