import React from 'react';
import './contact.css';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';


export default function Contact() {
  return (
    <div className="contact-page premium-contact">
      <SEO 
        title="Contact BizWize | Expert Business Setup in UAE"
        description="Get in touch with BizWize UAE for seamless business setup and success. Visit our premium office in Deira, Dubai or call +971585893680."
        url="https://www.bizwizeuae.com/contact"
      />
      
      {/* Animated Dark Hero Section */}
      <section className="contact-hero-premium">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-content">
          <div className="badge">Get In Touch</div>
          <h1>Let’s build your <br/><span className="text-glow">Business Empire</span></h1>
          <p>
            Whether you need a trade license, visa assistance, or full corporate structuring, 
            our specialized consultants are ready to accelerate your growth in the UAE.
          </p>
        </div>
        
        {/* Floating Orbs for Micro-animations */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </section>

      {/* Main Content Split Layout */}
      <section className="contact-main-wrapper">
        
        {/* Left Column: Info Cards in Glassmorphism */}
        <div className="contact-info-glass">
          <h2>Contact Information</h2>
          <p className="info-subtext">Reach out to us directly or visit our HQ in Dubai.</p>
          
          <div className="glass-card">
            <div className="icon-box"><MapPin className="icon" /></div>
            <div className="card-text">
              <h3>Headquarters</h3>
              <p>Abuhail Centre, Habtoor Building<br/>Office GR14, Abu Hail St<br/>Deira, Dubai, UAE</p>
            </div>
          </div>

          <div className="glass-card">
            <div className="icon-box"><Phone className="icon" /></div>
            <div className="card-text">
              <h3>Direct Lines</h3>
              <p>+971 58 589 3680<br/>+971 58 566 3680</p>
            </div>
          </div>

          <div className="glass-card">
            <div className="icon-box"><Mail className="icon" /></div>
            <div className="card-text">
              <h3>Email</h3>
              <p>info@bizwizeuae.com</p>
            </div>
          </div>

          <div className="glass-card">
            <div className="icon-box"><Clock className="icon" /></div>
            <div className="card-text">
              <h3>Working Hours</h3>
              <p>Mon – Sat: 9:00 AM – 9:00 PM<br/><span className="closed-text">Sunday: Closed</span></p>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form */}
        <div className="contact-form-premium">
          <div className="form-header">
            <h2>Send a Message</h2>
            <p>Our advisors respond within 2 hours.</p>
          </div>
          
          <form
            className="premium-form"
            action="https://formsubmit.co/info@bizwizeuae.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.bizwizeuae.com/thankyou" />

            <div className="form-group-split">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" name="First Name" placeholder="John" required />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" name="Last Name" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group-split">
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="Email" placeholder="john@company.com" required />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" name="Phone" placeholder="+971 5x xxx xxxx" required />
              </div>
            </div>

            <div className="input-group full-width">
              <label>Service of Interest</label>
              <select name="Service" required>
                <option value="" disabled selected>Select a service...</option>
                <option value="Business Setup">Business Setup & Licensing</option>
                <option value="HR Solutions">HR Solutions & Outsourcing</option>
                <option value="Accounting">Accounting & Bookkeeping</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other Query</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label>Message</label>
              <textarea name="Message" rows="4" placeholder="Tell us about your business goals..." required></textarea>
            </div>

            <button type="submit" className="premium-submit-btn">
              Send Message <ArrowRight size={20} className="btn-icon" />
            </button>
          </form>
        </div>

      </section>

      {/* Full Width Map Section */}
      <section className="contact-map-section">
        <iframe 
          title="BizWize UAE Headquarters"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8286958473216!2d55.3283296!3d25.2763785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc110f00efb%3A0xc310f8ad12821213!2sAbu%20Hail%20Centre!5e0!3m2!1sen!2sae!4v1700000000000" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <WhatsAppButton />
    </div>
  );
}
