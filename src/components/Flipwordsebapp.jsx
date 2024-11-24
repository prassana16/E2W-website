import React from "react";
import { FlipWords } from "./ui/flip-words";
import { BackgroundLines } from "./ui/background-lines";
import { cn } from "../../lib/utils";

export function FlipWordswebapp() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<BackgroundLines className="h-[40rem] inset-0 flex justify-center items-center px-4 " >
      
      <h2
        className="absolute text-2xl md:text-6xl mx-auto  text-neutral-100   font-bold  ">
        Build
        <FlipWords words={words} className={cn("bg-white bg-opacity-80 backdrop-blur-lg rounded-md border border-purple-400 shadow-lg text-center ml-3 p-1 uppercase")}/> <br />
        Web Applications with EASY2WORK
      </h2>
      
    </BackgroundLines>)
  );
} 
