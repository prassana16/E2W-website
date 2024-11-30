"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import mobileMockup from '../assets/images/ModuleImages/e2wAbout.png';
import e2waboutphn from '../assets/images/ModuleImages/e2waboutphn.png';
import clientManagerImage from '../assets/images/ModuleImages/e2wClient.png';
import e2wclientphn from '../assets/images/ModuleImages/e2wclientphn.png';
import consultantImage from '../assets/images/ModuleImages/e2wCounsultant.png';
import e2wconsultantmanagerphn from '../assets/images/ModuleImages/e2wconsultantmanagerphn.png';
import FinanceManagerImage from '../assets/images/ModuleImages/e2wFinance.png';
import e2wfinancephn from '../assets/images/ModuleImages/e2wfinancephn.png';
import FinanceReportImage from '../assets/images/ModuleImages/e2wFinanceReport.png';
import e2wfinancereportphn from '../assets/images/ModuleImages/e2wfinancereportphn.png';
import OrderManagerImage from '../assets/images/ModuleImages/e2wOrder.png';
import e2worderphn from '../assets/images/ModuleImages/e2worderphn.png';
import OrderReportImage from '../assets/images/ModuleImages/e2wOrderReport.png';
import e2worderreportphn from '../assets/images/ModuleImages/e2worderreportphn.png';
import PaymentMilestoneImage from '../assets/images/ModuleImages/paymentmilestone.png';
import e2wpaymilephn from '../assets/images/ModuleImages/e2wpaymilephn.png';
import quoteSenderImage from '../assets/images/ModuleImages/e2wQuote.png';
import e2wquotephn from '../assets/images/ModuleImages/e2wquotephn.png';
import rateManagerImage from '../assets/images/ModuleImages/e2wRatemanager.png';
import e2wratesphn from '../assets/images/ModuleImages/e2wratesphn.png';
import RateValidationImage from '../assets/images/ModuleImages/e2wRatevalid.png';
import e2wratevalidationphn from '../assets/images/ModuleImages/e2wratevalidationphn.png';
import userManagerImage from '../assets/images/ModuleImages/usermanager.png';
import e2wusermanagerphn from '../assets/images/ModuleImages/e2wusermanagerphn.png';
import appointmentManagerImage from '../assets/images/ModuleImages/appointmentmanager.png';
import e2wappointmentphn from '../assets/images/ModuleImages/e2wappointmentphn.png';
import conclusionImage from '../assets/images/ModuleImages/conclusion.png';
import e2wconclusionphn from '../assets/images/ModuleImages/e2wconclusionphn.png';

const content = [
  {
    title: "About Easy2Work",
    description:
      "Easy2Work is an all-in-one workflow management system designed to optimize business processes and streamline daily operations. Customization is our value-add. It provides an intuitive interface for managing clients, handling rate cards, processing orders, and governing financial transactions.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={mobileMockup}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2waboutphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Client Manager",
    description:
      "Our Client Manager helps businesses manage client data efficiently with lead source capture, easy client search, and secure cloud storage.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={clientManagerImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wclientphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  
  {
    title: "Quote Sender",
    description:
      "The Quote Sender tool simplifies the process of creating and sending quotes with dynamic margin adjustments, slab-wise pricing, and the ability to download quotes seamlessly.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
       {/* Desktop View Image */}
      <img
        src={quoteSenderImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wquotephn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Order Manager",
    description:
      "The Order Manager simplifies the way businesses handle orders, from tracking lead sources to organizing client information with fast search capabilities and secure cloud storage.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={OrderManagerImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2worderphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Finance Manager",
    description:
      "The Finance Manager empowers businesses to efficiently manage client data with features like customized lead source tracking, quick client search, and secure cloud storage for peace of mind.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={FinanceManagerImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wfinancephn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Rate Manager",
    description:
      "The Rate Manager module is designed to simplify rate management with its user-friendly interface. It allows businesses to search rates, set slab-wise pricing, and define service duration for different campaigns or products with ease.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={rateManagerImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wratesphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Rate Validation",
    description:
      "The Rate Validation feature ensures that your pricing is consistent, competitive, and accurate across all platforms, helping businesses maintain financial accuracy and compliance.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={RateValidationImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wratevalidationphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Order Report",
    description:
      "The Order Report provides businesses with detailed insights into order tracking, fulfillment, and performance analysis, helping to streamline operations and optimize customer satisfaction.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
       {/* Desktop View Image */}
      <img
        src={OrderReportImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2worderreportphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Finance Report",
    description:
      "The Finance Report feature provides businesses with real-time financial insights, offering detailed breakdowns of revenue, expenses, and performance metrics to ensure efficient financial management.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={FinanceReportImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wfinancereportphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "User Manager",
    description:
      "The User Manager empowers businesses to oversee employee access, manage roles, and ensure secure usage of the software. Designed for seamless employee management, it provides tools for role assignment, activity tracking, and user permissions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* Desktop View Image */}
        <img
          src={userManagerImage}
          className="hidden sm:block h-auto max-w-full object-contain"
          alt="user manager demo"
        />
        
        {/* Phone View Image */}
        <img
          src={e2wusermanagerphn}
          className="block sm:hidden h-auto max-w-full object-contain"
          alt="user manager demo - phone"
        />
      </div>
    ),
  },
  {
    title: "Consultant Manager",
    description:
      "The Consultant Manager enables businesses to efficiently manage consultant engagements, track performance, and streamline communication for better collaboration and results.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={consultantImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wconsultantmanagerphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Appointment Manager",
    description:
      "The Appointment Manager streamlines scheduling by allowing businesses to send appointment invites to clients effortlessly. It enhances coordination, reduces conflicts, and ensures timely follow-ups for improved client relations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* Desktop View Image */}
        <img
          src={appointmentManagerImage}
          className="hidden sm:block h-auto max-w-full object-contain"
          alt="appointment manager demo"
        />
        
        {/* Phone View Image */}
        <img
          src={e2wappointmentphn}
          className="block sm:hidden h-auto max-w-full object-contain"
          alt="appointment manager demo - phone"
        />
      </div>
    ),
  },  
  {
    title: "Payment Milestones",
    description:
      "Our Payment Manager offers a streamlined approach to track Payment milestones, ensuring timely delivery and effective communication across teams.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={PaymentMilestoneImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wpaymilephn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Conclusion",
    description:
      "EasyToWork Workflow Management Software is designed to simplify and enhance business operations, offering customizable solutions that drive efficiency, improve team communication, and ensure timely project milestones. With EasyToWork, businesses can manage workflows seamlessly, ensuring all tasks, payments, and communications are optimized for maximum productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={conclusionImage}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wconclusionphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
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
