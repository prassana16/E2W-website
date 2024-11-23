"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import poster from "../assets/images/skills-poster.png";
import Mobileposter from "../assets/images/skills-poster-mobile.png";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              Cutting edge technologies used in  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Easy2Work
              </span>
            </h2>
          </>
        }
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={Mobileposter} />
          <source media="(min-width: 769px)" srcSet={poster} />
          <img
            src={poster} // Fallback image for unsupported browsers
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object h-full object-left-top"
            draggable={false}
          />
        </picture>
      </ContainerScroll>
      
    </div>
  );
}
