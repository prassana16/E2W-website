import React from 'react';
import { motion } from 'framer-motion';
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';

function OurClients() {
  return (
    <section className='flex flex-col items-center justify-center' style={{ background: 'radial-gradient(ellipse at center, #2a0061, #0a0011)' }}>
      {/* Decorative Animated Lines */}
      <div className="w-full flex">
        {Array(26).fill().map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#f3f4f6] h-[2px] w-full"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Section Heading */}
      <h2 className="relative text-4xl md:text-5xl text-[#F7F2E7] text-center font-Tinos mb-16 pt-16">
        Revenue Sharing Model
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-6 w-full">
      {/* Revenue Sharing Description Card */}
      <div className="relative max-w-4xl p-6 bg-[#000000a4] rounded-2xl border border-purple-400 mb-10 text-center">
        <h3 className="text-lg md:text-3xl font-Tinos text-[#F7F2E7] mb-4">How Revenue Share Model Works</h3>
        <p className="text-sm md:text-lg font-mono text-[#fceecf]">
          The Revenue Share Model is a unique partnership approach where profits are shared based on mutual performance and contribution. Unlike traditional fee-for-service models, this system fosters a collaborative environment where both parties are incentivized to drive success. By linking financial rewards to results, the Revenue Share Model aligns the interests of Easy2Work and its clients, focusing on shared goals and sustainable growth.
          <br/><br/>
          Through this model, clients can benefit without significant upfront costs, as payments are tied to business outcomes. This setup allows partners to scale naturally with Easy2Work, promoting a balanced and mutually beneficial relationship that grows as both sides succeed.
        </p>
      </div>

      {/* Revenue Sharing Clients Card */}
      <div className="relative max-w-4xl p-6 bg-[#000000a4] rounded-2xl border border-purple-400 mt-10 text-center">
        <h3 className="text-lg md:text-3xl font-Tinos text-[#F7F2E7] mb-4">Our Revenue Sharing Clients</h3>
        <p className="text-sm md:text-lg font-mono text-[#fceecf] mb-6">
          Easy2Work collaborates with clients such as Grace Scans and Baleen Media under the Revenue Share Model to foster mutually beneficial growth. This model ensures that both Easy2Work and its clients thrive as their business performance improves, creating a scalable and rewarding partnership structure.
        </p>

        {/* Client Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Client Card: Baleen Media */}
          <motion.div
            className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300"
            whileHover={{ scale: 1 }}
          >
            <img src={Baleen} alt="Baleen Media" className='w-14 md:w-16' />
            <h3 className='ml-4 text-lg md:text-2xl font-semibold text-black whitespace-nowrap'>
              Baleen Media
            </h3>
          </motion.div>

          {/* Client Card: Grace Scans */}
          <motion.div
            className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300 shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            whileHover={{ scale: 1 }}
          >
            <img src={Gracescans} alt="Grace Scans" className='w-16 md:w-20' />
            <h3 className='ml-4 text-lg md:text-2xl font-semibold text-black whitespace-nowrap'>
              Grace Scans
            </h3>
          </motion.div>
        </motion.div>
      </div>
</div>
      {/* Bottom Decorative Animated Lines */}
      <div className="w-full flex mt-24">
        {Array(26).fill().map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#f3f4f6] h-[2px] w-full"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default OurClients;
