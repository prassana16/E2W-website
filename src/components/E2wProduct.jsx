"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import mobileMockup from '../assets/images/ModuleImages/e2wAbout.png';

const content = [
  {
    title: "About Easy2Work",
    description:
      "Easy2Work is an all-in-one workflow management system designed to optimize business processes and streamline daily operations. Customization is our value-add. It provides an intuitive interface for managing clients, handling rate cards, processing orders, and governing financial transactions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Client Manager",
    description:
      "Our Client Manager helps businesses manage client data efficiently with lead source capture, easy client search, and secure cloud storage.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={mobileMockup}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  
  {
    title: "Quote Sender",
    description:
      "The Quote Sender tool simplifies the process of creating and sending quotes with dynamic margin adjustments, slab-wise pricing, and the ability to download quotes seamlessly.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Rate Manager",
    description:
      "The Rate Manager module is designed to simplify rate management with its user-friendly interface. It allows businesses to search rates, set slab-wise pricing, and define service duration for different campaigns or products with ease.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Finance Manager",
    description:
      "The Finance Manager empowers businesses to efficiently manage client data with features like customized lead source tracking, quick client search, and secure cloud storage for peace of mind.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function E2wProduct() {
  return (
    (<div className="">
      <StickyScroll content={content} />
    </div>)
  );
}
