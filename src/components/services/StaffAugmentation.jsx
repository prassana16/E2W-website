import React from "react";
import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const StaffAugmentation = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#d1e0fc] to-[#4a90e2] py-16 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl text-[#030303] mb-6"
        >
          <FaUsers />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Staff Augmentation
        </h1>
        <p className="mt-4 text-lg md:text-xl text-balck max-w-3xl">
          Enhance your team with skilled professionals to meet project demands and business goals efficiently.
        </p>

        {/* Key Benefits Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className=" mt-12"
>
  <div className=" bg-gradient-to-br from-[#ffffff] to-[#d1e0fc] backdrop-blur-xl border border-[#4a90e2]/30 shadow-xl rounded-2xl p-8 md:p-10 relative overflow-hidden">
    
    {/* Decorative Element */}
    <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#b7fbff] to-[#d399ff] rounded-2xl blur-xl"></div>

    {/* Content */}
    <div className="relative z-10 text-start md:text-center">
      <h3 className="text-3xl font-bold text-[#4a90e2] text-center mb-6">
        Why Choose Us?
      </h3>
      <ul className="space-y-4 text-lg text-gray-700">
        <li className="flex items-center">
          <div className="w-4 h-4 bg-[#4a90e2] rounded-full mr-3"></div>
          Access to specialized skills on demand
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 bg-[#4a90e2] rounded-full mr-3"></div>
          Flexible workforce that scales with your needs
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 bg-[#4a90e2] rounded-full mr-3"></div>
          Reduced overhead and hiring time
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 bg-[#4a90e2] rounded-full mr-3"></div>
          Seamless integration with your in-house team
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 bg-[#4a90e2] rounded-full mr-3"></div>
          Enhanced productivity and efficiency
        </li>
      </ul>
    </div>
  </div>
</motion.div>


        {/* Expertise Section */}
        <div className="mt-16 max-w-screen-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left ">
            {[
              {
                title: "Software Development",
                description: "Frontend, backend, and full-stack developers proficient in modern tech stacks.",
              },
              {
                title: "Project Management",
                description: "Experienced managers to streamline workflows and ensure timely deliveries.",
              },
              {
                title: "Quality Assurance",
                description: "Manual and automated testing experts to maintain high standards.",
              },
              {
                title: "UI/UX Design",
                description: "Creative designers focused on user-centric and visually engaging interfaces.",
              },
              {
                title: "Data Analysis",
                description: "Data experts who turn raw data into actionable insights for informed decisions.",
              },
              {
                title: "Cloud Specialists",
                description: "Cloud engineers to manage scalable and secure cloud solutions.",
              },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="  bg-gradient-to-br from-[#ffffff] to-[#d1e0fc] backdrop-blur-xl border border-[#4a90e2]/30 shadow-xl rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-[#4a90e2]">
                  {expertise.title}
                </h3>
                <p className="mt-2 text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Augment Your Team?
          </h3>
          <p className="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto">
            Let’s discuss your staffing requirements and provide you with the right professionals to scale your team effectively.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#333] text-white text-lg rounded-lg shadow-md hover:bg-[#4a90e2] transition duration-300 ease-in-out">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffAugmentation;
