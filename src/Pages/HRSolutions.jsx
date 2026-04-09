import React from 'react';
import './hrsolutions.css';
import { Users2, Briefcase, FileText, Settings, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HRSolutions() {

  const hrSteps = [
    { title: "Needs Analysis & Audit", desc: "Understanding your staffing pipeline, current payroll structure, and UAE compliance standing." },
    { title: "Talent Sourcing", desc: "Executing targeted recruitment campaigns to screen, interview, and secure top-tier professionals." },
    { title: "Onboarding & Visas", desc: "Setting up ironclad MoHRE contracts, residence visas, and medical insurance processing." },
    { title: "Continuous Management", desc: "Providing ongoing WPS payroll management, HR consultancy, and internal policy structuring." }
  ];

  const hrCaseStudy = {
    title: "Scaling operations for a Dubai IT Startup",
    clientLabel: "Dubai Silicon Oasis Tech Firm",
    challenge: "Needed to recruit and relocate 20 specialized software engineers rapidly without violating local labor quotas.",
    solution: "Managed the full-cycle headhunting, streamlined their visa exception processing, and drafted their complete employee handbook.",
    result: "Successfully onboarded all 20 employees within 45 days, achieving 100% MoHRE compliance."
  };

  const hrFaqs = [
    { question: "Do you handle UAE Golden Visas for employees?", answer: "Yes, we facilitate all types of employment visas, including processing Golden Visas for eligible investors, executives, and specialized talent." },
    { question: "Is your payroll service compliant with the UAE WPS?", answer: "Absolutely. All our payroll processing solutions are fully integrated with the UAE Wage Protection System (WPS) to ensure zero fines and timely salary transfers." }
  ];

  return (
    <div className="hr-page premium-hr">
      <SEO 
        title="HR Solutions & Payroll Management UAE | BizWize"
        description="Streamline your HR process in the UAE. BizWize offers expert recruitment, WPS payroll management, and corporate compliance solutions."
        url="https://www.bizwizeuae.com/hr-solutions"
      />
      
      {/* Premium Hero Section */}
      <section className="hr-hero-premium">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-content">
          <div className="badge">Corporate HR Partners</div>
          <h1>Transform Your Workforce<br />in the <span className="text-glow">UAE</span></h1>
          <p>
            From executive talent acquisition to automated WPS payroll. 
            We build and manage high-performance teams while you focus on scaling your business.
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary">Elevate Your HR <ArrowRight size={18}/></button></a>
          </div>
        </div>
      </section>

      {/* Intro Stats/Trust Section */}
      <section className="hr-intro-stats">
        <div className="stats-container">
          <div className="stat-card">
            <h3>100%</h3>
            <p>MoHRE & WPS Compliant</p>
          </div>
          <div className="stat-card">
            <h3>48hrs</h3>
            <p>Average Visa Processing Time</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Dedicated HR Support</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="hr-services-premium">
        <div className="section-header">
          <h2>Our Core HR & Outsourcing Solutions</h2>
          <p>End-to-end human capital management tailored strictly to UAE labor laws.</p>
        </div>
        
        <div className="premium-grid hr-grid">
          <div className="glass-feature-card">
            <div className="icon-wrapper"><Briefcase size={40} /></div>
            <h3>Talent Acquisition</h3>
            <p>
              Access a deep pool of pre-vetted professionals. We handle headhunting, rigorous screening, and executive search for roles at all levels.
            </p>
          </div>

          <div className="glass-feature-card">
            <div className="icon-wrapper"><FileText size={40} /></div>
            <h3>WPS Payroll Management</h3>
            <p>
              Eliminate errors and fines. We calculate salaries, manage leave encashments, end-of-service gratuities, and strictly comply with the Wage Protection System.
            </p>
          </div>

          <div className="glass-feature-card">
            <div className="icon-wrapper"><UserCheck size={40} /></div>
            <h3>Visas & Onboarding</h3>
            <p>
              Seamless transitions for your new hires. We process medicals, Emirates IDs, employment visas, and orchestrate their Day-1 onboarding.
            </p>
          </div>

          <div className="glass-feature-card">
            <div className="icon-wrapper"><Settings size={40} /></div>
            <h3>HR Policy & Compliance</h3>
            <p>
              Protect your business from labor disputes. We draft legally binding employment contracts, non-competes, and custom employee handbooks.
            </p>
          </div>

          <div className="glass-feature-card span-2 hr-outsource">
            <div className="outsource-content">
              <div className="icon-wrapper"><Users2 size={40} /></div>
              <h3>Outsourced HR Management (EOR)</h3>
              <p>
                Don't have a local entity yet? Leverage our Employer of Record (EOR) services. We hire your team under our visa quotas and manage them completely, allowing you to operate in the UAE immediately without the overhead of forming a full HR department.
              </p>
              <ul className="outsource-benefits">
                <li><CheckCircle2 size={18} className="check-icon"/> Zero Administrative Burden</li>
                <li><CheckCircle2 size={18} className="check-icon"/> Full Legal Protection</li>
                <li><CheckCircle2 size={18} className="check-icon"/> Scalable Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={hrSteps} caseStudy={hrCaseStudy} faqs={hrFaqs} />

      {/* CTA Section */}
      <section className="premium-cta">
        <div className="cta-glass-panel">
          <h2>Ready to Build a Better Workforce?</h2>
          <p>
            Partner with BizWize for full-spectrum HR solutions that guarantee employee satisfaction and absolute legal compliance.
          </p>
          <a href="/contact"><button className="premium-btn cta-strong">Consult our HR Experts <ArrowRight size={20}/></button></a>
        </div>
        <div className="cta-bg-elements">
           <div className="shape shape-blue"></div>
           <div className="shape shape-green"></div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
