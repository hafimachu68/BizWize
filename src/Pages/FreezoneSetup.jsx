import React from 'react';
import SEO from '../components/SEO';
import LeadFormSection from '../components/LeadFormSection';
import HomeFAQs from '../components/HomeFAQs';
import './AuthorityPages.css';
import { Plane, Building2, Landmark, ShieldCheck } from 'lucide-react';

export default function FreezoneSetup() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Freezone Company Setup UAE",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BizWize UAE"
    },
    "description": "Fast and tax-efficient Freezone company formation in Dubai and UAE. 100% ownership and zero currency restrictions."
  };

  return (
    <div className="authority-page">
      <SEO 
        title="Freezone Company Setup UAE | Tax-Free Business Formation"
        description="Set up your company in top UAE Freezones (IFZA, DMCC, Meydan). Enjoy 0% corporate tax, 100% ownership, and full capital repatriation with BizWize."
        schemaMarkup={seoSchema}
      />

      <section className="authority-hero">
        <span className="authority-badge">Tax-Free Jurisdictions</span>
        <h1>Freezone Company Setup <span className="highlight">UAE</span></h1>
        <p className="authority-subtitle">
          The ultimate choice for international traders, consultants, and tech startups. Enjoy 100% foreign ownership, zero currency restrictions, and full capital repatriation in the UAE's world-class Freezones.
        </p>
        <a href="#contact-section" className="btn-premium btn-premium-primary">
          Compare Freezones Today
        </a>
      </section>

      <section className="authority-content-section">
        <h2>Advantages of a <span className="highlight">UAE Freezone</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <div className="authority-card-icon"><ShieldCheck /></div>
            <h3>100% Ownership & Repatriation</h3>
            <p>Retain full control of your company with 100% foreign ownership and the ability to repatriate 100% of capital and profits back to your home country.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><Landmark /></div>
            <h3>Tax Exemptions</h3>
            <p>Benefit from extremely favorable tax regimes, including exemptions on personal income tax and specific corporate tax benefits depending on your activity.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><Plane /></div>
            <h3>Seamless Import/Export</h3>
            <p>Freezones are exempt from customs duties for goods imported into the zone and subsequently exported, making them ideal for international logistics.</p>
          </div>
        </div>
      </section>

      <section className="authority-content-section" style={{ backgroundColor: '#0f172a' }}>
        <h2>Top Freezones <span className="highlight">We Recommend</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <h3>IFZA (Dubai)</h3>
            <p>Known for fast processing, competitive pricing, and flexibility. Ideal for consultants, freelancers, and service-based businesses without physical office requirements.</p>
          </div>
          <div className="authority-card">
            <h3>DMCC (Dubai)</h3>
            <p>Seven-time winner of 'Global Free Zone of the Year'. The premier hub for commodities, crypto, and large-scale general trading.</p>
          </div>
          <div className="authority-card">
            <h3>Meydan FZ (Dubai)</h3>
            <p>Centrally located, highly prestigious, and offers flexible desk spaces. A top choice for e-commerce, IT, and management consultancies.</p>
          </div>
          <div className="authority-card">
            <h3>Sharjah Publishing City (SPC)</h3>
            <p>One of the most cost-effective Freezones in the UAE, offering dual-license options (Mainland & Freezone combined) for trading flexibility.</p>
          </div>
        </div>
      </section>

      <HomeFAQs />
      <LeadFormSection />
    </div>
  );
}
