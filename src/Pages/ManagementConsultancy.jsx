import React from 'react';
import './management-consultancy.css';
import { ClipboardList, BarChart3, Briefcase, Target, ShieldCheck, Workflow, SearchCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceEnhancements from '../components/ServiceEnhancements';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ManagementConsultancy() {
  
  const mngSteps = [
    { title: "Deep-Dive Diagnostics", desc: "We conduct a granular audit of your corporate structure, financial models, and operational bottlenecks." },
    { title: "Strategic Roadmap", desc: "Developing a clear, actionable path for M&A, restructuring, and hyper-growth scaling." },
    { title: "Execution & Change Management", desc: "We don't just advise; we embed with your C-suite to execute changes and deploy new strategic frameworks safely." },
    { title: "Performance Governance", desc: "Establishing strict KPIs, Board structures, and governance policies to ensure sustainable, long-term ROI." }
  ];

  const mngCaseStudy = {
    title: "Supply Chain Restructuring for an Abu Dhabi Logistics Firm",
    clientLabel: "Abu Dhabi Enterprise Freight Company",
    challenge: "Bloated operational overheads and compliance failures causing a 15% drop in YoY profit margins.",
    solution: "Conducted a top-down operational audit, restructured departmental workflows, and introduced automated compliance and reporting matrices.",
    result: "Reduced operational overhead by 22%, improved delivery SLA timelines by 30%, and restored profit margins within 6 months."
  };

  const mngFaqs = [
    { question: "Do you offer on-site management consultancy across the UAE?", answer: "Yes, our elite consultants deploy directly to client sites across Dubai, Abu Dhabi, Sharjah, and the wider GCC to ensure hands-on execution." },
    { question: "For which industries do you provide strategic advisory?", answer: "We possess deep sector-specific expertise in Logistics, Healthcare, Real Estate, Technology (SaaS/Fintech), and Retail/FMCG." }
  ];

  return (
    <div className="management-page premium-mc">
      <SEO 
        title="Elite Management Consultancy Dubai & Abu Dhabi | BizWize"
        description="BizWize provides top-tier management consultancy in Dubai & Abu Dhabi. We empower enterprise growth with strategic planning, restructuring, and M&A advisory."
        url="https://www.bizwizeuae.com/management-consultancy"
      />
      
      {/* Premium Hero Section */}
      <section className="mc-hero-premium">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-content">
          <div className="badge mc-badge">Strategic Advisory Partners</div>
          <h1>Architecting <br/>Corporate <span className="text-mc-glow">Excellence</span></h1>
          <p>
            We partner with visionary leaders in the UAE to solve their most complex 
            operational challenges, restructure for scale, and drive unprecedented enterprise value. 
          </p>
          <div className="hero-actions">
            <a href="/contact"><button className="premium-btn primary-mc">Engage Our Consultants <ArrowRight size={18}/></button></a>
          </div>
        </div>
      </section>

      {/* Advisory Principles Bar */}
      <section className="mc-principles-strip">
        <div className="principles-container">
          <div className="principle">
            <SearchCheck size={28} className="mc-icon-sm"/>
            <h4>Data-Driven Clarity</h4>
          </div>
          <div className="principle">
            <Workflow size={28} className="mc-icon-sm"/>
            <h4>Flawless Execution</h4>
          </div>
          <div className="principle">
            <ShieldCheck size={28} className="mc-icon-sm"/>
            <h4>Absolute Discretion</h4>
          </div>
        </div>
      </section>

      {/* Intro Section - The BizWize Edge */}
      <section className="mc-intro-premium">
        <div className="mc-intro-content">
          <h2>The <span className="text-mc-glow">Catalyst</span> for Next-Level Growth.</h2>
          <p>
            In a fiercely competitive MENA market, incremental improvements are no longer enough. 
            BizWize Management Consultancy deploys battle-tested strategies to optimize your P&L, 
            streamline your human capital, and position your brand for market dominance.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="mc-services-premium">
        <div className="section-header">
          <h2>Our Advisory Capabilities</h2>
          <p>World-class frameworks tailored for the Middle East's economic landscape.</p>
        </div>

        <div className="premium-grid mc-grid">
          <div className="glass-feature-card mc-card">
            <div className="icon-wrapper-mc"><BarChart3 size={38} strokeWidth={1.5} /></div>
            <h3>Operational Restructuring</h3>
            <p>We eliminate organizational silos, optimize supply chains, and slash overheads to transform your business into a lean, agile powerhouse.</p>
          </div>

          <div className="glass-feature-card mc-card">
            <div className="icon-wrapper-mc"><Briefcase size={38} strokeWidth={1.5} /></div>
            <h3>Strategy & M&A Advisory</h3>
            <p>From market entry feasibility studies to post-merger integration. We provide the intelligence required to make aggressive corporate moves safely.</p>
          </div>

          <div className="glass-feature-card mc-card">
            <div className="icon-wrapper-mc"><Workflow size={38} strokeWidth={1.5} /></div>
            <h3>Process Engineering</h3>
            <p>We map, diagnose, and redesign your core business processes to increase output velocity and drastically reduce error rates.</p>
          </div>

          <div className="glass-feature-card mc-card">
            <div className="icon-wrapper-mc"><ShieldCheck size={38} strokeWidth={1.5} /></div>
            <h3>Risk & Crisis Management</h3>
            <p>Anticipate disruptions before they happen. We build robust corporate shields against financial, operational, and regulatory risks.</p>
          </div>

          {/* Featured Wide Card */}
          <div className="glass-feature-card span-2 mc-featured-card">
            <div className="featured-content">
              <div className="icon-wrapper-mc-alt"><Target size={38} strokeWidth={1.5} /></div>
              <h3>Corporate Governance & Board Structuring</h3>
              <p>
                A strong business requires an infallible foundation. We design and implement world-class corporate governance frameworks, ensuring total transparency, accountability, and ethical success for family offices and enterprise conglomerates in the UAE.
              </p>
              <ul className="mc-benefits">
                <li><CheckCircle2 size={18} className="mc-icon-sm-alt"/> Board Committee Formations</li>
                <li><CheckCircle2 size={18} className="mc-icon-sm-alt"/> Shareholder Dispute Resolution</li>
                <li><CheckCircle2 size={18} className="mc-icon-sm-alt"/> Succession Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceEnhancements steps={mngSteps} caseStudy={mngCaseStudy} faqs={mngFaqs} />

      {/* Elite CTA Section */}
      <section className="premium-cta mc-cta-section">
        <div className="cta-glass-panel mc-glow">
          <h2>Command Your Industry.</h2>
          <p>
            True market leadership requires decisive action. Schedule a confidential 
            strategy brief with our Senior Partners today.
          </p>
          <a href="/contact"><button className="premium-btn cta-strong mc-cta-btn">Book Executive Consultation <ArrowRight size={20}/></button></a>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
