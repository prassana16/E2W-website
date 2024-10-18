import React from 'react';
import { motion } from 'framer-motion';
import { IoOptionsOutline } from "react-icons/io5";
import { SiGooglecloudcomposer } from "react-icons/si";
import { BiSolidCustomize } from "react-icons/bi";
import { MdOutlineSettingsAccessibility } from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const Intro = () => {
  return (
    <section className="bg-[#F7F2E7] py-16 font-mono">
      <div className="flex flex-col items-center justify-center mt-2 px-4">
        <h2 className='text-2xl md:text-5xl text-[#00264c] text-center font-bold'>
          Fully Customisable & Accessible Components
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Card 1 */}
          <motion.div 
            className="flex flex-col p-5 bg-white rounded-xl shadow-md" 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IoOptionsOutline className='mb-2 text-4xl text-red-700'/>
            </motion.div>
            <h4 className='text-xl md:text-2xl font-semibold mb-2 font-sans'>Optionated</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit officia velit provident esse.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="flex flex-col p-5 bg-white rounded-xl shadow-md" 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SiGooglecloudcomposer className='mb-2 text-4xl text-blue-700'/>
            </motion.div>
            <h4 className='text-xl md:text-2xl font-semibold mb-2 font-sans'>Composable</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit officia velit provident esse.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="flex flex-col p-5 bg-white rounded-xl shadow-md" 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BiSolidCustomize className='mb-2 text-4xl text-green-700'/>
            </motion.div>
            <h4 className='text-xl md:text-2xl font-semibold mb-2 font-sans'>Customizable</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit officia velit provident esse.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="flex flex-col p-5 bg-white rounded-xl shadow-md" 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <MdOutlineSettingsAccessibility className='mb-2 text-4xl text-purple-700'/>
            </motion.div>
            <h4 className='text-xl md:text-2xl font-semibold mb-2 font-sans'>Accessible</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit officia velit provident esse.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
