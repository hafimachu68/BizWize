import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessBanner.css';

export default function SuccessBanner() {
  return (
    <section className="success-banner-section">

      {/* Wave connection from Hero section */}
      <div className="top-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="success-banner-content">

        <span className="intro-text">
          UAE Business Setup Experts
        </span>

        <h1>
          Your Success is Our <span>Business</span>
        </h1>

        <p className="intro-para">
          Start your journey with trusted <strong>business setup consultants in the UAE</strong>. 
          We specialize in seamless <strong>company formation in Dubai</strong>, including 
          <strong>mainland business setup, free zone company registration, and offshore company formation</strong>. 
          From trade licenses and visa processing to PRO services and corporate structuring, 
          our experts provide end-to-end solutions that help entrepreneurs, startups, and 
          international investors establish and grow successful businesses in the UAE.
        </p>

        <Link to="/contact" className="cta-button">
          Get Free Consultation
        </Link>

      </div>
    </section>
  );
}