import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, keywords, schemaMarkup }) {
  const currentUrl = url || "https://www.bizwizeuae.com";
  
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | BizWize UAE` : 'BizWize | Business Setup & Consultancy in UAE'}</title>
      <meta name="description" content={description || 'BizWize is your trusted partner for seamless mainland, freezone, and offshore business setup, HR solutions, and digital marketing in Dubai and across the UAE.'} />
      <meta name="keywords" content={keywords || 'business setup in UAE, company formation Dubai, business setup in Abu Dhabi, mainland business setup, freezone company UAE, offshore company registration, HR solutions Dubai, SEO services UAE'} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title || 'BizWize | Business Setup & Consultancy in UAE'} />
      <meta property="og:description" content={description || 'Expert business setup, HR, and digital marketing solutions in the UAE.'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title || 'BizWize | Business Setup & Consultancy in UAE'} />
      <meta property="twitter:description" content={description || 'Expert business setup, HR, and digital marketing solutions in the UAE.'} />

      {/* Structured Data (Schema.org) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
