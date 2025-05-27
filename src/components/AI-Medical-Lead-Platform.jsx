import React from 'react';
import SEO from './SEO';
import { CheckCircle, ChevronRight, Download, Bell, Users, BarChart2, Shield, Headphones, Zap, Target, MessageSquare } from 'lucide-react';

const medicalLeadSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI-Powered Medical Lead Generation Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered lead generation and outreach software for medical businesses. Enables smart targeting, lead scoring, call intelligence, and compliance-ready automation.",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "Organization",
    "name": "Easy2Work",
    "url": "https://easy2work.in"
  },
  "featureList": "Medical Lead Generation, Predictive Demographics, Lead Scoring, Outreach Automation, M&A Alerts, Call Intelligence, CRM Sync, GDPR/HIPAA Compliance"
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-black transition-all hover:shadow-md">    <div className="flex items-center mb-4">      <div className="bg-cyan p-3 rounded-lg mr-4">
        <Icon className="text-[#05f4f9]" size={24} />
      </div>
      <h3 className="font-semibold text-lg text-black">{title}</h3>
    </div>
    <p className="text-black text-sm leading-relaxed">{description}</p>
  </div>
);

const BenefitItem = ({ children }) => (
  <li className="flex items-center space-x-3 mb-3">
    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
    <span className="text-black">{children}</span>
  </li>
);

const CompetitorBadge = ({ name }) => (
  <span className="bg-black text-black px-3 py-1 rounded-full text-sm font-medium">
    {name}
  </span>
);

const AIMedicalLeadPlatform = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <SEO
        title="AI Medical Lead Generation Platform | HIPAA-Compliant Healthcare CRM"
        description="AI-powered medical lead generation platform with predictive targeting, automated outreach, call intelligence, and HIPAA/GDPR-compliant lifecycle management. Built for clinics, hospitals, and healthcare SaaS."
        keywords="AI Medical Lead Generation, Healthcare CRM, HIPAA CRM, Lead Scoring for Clinics, Predictive Targeting Healthcare, Call Intelligence, Medical SaaS, Smart Outreach Automation, Compliance CRM"
        schema={medicalLeadSchema}
        region="global"
      />

     

      {/* Hero Section */}
      <header className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">Healthcare Lead Generation</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
            AI-Powered Medical Lead Generation & Intelligence Platform
          </h1>
          <p className="mt-6 text-xl text-black leading-relaxed max-w-2xl mx-auto">
            Our platform offers hyper-targeted lead generation, smart prioritization, and automated outreach for medical businesses—all while ensuring full HIPAA and GDPR compliance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">            <button className="bg-cyan text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center">
              Get Started <ChevronRight size={20} className="ml-2" />
            </button>
            <button className="bg-white text-black border border-cyan px-6 py-3 rounded-lg font-medium hover:bg-cyan transition-colors flex items-center justify-center">
              Download Brochure <Download size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-black font-medium mb-8">Trusted by leading healthcare providers</p>
          <div className="flex justify-center flex-wrap gap-8 opacity-70">
            {/* Placeholder logos - in a real implementation you would use actual company logos */}
            <div className="h-12 w-24 bg-black rounded"></div>
            <div className="h-12 w-32 bg-black rounded"></div>
            <div className="h-12 w-28 bg-black rounded"></div>
            <div className="h-12 w-36 bg-black rounded"></div>
            <div className="h-12 w-24 bg-black rounded"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black">Powerful Features for Healthcare Lead Generation</h2>
            <p className="mt-4 text-lg text-black">Our comprehensive suite of features helps medical businesses streamline lead generation, nurture relationships, and ensure compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Target} 
              title="AI-Powered Lead Sourcing" 
              description="Automatically gathers leads from Justdial, LinkedIn, Apollo, and more, extracting contact and specialization details."
            />
            <FeatureCard 
              icon={Users} 
              title="Predictive Demographic Targeting" 
              description="Identifies high-conversion regions and specialties using AI analysis of market trends and patient behaviors."
            />
            <FeatureCard 
              icon={BarChart2} 
              title="Smart Lead Scoring" 
              description="Scores leads based on engagement, urgency, and history. Tracks signals like email opens and WhatsApp clicks."
            />
            <FeatureCard 
              icon={MessageSquare} 
              title="Automated Multi-Channel Outreach" 
              description="Sends emails, SMS, and WhatsApp messages with AI-adjusted follow-ups based on engagement metrics."
            />
            <FeatureCard 
              icon={Bell} 
              title="M&A & Expansion Alerts" 
              description="Real-time monitoring of new clinics and mergers for strategic outreach and timely business development."
            />
            <FeatureCard 
              icon={Headphones} 
              title="Call Intelligence" 
              description="Recognizes business calls, transcribes key data (needs, budgets), and updates CRM profiles automatically."
            />
            <FeatureCard 
              icon={Zap} 
              title="Lead Lifecycle Management" 
              description="Tracks leads through the funnel, summarizes interactions, and monitors sentiment for personalized follow-ups."
            />
            <FeatureCard 
              icon={Shield} 
              title="Compliance & Data Security" 
              description="HIPAA/GDPR-compliant data handling and consent tracking to maintain regulatory standards in healthcare."
            />
            <FeatureCard 
              icon={Download} 
              title="AI-Powered Lead Enrichment" 
              description="Auto-fills missing data from LinkedIn, Practo, Google; scans and verifies business cards for complete profiles."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-8">Why Choose Our AI Medical Lead Platform?</h2>
              
              <ul className="space-y-4">
                <BenefitItem>
                  <span className="font-medium">Higher Conversions</span> – AI targets the right leads at the right time.
                </BenefitItem>
                <BenefitItem>
                  <span className="font-medium">Faster Response</span> – Cuts lead response time by 50%.
                </BenefitItem>
                <BenefitItem>
                  <span className="font-medium">Full Compliance</span> – GDPR, HIPAA, and DPDP Act ready.
                </BenefitItem>
                <BenefitItem>
                  <span className="font-medium">Cost Savings</span> – Reduces manual lead sorting by 60%.
                </BenefitItem>
                <BenefitItem>
                  <span className="font-medium">Smart Tracking</span> – Real-time dashboards show pipeline health.
                </BenefitItem>
              </ul>

              <div className="mt-10">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-black mb-6">Compare with the Competition</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-black mb-3">We compete with:</h4>
                  <div className="flex flex-wrap gap-2">
                    <CompetitorBadge name="Healthgrades" />
                    <CompetitorBadge name="Doximity" />
                    <CompetitorBadge name="Zocdoc" />
                    <CompetitorBadge name="Salesforce Health Cloud" />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-black mb-3">Our advantage:</h4>
                  <div className="space-y-3">
                    <p className="text-black text-sm flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Purpose-built for medical lead generation with healthcare-specific AI models</span>
                    </p>                    <p className="text-black text-sm flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Integrated multi-channel approach (email)</span>
                    </p>
                    <p className="text-black text-sm flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Superior compliance features designed for healthcare regulations</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Healthcare Lead Generation?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            Join leading healthcare providers who have increased conversion rates and reduced response times with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Request Demo
            </button>
            <button className="bg-blue-700 text-white border border-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default AIMedicalLeadPlatform;
