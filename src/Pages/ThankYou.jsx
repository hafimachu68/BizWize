import React from 'react';
import './thankyou.css';
import { CheckCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ThankYou() {
  return (
    <div className="thankyou-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Thank You Content */}
      <div className="thankyou-content">
        <CheckCircle className="thankyou-icon" size={80} />
        <h1>Thank You!</h1>
        <p>
          Your message has been sent successfully. Our BizWize team will get back to you shortly.
        </p>
        <a href="/" className="back-home-btn">Back to Home</a>
      </div>

      <WhatsAppButton />
    </div>
  );
}
