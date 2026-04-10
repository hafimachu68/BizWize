import React from 'react';
import './WhatsAppButton.css';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971585663680"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <MessageCircle size={34} color="#ffffff" className="whatsapp-icon" />
    </a>
  );
}
