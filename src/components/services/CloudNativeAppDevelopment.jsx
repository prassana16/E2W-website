import React from 'react';
import { motion } from 'framer-motion';
import cloudDevelopment from '../../assets/images/cloud1.png';
import microservices from '../../assets/images/cloud2.png';
import scalability from '../../assets/images/cloud3.png';

const CloudNativeAppDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Cloud Native Application Development
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Build scalable, resilient, and modern applications designed to thrive in the cloud. Our cloud-native solutions empower businesses to unlock agility and achieve digital transformation.
        </p>
      </motion.div>

      {/* Microservices Architecture Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={microservices}
          alt="Microservices Architecture"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Microservices Architecture
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Adopt a microservices architecture to decouple your application components, enabling independent development and deployment.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Modular and Scalable Design</li>
            <li>Faster Deployment Cycles</li>
            <li>Improved Fault Isolation</li>
            <li>Seamless integration with cloud services</li>
            <li>Supports multi-language development for flexibility</li>
          </ul>
        </div>
      </motion.div>

      {/* Scalability and Performance Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #4caeff, #0176c4)', color: 'white' }}
      >
        <img
          src={scalability}
          alt="Scalability and Performance"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Scalability and Performance
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Design applications that scale seamlessly to meet fluctuating demand while maintaining high performance and availability.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Elastic Scalability with Kubernetes</li>
            <li>High Availability through Load Balancers</li>
            <li>Optimized Resource Utilization</li>
            <li>Proactive monitoring and performance tuning</li>
            <li>Designed for global, distributed user bases</li>
          </ul>
        </div>
      </motion.div>

      {/* Cloud-Native Technologies Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={cloudDevelopment}
          alt="Cloud-Native Technologies"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Cloud-Native Technologies
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Harness the power of cloud-native technologies to accelerate development, deployment, and delivery of applications.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Dockerized Containers for Portability</li>
            <li>Serverless Architecture for Cost Efficiency</li>
            <li>Continuous Integration and Delivery (CI/CD)</li>
            <li>Automated Infrastructure Management with Terraform</li>
            <li>Integration with AWS, Azure, and Google Cloud</li>
          </ul>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="text-center px-6 md:px-16 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #4caeff, #0176c4)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our Cloud-Native Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          Unlock your business's full potential with scalable, secure, and future-proof cloud-native solutions.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Expertise in Modern Cloud Technologies</li>
          <li>Cost-Effective and Scalable Solutions</li>
          <li>Seamless Migration to Cloud Environments</li>
          <li>24/7 Support and Maintenance</li>
          <li>Robust Security Practices for Cloud Applications</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-blue-800 to-cyan-900 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Applications?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Leverage our expertise in cloud-native development to create scalable and future-ready applications. Contact us today!
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default CloudNativeAppDevelopment;
