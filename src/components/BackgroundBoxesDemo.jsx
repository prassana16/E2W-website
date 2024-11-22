"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../../lib/utils";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function BackgroundBoxesDemo() {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "apps",
        },
        {
          text: "with",
        },
        {
          text: "Aceternity.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    (<div
      className="h-[80vh] relative w-full overflow-hidden bg-[#6c0081] flex flex-col items-center justify-center ">
      <div
        className="absolute inset-0 w-full h-full bg-[#001831] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-6xl text-xl font-bold text-white relative z-20 ")}>
        WELCOME TO EASY2WORK INDIA
      </h1>
      
      <p className="text-center  mt-2 text-neutral-300 relative z-20">
      EMPOWER | ENGAGE | EXCEL
      </p>
    </div>)
  );
}
