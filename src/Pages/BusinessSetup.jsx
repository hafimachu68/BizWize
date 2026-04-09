import React from 'react';
import './businessSetup.css';
import { Briefcase, Globe, FileText, Users, Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';

export default function BusinessSetup() {
  
  const setupSteps = [
    { title: "Consultation & Structuring", desc: "We advise on the best legal structure, jurisdiction, and activity mapping for your goals." },
    { title: "Documentation & Approvals", desc: "Drafting MoAs, NOCs, and securing initial approvals from DED or Free Zone authorities." },
    { title: "License Issuance", desc: "Finalizing the corporate registration, workspace lease, and obtaining your trade license." },
    { title: "Visa & Bank Setup", desc: "Processing investor, partner, and employee visas, and establishing robust corporate banking." }
  ];

  const setupCaseStudy = {
    title: "Fast-Tracking a Global Tech Start-up in Dubai",
    clientLabel: "European Fintech Firm",
    challenge: "Required a highly regulated regional HQ in Dubai quickly to secure a local enterprise contract.",
    solution: "Expedited a customized IFZA Free Zone company formation with multi-manager visas and compliance frameworks.",
    result: "Company fully registered and corporate bank accounts active within 3 weeks, securing the client contract on time."
  };

  const setupFaqs = [
    { question: "Do I need a local sponsor to start a business in Dubai?", answer: "Not always! For Free Zone companies, you retain 100% ownership. Recent Commercial Companies Law amendments also allow 100% foreign ownership for thousands of Mainland commercial and industrial activities." },
    { question: "How much does a typical UAE trade license cost?", answer: "Costs vary depending on jurisdiction (Mainland vs Free Zone), chosen business activities, and your required visa quota. We provide highly transparent pricing with zero hidden fees from day one." }
  ];

  return (
    <div className="business-setup-page premium-setup">
      <SEO 
        title="Business Setup & Company Formation Dubai | BizWize"
        description="Comprehensive business setup, mainland, freezone, and offshore company formation registration services in Dubai, Abu Dhabi, and across the UAE."
        url="https://www.bizwizeuae.com/business-setup"
      />
      
      {/* Premium Hero Section */}
      <section className="setup-hero-premium">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-bg"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
        >
          {/* Add a generic video URL if available, else standard background will show */}
        </video>
        <div className="hero-gradient-overlay"></div>
        
        <div className="hero-content">
          <div className="badge">UAE Market Entry Experts</div>
          <h1>Establish Your Business <br/> in the <span className="text-glow">UAE</span></h1>
          <p>
            From strategic Mainland structuring to lucrative Free Zone formations. 
            We engineer your corporate foundation for absolute success.
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary">Start Your Journey <ArrowRight size={18}/></button></a>
            <a href="#comparison"><button className="premium-btn secondary">Compare Jurisdictions</button></a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <p>Trusted by visionary companies launching in</p>
        <div className="zones">
          <span>IFZA Dubai</span>
          <span>DMCC</span>
          <span>Dubai Economy (DED)</span>
          <span>Sharjah Media City</span>
          <span>Abu Dhabi Global Market</span>
        </div>
      </div>

      {/* Core Services Grid */}
      <section className="service-overview-premium">
        <div className="section-header">
          <h2>Corporate Structures & Licensing</h2>
          <p>We tailor your legal structure to maximize operational freedom and minimize taxation.</p>
        </div>

        <div className="premium-grid">
          {[
            {
              icon: <Globe size={40} />,
              title: 'Free Zone Formation',
              desc: 'Retain 100% foreign ownership, enjoy 0% corporate tax benefits (subject to threshold), and fast-track your setup in top-tier UAE Free Zones.',
            },
            {
              icon: <Building2 size={40} />,
              title: 'Mainland Company (DED)',
              desc: 'Dominate the local market. Establish a Mainland LLC or professional firm with unrestricted access to trade directly anywhere in the UAE.',
            },
            {
              icon: <FileText size={40} />,
              title: 'Offshore Registration',
              desc: 'Strategically register your company offshore for international trading, asset protection, and deep corporate privacy.',
            },
            {
              icon: <ShieldCheck size={40} />,
              title: 'Golden Visa & Pro Services',
              desc: 'Comprehensive VIP PRO services. We handle Ministry of Labor, Immigration, and Golden Visa processing effortlessly.',
            }
          ].map((service, i) => (
            <div className="glass-feature-card" key={i}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section (NEW CONTENT) */}
      <section id="comparison" className="comparison-section">
        <div className="comparison-container">
          <div className="comparison-text">
            <h2>Which Jurisdiction is <span className="text-glow">Right for You?</span></h2>
            <p>Choosing between Mainland and Free Zone is the most critical decision for your business. Let our logic-driven approach guide you.</p>
            <ul className="comparison-list">
              <li><CheckCircle2 color="#3ab6ff" className="m-icon"/> <strong>Mainland:</strong> Ideal for retail, restaurants, and B2B trading within the local UAE market. No space restrictions.</li>
              <li><CheckCircle2 color="#3ab6ff" className="m-icon"/> <strong>Free Zone:</strong> Perfect for tech startups, e-commerce, international trading, and consulting with import/export focus.</li>
              <li><CheckCircle2 color="#3ab6ff" className="m-icon"/> <strong>Offshore:</strong> Holding companies, wealth management, and property holding.</li>
            </ul>
            <a href="/contact" className="text-link">Consult our jurisdiction experts &rarr;</a>
          </div>
          
          <div className="comparison-card">
            <div className="comp-header">
              <div className="comp-col">Feature</div>
              <div className="comp-col highlight">Mainland</div>
              <div className="comp-col">Free Zone</div>
            </div>
            <div className="comp-row">
              <div className="comp-col">Ownership</div>
              <div className="comp-col highlight">Up to 100%</div>
              <div className="comp-col">100%</div>
            </div>
            <div className="comp-row">
              <div className="comp-col">Local Trading</div>
              <div className="comp-col highlight">Direct</div>
              <div className="comp-col">Via Distributor</div>
            </div>
            <div className="comp-row">
              <div className="comp-col">Office Space</div>
              <div className="comp-col highlight">Anywhere</div>
              <div className="comp-col">Inside Zone</div>
            </div>
            <div className="comp-row">
              <div className="comp-col">Visas</div>
              <div className="comp-col highlight">Unlimited*</div>
              <div className="comp-col">Per Office Size</div>
            </div>
            <div className="comp-footnote">*Subject to physical office size</div>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={setupSteps} caseStudy={setupCaseStudy} faqs={setupFaqs} />

      {/* Premium CTA Section */}
      <section className="premium-cta">
        <div className="cta-glass-panel">
          <h2>Ready to Launch Your Empire?</h2>
          <p>Join hundreds of global investors who trust BizWize for speed, accuracy, and corporate excellence.</p>
          <a href="/contact"><button className="premium-btn cta-strong">Schedule Your Free Strategy Session <ArrowRight size={20}/></button></a>
        </div>
        <div className="cta-bg-elements">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
