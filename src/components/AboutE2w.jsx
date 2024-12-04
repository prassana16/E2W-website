import React from 'react';

const AboutE2w = () => {
  return (
    <section 
      className="w-full p-6 md:p-12 bg-gray-100 text-gray-800" 
      id="about-easy2work"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-indigo-600">Easy2Work</span>
        </h2>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-left">
          <strong>Easy2Work</strong> is a globally recognized IT company that specializes in developing cutting-edge <strong>Progressive Web Applications (PWAs)</strong> and delivering comprehensive enterprise software solutions. With a strong focus on innovation, we design products and services that help businesses enhance efficiency, streamline operations, and stay ahead in today’s fast-paced digital world.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-6 text-left">
        Our flagship product, the <strong>Easy2Work(Intelligent Business Management Software (IBMS))</strong>, is a versatile workflow management solution built to cater to a wide range of industries. The software simplifies complex business processes by providing an intuitive platform for managing tasks, communication, and data, making it an indispensable tool for organizations aiming to optimize their operations and increase productivity. In addition to our IBMS, we offer over 10 tailored IT services, including SaaS solutions, to help businesses of all sizes thrive in an increasingly digital landscape.
        </p>

        {/* Highlights Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Global Reach</h3>
            <p className="text-md leading-relaxed">
              Partnering with professionals and clients across the globe to deliver top-notch IT solutions.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Industry Expertise</h3>
            <p className="text-md leading-relaxed">
              Specialized in PWA development and Intelligent Business Management Software for diverse industries.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Customer-Centric Approach</h3>
            <p className="text-md leading-relaxed">
              Committed to delivering tailored IT services and products that address specific business needs effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutE2w;
