import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './HomeFAQs.css';

const faqs = [
  {
    question: "How much does business setup cost in Dubai?",
    answer: "The cost varies depending on your chosen jurisdiction (Mainland, Freezone, or Offshore), business activity, and visa requirements. Freezone packages typically start from AED 5,750, while Mainland setup costs depend on the DED fees, office space, and local sponsor requirements."
  },
  {
    question: "How long does trade license approval take?",
    answer: "With our fast-track services, many Freezone licenses can be issued within 48 hours. Mainland licenses generally take 3-5 working days, depending on external approvals required for specific activities (like food or healthcare)."
  },
  {
    question: "Can foreigners own 100% of a company in UAE?",
    answer: "Yes! Recent legislative changes allow 100% foreign ownership in most commercial and industrial activities on the UAE Mainland, in addition to the established 100% ownership available in all UAE Freezones."
  },
  {
    question: "What is required for a food license approval?",
    answer: "A food license requires specific approvals from the Dubai Municipality (Food Safety Department). You need a valid trade license, a finalized location that meets health and safety layout requirements, and certified food hygiene training for staff."
  }
];

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="home-faqs-section">
      <div className="home-faqs-container">
        <div className="home-faqs-header">
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          <p>Get quick answers to the most common questions about starting a business in the UAE.</p>
        </div>

        <div className="faqs-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className="faq-icon" size={24} />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
