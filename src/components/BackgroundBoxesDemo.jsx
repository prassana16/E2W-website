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
      className="h-[100vh]  relative w-full overflow-hidden bg-[#000000] flex flex-col items-center justify-center " style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}>
      <div
        className="absolute inset-0 w-full h-full bg-[#000000] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <h1 className={cn("md:text-6xl text-2xl font-bold text-white  relative z-20 flex items-center gap-2 md:gap-4")}>
        welocome to <TypewriterEffect words={words}   />
      
      </h1>
      
      <p className="text-center text-xs md:text-lg mt-4 text-neutral-300 relative z-20 ">
      We are collaborating with high quality professionals across Singapore and the rest of the world.  
      </p>
    </div>)
  );
}
