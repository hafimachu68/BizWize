import React from 'react';
import './ContactPrompt.css';

export default function ContactPrompt({ onInquiryClick }) {
  return (
    <section className="contact-prompt-container">
      {/* Decorative floating background */}
      <div className="background-shapes">
        <span className="circle c1"></span>
        <span className="circle c2"></span>
        <span className="circle c3"></span>
        <span className="circle c4"></span>
        <span className="circle pulse"></span>
      </div>

      <div className="contact-content">
        <h2 className="contact-heading">Let's Build Your Business Dream</h2>
        <p className="contact-subheading">
          From setting up your business in the UAE to managing compliance and growth — we're your partner at every step.
        </p>

        <ul className="contact-benefits">
          <li><span>✅</span> Expert UAE business advisors</li>
          <li><span>✅</span> Fast company registration</li>
          <li><span>✅</span> Hassle-free documentation</li>
          <li><span>✅</span> 24/7 client support</li>
        </ul>

        <div className="contact-actions">
          <a
            href="https://wa.me/971564149648"  // Use your WhatsApp number here
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Start a Chat
          </a>
        <button className="contact-button secondary" onClick={onInquiryClick}>
            Send Your Inquiry</button>
        </div>

      </div>
    </section>
  );
}
