import React from 'react';
import { motion } from 'framer-motion';
import nativeApp from '../../assets/images/native-app.png';
import hybridApp from '../../assets/images/hybrid-app.png';
import pwaApp from '../../assets/images/pwa-app.png';
import gamingApp from '../../assets/images/gaming-app.png';
import enterpriseApp from '../../assets/images/enterprise-app.png';
import socialApp from '../../assets/images/social-app.png';

const MobileAppDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center font-mono justify-center"
      style={{ background: 'linear-gradient(135deg, #7a4cff, #5906cc)', color: 'white' }}
    >
      {/* Mobile App Development Section */}
      <motion.div
  className="flex flex-col items-center gap-12 w-full h-full px-3 md:px-6 py-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="text-center max-w-6xl">
    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">
      Mobile App Development
    </h2>
    <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
      Mobile app development transforms ideas into functional, user-friendly applications. We specialize in creating innovative and scalable mobile apps that meet the unique needs of businesses and their users.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full ">
    {/* Cards */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Custom Mobile Solutions</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We build tailored mobile applications designed to address your specific business challenges and create seamless user experiences.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Native and Cross-Platform Development</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Whether it's iOS, Android, or cross-platform, we deliver high-performance apps that run smoothly on any device.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">User-Centric Design</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our design process prioritizes usability and aesthetics to create intuitive apps that captivate and engage users.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Robust Backend Development</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We develop scalable back-end systems using secure and efficient architectures to support your mobile app's functionality.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Third-Party Integrations</h3>
      <p className="text-sm md:text-base leading-relaxed">
        From payment gateways to social media APIs, we ensure seamless integration with third-party services to enhance app functionality.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Focus on Performance</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our apps are optimized for speed, reliability, and performance to ensure a flawless user experience across devices.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Advanced Security Features</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We prioritize app security by implementing data encryption, authentication, and regular security assessments to protect user data.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Agile Development Approach</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our agile process ensures transparent communication and iterative updates to deliver your app on time and within budget.
      </p>
    </div>

    {/* New Card 1 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Post-Launch Support</h3>
      <p className="text-sm md:text-base leading-relaxed">
        After deployment, we provide ongoing support and updates to ensure your app remains current and fully functional.
      </p>
    </div>

    {/* New Card 2 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Analytics and Insights</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Track app usage, monitor performance, and make data-driven improvements with integrated analytics tools.
      </p>
    </div>
  </div>
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
  <img src={enterpriseApp} alt="Enterprise Apps" className="w-full md:w-1/2 rounded-lg shadow-lg" />
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
