import React from 'react';
import './contact.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import bannerImg from '../images/contact-banner.png'; // Add your image here

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let’s <span>Connect & Grow</span></h1>
          <p>
            BizWize — Your trusted partner for seamless business setup and success in the UAE. Let’s turn your ideas into impact!
          </p>
        </div>
        <img src={bannerImg} alt="BizWize Office" className="hero-image" />
      </section>

      {/* Contact Details */}
      <section className="contact-info">
        <div className="info-card">
          <div className="icon-wrapper"><MapPin className="icon" /></div>
          <h3>Our Office</h3>
          <p>BizWize UAE<br />Office 12, Deira, Dubai, United Arab Emirates</p>
        </div>

        <div className="info-card">
          <div className="icon-wrapper"><Phone className="icon" /></div>
          <h3>Call Us</h3>
          <p>+971 56 414 9648<br />+971 4 555 1234</p>
        </div>

        <div className="info-card">
          <div className="icon-wrapper"><Mail className="icon" /></div>
          <h3>Email</h3>
          <p>info@bizwize.ae<br />support@bizwize.ae</p>
        </div>

        <div className="info-card">
          <div className="icon-wrapper"><Clock className="icon" /></div>
          <h3>Working Hours</h3>
          <p>Mon – Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2 className="underline-title center">Get in Touch</h2>
        <p className="form-intro">
          Let’s start the conversation. Our BizWize experts are ready to assist your next big move.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Company Name" />
          </div>
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <WhatsAppButton />
    </div>
  );
}
