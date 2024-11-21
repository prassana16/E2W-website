import React from 'react';
import { FaCloud } from "react-icons/fa"; // Cloud icon for Cloud Native Development
import { motion } from 'framer-motion';

const CloudNativeAppDevelopment = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#f5c894] to-[#ffca2a] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaCloud /> {/* Cloud icon for Cloud Native Development */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Cloud Native Application Development</h2>
          <p className="text-lg text-[#201e1e] leading-relaxed">
            Cloud-native application development is revolutionizing the way businesses build and scale applications. By leveraging microservices, containers, and cloud platforms, we design and develop applications that are scalable, resilient, and agile, enabling you to innovate faster and reduce operational costs.
          </p>
          
          {/* Key Features */}
          <div className="mt-10 space-y-6 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-semibold text-[#333]">Key Features of Our Cloud Native Solutions:</h3>
            <ul className="list-disc list-inside text-[#201e1e] text-lg leading-relaxed">
              <li>Microservices architecture for flexibility and scalability</li>
              <li>Containerization using Docker and Kubernetes for portability and consistency</li>
              <li>Cloud platforms (AWS, Azure, Google Cloud) for seamless deployment and management</li>
              <li>High availability and disaster recovery for business continuity</li>
              <li>Continuous Integration and Continuous Delivery (CI/CD) pipelines for faster releases</li>
            </ul>
          </div>
          
          
          
          {/* Current Cloud Native Trends */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Cloud Native Development</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Cloud-native technologies are rapidly evolving, and staying up-to-date with the latest trends is essential for businesses to remain competitive. Here are some of the current trends shaping the cloud-native landscape:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>Serverless Computing:</strong> Serverless architectures allow you to focus on writing code without managing the underlying infrastructure, reducing operational overhead and scaling automatically.</li>
              <li><strong>Kubernetes and Containers:</strong> Kubernetes continues to lead as the orchestration platform for managing containerized applications, offering efficient scaling, automation, and security features.</li>
              <li><strong>Multi-Cloud Strategies:</strong> To avoid vendor lock-in and improve resilience, businesses are adopting multi-cloud strategies, deploying apps across multiple cloud providers.</li>
              <li><strong>Cloud-Native Security:</strong> With the rise of cloud-native architectures, security has become a top priority. DevSecOps integrates security practices directly into the development lifecycle for more secure applications.</li>
              <li><strong>Edge Computing:</strong> Edge computing reduces latency by processing data closer to where it’s generated, enabling faster and more efficient cloud-native applications.</li>
            </ul>
          </div>

          {/* Future Cloud Native Trends */}
          <div className="mt-16 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Future Trends in Cloud Native Development</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              The cloud-native landscape is constantly evolving. Here are some future trends that will shape the way cloud-native applications are built:
            </p>
            <ul className="list-disc list-inside text-[#201e1e] text-lg mt-6 space-y-4">
              <li><strong>AI and Machine Learning Integration:</strong> AI and ML will be increasingly embedded in cloud-native applications to improve automation, predictive analytics, and personalized experiences.</li>
              <li><strong>Cloud-Native Databases:</strong> With the rise of cloud-native applications, specialized databases like NoSQL and distributed databases will continue to replace traditional relational databases for better performance and scalability.</li>
              <li><strong>Autonomous Cloud Platforms:</strong> Autonomous platforms that use AI to manage cloud infrastructure will be more prevalent, automating tasks like load balancing, security patching, and scaling.</li>
              <li><strong>Cloud-Native Integration with 5G:</strong> The integration of cloud-native applications with 5G networks will enable ultra-low latency applications for real-time data processing in industries like healthcare, automotive, and IoT.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg p-8 border">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Build Scalable and Resilient Cloud-Native Applications?</h3>
            <p className="text-lg text-[#201e1e] mt-4 leading-relaxed">
              Whether you’re looking to migrate to the cloud or build a new cloud-native application, our team of experts is here to help. Let’s discuss how we can design solutions that drive innovation and business growth in a cloud-first world.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#ffca2a] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudNativeAppDevelopment;
