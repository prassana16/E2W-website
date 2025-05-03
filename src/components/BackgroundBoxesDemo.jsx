"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../../lib/utils";
import { TypewriterEffect } from "./ui/typewriter-effect";
import BGvid from '/src/Videos/main bg.mp4';
import BGvid2 from '/src/Videos/IBMS bg2.mp4';
import BGvid3 from '/src/Videos/main bg2.mp4';
import BGvid4 from '/src/Videos/main bg3.mp4';
import BGvid5 from '/src/Videos/main bg4.mp4';

export function BackgroundBoxesDemo() {
  const words = [
    {
      text: "Easy2Work.",
      className: "text-2xl md:text-6xl xl:text-8xl text-purple-200"
    }
  ];

  return (
    <div
      className="h-[80vh] md:h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
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
      <div className="absolute inset-0 bg-black opacity-10 md:opacity-20" />

      {/* Animated Boxes (if needed) */}
      {/* <Boxes /> */}

      {/* Heading */}
      <h1 className="xl:text-8xl md:text-6xl text-2xl font-bold text-white relative z-20 flex items-center gap-2 md:gap-4">
        Welcome to <TypewriterEffect words={words}  />
      </h1>

      {/* Description */}
      <p className="text-center text-xs md:text-2xl xl:text-4xl md:text-nowrap mt-4 md:mt-6 text-neutral-300 relative z-20 px-4 md:px-0 max-w-xs md:max-w-lg">
        Intelligence at the Heart of Your Business.
      </p>
    </div>
  );
}
