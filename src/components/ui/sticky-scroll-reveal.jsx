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
        background: 'radial-gradient(ellipse at center, #6c008100, #6c008100)'
      }}
      className="h-[50vh] md:h-[100vh] overflow-y-auto flex justify-between md:justify-around relative space-x-1 md:space-x-10 p-4 md:p-10"
      ref={ref}
    >
      <div className="flex items-start px-4 py-10">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="my-32"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3, // Adjusted opacity for active card
                scale: activeCard === index ? 1 : 0.95,
                transition: { duration: 0.5 }
              }}
            >
              <motion.h2
                className="text-base md:text-lg lg:text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p className="text-sm md:text-lg lg:text-xl text-slate-300 max-w-sm mt-2">
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-10" /> {/* Increased height for padding at end */}
        </div>
      </div>
      <div
        className={cn(
          "block h-80 w-96 md:w-[50%] md:h-96 sticky top-10 ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
