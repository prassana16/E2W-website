import React from "react";
import { FlipWords } from "./ui/flip-words";
import { BackgroundLines } from "./ui/background-lines";
import { cn } from "../../lib/utils";

export function FlipWordsmobile() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <BackgroundLines className="relative h-[25rem] md:h-[40rem] inset-0 flex justify-center items-center px-4 w-full">
      <div className="text-left w-full flex items-center justify-center">
        <h2 className="text-3xl md:text-7xl font-bold text-neutral-100 justify-center">
          Build
          <FlipWords
            words={words}
            className={cn(
              "bg-white bg-opacity-80 backdrop-blur-lg rounded-md border border-purple-400 shadow-lg text-center inline-block ml-3 p-2 text-sm  md:text-6xl  uppercase"
            )}
          />
          <br />
          <span className="block text-lg  md:text-5xl mt-2">
            Mobile Apps with <span className="text-purple-400">EASY2WORK</span>
          </span>
        </h2>
      </div>
    </BackgroundLines>
  );
}
