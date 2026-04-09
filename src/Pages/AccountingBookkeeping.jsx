import React from 'react';
import './accounting.css';
import { Calculator, FileSpreadsheet, PieChart, ShieldCheck, Landmark, BarChart4, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';
import WhatsAppButton from '../components/WhatsAppButton';

export default function AccountingBookkeeping() {

  const accSteps = [
    { title: "Financial Diagnostics", desc: "We conduct a complete forensic audit of your current ledgers and internal financial controls." },
    { title: "Cloud ERP Setup", desc: "Deploying secure, modern accounting infrastructure (Xero, Quickbooks, or Oracle) tailored to your workflows." },
    { title: "Backlog Migration", desc: "Reconciling and migrating historical financial data meticulously to ensure zero discrepancies." },
    { title: "Ongoing Compliance", desc: "Executing monthly bookkeeping, Federal Tax Authority (FTA) filings, and real-time financial reporting." }
  ];

  const accCaseStudy = {
    title: "Corporate Tax Strategy for a UAE Manufacturer",
    clientLabel: "Sharjah Industrial Manufacturing Plant",
    challenge: "Complex cross-border supply chains resulting in convoluted ledgers and high audit preparation fees.",
    solution: "Transitioned their data into a modern cloud ERP, established clear inter-company transfer pricing rules, and managed their maiden Corporate Tax filing.",
    result: "Saved 18% on total tax liabilities through proper corporate structuring and reduced end-of-year audit prep time by 200 hours."
  };

  const accFaqs = [
    { question: "Is Corporate Tax compliance mandatory for all UAE businesses?", answer: "Yes, standard UAE Corporate Tax applies to businesses generating taxable income above AED 375,000. Exemptions exist for specific Free Zone entities that satisfy 'Qualifying Income' criteria, which we can help assess." },
    { question: "Can you recover old, disorganized financial records?", answer: "Absolutely. Our specialized backlog accounting services are designed to rebuild, reconcile, and update years of historical financial data for FTA compliance." }
  ];

  return (
    <div className="accounting-page premium-acc">
      <SEO 
        title="Accounting & Corporate Tax Services UAE | BizWize"
        description="Top-tier accounting, bookkeeping, VAT, and corporate tax compliance services in Dubai & across the UAE. Secure your company's financials with BizWize."
        url="https://www.bizwizeuae.com/accounting-bookkeeping"
      />
      
      {/* Premium Finance Hero Section */}
      <section className="acc-hero-premium">
        <div className="acc-hero-overlay"></div>
        <div className="hero-content">
          <div className="badge acc-badge">Corporate Finance Partners</div>
          <h1>Precision. Compliance. <br/><span className="text-acc-glow">Growth.</span></h1>
          <p>
            From meticulous bookkeeping to advanced UAE Corporate Tax strategies. 
            We engineer financial clarity so you can scale your enterprise with absolute confidence.
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary-acc">Consult a Tax Expert <ArrowRight size={18}/></button></a>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Strip */}
      <section className="acc-trust-strip">
        <div className="trust-container">
          <div className="trust-item">
            <Landmark size={28} className="acc-icon-sm"/>
            <h4>FTA Tax Agents</h4>
          </div>
          <div className="trust-item">
            <ShieldCheck size={28} className="acc-icon-sm"/>
            <h4>IFRS Compliant</h4>
          </div>
          <div className="trust-item">
            <Calculator size={28} className="acc-icon-sm"/>
            <h4>Certified Cloud Accountants</h4>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="acc-intro-premium">
        <div className="acc-intro-content">
          <h2>Financial Architecture for the <span className="text-acc-glow">Modern Enterprise.</span></h2>
          <p>
            In an era of shifting UAE tax regulations, standard bookkeeping is no longer sufficient. 
            BizWize provides elite financial advisory, ensuring your records are not only auditable and 
            FTA-compliant but also structured to drive intelligent, data-backed boardroom decisions.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="acc-services-premium">
        <div className="section-header">
          <h2>Our Financial Capabilities</h2>
          <p>End-to-end accounting services tailored for start-ups to conglomerates.</p>
        </div>

        <div className="premium-grid acc-grid">
          {/* Service Cards */}
          <div className="glass-feature-card acc-card">
            <div className="icon-wrapper-acc"><FileSpreadsheet size={38} strokeWidth={1.5} /></div>
            <h3>Elite Bookkeeping & Accounting</h3>
            <p>We maintain flawless, real-time ledgers using state-of-the-art cloud software. Gain crystal-clear visibility into your cash flow, accounts payable, and receivable.</p>
          </div>

          <div className="glass-feature-card acc-card">
            <div className="icon-wrapper-acc"><PieChart size={38} strokeWidth={1.5} /></div>
            <h3>VAT Registration & Filing</h3>
            <p>Ensure total compliance with the Federal Tax Authority. We handle your VAT calculations, quarterly return filings, and complex cross-border VAT treatment.</p>
          </div>

          <div className="glass-feature-card acc-card">
            <div className="icon-wrapper-acc"><BarChart4 size={38} strokeWidth={1.5} /></div>
            <h3>Financial Reporting & CFO Services</h3>
            <p>Outsource your CFO function. We provide deep financial forecasting, budget variance analysis, and boardroom-ready reporting packages designed for investors.</p>
          </div>

          <div className="glass-feature-card acc-card">
            <div className="icon-wrapper-acc"><ShieldCheck size={38} strokeWidth={1.5} /></div>
            <h3>Internal Audit & Advisory</h3>
            <p>Stress-test your internal financial controls before external auditors arrive. We identify risk exposure, mitigate fraud, and refine internal compliance protocols.</p>
          </div>

          {/* Featured Wide Card (Corporate Tax) */}
          <div className="glass-feature-card span-2 acc-featured-card">
            <div className="featured-content">
              <div className="icon-wrapper-acc-alt"><Landmark size={38} strokeWidth={1.5} /></div>
              <h3>UAE Corporate Tax Strategy & Compliance</h3>
              <p>
                The financial landscape in the UAE has fundamentally changed. We provide comprehensive Corporate Tax assessments, guiding you through Free Zone 'Qualifying Income' exemptions, Transfer Pricing documentation, and establishing efficient corporate tax groupings to legally minimize your liabilities.
              </p>
              <ul className="acc-benefits">
                <li><CheckCircle2 size={18} className="acc-icon-sm-alt"/> Tax Impact Assessments</li>
                <li><CheckCircle2 size={18} className="acc-icon-sm-alt"/> Entity Restructuring for Tax Efficiency</li>
                <li><CheckCircle2 size={18} className="acc-icon-sm-alt"/> Direct FTA Representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={accSteps} caseStudy={accCaseStudy} faqs={accFaqs} />

      {/* Corporate CTA Section */}
      <section className="premium-cta acc-cta-section">
        <div className="cta-glass-panel acc-glow">
          <h2>Secure Your Financial Future.</h2>
          <p>
            Do not let compliance fines or messy ledgers stifle your growth. 
            Partner with BizWize for absolute financial precision and peace of mind.
          </p>
          <a href="/contact"><button className="premium-btn cta-strong acc-cta-btn">Book a Financial Audit <ArrowRight size={20}/></button></a>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
