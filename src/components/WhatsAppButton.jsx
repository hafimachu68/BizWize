import React from 'react';
import './WhatsAppButton.css';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "971585893680"; // Based on the phone in Home.jsx schema
  const phoneNumber = "+971585893680";

  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="sticky-actions-container">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={34} color="#ffffff" className="whatsapp-icon" />
        </a>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-content">
          <a href={`tel:${phoneNumber}`} className="mobile-btn btn-call">
            <PhoneCall size={20} /> Call Now
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} className="mobile-btn btn-wa" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
