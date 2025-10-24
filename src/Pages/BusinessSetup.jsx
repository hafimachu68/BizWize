import React from 'react';
import './services.css';
import { Briefcase } from 'lucide-react';

export default function BusinessSetup() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Business Set Up</h1>
        <p>End-to-end support for company formation, licensing, and government approvals in the UAE.</p>
        <i><Briefcase size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Our Services Include:</h2>
        <ul>
          <li>Free Zone Company Formation</li>
          <li>Mainland Company Licensing</li>
          <li>Offshore Company Registration</li>
          <li>Government Approvals & Legal Support</li>
          <li>Business Consultancy & Planning</li>
        </ul>
      </div>
    </div>
  );
}
