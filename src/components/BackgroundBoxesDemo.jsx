"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../../lib/utils";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function BackgroundBoxesDemo() {
    const words = [
       
        
        {
          text: "Easy2Work.",
          className: "text-2xl md:text-6xl text-purple-200  "
        },
      ];
  return (
    (<div
      className="h-[80vh] md:h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-[#000000] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
      />
      
      {/* Animated Boxes */}
      <Boxes />
    
      {/* Heading */}
      <h1 className="md:text-6xl text-2xl font-bold text-white relative z-20 flex items-center gap-2 md:gap-4">
        Welcome to <TypewriterEffect words={words} />
      </h1>
      
      {/* Description */}
      <p className="text-center text-xs md:text-lg mt-4 text-neutral-300 relative z-20 px-4 md:px-0 max-w-xs md:max-w-lg">
        We are collaborating with high-quality professionals across the world.
      </p>
    </div>
    )
  );
}
