import React from 'react';
import { motion } from 'framer-motion';
import e2w from '../../assets/images/PWAintro2.png';

const SaaSDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
      {/* Introduction */}
      <motion.div
  className="flex flex-col items-center gap-12 w-full h-full px-3 md:px-6 py-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="text-center max-w-6xl">
    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">
      Software as a Service (SaaS) Development
    </h2>
    <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
      SaaS development is revolutionizing the way businesses deliver software solutions by providing scalable, cloud-based applications accessible anytime, anywhere. We specialize in creating robust, multi-tenant SaaS solutions tailored to your business needs.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full ">
    {/* Cards */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Custom SaaS Development</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We build custom SaaS applications from scratch, tailored to your unique business requirements and customer needs.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Multi-Tenant Architecture</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our expertise in multi-tenant architecture ensures your SaaS application serves multiple users efficiently while maintaining data isolation.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Scalability and Performance</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We design scalable SaaS applications that grow with your business and deliver consistent performance across user bases.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Secure Data Management</h3>
      <p className="text-sm md:text-base leading-relaxed">
        From data encryption to role-based access control, we prioritize the security of your SaaS application and user data.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">API Integration and Development</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Seamlessly integrate third-party services and create custom APIs to enhance your SaaS application’s functionality.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Subscription Management</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Implement flexible subscription models and payment gateways for efficient user onboarding and billing processes.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Cross-Platform Compatibility</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We ensure your SaaS application is accessible and performs seamlessly across devices, operating systems, and browsers.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Analytics and Reporting</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Gain insights into user behavior and application performance with built-in analytics and reporting tools.
      </p>
    </div>

    {/* New Card 1 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Continuous Deployment</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Leverage automated CI/CD pipelines for frequent updates and new feature rollouts without downtime.
      </p>
    </div>

    {/* New Card 2 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Post-Launch Support</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We provide ongoing maintenance and updates to keep your SaaS application running smoothly and meeting user expectations.
      </p>
    </div>
  </div>
</motion.div>
<h2 className=''></h2>

      {/* Workflow Management Software Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={e2w}
          alt="SaaS Workflow Management Software"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          loading="lazy" // Enable lazy loading
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Workflow Management Software
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Our SaaS solution, **EasyToWork**, is a powerful workflow management tool that simplifies complex processes, improves productivity, and supports various industries such as healthcare, logistics, retail, and education.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Customizable Modules for Specific Needs</li>
            <li>Integrated Features for Seamless Operations</li>
            <li>Scalable Design to Grow with Your Business</li>
            <li>Accessible Anywhere with PWA Functionality</li>
            <li>Suitable for Multiple Industries</li>
          </ul>
        </div>
      </motion.div>

      {/* Key Features Section */}
<motion.div
  className="text-center px-6 md:px-16 py-12"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  style={{ background: 'linear-gradient(135deg, #312e81, #6366f1)', color: 'white' }}
>
  <h3 className="text-3xl md:text-5xl font-bold mb-6">
    Key Features of Our SaaS Solutions
  </h3>
  <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
    Our SaaS applications are built with the latest technology stack, designed to provide unmatched performance and flexibility.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Feature 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Customizable Modules</h4>
      <p className="leading-relaxed text-gray-700">
        Tailor the software to fit your industry-specific needs with easy-to-configure modules.
      </p>
    </div>
    {/* Feature 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Progressive Web App (PWA)</h4>
      <p className="leading-relaxed text-gray-700">
        Enjoy the best of web and mobile applications with our PWA technology that works offline and provides a seamless user experience.
      </p>
    </div>
    {/* Feature 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Multi-Industry Usability</h4>
      <p className="leading-relaxed text-gray-700">
        Designed to cater to diverse industries like logistics, healthcare, education, retail, and more.
      </p>
    </div>
    {/* Feature 4 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Scalability</h4>
      <p className="leading-relaxed text-gray-700">
        Scale your operations effortlessly as your business grows, without compromising performance.
      </p>
    </div>
    {/* Feature 5 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Security</h4>
      <p className="leading-relaxed text-gray-700">
        Protect your data with enterprise-grade security measures, including encryption and role-based access controls.
      </p>
    </div>
    {/* Feature 6 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-2xl font-semibold mb-4 text-black font-sans">Seamless Integration</h4>
      <p className="leading-relaxed text-gray-700">
        Integrate with third-party tools and APIs effortlessly, ensuring a smooth workflow across your systems.
      </p>
    </div>
  </div>
</motion.div>


      {/* Why Choose Us Section */}
      <motion.div
        className="text-center px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Us for SaaS Development?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          We are committed to delivering high-quality, cost-effective SaaS solutions that drive business success. Here's why clients trust us:
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Experienced in Building Robust PWA-Based SaaS Applications</li>
          <li>Customizable Solutions Tailored to Your Needs</li>
          <li>Scalable and Flexible Architecture for Future Growth</li>
          <li>Dedicated Support Team for Seamless Integration</li>
          <li>Secure and Reliable Technology Stack</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-blue-700 to-indigo-700 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Streamline Your Business Operations?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Let us help you revolutionize the way you manage workflows and achieve business excellence. Contact us today to explore our SaaS solutions!
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default SaaSDevelopment;
