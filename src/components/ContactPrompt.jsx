import React from 'react';
import { ArrowUpCircle, CheckCircle2 } from 'lucide-react';
import './ContactPrompt.css';

export default function ContactPrompt({ onInquiryClick }) {
  return (
    <div className="contact-prompt-premium">
      <div className="glow-accent top-right"></div>
      <div className="glow-accent bottom-left"></div>
      
      <div className="contact-content-glass">
        <h2 className="contact-heading">Ready to dominate your market?</h2>
        <p className="contact-subheading">
          Stop navigating UAE business setup alone. Let our experts handle the legalities while you focus on growth.
        </p>
        
        <ul className="contact-benefits">
          <li><CheckCircle2 color="#38bdf8" /> Free Initial Consultation</li>
          <li><CheckCircle2 color="#38bdf8" /> Dedicated Account Manager</li>
          <li><CheckCircle2 color="#38bdf8" /> 100% Transparent Pricing</li>
        </ul>
        
        <div className="contact-actions">
          <button className="premium-btn cta-scroll-btn" onClick={onInquiryClick}>
            Get Started Now <ArrowUpCircle size={20} className="icon-up" />
          </button>
        </div>
      </div>
    </div>
  );
}
