import React from 'react';

const AIMedicalLeadPlatform = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Medical Lead Generation Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Intelligent healthcare lead generation and insights
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Smart Lead Identification"
              description="AI algorithms identify high-potential healthcare leads"
            />
            <FeatureCard 
              title="Market Intelligence"
              description="Real-time insights into healthcare market trends"
            />
            <FeatureCard 
              title="Automated Outreach"
              description="Intelligent automation of lead nurturing campaigns"
            />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Analytics & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MetricCard 
              title="Lead Quality Score"
              description="AI-powered scoring system for lead qualification"
            />
            <MetricCard 
              title="Market Analysis"
              description="Deep insights into healthcare market dynamics"
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

const MetricCard = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-purple-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AIMedicalLeadPlatform;