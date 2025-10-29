import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: "How long does it take to set up a business in the UAE?",
    answer: "Depending on the type (Free Zone, Mainland, Offshore), setup can take anywhere from 48 hours to a few weeks. We handle all paperwork to speed up the process."
  },
  {
    question: "Do I need a local sponsor for a Mainland company?",
    answer: "No, we offer solutions where you retain 100% ownership, with legal structures in place to comply with UAE regulations."
  },
  {
    question: "Can I operate in multiple Emirates with a Free Zone license?",
    answer: "Free Zone licenses are typically restricted to the zone or for international operations, but we can guide on Mainland expansion if needed."
  },
  {
    question: "Do you assist with visas and employee sponsorship?",
    answer: "Yes, our services cover visa processing, labor card issuance, and complete HR compliance support for your employees."
  },
  {
    question: "What is the cost of company formation?",
    answer: "Costs vary by jurisdiction and business activity. We provide transparent pricing upfront with no hidden fees."
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <header className="faqs-hero">
        <h1>FAQs</h1>
        <p>Everything you need to know before starting your business in the UAE.</p>
      </header>

      <section className="faqs-section">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className={`faq-card ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => toggleFAQ(idx)}
          >
            <div className="faq-question">
              <h5>{faq.question}</h5>
              <span className="faq-toggle">{activeIndex === idx ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
