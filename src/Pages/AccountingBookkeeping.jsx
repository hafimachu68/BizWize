import React from 'react';
import './accounting.css';
import { Calculator } from 'lucide-react';

export default function AccountingBookkeeping() {
  return (
    <div className="accounting-page">
      {/* Hero Section */}
      <section className="accounting-hero">
        <div className="ahero-overlay"></div>
        <div className="ahero-content">
          <i><Calculator size={64} className="hero-icon" /></i>
          <h1 >Accounting & Bookkeeping</h1>
          <p>
            Keep your finances crystal clear with expert bookkeeping and accurate accounting.  
            We help your business grow stronger through transparency, precision, and compliance.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="accounting-intro">
        <h2 className='hh2'>Reliable, Professional, and Transparent Financial Solutions</h2>
        <p>
          Whether you’re a startup, SME, or enterprise, our accounting services ensure your financial
          records are accurate, compliant, and insightful. We take care of the numbers — so you can
          focus on growing your business with confidence.
        </p>
      </section>

      {/* Services Section */}
      <section className="accounting-services">
        <h2>Our Core Services</h2>
        <div className="service-grid">
          <div className="service-card shape-one">
            <h3>Bookkeeping & Recording</h3>
            <p>Maintain accurate, real-time records and make informed business decisions confidently.</p>
          </div>
          <div className="service-card shape-two">
            <h3>Payroll & Tax Compliance</h3>
            <p>Seamlessly manage payroll and taxation with 100% regulatory compliance and accuracy.</p>
          </div>
          <div className="service-card shape-three">
            <h3>Financial Reporting</h3>
            <p>Gain valuable insights into your company’s financial health with transparent reports.</p>
          </div>
          <div className="service-card shape-four">
            <h3>Budgeting & Forecasting</h3>
            <p>Plan ahead with data-backed forecasting, ensuring smarter financial strategies.</p>
          </div>
          <div className="service-card shape-five">
            <h3>Auditing & Advisory</h3>
            <p>Comprehensive audit and advisory solutions that reinforce trust and financial strength.</p>
          </div>
           <div className="service-card shape-six">
            <h3>VAT & Compliance Management</h3>
            <p>
              Ensure your business meets UAE VAT regulations effortlessly with
              our end-to-end compliance and filing support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take Control of Your Finances?</h2>
        <p>Let’s streamline your business with our expert accounting and bookkeeping support.</p>
        <a href="/contact" className="cta-btn">Get Started</a>
      </section>
    </div>
  );
}
