"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import e2wlogin from '../assets/images/e2w-products-laptop/e2wlogout.png';
import e2wclient from '../assets/images/e2w-products-laptop/e2wclient.png';
import e2wquote from '../assets/images/e2w-products-laptop/e2wquote.png';
import e2worder from '../assets/images/e2w-products-laptop/e2worder.png';
import e2wfinance from '../assets/images/e2w-products-laptop/e2wfinance.png';
import e2wratesmanager from '../assets/images/e2w-products-laptop/e2wratesmanager.png';
import e2wratesvalidation from '../assets/images/e2w-products-laptop/e2wratesvalidation.png';
import e2worderreport from '../assets/images/e2w-products-laptop/e2worderreport.png';
import e2wfinancereport from '../assets/images/e2w-products-laptop/e2wfinancereport.png';
import e2wconsultantreport from '../assets/images/e2w-products-laptop/e2wconsultantreport.png';
import e2wusermanager from '../assets/images/e2w-products-laptop/e2wusermanager.png';
import e2wconsultantmanager from '../assets/images/e2w-products-laptop/e2wconsultantmanager.png';
import e2wappointment from '../assets/images/e2w-products-laptop/e2wappointment.png';
import e2wpayment from '../assets/images/e2w-products-laptop/e2wpayment.png';
import e2wlogout from '../assets/images/e2w-products-laptop/e2wlogout.png';
//phn images
import e2wloginphn from '../assets/images/e2w-mobile-img/e2wloginphn.png';
import e2wclientphn from '../assets/images/e2w-mobile-img/e2wclientphn.png';
import e2wquotephn from '../assets/images/e2w-mobile-img/e2wquotephn.png';
import e2worderphn from '../assets/images/e2w-mobile-img/e2worderphn.png';
import e2wfinancephn from '../assets/images/e2w-mobile-img/e2wfinancephn.png';
import e2wratesmanagerphn from '../assets/images/e2w-mobile-img/e2wratesmanagerphn.png';
import e2wratesvalidationphn from '../assets/images/e2w-mobile-img/e2wratesvalidationphn.png';
import e2worderreportphn from '../assets/images/e2w-mobile-img/e2worderreportphn.png';
import e2wfinancereportphn from '../assets/images/e2w-mobile-img/e2wfinancereportphn.png';
import e2wconsultantreportphn from '../assets/images/e2w-mobile-img/e2wconsultantreportphn.png';
import e2wusermanagerphn from '../assets/images/e2w-mobile-img/e2wusermanagerphn.png';
import e2wconsultantmanagerphn from '../assets/images/e2w-mobile-img/e2wconsultantmanagerphn.png';
import e2wappointmentphn from '../assets/images/e2w-mobile-img/e2wappointmentphn.png';
import e2wpaymentphn from '../assets/images/e2w-mobile-img/e2wpaymentphn.png';
import e2wlogoutphn from '../assets/images/e2w-mobile-img/e2wlogoutphn.png';



const content = [
  {
    title: "Our IBMS Software",
    description: [
      <li key="ibms-1">Customizable workflows.</li>,
      <li key="ibms-2">Manage clients and orders.</li>,
      <li key="ibms-3">User-friendly design.</li>,
    ],
    content: (
        <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center text-white">
         {/* Desktop View Image */}             
      <img
        src={e2wlogin}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wloginphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
        loading="lazy" // Enable lazy loading
        
      />
      </div>
    ),
  },
  {
    title: "Client Manager",
    description: [
      <li key="client-1">Add client details.</li>,
      <li key="client-2">Secure cloud storage.</li>,
      <li key="client-3">Quick client search.</li>,    ],
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={e2wclient}
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
    description: [
      <li key="quote-1">Send quotes easily.</li>,
      <li key="quote-2">Slab-wise pricing.</li>,
      <li key="quote-3">Adjust margins quickly.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
       {/* Desktop View Image */}
      <img
        src={e2wquote}
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
    description: [
      <li key="order-1">Track orders.</li>,
      <li key="order-2">Organize clients.</li>,
      <li key="order-3">Fast and secure search.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2worder}
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
    description: [
      <li key="finance-1">Track revenue.</li>,
      <li key="finance-2">Track expenses.</li>,
      <li key="finance-3">Real-time insights.</li>,
      <li key="finance-4">Monitor performance.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2wfinance}
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
    description: [
      <li key="rate-1">Simplify rate management.</li>,
      <li key="rate-2">Add slab-wise pricing.</li>,
      <li key="rate-3">Define service duration.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2wratesmanager}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wratesmanagerphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Rate Validation",
    description: [
      <li key="validation-1">Ensure pricing.</li>,
      <li key="validation-2">Maintain accuracy.</li>,
      <li key="validation-3">Avoid errors.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={e2wratesvalidation}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wratesvalidationphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Order Report",
    description: [
      <li key="order-report-1">Track order progress.</li>,
      <li key="order-report-2">Optimize processes.</li>,
      <li key="order-report-3">Enhance satisfaction.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
       {/* Desktop View Image */}
      <img
        src={e2worderreport}
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
    description: [
      <li key="finance-report-1">View revenue breakdown.</li>,
      <li key="finance-report-2">Track expenses.</li>,
      <li key="finance-report-3">Analyze metrics.</li>
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        {/* Desktop View Image */}
      <img
        src={e2wfinancereport}
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
    title: "Consultant Report",
    description: [
      <li key="consultant-report-1">Track performance.</li>,
      <li key="consultant-report-2">Analyze productivity.</li>,
      <li key="consultant-report-3">View contributions.</li>,
    ],
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* Desktop View Image */}
        <img
          src={e2wconsultantreport}
          className="hidden sm:block h-auto max-w-full object-contain"
          alt="consultant report demo"
        />
  
        {/* Phone View Image */}
        <img
          src={e2wconsultantreportphn}
          className="block sm:hidden h-auto max-w-full object-contain"
          alt="consultant report demo - phone"
        />
      </div>
    ),
  },
  
  {
    title: "User Manager",
    description: [
      <li key="user-manager-1">Manage roles and access.</li>,
      <li key="user-manager-2">Track user activity.</li>,
      <li key="user-manager-3">Ensure security.</li>,
    ],
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* Desktop View Image */}
        <img
          src={e2wusermanager}
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
    description: [
      <li key="consultant-manager-1">Manage consultants.</li>,
      <li key="consultant-manager-2">Track performance.</li>,
      <li key="consultant-manager-3">Enhance collaboration.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2wconsultantmanager}
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
    description: [
      <li key="appointment-1">Schedule appointments.</li>,
      <li key="appointment-2">Send invites.</li>,
      <li key="appointment-3">Follow up with clients.</li>,
    ],  
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* Desktop View Image */}
        <img
          src={e2wappointment}
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
    description: [
      <li key="payment-1">Track milestones.</li>,
      <li key="payment-2">Improve communication.</li>,
      <li key="payment-3">Meet delivery timelines.</li>,
    ],
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2wpayment}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wpaymentphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
  },
  {
    title: "Conclusion",
    description: [
      <li key="conclusion-1">Simplify operations.</li>,
      <li key="conclusion-2">Boost efficiency.</li>,
      <li key="conclusion-3">Maximize productivity.</li>,
    ],
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         {/* Desktop View Image */}
      <img
        src={e2wlogout}
        className="hidden sm:block h-auto max-w-full object-contain"
        alt="linear board demo"
      />
      
      {/* Phone View Image */}
      <img
        src={e2wlogoutphn}
        className="block sm:hidden h-auto max-w-full object-contain"
        alt="linear board demo - phone"
      />
      </div>
    ),
},
  
];
export function E2wProduct() {
  return (<div className="w-full h-full py-20 " style={{ background: 'radial-gradient(ellipse at center, #017598, #05a7be)' }} id="features">
    <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-100 dark:text-neutral-200 font-sans mb-4 md:mb-10"
      >
        Intelligent Business Managment Software <p className="text-xs mt-10 font-thin font-sans">Scroll at the text on left to know more.</p>
      </h2>
    <div className="h-[50vh] md:h-[100vh] ">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}
