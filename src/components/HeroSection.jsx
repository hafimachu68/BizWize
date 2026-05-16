import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = forwardRef((props, ref) => {
  const formRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }));



  return (
    <section className="premium-hero-container">
      {/* Dynamic Background Elements */}
      <div className="hero-bg-overlay"></div>
      <div className="hero-grid-pattern"></div>
      <div className="glow-sphere sphere-blue"></div>
      <div className="glow-sphere sphere-cyan"></div>

      <div className="hero-content-wrapper">
        
        {/* Left Side: Copy & Stats */}
        <div className="hero-text-block">
          <div className="badge hero-badge">UAE's #1 Business Setup Company in 2026 | BizWize UAE</div>
          <h1 className="hero-title" style={{ fontSize: '3rem', lineHeight: '1.2' }}>
            Business Setup Consultants in Dubai for <br />
            <span className="text-glow">Mainland, Free Zone & Offshore Companies</span>
          </h1>
          <p className="hero-subtitle">
            Looking to start or open a business in Dubai? At BizWize, we specialize in comprehensive services for business setup in Dubai, including mainland and free zone company formation.
          </p>
          
          <div className="trust-badges-hero">
            <span>✓ Trade License</span>
            <span>✓ Food License</span>
            <span>✓ PRO Services</span>
            <span>✓ Kitchen Rental</span>
            <span>✓ VAT Registration</span>
            <span>✓ Food Label Approval</span>
            <span>✓ Food Vehicle Permissions</span>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="stat-num">1000+</span>
              <span className="stat-label">Businesses Setup</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <a href="https://www.google.com/search?q=bizwize+business+solutions&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQIxgnMgYIBBBFGD0yBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg1NzIyajBqN6gCCLACAfEFMWZfMhkYVC8&sourceid=chrome&ie=UTF-8#lrd=0x3e5f6befe22b7367:0x39283f7c2563d6e0,1" target="_blank" rel="noopener noreferrer" className="hero-stat" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <span className="stat-num" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                4.9 <span style={{ color: '#F59E0B', fontSize: '1rem', marginBottom: '4px' }}>★</span>
              </span>
              <span className="stat-label">BizWize Business Solution Reviews</span>
            </a>
          </div>
          
          <div className="hero-cta-group">
            <button className="btn-premium btn-premium-primary" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
              Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px' }}/>
            </button>
            <a href="https://wa.me/971585893680" target="_blank" rel="noopener noreferrer" className="btn-premium btn-premium-gold" style={{ marginLeft: '16px' }}>
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Right Side: Floating Form */}
        <div className="hero-form-block" ref={formRef}>
          <div className="glass-form-card">
            <h3>Request Free Consultation</h3>
            <p>Speak directly with a UAE corporate advisor today.</p>
            <form action="https://formsubmit.co/info@bizwizeuae.com" method="POST" className="hero-opt-in">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.bizwizeuae.com/thankyou" />

              <div className="input-group">
                <input type="text" name="Full Name" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="tel" name="Phone Number" placeholder="Phone Number" required />
              </div>
              <div className="input-group">
                <select name="Service" required>
                  <option value="">Select Structure</option>
                  <option value="mainland">Mainland Setup</option>
                  <option value="freezone">Freezone Setup</option>
                  <option value="offshore">Offshore Setup</option>
                  <option value="golden-visa">Golden Visa</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Get Expert Advice</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
