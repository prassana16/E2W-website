import React from 'react';
import SEO from './SEO';
import { CheckCircle, ChevronRight, Download, Database, Lock, Zap, BarChart2, Code, FileText, Settings, Layers, Monitor, Server } from 'lucide-react';

const enterpriseSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Enterprise Data Cleansing & Deduplication SaaS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered SaaS platform for enterprise data cleansing, deduplication, and compliance. Ideal for CRMs, ERPs, and marketing platforms.",
  "offers": {
    "@type": "Offer",
    "price": "0.50 per 1,000 records",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "Organization",
    "name": "Easy2Work",
    "url": "https://easy2work.in"
  },
  "featureList": "Data Deduplication, Fuzzy Matching, CRM Integration, ERP Cleansing, SOC2 Compliance, GDPR Readiness, HIPAA Compliance, Real-Time Dashboards"
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
    <div className="flex items-center mb-4">      <div className="bg-[#2D1B69]/10 p-3 rounded-lg mr-4">
        <Icon className="text-[#2D1B69]" size={24} />
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ObjectiveItem = ({ children }) => (
  <li className="flex items-center space-x-3 mb-3">
    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
    <span className="text-gray-700">{children}</span>
  </li>
);

const TechStackItem = ({ icon: Icon, name }) => (
  <div className="flex items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-sm">
    <Icon size={20} className="text-purple-500 mr-3" />
    <span className="text-gray-700 font-medium">{name}</span>
  </div>
);

const PricingTier = ({ name, price, description, features, highlight = false }) => (
  <div className={`rounded-xl overflow-hidden border ${highlight ? 'border-purple-200 shadow-md' : 'border-gray-200'}`}>
    <div className={`p-6 ${highlight ? 'bg-purple-50' : 'bg-white'}`}>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="mt-4">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 ml-1">{description}</span>
      </div>
    </div>
    <div className="p-6 bg-white border-t border-gray-100">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-2 rounded-lg font-medium ${highlight ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
        Get Started
      </button>
    </div>
  </div>
);

const IndustryBadge = ({ name }) => (
  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
    {name}
  </span>
);

const AIEnterpriseSolution = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen">
      <SEO
        title="Enterprise Data Cleansing & Deduplication SaaS | Easy2Work"
        description="Scalable AI-powered platform for enterprise data cleaning and deduplication. Integrates with CRMs and ERPs. Ensures GDPR, HIPAA, and SOC2 compliance with real-time dashboards."
        keywords="Enterprise Data Cleansing, Data Deduplication SaaS, CRM Cleaning Tool, GDPR Data Compliance, SOC2 Data Quality, Salesforce Deduplication, HubSpot Cleanup, Real-Time Data Dashboard"
        schema={enterpriseSchema}
        region="global"
      />

     

      {/* Hero Section */}
      <header className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">Enterprise Data Solutions</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI-Powered Enterprise Data Cleansing & Deduplication SaaS
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A scalable AI-powered solution for automating enterprise data cleansing and deduplication—enhancing data quality, compliance, and operational efficiency across CRMs, ERPs, and marketing tools.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
              Get Started <ChevronRight size={20} className="ml-2" />
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              Download Whitepaper <Download size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Integration Partners */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-gray-500 font-medium mb-8">Seamlessly integrates with your existing systems</p>
          <div className="flex justify-center flex-wrap gap-8 opacity-70">
            {/* Placeholder logos - in a real implementation you would use actual company logos */}
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-28 bg-gray-200 rounded"></div>
            <div className="h-12 w-36 bg-gray-200 rounded"></div>
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Objectives</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <ul className="space-y-4">
                <ObjectiveItem>Eliminate duplicate and inconsistent records</ObjectiveItem>
                <ObjectiveItem>Improve data accuracy for insights and decision-making</ObjectiveItem>
                <ObjectiveItem>Ensure global data compliance (GDPR, HIPAA, SOC 2)</ObjectiveItem>
                <ObjectiveItem>Reduce manual efforts and human error</ObjectiveItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">Our comprehensive suite of features helps enterprises maintain clean, accurate, and compliant data across all systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Database} 
              title="AI-Powered Cleansing" 
              description="Fuzzy matching and machine learning algorithms to identify and merge duplicate or outdated records with precision."
            />
            <FeatureCard 
              icon={FileText} 
              title="Data Standardization" 
              description="Format unstructured inputs like phone numbers, addresses, and names into consistent formats for better data quality."
            />
            <FeatureCard 
              icon={Settings} 
              title="Automation & Integration" 
              description="Seamlessly connects with Salesforce, HubSpot, Dynamics 365, SAP, Oracle, and other enterprise systems."
            />
            <FeatureCard 
              icon={Zap} 
              title="Bulk Processing" 
              description="Handles millions of records with real-time synchronization and comprehensive audit logs for traceability."
            />
            <FeatureCard 
              icon={Lock} 
              title="Security & Compliance" 
              description="End-to-end encryption, role-based access controls, and readiness for GDPR, HIPAA, and SOC2 compliance."
            />
            <FeatureCard 
              icon={BarChart2} 
              title="Analytics Dashboard" 
              description="Real-time monitoring of data health metrics, cleaning operations, and system status with actionable insights."
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech-stack" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
            <p className="mt-4 text-lg text-gray-600">Built on enterprise-grade technologies for performance, security, and scalability.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <TechStackItem icon={Code} name="Python (AI/ML, NLP)" />
            <TechStackItem icon={Server} name=".NET Backend" />
            <TechStackItem icon={Monitor} name="Next.js Frontend" />
            <TechStackItem icon={Database} name="MySQL, PostgreSQL, MongoDB" />
            <TechStackItem icon={Layers} name="AWS or Azure infrastructure" />
          </div>
        </div>
      </section>

      

      {/* Target Industries */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Target Industries</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6">
                Perfect for enterprises that rely on high-quality lead or customer data:
              </p>
              
              <div className="flex flex-wrap gap-2">
                <IndustryBadge name="Marketing" />
                <IndustryBadge name="Sales" />
                <IndustryBadge name="Finance" />
                <IndustryBadge name="Healthcare" />
                <IndustryBadge name="E-commerce" />
                <IndustryBadge name="Insurance" />
                <IndustryBadge name="Banking" />
                <IndustryBadge name="Telecommunications" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Enterprise Data?</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-10 text-lg">
            Join leading enterprises who have improved data quality, compliance, and operational efficiency with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Request Demo
            </button>
            <button className="bg-purple-700 text-white border border-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-lg bg-purple-600 mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E2W</span>
                </div>
                <span className="text-white font-semibold">Easy2Work</span>
              </div>
              <p className="text-sm max-w-xs">
                AI-powered enterprise data cleansing and deduplication platform for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SOC2 Compliance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GDPR Statement</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Easy2Work. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIEnterpriseSolution;