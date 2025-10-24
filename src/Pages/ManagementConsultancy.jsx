import React from 'react';
import './services.css';
import { ClipboardList } from 'lucide-react';

export default function ManagementConsultancy() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Management Consultancy</h1>
        <p>Strategic guidance to optimize operations, improve efficiency, and ensure sustainable business growth.</p>
        <i><ClipboardList size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Consultancy Services:</h2>
        <ul>
          <li>Operational Analysis & Optimization</li>
          <li>Business Strategy & Planning</li>
          <li>Process Improvement</li>
          <li>Risk Management & Compliance</li>
          <li>Corporate Governance Guidance</li>
        </ul>
      </div>
    </div>
  );
}
