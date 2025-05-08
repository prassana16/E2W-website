import React from 'react';

const AIEnterpriseDataSolution = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Enterprise Data Cleansing & Deduplication
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform your data quality with intelligent automation
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Intelligent Data Cleansing"
              description="AI-powered algorithms that automatically detect and correct data inconsistencies"
            />
            <FeatureCard 
              title="Advanced Deduplication"
              description="Smart matching algorithms to identify and merge duplicate records"
            />
            <FeatureCard 
              title="Real-time Processing"
              description="Process and clean data in real-time as it enters your system"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard 
              title="Improved Data Quality"
              description="Achieve up to 99.9% data accuracy with our AI-powered solution"
            />
            <BenefitCard 
              title="Cost Reduction"
              description="Reduce manual data cleaning costs by up to 80%"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-4 text-purple-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-purple-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AIEnterpriseDataSolution;