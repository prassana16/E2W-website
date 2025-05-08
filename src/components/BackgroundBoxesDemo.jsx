"use client";
import React from "react";
import { motion } from "framer-motion";


import Easy2workLogo from "/EASY2Work-Logo.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function BackgroundBoxesDemo() {
  const words = [
    {
      text: "Easy2Work.",
      className: "text-3xl md:text-6xl xl:text-8xl text-white",
    },
  ];

  return (
    <div
      className="h-[80vh] md:h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #05a7be, #017598)",
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={BGvid4}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-30" />

      {/* Animated Boxes (if needed) */}
      {/* <Boxes /> */}

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={Easy2workLogo}
          alt="Easy2Work Logo"
          className="w-72 md:w-96 mb-6 md:mb-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TextGenerateEffect words={words} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-100 mt-4 md:mt-8 text-center max-w-3xl px-6"
        >
          Streamlining Workflows, Enhancing Productivity, and Driving Growth for
          Your Business
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 md:mt-12"
        >
          <a href="#intro">
            <button className="bg-primary-300 hover:bg-primary-200 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Get Started
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
