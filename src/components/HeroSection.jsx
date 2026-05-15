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
          <div className="badge hero-badge">Premium Business Setup UAE</div>
          <h1 className="hero-title">
            Establish Your Future <br />
            in<span className="text-glow">Dubai.</span>
          </h1>
          <p className="hero-subtitle">
            Seamless mainland, freezone, and offshore company formation. 
            We handle the complexities transparently, so you can focus exclusively on scaling your empire.
          </p>
          
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="stat-num">5K+</span>
              <span className="stat-label">Licenses Issued</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years Expertise</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Ownership</span>
            </div>
          </div>
          
          <button className="premium-btn primary-btn hrv-btn" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
            Start Your Journey <ArrowRight size={18}/>
          </button>
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
