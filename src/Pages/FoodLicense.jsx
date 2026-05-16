import React from 'react';
import SEO from '../components/SEO';
import LeadFormSection from '../components/LeadFormSection';
import HomeFAQs from '../components/HomeFAQs';
import './AuthorityPages.css';
import { Utensils, ClipboardCheck, Store, ShieldAlert } from 'lucide-react';

export default function FoodLicense() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Food License Dubai",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BizWize UAE"
    },
    "description": "Expert assistance to obtain your Food License in Dubai. We handle Dubai Municipality approvals and Food Safety Department regulations."
  };

  return (
    <div className="authority-page">
      <SEO 
        title="Get Your Food License in Dubai | Fast Approvals"
        description="Start your F&B business in the UAE. BizWize handles your Dubai Municipality food license approvals, health and safety regulations, and trade license."
        schemaMarkup={seoSchema}
      />

      <section className="authority-hero">
        <span className="authority-badge">Food & Beverage Setup</span>
        <h1>Get Your Food License in <span className="highlight">Dubai</span></h1>
        <p className="authority-subtitle">
          Navigating Dubai Municipality regulations can be complex. Let our F&B corporate advisors fast-track your restaurant, cafe, or catering license so you can focus on your menu.
        </p>
        <a href="#contact-section" className="btn-premium btn-premium-primary">
          Start Your F&B Journey
        </a>
      </section>

      <section className="authority-content-section">
        <h2>F&B Licensing <span className="highlight">Requirements</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <div className="authority-card-icon"><Store /></div>
            <h3>Location & Layout</h3>
            <p>Your premise must meet strict Dubai Municipality guidelines. We review your kitchen layout, ventilation plans, and seating arrangements to ensure compliance before you sign the lease.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><ClipboardCheck /></div>
            <h3>Food Safety Approvals</h3>
            <p>Every ingredient, supplier, and food handling process must be documented and approved by the Food Safety Department through the Foodwatch platform.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><ShieldAlert /></div>
            <h3>PIC Certification</h3>
            <p>You must have a Person In Charge (PIC) who has passed the official Food Safety certification to ensure daily operations meet UAE health standards.</p>
          </div>
        </div>
      </section>

      <section className="authority-content-section" style={{ backgroundColor: '#0f172a' }}>
        <h2>The Approval <span className="highlight">Process</span></h2>
        <div className="authority-timeline">
          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>DED Initial Approval</h3>
              <p>Reserve your trade name and obtain the initial approval from the Department of Economic Development for your specific F&B activity.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Municipality Layout Approval</h3>
              <p>Submit your architectural blueprints and kitchen layout to the Dubai Municipality for pre-approval before commencing fit-out works.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Fit-out & Inspection</h3>
              <p>Complete the interior construction based on approved plans. We arrange for the final municipal inspection to verify health and safety standards.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Final License Issuance</h3>
              <p>Once the inspection is passed, the NOC is issued, and your DED Food License is officially printed. You are ready to open!</p>
            </div>
          </div>
        </div>
      </section>

      <HomeFAQs />
      <LeadFormSection />
    </div>
  );
}
