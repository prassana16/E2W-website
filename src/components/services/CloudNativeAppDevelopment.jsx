import React from 'react';
import { motion } from 'framer-motion';
import cloudDevelopment from '../../assets/images/cloud1.png';
import microservices from '../../assets/images/cloud2.png';
import scalability from '../../assets/images/cloud3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CloudNativeAppDevelopment = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    <section className="min-h-screen w-full  bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
      {/* Introduction */}
      <motion.div
  className="w-full h-full py-20"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>

  <div className="text-center max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
          Cloud-Native Application Development
        </h2>
        <p className="text-sm md:text-lg leading-relaxed text-white">
          Cloud-native application development leverages modern cloud platforms
          to build scalable, resilient, and highly available applications. We
          specialize in crafting tailored cloud-native solutions that empower
          businesses to innovate and scale effortlessly.
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
                border: "2px solid #05f4f9"
              }}
            >
              <h3 className="text-lg md:text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-sm md:text-lg leading-relaxed">{card.content}</p>
            </div>
          </div>
        ))}
      </Slider>

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
        style={{ background: '#000000', color: 'white', borderTop: '2px solid #05f4f9', borderBottom: '2px solid #05f4f9' }}
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
          loading="lazy" // Enable lazy loading
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
        style={{ background: 'linear-gradient(135deg, #05f4f9, #000000)', color: 'white' }}
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
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-black text-lg rounded-lg hover:bg-cyan transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default CloudNativeAppDevelopment;
