import React from 'react';
import { FaPalette } from "react-icons/fa"; // Icon representing design and creativity
import { motion } from 'framer-motion';

const UIUXDesign = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#8037ff] to-[#fc9139] py-16 px-4  font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">

        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl  "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaPalette  /> {/* Palette icon representing design */}
        </motion.div>

        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#000000] mb-4">UI/UX Design</h2>
          <p className="text-lg text-[#fff] leading-relaxed mb-10">
            UI/UX Design is at the core of creating digital experiences that users love. Our approach to UI/UX design focuses on understanding user behavior, ensuring usability, and crafting visually engaging interfaces that align with your brand's vision.
          </p>

          {/* Key Features Section */}
          <div className="grid grid-cols-1  gap-8">
            <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
              <h3 className="text-2xl font-semibold text-[#333]">Key Aspects of Our UI/UX Design Process:</h3>
              <ul className="list-disc list-inside text-[#191919] text-lg leading-relaxed">
                <li>Research-driven approach to understand user needs</li>
                <li>Interactive prototypes to visualize and refine design concepts</li>
                <li>Consistent and visually appealing design language</li>
                <li>User-friendly interfaces for seamless experiences</li>
                <li>Responsive design to ensure functionality across devices</li>
              </ul>
            </div>

            <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
              <h3 className="text-2xl font-semibold text-[#333]">Current Trends in UI/UX Design</h3>
              <p className="text-lg text-[#191919] leading-relaxed">
                The field of UI/UX design is constantly evolving. Staying updated with the latest trends helps create designs that feel modern and intuitive. Here are the key trends currently shaping the industry:
              </p>
              <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
                <li><strong>Dark Mode:</strong> Dark themes are popular for reducing eye strain and giving applications a sleek look.</li>
                <li><strong>Neumorphism:</strong> This design style creates soft, lifelike visuals that add depth and dimension.</li>
                <li><strong>Micro-interactions:</strong> Subtle animations or feedback that make interactions feel natural and responsive.</li>
                <li><strong>Minimalist Design:</strong> Focuses on simplicity and clarity, reducing unnecessary elements for a cleaner user interface.</li>
                <li><strong>Voice User Interface (VUI):</strong> Integrating voice interactions to improve accessibility and provide hands-free user experiences.</li>
              </ul>
            </div>

            <div className="p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg space-y-4">
              <h3 className="text-2xl font-semibold text-[#333]">Future Trends in UI/UX Design</h3>
              <p className="text-lg text-[#191919] leading-relaxed">
                As user expectations evolve, so will UI/UX design. Anticipating future trends can help you stay ahead and deliver engaging experiences:
              </p>
              <ul className="list-disc list-inside text-[#191919] text-lg space-y-4">
                <li><strong>Augmented Reality (AR) & Virtual Reality (VR):</strong> These immersive experiences will become more common, especially in e-commerce and training applications.</li>
                <li><strong>Biometric Authentication:</strong> Facial recognition and fingerprint scanning will enhance security and improve user convenience.</li>
                <li><strong>Personalized Experiences:</strong> Designs will increasingly adapt to user preferences and behaviors, offering tailored experiences.</li>
                <li><strong>Motion Design:</strong> Using animations to guide users through tasks and create a more dynamic interface.</li>
                <li><strong>3D Elements:</strong> Integrating 3D visuals to make designs more engaging and interactive.</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="mt-16 p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Elevate Your Digital Presence with Outstanding UI/UX?</h3>
            <p className="text-lg text-[#191919] mt-4 leading-relaxed">
              Our team specializes in creating intuitive, engaging, and visually appealing user interfaces. Let’s work together to craft an experience that not only meets but exceeds user expectations.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#ff471a] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;
