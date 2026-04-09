import React from 'react';
import './facility-management.css';
import { Building2, ShieldCheck, Wrench, Sprout, Wind, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';
import WhatsAppButton from '../components/WhatsAppButton';

export default function FacilityManagement() {

  const fmSteps = [
    { title: "Comprehensive Site Audit", desc: "Our engineers deploy to your site to audit MEP systems, structural integrity, and current service contracts." },
    { title: "Service Level Agreement (SLA)", desc: "We draft customized SLAs defining exact response times and maintenance KPIs for your property." },
    { title: "Mobilization & Deployment", desc: "Seamless onboarding of our security, cleaning, and technical teams without disrupting your daily operations." },
    { title: "Continuous CAFM Reporting", desc: "We utilize advanced Computer-Aided Facility Management (CAFM) software to provide you with transparent, real-time maintenance reports." }
  ];

  const fmCaseStudy = {
    title: "Revitalizing a Premium Commercial Tower in Business Bay",
    clientLabel: "Dubai Commercial Real Estate Developer",
    challenge: "Failing HVAC systems and poor janitorial standards were causing a 20% tenant churn rate annually.",
    solution: "Deployed a full Hard & Soft FM package, retrofitted the Chiller systems, and introduced automated CAFM tracking for tenant complaints.",
    result: "Tenant retention stabilized at 95%, energy consumption dropped by 18%, and response times improved by 300%."
  };

  const fmFaqs = [
    { question: "What is the difference between Hard FM and Soft FM?", answer: "Hard FM refers to physical building systems (HVAC, plumbing, electrical, elevators). Soft FM covers human-centric services (security, cleaning, landscaping, pest control). BizWize handles both." },
    { question: "Do you offer emergency call-out services?", answer: "Yes, our mobile technical teams operate 24/7/365 across the UAE to handle critical MEP emergencies, ensuring zero downtime for your property." }
  ];

  return (
    <div className="facility-page premium-fm">
      <SEO 
        title="Integrated Facility Management UAE | BizWize FM"
        description="BizWize provides elite Hard and Soft Facility Management services in Dubai and the UAE. Ensure asset longevity with our 24/7 MEP, security, and cleaning teams."
        url="https://www.bizwizeuae.com/facility-management"
      />
      
      {/* Heavy/Industrial Premium Hero Section */}
      <section className="fm-hero-premium">
        <div className="fm-hero-overlay"></div>
        <div className="hero-content">
          <div className="badge fm-badge">Integrated FM Solutions</div>
          <h1>Protect & Optimize Your <span className="text-fm-accent">Real Estate Assets</span></h1>
          <p>
            From complex MEP engineering to premium soft services. We maximize the lifecycle 
            of your buildings, reduce operational costs, and guarantee tenant satisfaction 24/7.
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary-fm">Request Site Audit <ArrowRight size={18}/></button></a>
          </div>
        </div>
      </section>

      {/* Industrial Trust Bar */}
      <section className="fm-trust-strip">
        <div className="trust-container">
          <div className="trust-item">
            <ShieldCheck size={28} className="fm-icon-sm"/>
            <h4>ISO Certified standard</h4>
          </div>
          <div className="trust-item">
            <Zap size={28} className="fm-icon-sm"/>
            <h4>24/7 Emergency Response</h4>
          </div>
          <div className="trust-item">
            <Building2 size={28} className="fm-icon-sm"/>
            <h4>1M+ Sq.Ft Managed</h4>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="fm-intro-premium">
        <div className="fm-intro-content">
          <h2>Engineering Excellence in <span className="text-fm-accent">Facility Operations.</span></h2>
          <p>
            Managing a property in the UAE requires rigorous attention to detail and absolute technical precision. 
            BizWize FM operates at the intersection of advanced CAFM technology and elite human capital, 
            delivering uninterrupted operations for corporate towers, residential complexes, and industrial facilities.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="fm-services-premium">
        <div className="section-header">
          <h2>Total Facility Care</h2>
          <p>Comprehensive Hard and Soft FM deployed by industry veterans.</p>
        </div>

        <div className="premium-grid fm-grid">
          {/* Service Cards */}
          <div className="glass-feature-card fm-card">
            <div className="icon-wrapper-fm"><Wrench size={38} strokeWidth={1.5} /></div>
            <h3>Hard FM (MEP Services)</h3>
            <p>Preventative and reactive maintenance for mechanical, electrical, and plumbing systems. We keep your HVAC chillers, elevators, and critical infrastructure running flawlessly.</p>
          </div>

          <div className="glass-feature-card fm-card">
            <div className="icon-wrapper-fm"><ShieldCheck size={38} strokeWidth={1.5} /></div>
            <h3>Security & Access Control</h3>
            <p>Deploying highly trained, DPS/SIRA-approved security personnel alongside AI-driven CCTV and biometric access control management.</p>
          </div>

          <div className="glass-feature-card fm-card">
            <div className="icon-wrapper-fm"><Wind size={38} strokeWidth={1.5} /></div>
            <h3>Soft FM (Cleaning & Janitorial)</h3>
            <p>Premium housekeeping, facade cleaning, and deep sanitation protocols designed to maintain pristine, healthy environments for your tenants and staff.</p>
          </div>

          <div className="glass-feature-card fm-card">
            <div className="icon-wrapper-fm"><Sprout size={38} strokeWidth={1.5} /></div>
            <h3>Landscaping & Pest Control</h3>
            <p>Enhancing the aesthetic value of your property with expert horticultural care, hardscaping, and highly effective, eco-friendly pest management programs.</p>
          </div>

          {/* Featured Wide Card */}
          <div className="glass-feature-card span-2 fm-featured-card">
            <div className="featured-content">
              <div className="icon-wrapper-fm-alt"><Building2 size={38} strokeWidth={1.5} /></div>
              <h3>Energy Management & Retrofitting</h3>
              <p>
                Sustainability is at the core of profitable real estate. We conduct deep energy audits to identify wastage in your cooling and lighting systems. By retrofitting your building with smart IoT sensors, we actively drive down utility costs and lower your carbon footprint.
              </p>
              <ul className="fm-benefits">
                <li><CheckCircle2 size={18} className="fm-icon-sm"/> Automated HVAC Scheduling</li>
                <li><CheckCircle2 size={18} className="fm-icon-sm"/> Smart Lighting Upgrades</li>
                <li><CheckCircle2 size={18} className="fm-icon-sm"/> Guaranteed ROI on Retrofits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={fmSteps} caseStudy={fmCaseStudy} faqs={fmFaqs} />

      {/* Robust CTA Section */}
      <section className="premium-cta fm-cta-section">
        <div className="cta-glass-panel fm-glow">
          <h2>Secure Your Building's Future.</h2>
          <p>
            Do not let deferred maintenance erode your asset’s value. Partner with BizWize FM 
            for uncompromising quality and absolute operational reliability.
          </p>
          <a href="/contact"><button className="premium-btn cta-strong fm-cta-btn">Schedule an MEP Audit <ArrowRight size={20}/></button></a>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
