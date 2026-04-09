import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './SuccessBanner.css';

export default function SuccessBanner() {
  return (
    <section className="premium-success-banner">
      <div className="banner-glow-line"></div>
      
      <div className="success-banner-content">
        <div className="banner-text-side">
          <span className="badge banner-badge">Trusted Authority</span>
          <h2>Your Success is Our <span className="text-glow">Business</span></h2>
          <p className="banner-para">
            Start your journey with the most trusted business setup consultants in the UAE. 
            From highly complex free zone integrations to accelerated mainland licensing, we provide 
            end-to-end corporate structuring that scales effortlessly.
          </p>
          <ul className="banner-list">
            <li><CheckCircle2 size={18} className="check-icon" /> Mainland, Freezone & Offshore Setup</li>
            <li><CheckCircle2 size={18} className="check-icon" /> End-to-end PRO Services</li>
            <li><CheckCircle2 size={18} className="check-icon" /> Golden Visa Processing</li>
          </ul>
        </div>
        
        <div className="banner-cta-side">
          <div className="cta-glass-box">
             <h3>Ready to launch?</h3>
             <p>Our advisors are standing by.</p>
             <a href="/contact" className="premium-btn cta-banner-btn">
               Schedule A Call <ArrowRight size={18} />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}