import React from 'react';
import SEO from '../components/SEO';
import LeadFormSection from '../components/LeadFormSection';
import HomeFAQs from '../components/HomeFAQs';
import './AuthorityPages.css';
import { ShoppingCart, CreditCard, Laptop, TrendingUp } from 'lucide-react';

export default function AmazonSeller() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Amazon Seller Account Setup UAE",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BizWize UAE"
    },
    "description": "Complete setup for Amazon and Noon seller accounts in the UAE. Obtain your e-commerce license and corporate bank account fast."
  };

  return (
    <div className="authority-page">
      <SEO 
        title="Amazon & Noon Seller Account Setup UAE | E-commerce License"
        description="Launch your e-commerce business on Amazon UAE and Noon. We secure your e-commerce trade license and corporate bank account to get you selling fast."
        schemaMarkup={seoSchema}
      />

      <section className="authority-hero">
        <span className="authority-badge">E-commerce Setup</span>
        <h1>Amazon & Noon Seller Account <span className="highlight">UAE</span></h1>
        <p className="authority-subtitle">
          Start selling to millions of customers across the Middle East. We provide the mandatory UAE e-commerce license, corporate bank account, and platform registration assistance.
        </p>
        <a href="#contact-section" className="btn-premium btn-premium-primary">
          Start Selling Today
        </a>
      </section>

      <section className="authority-content-section">
        <h2>What You Need to <span className="highlight">Sell Online</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <div className="authority-card-icon"><Laptop /></div>
            <h3>E-commerce Trade License</h3>
            <p>Amazon and Noon require a valid UAE Trade License with an E-commerce activity code. We can set this up quickly in cost-effective Freezones like IFZA or SPC.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><CreditCard /></div>
            <h3>Corporate Bank Account</h3>
            <p>To receive payouts from platforms, you must have a UAE corporate bank account in the name of your licensed company. We provide guaranteed banking assistance.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><ShoppingCart /></div>
            <h3>Platform Registration</h3>
            <p>Once the legalities are sorted, we guide you through the seller verification process on Amazon.ae, Noon.com, and other local marketplaces.</p>
          </div>
        </div>
      </section>

      <HomeFAQs />
      <LeadFormSection />
    </div>
  );
}
