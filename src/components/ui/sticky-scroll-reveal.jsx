"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // Adjusted offset to ensure full scroll reveals last content
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1)); // Adjusted for last item accuracy
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
  style={{
    background: "radial-gradient(ellipse at center, #6c008100, #6c008100)",
  }}
  className="h-[50vh] md:h-[100vh] flex justify-between md:justify-around relative space-x-1 md:space-x-10 p-4 md:p-10"
  ref={ref}
>
  {/* Left Side: Scrollable Descriptions */}
  <div
    className=" overflow-y-auto pr-20 px-1 py-6 md:py-10 max-h-[calc(100vh-20px)]"
    style={{
      scrollbarWidth: 'none', // Hide scrollbar for Firefox
    }}
    onScroll={(e) => {
      const scrollTop = e.target.scrollTop;
      const scrollHeight = e.target.scrollHeight - e.target.clientHeight;
      const scrollProgress = scrollTop / scrollHeight;

      // Update activeCard based on scroll progress
      const cardsBreakpoints = content.map((_, index) => index / (content.length - 1));
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(scrollProgress - breakpoint);
        if (distance < Math.abs(scrollProgress - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    }}
  >
    <div className="max-w-full md:max-w-2xl">
      {content.map((item, index) => (
        <motion.div
          key={item.title + index}
          className="my-32"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: activeCard === index ? 1 : 0.3,
            scale: activeCard === index ? 1 : 0.95,
            transition: { duration: 0.5 },
          }}
        >
          <motion.h2 className="text-base text-nowrap md:text-lg lg:text-3xl font-bold text-slate-100">
            {item.title}
          </motion.h2>
          <motion.p className="text-xs md:text-lg text-nowrap lg:text-2xl text-slate-300 max-w-sx mt-2">
            {item.description}
          </motion.p>
        </motion.div>
      ))}
      <div className="h-10" /> {/* Increased height for padding at end */}
    </div>
  </div>

  {/* Right Side: Image Section */}
  <div
    className={cn(
      "block h-auto w-96 md:w-[50%] md:h-auto sticky top-10",
      contentClassName
    )}
  >
    <motion.div
      key={activeCard} // Dynamically updated when activeCard changes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="h-full w-full"
    >
      {content[activeCard].content ?? null}
    </motion.div>
  </div>
</motion.div>

  );
};
