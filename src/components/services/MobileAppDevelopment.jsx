import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nativeApp from '../../assets/images/native-app.png';
import hybridApp from '../../assets/images/hybrid-app.png';
import pwaApp from '../../assets/images/pwa-app.png';
import enterpriseApp from '../../assets/images/enterprise-app.png';
import socialApp from '../../assets/images/social-app.png';

const MobileAppDevelopment = () => {
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
    <section
      className="min-h-screen flex flex-col items-center font-mono justify-center"
      style={{ background: 'linear-gradient(135deg, #087ea2, #017598)', color: 'white' }}
    >
      {/* Mobile App Development Section */}
      <motion.div
        className="w-full h-full py-20"
        style={{
          background: "linear-gradient(to bottom, #017598, #087ea2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Mobile App Development
          </h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Mobile app development transforms ideas into functional, user-friendly
            applications for smartphones and tablets. Our expert developers
            create intuitive mobile experiences across platforms to connect
            brands with their target audience effectively.
          </p>
        </div>

        <Slider {...settings} className="w-full md:px-12">
          {/* Native Apps slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Native Mobile Applications</h3>
              <p className="text-sm md:text-lg mb-4">
                Our native apps are built specifically for iOS or Android
                platforms, offering optimized performance, enhanced security, and
                full access to device features.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={nativeApp}
                  alt="Native App Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* Hybrid Apps slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Hybrid Applications</h3>
              <p className="text-sm md:text-lg mb-4">
                Our hybrid apps combine the best of both worlds, offering
                cross-platform functionality with a single codebase, reducing
                development time and costs.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={hybridApp}
                  alt="Hybrid App Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* PWA slider content */}
          <div className="px-4">
            <div className="bg-primary-500/30 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Progressive Web Apps</h3>
              <p className="text-sm md:text-lg mb-4">
                Our PWAs deliver app-like experiences through web browsers,
                offering offline capabilities, push notifications, and fast
                loading times without the need for app store downloads.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={pwaApp}
                  alt="PWA Screenshot"
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>

      {/* Native Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #087ea2, #017598)', color: 'white' }}
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
        style={{ background: 'linear-gradient(135deg, #05a7be, #087ea2)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Hybrid Apps</h3>
          <p className="text-lg leading-relaxed">
            Create cross-platform applications with a single codebase, delivering cost-effective solutions without compromising on functionality or user experience.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>Faster development cycles with reduced costs.</li>
            <li>Consistent experience across iOS and Android.</li>
            <li>Flexible architecture using frameworks like React Native and Flutter.</li>
            <li>Simpler maintenance and updates.</li>
          </ul>
        </div>
        <img src={hybridApp} alt="Hybrid Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      </motion.div>

      {/* Progressive Web Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #087ea2, #017598)', color: 'white' }}
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
        style={{ background: 'linear-gradient(135deg, #05a7be, #18c4b8)', color: 'white' }}
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
            <li>Integration with social media platforms.</li>
          </ul>
        </div>
        <img src={socialApp} alt="Social Networking Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      </motion.div>

      {/* Enterprise Mobile Apps Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 w-full p-6 md:h-screen"
        style={{ background: 'linear-gradient(135deg, #087ea2, #017598)', color: 'white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <img src={enterpriseApp} alt="Enterprise Mobile Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Enterprise Mobile Apps</h3>
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
          style={{ background: 'linear-gradient(to bottom, #05a7be, #017598)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Ready to Transform Your Mobile Presence?
          </h3>
          <p className="text-lg text-white max-w-3xl mb-8">
            Let's create a powerful, user-friendly mobile application that connects with your audience and drives business growth.
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

export default MobileAppDevelopment;
