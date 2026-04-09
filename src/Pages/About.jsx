import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Zap, Users, Trophy, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';
import './about.css';

import storyImg from '../images/ab3.png';
import missionImg from '../images/ab4.png';
import visionImg from '../images/ab1.png';

export default function AboutUs() {
  return (
    <div className="about-page premium-about">
      <SEO 
        title="About BizWize | Leading UAE Corporate Advisors"
        description="Learn more about BizWize UAE. We empower visionaries and global enterprises to dominate the MENA market seamlessly through expert business setup and advisory."
        url="https://www.bizwizeuae.com/about"
      />
      
      {/* Premium Hero Section */}
      <section className="about-hero-premium">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-content">
          <div className="badge about-badge">Discover BizWize</div>
          <h1>
            Architects of <span className="text-about-glow">Opportunity.</span>
          </h1>
          <p>
            BizWize is the UAE’s premier corporate advisory and business setup firm. 
            We transition visionaries, startups, and massive global enterprises into the MENA 
            market seamlessly through precision execution, deep compliance, and strategic foresight.
          </p>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="about-stats-strip">
        <div className="stats-container">
          <div className="stat-card">
            <h3>5,000+</h3>
            <p>Companies Formed</p>
          </div>
          <div className="stat-card">
            <h3>40+</h3>
            <p>Global Jurisdictions</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Client Retention</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Years Collective Experience</p>
          </div>
        </div>
      </section>

      {/* Our Story (Premium Split Layout) */}
      <section className="about-story-premium">
        <div className="story-container">
          <div className="story-text">
            <h2>The BizWize <span className="text-about-glow">Legacy</span></h2>
            <p>
              Founded on the belief that navigating the complexities of the UAE market shouldn't be a barrier to entry, BizWize was established to act as a <strong>single-source enterprise partner</strong>.
            </p>
            <p>
              We realized that business owners were bouncing between a dozen different agencies for licensing, visas, accounting, and PR. We fundamentally disrupted that model by bringing <em>everything</em> under one highly secure, deeply knowledgeable roof.
            </p>
            <div className="story-quote">
              <div className="quote-line"></div>
              <p>"We don't just register companies. We engineer corporate structures designed to scale flawlessly in the Middle East."</p>
            </div>
          </div>
          <div className="story-image-wrapper">
             <img src={storyImg} alt="BizWize Corporate Team" className="premium-img-glow" />
          </div>
        </div>
      </section>

      {/* Vision & Mission (Glass Cards) */}
      <section className="about-vision-mission">
        <div className="vm-container">
          
          <div className="glass-feature-card about-card">
            <div className="icon-wrapper-about"><Eye size={38} strokeWidth={1.5}/></div>
            <h3>Our Vision</h3>
            <img src={visionImg} alt="Vision" className="vm-img"/>
            <p>
              To be unequivocally acknowledged as the most trusted, innovative, and results-driven corporate advisory firm in the GCC, building a frictionless ecosystem where global capital meets regional opportunity.
            </p>
          </div>

          <div className="glass-feature-card about-card">
            <div className="icon-wrapper-about"><Target size={38} strokeWidth={1.5}/></div>
            <h3>Our Mission</h3>
            <img src={missionImg} alt="Mission" className="vm-img"/>
            <p>
              To relentlessly provide transparent, high-velocity, and hyper-compliant corporate solutions, ensuring every entrepreneur and conglomerate we partner with is mathematically positioned for exponential growth.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <div className="section-header">
          <h2>Our Core Constructs</h2>
          <p>The unbreakable principles that dictate how we operate our firm.</p>
        </div>
        <div className="values-grid">
          <div className="value-item">
            <ShieldCheck size={32} className="value-icon"/>
            <h4>Absolute Integrity</h4>
            <p>We operate with total financial and structural transparency. No hidden fees, no obscured risks.</p>
          </div>
          <div className="value-item">
            <Zap size={32} className="value-icon"/>
            <h4>High-Velocity Execution</h4>
            <p>In business, speed is a moat. We execute licensing, banking, and visas significantly faster than the industry standard.</p>
          </div>
          <div className="value-item">
            <Users size={32} className="value-icon"/>
            <h4>Client-Obsessed</h4>
            <p>Every account is managed by a dedicated Senior Advisor. You are never passed off to an automated queue.</p>
          </div>
          <div className="value-item">
            <Globe size={32} className="value-icon"/>
            <h4>Global Standard</h4>
            <p>We engineer solutions that meet rigorous international IFRS, FATF, and OECD compliance standards.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
         <div className="why-content">
           <div className="why-header">
             <h2>The <span className="text-about-glow">BizWize</span> Advantage</h2>
             <p>Why Fortune 500s and ambitious start-ups choose to deploy through us.</p>
           </div>
           <div className="why-list-container">
             <ul className="premium-why-list">
               <li><CheckCircle2 className="why-icon" /> <strong>End-to-End Capabilities:</strong> Setup, Accounting, HR, Marketing & FM all under one roof.</li>
               <li><CheckCircle2 className="why-icon" /> <strong>Deep Government Relations:</strong> Expedited approvals via VIP Ministry connections.</li>
               <li><CheckCircle2 className="why-icon" /> <strong>Bespoke Corporate Structuring:</strong> We design holding companies and IP protections, not just base licenses.</li>
               <li><CheckCircle2 className="why-icon" /> <strong>Post-Setup Ecosystem:</strong> Lifetime corporate sponsorship and renewals management.</li>
             </ul>
             <div className="why-trophy">
               <Trophy size={100} className="trophy-icon" />
               <p>Award-Winning UAE Corporate Advisors</p>
             </div>
           </div>
         </div>
      </section>

      {/* Corporate CTA Section */}
      <section className="premium-cta about-cta-section">
        <div className="cta-glass-panel about-glow">
          <h2>Ready to Architect Your Legacy?</h2>
          <p>
            Stop wasting time with fragmented agencies. Partner with BizWize and 
            launch your enterprise with absolute certainty.
          </p>
          <Link to="/contact">
            <button className="premium-btn cta-strong about-cta-btn">
              Schedule Your Strategy Session <ArrowRight size={20}/>
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
