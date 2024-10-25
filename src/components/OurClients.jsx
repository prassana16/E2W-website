import { section } from 'framer-motion/m'
import React from 'react';
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png'
function OurClients() {
  return (
   <section className='bg-[#F7F2E7] py-16 flex flex-col items-center justify-center'>
    <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16 ">
    Our Clients
  </h2>
  <div className="flex gap-4 items-center justify-center ">
    <div className=" p-3 font-sans flex items-center justify-center gap-2 rounded-xl bg-white border">
        <img src={Gracescans} alt="" className='w-14' />
        <h3 className='text-xl md:text-4xl font-semibold text-nowrap '>Grace Scans</h3>
    </div>
    <div className=" p-3 font-sans flex items-center justify-center gap-2 rounded-xl bg-white border">
        <img src={Baleen} alt="" className='w-12' />
        <h3 className='text-xl md:text-4xl font-semibold text-nowrap'>Baleen Media</h3>
    </div>
  </div>
  <div className="bg-[#00264c] h-[1px] mt-32 w-8"></div>
  <div className="bg-[#00264c] h-[2px]  w-2/3 "></div>
  <div className="bg-[#00264c] h-[2px]  w-8"></div>
  <div className="bg-[#00264c] h-[2px]  w-7"></div>
  <div className="bg-[#00264c] h-[2px]  w-6"></div>
  <div className="bg-[#00264c] h-[2px]  w-5"></div>
  <div className="bg-[#00264c] h-[2px]  w-4"></div>
  <div className="bg-[#00264c] h-[2px]  w-3"></div>
  <div className="bg-[#00264c] h-[2px]  w-2"></div>
  <div className="bg-[#00264c] h-[2px]  w-1"></div>
   </section>
  )
}

export default OurClients
