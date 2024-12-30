import React from 'react';
import { motion } from 'framer-motion';
import userResearch from '../../assets/images/ui1.png';
import wireframing from '../../assets/images/ui2.png';
import prototyping from '../../assets/images/ui3.png';

const UIUXDesign = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-pink-600 to-red-600 text-white">
      {/* Introduction */}
      <motion.div
        className="flex flex-col items-center text-center py-16 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">UI/UX Design Services</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          Craft exceptional digital experiences with our innovative and user-centric UI/UX design services. We help brands stand out with intuitive, visually appealing designs.
        </p>
      </motion.div>

      {/* User Research Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={userResearch}
          alt="User Research"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          loading="lazy" // Enable lazy loading
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">User Research</h3>
          <p className="text-lg leading-relaxed mb-4">
            Understand your target audience's needs, behaviors, and pain points to create designs that truly resonate with them.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Persona Development</li>
            <li>User Surveys and Interviews</li>
            <li>Competitor Analysis</li>
            <li>Journey Mapping: Analyze how users interact with your product to optimize key touchpoints.</li>
            <li>Data-Driven Insights: Leverage analytics to guide design decisions and enhance user satisfaction.</li>
          </ul>
        </div>
      </motion.div>

      {/* Wireframing Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ background: 'linear-gradient(135deg, #ff7eb3, #ff4d4d)', color: 'white' }}
      >
        <img
          src={wireframing}
          alt="Wireframing"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Wireframing</h3>
          <p className="text-lg leading-relaxed mb-4">
            Lay the foundation for seamless user experiences by planning out the structure and flow of your application.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Low-Fidelity Wireframes</li>
            <li>Information Architecture</li>
            <li>Clickable Prototypes</li>
            <li>Navigation Flow: Ensure intuitive and efficient navigation throughout your platform.</li>
            <li>Collaborative Approach: Work closely with stakeholders to align wireframes with business objectives.</li>
          </ul>
        </div>
      </motion.div>

      {/* Prototyping Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={prototyping}
          alt="Prototyping"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">Prototyping</h3>
          <p className="text-lg leading-relaxed mb-4">
            Bring your ideas to life with interactive prototypes, ensuring the final product meets user expectations and goals.
          </p>
          <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6">
            <li>Interactive Mockups</li>
            <li>User Testing and Feedback</li>
            <li>Design Iterations</li>
            <li>Cross-Device Compatibility: Validate the prototype on various devices to ensure a consistent experience.</li>
            <li>Animation and Transition Testing: Explore animations and transitions to make the interface engaging.</li>
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
        style={{ background: 'linear-gradient(135deg, #ff7eb3, #ff4d4d)', color: 'white' }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why Choose Our UI/UX Design Services?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          From ideation to implementation, we ensure user satisfaction with functional and aesthetic designs that align with your brand.
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 md:text-xl text-left pl-6 max-w-3xl mx-auto">
          <li>Innovative and User-Centric Approach</li>
          <li>Seamless Collaboration with Development Teams</li>
          <li>Attention to Detail in Every Design Element</li>
          <li>Accessibility Standards: Ensure your product is inclusive and accessible to all users.</li>
          <li>Timely Delivery: We stick to timelines without compromising on quality.</li>
        </ul>
      </motion.div>

      {/* Call-to-Action Card */}
      <motion.div
        className="text-center px-6 py-12 bg-gradient-to-r from-pink-700 to-red-800 shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Digital Experiences?
        </h3>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Partner with us to craft innovative designs that drive engagement and deliver results. Let's create something extraordinary together!
        </p>
        <a href="/ContactForm"><button className="px-8 py-3 bg-white text-purple-900 text-lg rounded-lg hover:bg-purple-200 transition duration-300 ease-in-out">
          Contact Us
        </button></a>
      </motion.div>
    </section>
  );
};

export default UIUXDesign;
