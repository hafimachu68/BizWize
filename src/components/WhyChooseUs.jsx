import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '👩‍💼',
      title: '10+ Years of Experience',
      text: 'Over a decade helping startups and corporates build their UAE presence smoothly and legally.',
    },
    {
      icon: '⚡',
      title: 'Fast Company Formation',
      text: 'Get your business registered in as little as 48 hours with our fast-track licensing process.',
    },
    {
      icon: '🤝',
      title: 'Dedicated Consultant',
      text: 'You’ll work with a personal advisor from start to finish — no call centers, no bots.',
    },
    {
      icon: '📄',
      title: 'All Documentation Handled',
      text: 'MOAs, notarization, legal translation, bank forms — we do the legwork so you don’t have to.',
    },
    {
      icon: '🌍',
      title: 'Global Client Base',
      text: 'Clients from over 30 countries trust BizWize for efficient, ethical setup in the UAE.',
    },
    {
      icon: '🛡️',
      title: 'Legal & Compliance Support',
      text: 'Avoid future issues — our experts ensure you stay compliant with UAE law from day one.',
    },
  ];

  return (
    <div className="why-chat-container">
  <div className="svg-pattern"></div>

<div className="icon-bg">
  <div className="icon-float icon1">💼</div>
  <div className="icon-float icon2">📄</div>
  <div className="icon-float icon3">🌍</div>
  <div className="icon-float icon4">🤝</div>
  <div className="icon-float icon5">🛡️</div>
  <div className="icon-float icon6">⚡</div>
  <div className="icon-float icon7">💼</div>
  <div className="icon-float icon8">📄</div>
  <div className="icon-float icon9">🌍</div>
  <div className="icon-float icon10">🤝</div>
  <div className="icon-float icon11">🛡️</div>
  <div className="icon-float icon12">⚡</div>
</div>


      <div className="grid-background"></div>

      <section className="why-header">
        <h1>Why Choose <span>BizWize</span>?</h1>
        <p className="subtitle">Here's what makes us different, one message at a time...</p>
      </section>

      <section className="chat-section">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${idx % 2 === 0 ? 'left' : 'right'}`}
            style={{ animationDelay: `${idx * 0.8}s` }}
          >
            <div className="chat-icon">{item.icon}</div>
            <div className="chat-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="chat-cta">
        <h2>Ready to Start?</h2>
        <p>Let’s turn your business idea into reality in just days.</p>
        <button className="chat-button cta-button">Get Free Consultation</button>
      </section>
    </div>
  );
}
