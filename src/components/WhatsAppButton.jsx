import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../images/whatsapp.png'; // ✅ correct path

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971564149648"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}
