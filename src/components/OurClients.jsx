import React from 'react';
import { motion } from 'framer-motion';
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';
import Clients from '../assets/images/clients.png' 

function OurClients() {
  return (
    <section className='bg-[#110035]  flex flex-col items-center justify-center'>
      {/* Decorative Animated Lines */}
    <div className="w-full flex   ">
      {[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].map((width, i) => (
        <motion.div
          key={i}
          className={`bg-[#F7F2E7] h-[2px] w-full `}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1,2,4,6,8,10,12,12,10,8,6,4,2,1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: i * 0.2,
          }}
        />
      ))}
      
    </div>
    <h2 className="text-4xl md:text-5xl text-[#F7F2E7] text-center font-Tinos mb-16 pt-16">
      Our Clients
    </h2>
    
    {/* Description of Revenue Sharing Model */}
    <p className="text-center px-6 md:px-0 max-w-4xl font-mono text-sm md:text-lg text-[#F7F2E7] mb-12">
      Through revenue-sharing partnerships, Easy2Work collaborates with clients like Grace Scans and Baleen Media to generate sustainable growth and mutual profit. This model allows each party to benefit from performance-based income, aligning goals and fostering scalable business success.
    </p>

    {/* Client Cards */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 px-4 md:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Client Card: Grace Scans */}
      <motion.div
        className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300 shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }}
      >
        <img src={Gracescans} alt="Grace Scans" className='w-16 md:w-20' />
        <h3 className='ml-4 text-lg md:text-2xl font-semibold text-black whitespace-nowrap'>
          Grace Scans
        </h3>
      </motion.div>

      {/* Client Card: Baleen Media */}
      <motion.div
        className="flex items-center justify-center p-4 bg-white rounded-3xl border border-gray-300 "
        whileHover={{ scale: 1.1 }}
      >
        <img src={Baleen} alt="Baleen Media" className='w-14 md:w-16' />
        <h3 className='ml-4 text-lg md:text-2xl font-semibold text-black whitespace-nowrap'>
          Baleen Media
        </h3>
      </motion.div>
    </motion.div>

    {/* How Revenue-Sharing Works */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg shadow-md mt-14">
  {/* Content */}
  <div className="flex flex-col space-y-6">
    <h3 className="text-lg md:text-3xl font-Tinos text-[#F7F2E7]">How Revenue-Sharing Works</h3>
    <p className="text-sm md:text-lg font-mono text-[#fceecf]">
      Revenue-sharing is a business model where profits are distributed based on performance or contribution, fostering collaboration and mutual growth. This approach incentivizes success, aligning both client and provider towards a shared financial goal.
    </p>

    <div className="space-y-4">
      {/* Step 1 */}
      <div>
        <h4 className="text-lg md:text-3xl font-semibold text-[#F7F2E7]">Advantages of Revenue Sharing </h4>
        <p className="text-[#fceecf] font-mono text-sm md:text-lg">
        Revenue sharing effectively minimizes financial risk for partners by allowing them to benefit from business growth without incurring upfront costs. This model aligns the goals of Easy2Work and its partners, as both profit from improved performance, fostering mutual motivation to achieve business objectives. Additionally, it offers natural scalability, adapting as the business grows and ensuring sustainable growth for both parties.
        </p>
      </div>
      
      

      

      {/* Step 4 */}
      <div>
        <h4 className="text-lg md:text-3xl font-semibold text-[#F7F2E7]">This partnership structure encourages strong, mutually beneficial relationships, providing a framework for Grace Scans and Baleen Media to thrive alongside Easy2Work.</h4>
       
      </div>
    </div>
  </div>

  {/* Illustration or Relevant Image */}
  <div className="flex items-center justify-center">
    <img src={Clients} alt="Revenue Sharing Process" className="w-full max-w-md rounded-lg shadow-lg" />
  </div>
</div>



    {/* Decorative Animated Lines */}
    <div className="w-full flex  mt-24 ">
      {[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].map((width, i) => (
        <motion.div
          key={i}
          className={`bg-[#F7F2E7] h-[2px] w-full `}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1,2,4,6,8,10,12,12,10,8,6,4,2,1] }}
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
};

export default OurClients;