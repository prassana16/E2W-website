"use client";
import { Button } from "./ui/moving-border";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import WebDevImage from '../assets/images/uiux-service-card.jpg';
import seo from '../assets/images/seo-service-card.jpg';
import staff from '../assets/images/staff-service-card.jpg';
import mobile from '../assets/images/mobile-service-card.jpg';
import uiux from '../assets/images/website-service-card.jpg';
import quality from '../assets/images/quality-service-card2.jpg';
import webapp from '../assets/images/web-app-service-card.jpg';
import cloud from '../assets/images/cloud-service-card.jpg';
import saas from '../assets/images/saas-service-card.jpg';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 " style={{ background: 'radial-gradient(ellipse at center, #6c0081, #001831)' }}>
        
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-100 dark:text-neutral-200 font-sans"
      >
        What We Provide As A Service.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContentWebApp = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center ">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Web Application Development.
        </span>{" "}
        We develop efficient web applications tailored to your business needs, enhancing productivity and enabling seamless workflow. Our solutions are scalable and built with the latest technologies to ensure performance and reliability.
      </p>
      <a href="/WebAppDevelopment"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
      
    </div>
  );
  
  const DummyContentWebsite = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Website Development.
        </span>{" "}
        We specialize in creating responsive, modern websites that drive engagement and provide an exceptional user experience. From small businesses to large enterprises, we tailor each site to reflect your brand's identity.
      </p>
      <a href="/WebsiteDevelopment"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
      
    </div>
  );
  
  const DummyContentMobileApp = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Mobile App Development.
        </span>{" "}
        Our mobile applications are designed to be user-friendly and innovative. We bring your ideas to life on both iOS and Android platforms, ensuring a consistent experience across devices.
      </p>
      <a href="/MobileAppDevelopment"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentSEO = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          SEO Services.
        </span>{" "}
        We optimize your website for search engines to increase visibility and attract more traffic. Our SEO strategies ensure higher rankings on Google and improved engagement with your audience.
      </p>
      <a href="/SEOServices"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentCloud = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Cloud Native Application Development.
        </span>{" "}
        We build cloud-native applications that are highly scalable and secure, utilizing cloud infrastructure to support business growth and efficiency.
      </p>
      <a href="/CloudNativeAppDevelopment"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentSaaS = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          SaaS Solutions.
        </span>{" "}
        Our SaaS services help you harness cloud-based software solutions, enabling seamless integration and continuous updates to support your business needs.
      </p>
      <a href="/SaaSDevelopment"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentUIUX = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          UI/UX Design.
        </span>{" "}
        Our UI/UX design services focus on creating intuitive interfaces and smooth user experiences. We help your product stand out with designs that are both functional and visually appealing.
      </p>
      <a href="/UIUXDesign"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentQA = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Quality Assurance.
        </span>{" "}
        Our QA services ensure that your application is bug-free and performs flawlessly. We perform rigorous testing across multiple devices and platforms to ensure user satisfaction.
      </p>
      <a href="/QualityAssurance"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const DummyContentStaffAugmentation = () => (
    <div className="bg-[#45166b] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl  flex flex-col items-center">
      <p className="text-neutral-200 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-5">
        <span className="font-bold text-neutral-100 dark:text-neutral-200">
          Staff Augmentation.
        </span>{" "}
        Our staff augmentation services help you expand your IT team with skilled professionals, ensuring your project is completed efficiently and on time.
      </p>
      <a href="/StaffAugmentation"><Button className="text-xl bg-white text-black" >
        Learn more
      </Button></a>
    </div>
  );
  
  const data = [
    { category: "Web Application Development", title: "Boost efficiency with Web Apps.", src: WebDevImage, content: <DummyContentWebApp /> },
    { category: "Website Development", title: "Build a responsive website now.", src: webapp, content: <DummyContentWebsite /> },
    { category: "Mobile App Development", title: "Create innovative mobile apps today.", src: mobile, content: <DummyContentMobileApp /> },
    { category: "SEO Services", title: "Optimize your site for Google SEO.", src: seo, content: <DummyContentSEO /> },
    { category: "Cloud Native Application Development", title: "Scalable cloud-native app solutions.", src: cloud, content: <DummyContentCloud /> },
    { category: "SaaS (Software as a Service)", title: "SaaS solutions for business growth.", src: saas, content: <DummyContentSaaS /> },
    { category: "UI/UX Design", title: "Intuitive UI/UX design for apps.", src: uiux, content: <DummyContentUIUX /> },
    { category: "Quality Assurance", title: "Ensuring flawless app performance.", src: quality, content: <DummyContentQA /> },
    { category: "Staff Augmentation", title: "Staff augmentation for IT projects.", src: staff, content: <DummyContentStaffAugmentation /> },
  ];
  
  