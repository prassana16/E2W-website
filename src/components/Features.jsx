import React, { useState, useRef, useEffect } from 'react';
import About from './About';
import ClientManager from './ClientManager';
import QuoteSender from './QuoteSender';
import RateManager from './RateManager';
import FinanceManager from './FinanceManager';
import OrderManager from './OrderManager';
import FinanceReport from './FinanceReport';
import OrderReport from './OrderReport';
import Consultant from './Consultant';
import RateValidation from './RateValidation';
import PaymentMilestone from './PaymentMilestone';
import btm from '../assets/images/pagebtm.png';
import top from '../assets/images/paagetop.png';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function Features() {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const scrollRef = useRef(null); // Ref to access the scrollable section
  const totalPages = 11; // Total number of sections

  // Function to handle right arrow click (move to the next section)
  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      scrollToSection(newPage);
    }
  };

  // Function to handle left arrow click (move to the previous section)
  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      scrollToSection(newPage);
    }
  };

  // Scroll to a specific section based on the page number
  const scrollToSection = (page) => {
    const sectionWidth = scrollRef.current.offsetWidth; // Get the width of one section
    scrollRef.current.scrollTo({
      left: (page - 1) * sectionWidth, // Scroll to the next section
      behavior: 'smooth', // Smooth scroll effect
    });
    setCurrentPage(page); // Update the current page
  };

  // Function to track the scroll position and update the page number dynamically
  const handleScroll = () => {
    const sectionWidth = scrollRef.current.offsetWidth;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newPage = Math.round(scrollLeft / sectionWidth) + 1;
    setCurrentPage(newPage);
  };

  // Attach the scroll listener on component mount
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-[#00264c]" id='features'>
      {/* Top Image */}
      {/* <img src={top} alt="" className="w-full" /> */}
      <div className="flex items-center ">
        <div className="w-1/2 items-center justify-center flex flex-col">
        <div className="bg-[#F7F2E7] w-[100%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[90%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[80%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[70%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[60%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[50%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[40%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[30%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[20%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[10%] h-[3px] md:h-[8px] "></div>
        </div>
        <div className="w-1/2 items-center justify-center flex flex-col">
        <div className="bg-[#F7F2E7] w-[100%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[90%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[80%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[70%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[60%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[50%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[40%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[30%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[20%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[10%] h-[3px] md:h-[8px] "></div>
        </div>
      </div>
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-[#F7F2E7] text-center font-Tinos pt-11 ">
    Features
  </h2>
      
      {/* Pagination */}
      <div className='text-[#F7F2E7] text-lg text-center mb flex items-center gap-2 justify-center'>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <IoIosArrowDropleftCircle className={`${currentPage === 1 ? 'opacity-50' : ''}`} />
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <IoIosArrowDroprightCircle className={`${currentPage === totalPages ? 'opacity-50' : ''}`} />
        </button>
      </div>
      
      {/* Horizontal Scrollable Section */}
      <div 
        ref={scrollRef} 
        className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-32"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="min-w-full snap-start">
          <About />
        </div>
        <div className="min-w-full snap-start">
          <ClientManager />
        </div>
        <div className="min-w-full snap-start">
          <QuoteSender />
        </div>
        <div className="min-w-full snap-start">
          <RateManager />
        </div>
        <div className="min-w-full snap-start">
          <FinanceManager />
        </div>
        <div className="min-w-full snap-start">
          <OrderManager />
        </div>
        <div className="min-w-full snap-start">
          <FinanceReport />
        </div>
        <div className="min-w-full snap-start">
          <OrderReport />
        </div>
        <div className="min-w-full snap-start">
          <Consultant/>
        </div>
        <div className="min-w-full snap-start">
        <RateValidation />
        </div>
        <div className="min-w-full snap-start">
        <PaymentMilestone />
        </div>
        
      </div>

      <div className="flex items-center ">
        <div className="w-1/2 items-center justify-center flex flex-col">
        <div className="bg-[#F7F2E7] w-[10%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[20%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[30%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[40%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[50%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[60%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[70%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[80%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[90%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[100%] h-[3px] md:h-[8px] "></div>
        </div>
        <div className="w-1/2 items-center justify-center flex flex-col">
        <div className="bg-[#F7F2E7] w-[10%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[20%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[30%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[40%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[50%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[60%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[70%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[80%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[90%] h-[3px] md:h-[8px] "></div>
        <div className="bg-[#F7F2E7] w-[100%] h-[3px] md:h-[8px] "></div>
        </div>
      </div>

      {/* Bottom Image */}
      {/* <img src={btm} alt="" className="w-full" /> */}
    </div>
  );
}

export default Features;
