import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

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
];

function OurSkills() {
  return (
    <section className='bg-[#F7F2E7] py-16 flex flex-col items-center justify-center'>
      <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
        Our Skills
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center  p-3 rounded-3xl border border-gray-300 hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold text-[#00264c]">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      {/* Decorative Lines */}
      <div className="w-full flex justify-center mt-24 space-x-1">
  {[8, 7, 6, 5, 4, 3, 2, 1].map((width, i) => (
    <motion.div
      key={i}
      className={`bg-[#00264c] h-[2px] w-${width}`}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay: i * 0.1,
      }}
    />
  ))}
  {[2, 3, 4, 5, 6, 7, 8].map((width, i) => (
    <motion.div
      key={i + 8}
      className={`bg-[#00264c] h-[2px] w-${width}`}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: [1, 2, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay: (i + 8) * 0.1,
      }}
    />
  ))}
</div>
    </section>
  );
}

export default OurSkills;
