import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl = null, 
  ogImage = 'https://easy2work.in/public/EASY2Work-Logo.png',
  schema = null,
  region = "global" // For region-specific meta tags
}) => {
  // Base URL
  const baseUrl = 'https://easy2work.in';
  const currentUrl = canonicalUrl || window.location.href;
  
  // Region-specific handling
  const regionData = {
    global: {},
    usa: {
      hreflang: "en-us",
      geo: "US",
      placename: "United States"
    },
    canada: {
      hreflang: "en-ca",
      geo: "CA",
      placename: "Canada"
    },
    uk: {
      hreflang: "en-gb",
      geo: "GB",
      placename: "United Kingdom"
    },
    india: {
      hreflang: "en-in",
      geo: "IN",
      placename: "India"
    }
  };
  
  const regionInfo = regionData[region] || regionData.global;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Region-specific tags */}
      {regionInfo.geo && <meta name="geo.region" content={regionInfo.geo} />}
      {regionInfo.placename && <meta name="geo.placename" content={regionInfo.placename} />}
      {regionInfo.hreflang && (
        <link rel="alternate" hreflang={regionInfo.hreflang} href={`${baseUrl}${window.location.pathname}`} />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Easy2Work" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;