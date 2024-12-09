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
    title: "About Easy2Work",
    description: [
      <li>Customizable workflows.</li>,
      <li>Manage clients and orders.</li>,
      <li>User-friendly design.</li>,
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
      />
      </div>
    ),
  },
  {
    title: "Client Manager",
    description: [
      <li>Add client details.</li>,
      <li>Secure cloud storage.</li>,
      <li>Quick client search.</li>,    ],
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
      <li>Send quotes easily.</li>,
      <li>Slab-wise pricing.</li>,
      <li>Adjust margins quickly.</li>,
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
      <li>Track orders.</li>,
      <li>Organize clients.</li>,
      <li>Fast and secure search.</li>,
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
      <li>Track revenue.</li>,
      <li>Track expenses.</li>,
      <li>Real-time insights.</li>,
      <li>Monitor performance.</li>,
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
      <li>Simplify rate management.</li>,
      <li>Add slab-wise pricing.</li>,
      <li>Define service duration.</li>,
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
      <li>Ensure pricing.</li>,
      <li>Maintain accuracy.</li>,
      <li>Avoid errors.</li>,
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
      <li>Track order progress.</li>,
      <li>Optimize processes.</li>,
      <li>Enhance satisfaction.</li>,
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
      <li>View revenue breakdown.</li>,
      <li>Track expenses.</li>,
      <li>Analyze metrics.</li>
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
      <li>Track performance.</li>,
      <li>Analyze productivity.</li>,
      <li>View contributions.</li>,
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
      <li>Manage roles and access.</li>,
      <li>Track user activity.</li>,
      <li>Ensure security.</li>,
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
      <li>Manage consultants.</li>,
      <li>Track performance.</li>,
      <li>Enhance collaboration.</li>,
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
      <li>Schedule appointments.</li>,
      <li>Send invites.</li>,
      <li>Follow up with clients.</li>,
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
      <li>Track milestones.</li>,
      <li>Improve communication.</li>,
      <li>Meet delivery timelines.</li>,
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
      <li>Simplify operations.</li>,
      <li>Boost efficiency.</li>,
      <li>Maximize productivity.</li>,
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
  return (<div className="w-full h-full py-20 " style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }} id="features">
    <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-100 dark:text-neutral-200 font-sans mb-4 md:mb-10"
      >
        Intelligent Business Managment Software
      </h2>
    <div className="h-[50vh] md:h-[100vh] ">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}
