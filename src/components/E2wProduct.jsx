"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import mobileMockup from '../assets/images/ModuleImages/e2wAbout.png';
import clientManagerImage from '../assets/images/ModuleImages/e2wClient.png';
import consultantImage from '../assets/images/ModuleImages/e2wCounsultant.png';
import FinanceManagerImage from '../assets/images/ModuleImages/e2wFinance.png';
import FinanceReportImage from '../assets/images/ModuleImages/e2wFinanceReport.png';
import OrderManagerImage from '../assets/images/ModuleImages/e2wOrder.png';
import OrderReportImage from '../assets/images/ModuleImages/e2wOrderReport.png';
import PaymentMilestoneImage from '../assets/images/ModuleImages/e2wpayment.png';
import quoteSenderImage from '../assets/images/ModuleImages/e2wQuote.png';
import rateManagerImage from '../assets/images/ModuleImages/e2wRatemanager.png';
import RateValidationImage from '../assets/images/ModuleImages/e2wRatevalid.png';

const content = [
  {
    title: "About Easy2Work",
    description:
      "Easy2Work is an all-in-one workflow management system designed to optimize business processes and streamline daily operations. Customization is our value-add. It provides an intuitive interface for managing clients, handling rate cards, processing orders, and governing financial transactions.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={mobileMockup}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
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
          src={clientManagerImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  
  {
    title: "Quote Sender",
    description:
      "The Quote Sender tool simplifies the process of creating and sending quotes with dynamic margin adjustments, slab-wise pricing, and the ability to download quotes seamlessly.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={quoteSenderImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Rate Manager",
    description:
      "The Rate Manager module is designed to simplify rate management with its user-friendly interface. It allows businesses to search rates, set slab-wise pricing, and define service duration for different campaigns or products with ease.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={rateManagerImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Finance Manager",
    description:
      "The Finance Manager empowers businesses to efficiently manage client data with features like customized lead source tracking, quick client search, and secure cloud storage for peace of mind.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={FinanceManagerImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Order Manager",
    description:
      "The Order Manager simplifies the way businesses handle orders, from tracking lead sources to organizing client information with fast search capabilities and secure cloud storage.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={OrderManagerImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Finance Report",
    description:
      "The Finance Report feature provides businesses with real-time financial insights, offering detailed breakdowns of revenue, expenses, and performance metrics to ensure efficient financial management.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={FinanceReportImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Order Report",
    description:
      "The Order Report provides businesses with detailed insights into order tracking, fulfillment, and performance analysis, helping to streamline operations and optimize customer satisfaction.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={OrderReportImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Consultant Manager",
    description:
      "The Consultant Manager enables businesses to efficiently manage consultant engagements, track performance, and streamline communication for better collaboration and results.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={consultantImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Rate Validation",
    description:
      "The Rate Validation feature ensures that your pricing is consistent, competitive, and accurate across all platforms, helping businesses maintain financial accuracy and compliance.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={RateValidationImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Payment Milestones",
    description:
      "Our Payment Manager offers a streamlined approach to track Payment milestones, ensuring timely delivery and effective communication across teams.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={PaymentMilestoneImage}
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Conclusion",
    description:
      "EasyToWork Workflow Management Software is designed to simplify and enhance business operations, offering customizable solutions that drive efficiency, improve team communication, and ensure timely project milestones. With EasyToWork, businesses can manage workflows seamlessly, ensuring all tasks, payments, and communications are optimized for maximum productivity.",
    
},
  
];
export function E2wProduct() {
  return (<div className="w-full h-full py-20 " style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}>
    <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-100 dark:text-neutral-200 font-sans mb-4 md:mb-10"
      >
        Our Workflow Management Tools.
      </h2>
    <div className="h-[100vh]">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}
