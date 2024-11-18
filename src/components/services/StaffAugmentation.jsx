import React from 'react';
import { FaUsers } from "react-icons/fa"; // Icon representing team and collaboration
import { motion } from 'framer-motion';

const StaffAugmentation = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#d1e0fc] to-[#4a90e2] py-16 px-4 md:px-16 font-mono">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 max-w-screen-lg w-full">
        
        {/* Icon and Intro Section */}
        <motion.div 
          className="text-6xl text-[#333] mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaUsers /> {/* Staff augmentation icon */}
        </motion.div>
        
        <div>
          {/* Header */}
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Staff Augmentation</h2>
          <p className="text-lg text-[#fff] leading-relaxed">
            Staff augmentation helps you scale your team with skilled professionals, allowing flexibility and speed without the long-term commitment of hiring full-time employees. Our experts integrate seamlessly with your in-house team to boost productivity and meet project goals.
          </p>
          
          {/* Key Benefits */}
          <div className="mt-10 space-y-6">
            <h3 className="text-2xl font-semibold text-[#333]">Key Benefits of Staff Augmentation:</h3>
            <ul className="list-disc list-inside text-[#fff] text-lg leading-relaxed">
              <li>Access to specialized skills on demand</li>
              <li>Scalable solutions that grow with your business needs</li>
              <li>Reduced overhead costs compared to full-time hiring</li>
              <li>Quick adaptation to project requirements</li>
              <li>Enhanced productivity with a flexible workforce</li>
            </ul>
          </div>
          
          {/* Image Section */}
          <div className="mt-8">
            <img
              src="path/to/staff-augmentation-image.jpg" // Replace with actual path
              alt="Staff Augmentation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Expertise and Skillsets */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Our Areas of Expertise</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              Our staff augmentation services cover a broad range of expertise, allowing us to match professionals with your unique needs:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Software Development:</strong> From frontend to backend, we provide developers proficient in various tech stacks.</li>
              <li><strong>Project Management:</strong> Skilled project managers ensure smooth project execution and timely delivery.</li>
              <li><strong>Quality Assurance:</strong> QA professionals focus on maintaining high standards with manual and automated testing.</li>
              <li><strong>UI/UX Design:</strong> Designers who prioritize user experience and create intuitive interfaces.</li>
              <li><strong>Data Analysis:</strong> Data scientists and analysts who turn data into actionable insights.</li>
            </ul>
          </div>

          {/* Trends in Staff Augmentation */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-[#333]">Current Trends in Staff Augmentation</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              As businesses seek agility, the staff augmentation model continues to evolve to meet dynamic market demands. Here are some key trends:
            </p>
            <ul className="list-disc list-inside text-[#fff] text-lg mt-6 space-y-4">
              <li><strong>Remote Collaboration:</strong> Virtual teams are now the norm, allowing businesses to source talent globally.</li>
              <li><strong>On-Demand Staffing:</strong> Companies are increasingly hiring specialists for specific project phases.</li>
              <li><strong>Long-Term Partnerships:</strong> Many organizations are forming ongoing relationships with augmentation firms for reliable talent supply.</li>
              <li><strong>Blended Teams:</strong> A mix of in-house and augmented staff improves knowledge transfer and project alignment.</li>
              <li><strong>Specialized Skills Demand:</strong> Demand for niche skills, such as cloud engineering and data science, is growing significantly.</li>
            </ul>
          </div>
          
          {/* Call-to-Action */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-[#333]">Ready to Enhance Your Team's Capabilities?</h3>
            <p className="text-lg text-[#fff] mt-4 leading-relaxed">
              Partner with us to augment your team with skilled professionals ready to drive your projects forward. Contact us to discuss your staffing needs and let us help you scale effectively.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#4a90e2] transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;
