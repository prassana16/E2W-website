import { section } from 'framer-motion/client'
import React from 'react'
import { RiStarSFill } from "react-icons/ri";

function Testimonials() {
  return (
    <section className=" bg-[#F7F2E7] py-16 flex flex-col items-center justify-center px-3">
  <h2 className="text-4xl md:text-5xl text-[#00264c] text-center font-Tinos mb-16">
    Testimonials
  </h2>

  <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16  ">
    <div className="px-5 rounded-xl border border-[#00264c] drop-shadow-md border-r-4 border-b-4">
      <div className="flex gap-1 text-yellow-400 text-2xl md:text-3xl mt-6 mb-3">
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      </div>
      <h3 className="font-sans font-semibold text-2xl md:text-3xl ">Grace Scans</h3>
      <p className="font-mono mt-4 mb-1 text-base font-thin md:font-medium">
        I had an excellent experience with Baleen Media for brand promotion. Their team's dedication and attention to detail made the entire process smooth and efficient. Highly recommend!
      </p>
      <p className='text-right mb-3'>- Teena Grace</p>
    </div>
    
    <div className="px-5 rounded-xl border border-[#00264c] border-r-4 border-b-4 drop-shadow-md">
      <div className="flex gap-1 text-yellow-400 text-2xl md:text-3xl mt-6 mb-3">
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      <RiStarSFill />
      </div>
      <h3 className="font-sans font-semibold text-2xl md:text-3xl ">Baleen Media</h3>
      <p className="font-mono mt-4 mb-1 text-base font-thin md:font-medium">
        I had an excellent experience with Baleen Media for brand promotion. Their team's dedication and attention to detail made the entire process smooth and efficient. Highly recommend!
      </p>
      <p className='text-right mb-3'>- Leenah Grace</p>
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

export default Testimonials