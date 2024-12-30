import React from 'react';
import { motion } from 'framer-motion';
import teamCollaboration from '../../assets/images/staff2.png';
import skilledProfessionals from '../../assets/images/staff1.png';
import flexibleSolutions from '../../assets/images/staff3.png';

const StaffAugmentation = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-green-600 to-teal-500 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Staff Augmentation Services</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Bridge talent gaps in your team with our top-notch staff augmentation services. Whether you're scaling up for a short-term project or need long-term support, we provide the expertise you need.
        </p>
      </motion.div>

      {/* Skilled Professionals Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={skilledProfessionals}
          alt="Skilled Professionals"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          loading="lazy" // Enable lazy loading
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Access Skilled Professionals
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Quickly fill resource gaps with highly qualified and experienced professionals tailored to your business requirements.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Vetted Talent Across Domains</li>
            <li>Flexible Hiring Models</li>
            <li>Immediate Onboarding</li>
            <li>Expertise in Cutting-Edge Technologies</li>
            <li>Seamless Integration with Your Team</li>
          </ul>
        </div>
      </motion.div>

      {/* Team Collaboration Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #047857, #34d399)', color: 'white' }}
      >
        <img
          src={teamCollaboration}
          alt="Team Collaboration"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Enhance Team Collaboration
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Our professionals work as an extension of your team, ensuring seamless collaboration and communication throughout the project lifecycle.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Integrated Project Management</li>
            <li>Proactive Problem Solving</li>
            <li>Efficient Communication Tools</li>
            <li>Regular Feedback and Updates</li>
            <li>Collaborative Agile Workflows</li>
          </ul>
        </div>
      </motion.div>

      {/* Flexible Solutions Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={flexibleSolutions}
          alt="Flexible Solutions"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            Flexible and Scalable Solutions
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Adapt to changing business needs with our scalable staffing solutions designed to meet both short-term and long-term goals.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Short-Term and Long-Term Support</li>
            <li>Dedicated and Part-Time Resources</li>
            <li>Cost-Effective Staffing Models</li>
            <li>Scalable Team Size Based on Demand</li>
            <li>Support for Rapid Expansion</li>
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
        style={{ background: 'linear-gradient(135deg, #047857, #34d399)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our Staff Augmentation Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          Our staff augmentation services provide you with unparalleled access to skilled professionals, enabling you to tackle challenges, scale your operations, and achieve success.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Top Talent Across Industries</li>
          <li>Seamless Integration with Your Team</li>
          <li>Cost-Effective and Scalable Solutions</li>
          <li>On-Demand Support for Rapid Changes</li>
          <li>Expert Guidance and Dedicated Assistance</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-green-700 to-teal-700 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Build Your Dream Team?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Let us help you achieve your business goals with our flexible staff augmentation solutions. Contact us today to get started!
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default StaffAugmentation;
