import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaFigma, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiMicrosoftazure, SiAzuredevops, SiPhp, SiMysql, SiCsharp, SiTensorflow } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import bg from '../assets/images/bgvect.png';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-[#61DBFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-[#000]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#258318]" /> },
  { name: 'Redux', icon: <SiRedux className="text-[#512BD4]" /> },
  { name: 'Azure Cloud', icon: <SiMicrosoftazure className="text-[#008AD7]" /> },
  { name: 'Azure DevOps', icon: <SiAzuredevops className="text-[#008AD7]" /> },
  { name: 'PHP', icon: <SiPhp className="text-[#4F5B93]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'ASP.NET', icon: <DiDotnet className="text-[#2b3cd4]" /> },
  { name: 'C#', icon: <SiCsharp className="text-[#178600]" /> },
  { name: 'Laravel', icon: <FaLaravel className="text-[#ff6232]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-[#050505]" /> },
  { name: 'Tensorflow', icon: <SiTensorflow className="text-[#ffca37]" /> },
];

function OurSkills() {
  return (
    <section className='relative bg-[#f3f4f6] py-16 flex flex-col items-center justify-center overflow-hidden'>
      {/* Background image with blending */}
      {/* <img
  src={bg}
  alt=""
  className='absolute w-full inset-0 h-full object-cover mix-blend-color-burn opacity-15'
  style={{ zIndex: 1 }}
  loading="lazy" // Enable lazy loading
/> */}
      
      <h2 className="relative text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
        Our Skills
      </h2>
      
      <motion.div
        className="relative grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center p-3 rounded-3xl border border-gray-300 hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold text-[#00264c]">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default OurSkills;
