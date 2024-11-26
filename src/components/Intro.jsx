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
    <section className="bg-[#F7F2E7] py-16 md:py-20 font-mono">
      <div className="flex flex-col items-center justify-center mt-4 px-4">
        <h2 className="text-2xl md:text-5xl text-[#00264c] text-center font-Tinos">
          Fully Customisable & Accessible Components
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-24">
          {/* Card 1: Optionated */}
          <motion.div
            className="flex flex-col p-5  rounded-xl shadow-md text-neutral-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IoOptionsOutline className="mb-2 text-4xl text-red-700" />
            </motion.div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 font-sans">Optionated</h4>
            <p>
              Easy2Work offers a variety of settings, allowing you to customize workflows as needed.
            </p>
          </motion.div>

          {/* Card 2: Composable */}
          <motion.div
            className="flex flex-col p-5  rounded-xl shadow-md text-neutral-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
            viewport={{ once: true }}
          >

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SiGooglecloudcomposer className="mb-2 text-4xl text-blue-700" />
            </motion.div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 font-sans">Composable</h4>
            <p>
              Build flexible workflows by integrating multiple tools seamlessly with Easy2Work.
            </p>
          </motion.div>

          {/* Card 3: Customizable */}
          <motion.div
            className="flex flex-col p-5  rounded-xl shadow-md text-neutral-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
            viewport={{ once: true }}
          >

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BiSolidCustomize className="mb-2 text-4xl text-green-700" />
            </motion.div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 font-sans">Customizable</h4>
            <p>
              Tailor your processes and templates to match your business's unique needs.
            </p>
          </motion.div>

          {/* Card 4: Accessible */}
          <motion.div
            className="flex flex-col p-5  rounded-xl shadow-md text-neutral-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
            viewport={{ once: true }}
          >

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <MdOutlineSettingsAccessibility className="mb-2 text-4xl text-purple-700" />
            </motion.div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 font-sans">Accessible</h4>
            <p>
              Easy2Work ensures smooth navigation for users across all devices and platforms.
            </p>
          </motion.div>
        </div>

        {/* Decorative lines */}
        <div className="bg-[#00264c] h-[1px] mt-32 w-8"></div>
        <div className="bg-[#00264c] h-[2px] w-2/3"></div>
        <div className="bg-[#00264c] h-[2px] w-8"></div>
        <div className="bg-[#00264c] h-[2px] w-7"></div>
        <div className="bg-[#00264c] h-[2px] w-6"></div>
        <div className="bg-[#00264c] h-[2px] w-5"></div>
        <div className="bg-[#00264c] h-[2px] w-4"></div>
        <div className="bg-[#00264c] h-[2px] w-3"></div>
        <div className="bg-[#00264c] h-[2px] w-2"></div>
        <div className="bg-[#00264c] h-[2px] w-1"></div>
      </div>
    </section>
  );
};

export default Intro;
