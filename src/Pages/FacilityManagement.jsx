import React from 'react';
import './services.css';
import { Building2 } from 'lucide-react';

export default function FacilityManagement() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Facility Management</h1>
        <p>Reliable facility maintenance, cleaning, and support services for commercial and residential properties.</p>
        <i><Building2 size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Our Services Include:</h2>
        <ul>
          <li>Building & Property Maintenance</li>
          <li>Cleaning & Janitorial Services</li>
          <li>Security Management</li>
          <li>Equipment & Utility Management</li>
          <li>Tenant & Occupant Support</li>
        </ul>
      </div>
    </div>
  );
}
