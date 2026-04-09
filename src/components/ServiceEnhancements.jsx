import React from 'react';
import './ServiceEnhancements.css';

export default function ServiceEnhancements({ steps, caseStudy, faqs }) {
  return (
    <section className="service-enhancements">
      
      {/* 1. Step-by-Step Guide */}
      {steps && steps.length > 0 && (
        <div className="enhancement-section process-guide">
          <h2>How It Works</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Case Study / Success Story */}
      {caseStudy && (
        <div className="enhancement-section case-study">
          <h2>Success Story</h2>
          <div className="case-study-card">
            <h3>{caseStudy.title}</h3>
            <p className="case-study-client"><strong>Client:</strong> {caseStudy.clientLabel}</p>
            <p><strong>Challenge:</strong> {caseStudy.challenge}</p>
            <p><strong>Solution:</strong> {caseStudy.solution}</p>
            <p className="case-study-result"><strong>Result:</strong> {caseStudy.result}</p>
          </div>
        </div>
      )}

      {/* 3. FAQ Section */}
      {faqs && faqs.length > 0 && (
        <div className="enhancement-section service-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
