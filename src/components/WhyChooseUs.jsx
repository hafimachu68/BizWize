import React from 'react';
import { ShieldCheck, Zap, UserCheck, FileCheck2, Globe, Scale } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  { icon: <Zap size={24} />, title: 'Fast Approvals', text: 'Get registered in record time with fast-track VIP processing.' },
  { icon: <Scale size={24} />, title: 'Affordable Pricing', text: 'Transparent pricing with no hidden fees. Maximum value.' },
  { icon: <Globe size={24} />, title: 'Dubai Experts', text: 'Deep local knowledge to navigate UAE regulations smoothly.' },
  { icon: <ShieldCheck size={24} />, title: 'Dedicated Consultant', text: 'Personal advisor from start to finish — no bots.' },
  { icon: <UserCheck size={24} />, title: 'Government Support', text: 'Strong ties ensure smooth document clearing.' },
  { icon: <FileCheck2 size={24} />, title: 'End-to-End Process', text: 'From consultation to bank and visa, we handle it all.' },
];

export default function WhyChooseUs() {
  return (
    <div className="why-map-container">
      <div className="why-header">
        <h2>The <span className="text-glow">BizWize</span> Business Setup Advantage</h2>
        <p className="subtitle">Why top leaders choose us as their growth partner.</p>
      </div>

      <div className="map-roadmap">
        <div className="map-line"></div>
        {reasons.map((item, idx) => (
          <div key={idx} className={`map-node-container ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="map-node-marker">
              <div className="map-node-icon">{item.icon}</div>
            </div>
            <div className="map-node-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="why-cta-wrapper">
        <a href="/contact" className="premium-btn cta-strong">Consult An Expert Today</a>
      </div>
    </div>
  );
}
