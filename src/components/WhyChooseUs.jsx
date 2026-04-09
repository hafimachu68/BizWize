import React from 'react';
import { ShieldCheck, Zap, UserCheck, FileCheck2, Globe, Scale } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <UserCheck size={42} strokeWidth={1.5} />,
      title: '10+ Years of Experience',
      text: 'Over a decade helping startups and corporates build their UAE presence smoothly and legally.',
    },
    {
      icon: <Zap size={42} strokeWidth={1.5} />,
      title: 'Fast Company Formation',
      text: 'Get your business registered in as little as 48 hours with our fast-track licensing process.',
    },
    {
      icon: <ShieldCheck size={42} strokeWidth={1.5} />,
      title: 'Dedicated Consultant',
      text: 'You’ll work with a personal advisor from start to finish — no call centers, no bots.',
    },
    {
      icon: <FileCheck2 size={42} strokeWidth={1.5} />,
      title: 'Seamless Documentation',
      text: 'MOAs, notarization, legal translation, bank forms — we do the legwork so you don’t have to.',
    },
    {
      icon: <Globe size={42} strokeWidth={1.5} />,
      title: 'Global Client Base',
      text: 'Clients from over 30 countries trust BizWize for efficient, ethical setup in the UAE.',
    },
    {
      icon: <Scale size={42} strokeWidth={1.5} />,
      title: 'Legal & Compliance',
      text: 'Avoid future issues — our experts ensure you stay compliant with UAE law from day one.',
    },
  ];

  return (
    <div className="why-premium-container">
      <div className="why-bg-glow"></div>
      
      <section className="why-header">
        <h2>The <span className="text-glow">BizWize</span> Advantage</h2>
        <p className="subtitle">Why top industry leaders choose us as their growth partner in the UAE.</p>
      </section>

      <section className="why-grid">
        {reasons.map((item, idx) => (
          <div key={idx} className="glass-panel" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="panel-icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="why-cta-wrapper">
        <a href="/contact" className="premium-btn cta-strong">Consult An Expert Today</a>
      </section>
    </div>
  );
}
