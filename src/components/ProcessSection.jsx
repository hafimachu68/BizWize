import React from 'react';
import { ClipboardList, Settings, Rocket } from 'lucide-react';
import './ProcessSection.css';

export default function ProcessSection() {
  const steps = [
    {
      icon: <ClipboardList size={40} />,
      title: "1. Strategy & Consultation",
      desc: "We analyze your business goals and recommend the optimal jurisdiction (Mainland vs Freezone) for maximum profitability and complete foreign ownership.",
    },
    {
      icon: <Settings size={40} />,
      title: "2. Licensing & Setup",
      desc: "Our dedicated PRO team rapidly handles all government approvals, MOA drafting, visa quotas, and documentation without delays or hidden fees.",
    },
    {
      icon: <Rocket size={40} />,
      title: "3. Launch & Scale",
      desc: "You receive your trade license and corporate bank account instantly. You focus exclusively on sales, we handle all the ongoing compliance.",
    }
  ];

  return (
    <section className="process-premium-wrapper">
      <div className="process-header">
        <h2 className="process-title">Your Journey to <span className="text-glow">Success</span></h2>
        <p className="process-subtitle">Three straightforward steps to establishing your corporate presence in Dubai.</p>
      </div>
      
      <div className="process-timeline">
        {steps.map((step, idx) => (
          <div key={idx} className="process-card" style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
