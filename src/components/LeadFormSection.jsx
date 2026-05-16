import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import './LeadFormSection.css';

export default function LeadFormSection() {
  return (
    <section className="lead-form-section" id="contact-section">
      <div className="lead-container">
        <div className="lead-header">
          <h2>Get in <span className="highlight">Touch</span></h2>
          <p>Ready to start your business in Dubai? Our corporate advisors are here to help you every step of the way.</p>
        </div>

        <div className="lead-content-wrapper">
          {/* Left Side: Contact Info & Map */}
          <div className="lead-info">
            <div className="info-card">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Our Office</h4>
                  <p>Abuhail Centre, Habtoor Building<br/>Office GR14, Abu Hail St<br/>Deira, Dubai, UAE</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+971 58 589 3680</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>info@bizwizeuae.com</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="BizWize Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.261271171804!2d55.326227!3d25.26177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cd02444a7f3%3A0xb363cd73318b76fb!2sAbu%20Hail%20Centre!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Lead Form */}
          <div className="lead-form-wrapper">
            <div className="form-card-premium">
              <h3>Request a Callback</h3>
              <p>Fill out the form below and we will contact you shortly.</p>
              
              <form action="https://formsubmit.co/info@bizwizeuae.com" method="POST" className="premium-form">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.bizwizeuae.com/thankyou" />

                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="Name" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="Phone" placeholder="+971 50 000 0000" required />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="Email" placeholder="you@company.com" required />
                </div>

                <div className="form-group">
                  <label>Service Required</label>
                  <select name="Service" required>
                    <option value="">Select a service...</option>
                    <option value="Mainland Setup">Mainland Setup</option>
                    <option value="Freezone Setup">Freezone Setup</option>
                    <option value="Food License">Food License</option>
                    <option value="Kitchen Rental">Kitchen Rental</option>
                    <option value="PRO Services">PRO Services</option>
                    <option value="VAT Registration">VAT Registration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn-premium btn-premium-primary full-width">
                  Submit Request
                </button>
                
                <div className="form-divider"><span>OR</span></div>
                
                <a href="https://wa.me/971585893680" target="_blank" rel="noopener noreferrer" className="btn-premium wa-btn full-width">
                  <MessageSquare size={18} style={{ marginRight: '8px' }} /> Chat on WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
