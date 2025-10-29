import React, { useState } from 'react';
import './Wiki.css';

// Sample Wiki topics
const wikiData = [
  {
    title: "Free Zone Company Setup",
    content: "Learn all steps, documents, and regulations required to establish a Free Zone company in Dubai."
  },
  {
    title: "Mainland Company Formation",
    content: "Understand the legal requirements, licensing process, and advantages of setting up a Mainland company."
  },
  {
    title: "Offshore Company Formation",
    content: "Discover offshore structures, benefits, and how to register your company efficiently."
  },
  {
    title: "Visa & Labour Compliance",
    content: "Comprehensive guide on visas, employee sponsorship, and labour law compliance in the UAE."
  },
];

export default function Wiki() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wiki-page">
      <header className="wiki-hero">
        <h1>BizWize Wiki</h1>
        <p>Your knowledge base for UAE business setup, compliance, and regulations.</p>
      </header>

      <section className="wiki-accordion">
        {wikiData.map((item, idx) => (
          <div className="wiki-item" key={idx}>
            <button className={`wiki-title ${activeIndex === idx ? 'active' : ''}`} onClick={() => toggleAccordion(idx)}>
              {item.title}
              <span className="arrow">{activeIndex === idx ? '▲' : '▼'}</span>
            </button>
            {activeIndex === idx && <div className="wiki-content">{item.content}</div>}
          </div>
        ))}
      </section>
    </div>
  );
}
