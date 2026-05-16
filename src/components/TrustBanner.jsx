import React from 'react';
import './TrustBanner.css';
import { Star, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const TrustBanner = () => {
  return (
    <div className="trust-banner-container">
      <div className="trust-banner-content">
        <div className="trust-item">
          <TrendingUp className="trust-icon" />
          <div className="trust-text">
            <h4>1000+</h4>
            <p>Businesses Setup</p>
          </div>
        </div>
        <div className="trust-item">
          <Award className="trust-icon" />
          <div className="trust-text">
            <h4>10+ Years</h4>
            <p>Experience</p>
          </div>
        </div>
        <a href="https://www.google.com/search?q=bizwize+business+solutions&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQIxgnMgYIBBBFGD0yBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg1NzIyajBqN6gCCLACAfEFMWZfMhkYVC8&sourceid=chrome&ie=UTF-8#lrd=0x3e5f6befe22b7367:0x39283f7c2563d6e0,1" target="_blank" rel="noopener noreferrer" className="trust-item" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Star className="trust-icon text-warning" fill="#F59E0B" color="#F59E0B" />
          <div className="trust-text">
            <h4>4.9 Rating</h4>
            <p>Google Reviews</p>
          </div>
        </a>
        <div className="trust-item">
          <ShieldCheck className="trust-icon" />
          <div className="trust-text">
            <h4>UAE Trusted</h4>
            <p>Consultants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
