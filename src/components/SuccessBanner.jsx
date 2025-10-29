import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessBanner.css';

export default function SuccessBanner() {
  return (
    <section className="success-banner-section">
      <div className="success-banner-content">
        <h1>
          Your Success is Our <span>Business</span>
        </h1>
        <p>
          We guide entrepreneurs and companies to establish and grow their presence in the UAE with seamless solutions and expert support.
        </p>
        <Link to="/contact" className="cta-button">
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
