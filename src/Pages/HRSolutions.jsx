import React from 'react';
import './services.css';
import { Users2 } from 'lucide-react';

export default function HRSolutions() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>HR Solutions</h1>
        <p>Comprehensive HR outsourcing, recruitment, and employee management services tailored to your business.</p>
        <i><Users2 size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Our HR Expertise:</h2>
        <ul>
          <li>Recruitment & Talent Acquisition</li>
          <li>Payroll Management</li>
          <li>Employee Onboarding & Training</li>
          <li>HR Policies & Compliance</li>
          <li>Outsourcing HR Functions</li>
        </ul>
      </div>
    </div>
  );
}
