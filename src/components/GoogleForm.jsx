import React from 'react';

const GoogleForm = () => {
  return (
    <div className="flex justify-center items-center w-full  p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl">
        {/* Responsive iframe container using 16:9 aspect ratio */}
        <div className="relative w-full h-screen pb-[56.25%]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScCKJbrqM2FEqIGIHeIT2RhGzOCHrdjZsIiJd1StB1yGf47rg/viewform?embedded=true"
            className="absolute inset-0 w-full h-screen border-0 mt-20 "
            title="Google Form"
            allowFullScreen
          >
            Loading...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
