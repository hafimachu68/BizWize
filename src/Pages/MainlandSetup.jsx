import React from 'react';
import SEO from '../components/SEO';
import LeadFormSection from '../components/LeadFormSection';
import HomeFAQs from '../components/HomeFAQs';
import './AuthorityPages.css';
import { Building, MapPin, Briefcase, FileCheck, Landmark, Globe } from 'lucide-react';

export default function MainlandSetup() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mainland Business Setup Dubai",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BizWize UAE"
    },
    "description": "Expert assistance for Dubai Mainland company formation, offering 100% foreign ownership and complete DED compliance."
  };

  return (
    <div className="authority-page">
      <SEO 
        title="Mainland Business Setup Dubai | 100% Foreign Ownership"
        description="Start your company in Dubai Mainland with BizWize. We handle DED approvals, local sponsorship, and offer fast-track trade license issuance."
        schemaMarkup={seoSchema}
      />

      <section className="authority-hero">
        <span className="authority-badge">DED Approved Setup</span>
        <h1>Mainland Business Setup in <span className="highlight">Dubai</span></h1>
        <p className="authority-subtitle">
          Operate anywhere in the UAE and internationally. Take advantage of 100% foreign ownership laws and secure lucrative government contracts with a Dubai Mainland Trade License.
        </p>
        <a href="#contact-section" className="btn-premium btn-premium-primary">
          Calculate Your Setup Cost
        </a>
      </section>

      <section className="authority-content-section">
        <h2>Why Choose <span className="highlight">Dubai Mainland?</span></h2>
        <div className="authority-grid">
          <div className="authority-card">
            <div className="authority-card-icon"><Globe /></div>
            <h3>100% Foreign Ownership</h3>
            <p>Recent changes to the Commercial Companies Law allow expats to own 100% of their mainland business without a local sponsor for most trading and industrial activities.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><MapPin /></div>
            <h3>Location Flexibility</h3>
            <p>Rent commercial space anywhere in Dubai. Unlike freezones, mainland companies are not restricted to operating within a specific geographic zone.</p>
          </div>
          <div className="authority-card">
            <div className="authority-card-icon"><Building /></div>
            <h3>Government Contracts</h3>
            <p>Only mainland companies are legally permitted to bid for and execute lucrative UAE government and semi-government tenders.</p>
          </div>
        </div>
      </section>

      <section className="authority-content-section" style={{ backgroundColor: '#0f172a' }}>
        <h2>The Setup <span className="highlight">Process</span></h2>
        <div className="authority-timeline">
          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Initial Approval & Trade Name</h3>
              <p>We register your trade name and obtain the initial approval from the Department of Economy and Tourism (DET/DED).</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Memorandum of Association (MOA)</h3>
              <p>We draft and notarize the MOA and LSA (if required for specific professional licenses) at the Dubai Courts.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Office Lease (Ejari)</h3>
              <p>A physical office is required for mainland setup. We assist in finding suitable space and registering your Ejari.</p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>License Issuance</h3>
              <p>We submit all final documents to the DED and obtain your official Mainland Trade License within days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* We will reuse HomeFAQs for now, but ideally pass specific props. 
          For speed, reusing the generic FAQ which already covers Mainland/Cost. */}
      <HomeFAQs />

      <LeadFormSection />
    </div>
  );
}
