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
  className="flex flex-col items-center gap-12 w-full h-full px-3 md:px-6 py-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  <div className="text-center max-w-6xl">
    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-nowrap">
      Cloud-Native Application Development
    </h2>
    <p className="text-sm md:text-lg leading-relaxed text-left md:text-center">
      Cloud-native application development leverages modern cloud platforms to build scalable, resilient, and highly available applications. We specialize in crafting tailored cloud-native solutions that empower businesses to innovate and scale effortlessly.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full ">
    {/* Cards */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Cloud-Native Architecture Design</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We design architectures that leverage microservices, containers, and serverless computing to maximize scalability and efficiency.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Containerization and Kubernetes</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Using tools like Docker and Kubernetes, we ensure your applications are portable, reliable, and easily deployable across environments.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Scalable and Resilient Systems</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our solutions are built to scale dynamically with your business needs while maintaining high availability and fault tolerance.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">DevOps Integration</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We incorporate DevOps practices to streamline CI/CD pipelines, automate deployments, and enhance collaboration between development and operations teams.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Serverless Application Development</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Build cost-efficient applications using serverless computing platforms like AWS Lambda, Azure Functions, and Google Cloud Functions.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Cloud Platform Expertise</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We work with leading cloud platforms such as AWS, Microsoft Azure, and Google Cloud to deliver tailored cloud-native solutions.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Focus on Security</h3>
      <p className="text-sm md:text-base leading-relaxed">
        Our development process includes robust security measures such as encryption, IAM, and regular vulnerability assessments to safeguard your applications.
      </p>
    </div>

    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Cost Optimization Strategies</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We help you maximize ROI by designing cost-efficient applications and optimizing resource usage in the cloud.
      </p>
    </div>

    {/* New Card 1 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Monitoring and Observability</h3>
      <p className="text-sm md:text-base leading-relaxed">
        With integrated monitoring tools and observability frameworks, we ensure your applications remain performant and reliable.
      </p>
    </div>

    {/* New Card 2 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
      <h3 className="text-lg md:text-2xl font-bold mb-2">Continuous Improvement</h3>
      <p className="text-sm md:text-base leading-relaxed">
        We provide ongoing support and updates to adapt your cloud-native applications to evolving business and technological needs.
      </p>
    </div>
    
  </div>
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
