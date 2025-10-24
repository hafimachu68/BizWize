import React from 'react';
import './services.css';
import { Megaphone } from 'lucide-react';

export default function DigitalMarketing() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Digital Marketing</h1>
        <p>Boost your online visibility with expert social media, SEO, and paid ad campaigns that deliver results.</p>
        <i><Megaphone size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Marketing Services:</h2>
        <ul>
          <li>SEO Optimization</li>
          <li>Social Media Marketing</li>
          <li>PPC & Paid Campaigns</li>
          <li>Content Creation & Branding</li>
          <li>Email Marketing & Automation</li>
        </ul>
      </div>
    </div>
  );
}
