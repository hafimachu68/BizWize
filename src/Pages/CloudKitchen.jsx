import React from 'react';
import SEO from '../components/SEO';
import LeadFormSection from '../components/LeadFormSection';
import HomeFAQs from '../components/HomeFAQs';
import './AuthorityPages.css';
import { ChefHat, TrendingUp, Zap, MapPin, ShieldAlert } from 'lucide-react';

export default function CloudKitchen() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Kitchen Setup Dubai",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BizWize UAE"
    },
    "description": "Launch your dark kitchen in Dubai fast. We offer licensing, municipality approvals, and premium kitchen spaces for rent in DIP."
  };

  return (
    <div className="authority-page">
      <SEO 
        title="Cloud Kitchen Setup Dubai | Kitchen Space for Rent DIP"
        description="Start your delivery-only restaurant in Dubai. We handle dark kitchen licensing and provide fully approved kitchen spaces for rent in DIP."
        schemaMarkup={seoSchema}
      />

      <section className="authority-hero">
        <span className="authority-badge">Delivery-Only Model</span>
        <h1>Cloud Kitchen Setup in <span className="highlight">Dubai</span></h1>
        <p className="authority-subtitle">
          Capitalize on the booming food delivery market. Launch your dark kitchen with lower overheads, fast municipality approvals, and our exclusive fully-fitted kitchen spaces in DIP.
        </p>
        <a href="#contact-section" className="btn-premium btn-premium-primary">
          View Kitchen Spaces
        </a>
      </section>

      <section className="authority-content-section">
        <h2>Why Start a <span className="highlight">Cloud Kitchen?</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <div className="authority-card-icon"><TrendingUp /></div>
            <h3>Lower Capital Investment</h3>
            <p>Save massive amounts on front-of-house interior design, prime real estate rents, and waitstaff. Direct all your capital into food quality and marketing.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><Zap /></div>
            <h3>Multiple Brands, One Kitchen</h3>
            <p>Operate multiple virtual restaurant brands from a single kitchen space, maximizing your operational efficiency and revenue streams.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><ChefHat /></div>
            <h3>Fast Market Entry</h3>
            <p>With our ready-to-move-in kitchen spaces in DIP, you can bypass the lengthy fit-out and inspection phase and launch in weeks instead of months.</p>
          </div>
        </div>
      </section>

      <section className="authority-content-section" style={{ backgroundColor: '#0f172a' }}>
        <h2>Kitchen Spaces for Rent <span className="highlight">in DIP</span></h2>
        <div className="authority-timeline">
          <div className="timeline-step">
            <div className="step-number"><MapPin /></div>
            <div className="step-content">
              <h3>Fully Fitted & Approved</h3>
              <p>We offer premium kitchen spaces in Dubai Investment Park (DIP) that are pre-approved by the Dubai Municipality. They come equipped with industrial exhaust systems, grease traps, and gas lines.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number"><ShieldAlert /></div> {/* Need to import or replace */}
            <div className="step-content">
              <h3>Streamlined Licensing</h3>
              <p>Renting a pre-approved space means you skip the hardest part of F&B setup. We simply attach your trade license to the existing facility approvals.</p>
            </div>
          </div>
        </div>
      </section>

      <HomeFAQs />
      <LeadFormSection />
    </div>
  );
}
