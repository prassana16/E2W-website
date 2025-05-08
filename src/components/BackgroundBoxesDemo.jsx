"use client";
import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "./ui/background-boxes";
import Easy2workLogo from "/EASY2Work-Logo.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Link } from "react-router-dom";

export function BackgroundBoxesDemo() {
  const words = [
    {
      text: "Easy2Work.",
      className: "text-4xl md:text-6xl xl:text-8xl font-bold text-white",
    },
  ];

  const locations = ["USA", "Canada", "Germany", "Singapore", "Dubai"];

  return (
    <div
      className="h-[80vh] md:h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #017598, #087ea2, #05a7be, #18c4b8, #1ed7cd)`,
      }}
    >
      {/* Animated Boxes */}
      <Boxes />

      {/* Optional Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-30" />

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
          className="text-xl md:text-2xl text-white mt-4 md:mt-8 text-center max-w-3xl px-6 font-medium"
        >
          Next-Generation AI-Powered Software Development Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-100 mt-2 md:mt-4 text-center max-w-3xl px-6"
        >
          Transforming Businesses Through Innovative Technology
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center mt-4 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {locations.map((location, index) => (
            <span
              key={location}
              className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm border border-white/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {location}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/ContactForm">
            <button className="bg-white hover:bg-gray-100 text-[#087ea2] px-8 py-3 rounded-lg font-bold transition duration-300 shadow-lg">
              Get Started
            </button>
          </Link>
          <a href="#intro">
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Learn More
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
