import React from 'react';
import { Star, PlayCircle } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Ahmed Al Mansoori",
    company: "TechNova Solutions",
    text: "BizWize made our mainland setup incredibly fast. We had our trade license and visas within a week. Highly recommend their professional team.",
    rating: 5,
    type: "text"
  },
  {
    name: "Sarah Jenkins",
    company: "The Cloud Kitchen",
    text: "We rented a kitchen space in DIP through BizWize and they handled all the food license approvals. Saved us months of headache.",
    rating: 5,
    type: "video"
  },
  {
    name: "Omar Tariq",
    company: "Global Trade LLC",
    text: "From corporate bank account opening to VAT registration, their end-to-end service is unmatched in Dubai.",
    rating: 5,
    type: "text"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="test-container">
        <div className="test-header">
          <h2>Client <span className="highlight">Success Stories</span></h2>
          <p>Don't just take our word for it. See what our clients say about their business setup journey with BizWize.</p>
        </div>

        <div className="test-grid">
          {testimonialsData.map((test, index) => (
            <div key={index} className="test-card">
              <div className="test-header-row">
                <div className="avatar-placeholder">
                  {test.name.charAt(0)}
                </div>
                <div className="test-meta">
                  <h4>{test.name}</h4>
                  <span className="test-company">{test.company}</span>
                </div>
              </div>
              
              <div className="test-stars">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {test.type === "video" ? (
                <div className="video-placeholder">
                  <PlayCircle size={48} className="play-icon" />
                  <p>Watch Video Review</p>
                </div>
              ) : (
                <p className="test-text">"{test.text}"</p>
              )}
              
              <a href="https://www.google.com/search?q=bizwize+business+solutions&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQIxgnMgYIBBBFGD0yBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg1NzIyajBqN6gCCLACAfEFMWZfMhkYVC8&sourceid=chrome&ie=UTF-8#lrd=0x3e5f6befe22b7367:0x39283f7c2563d6e0,1" target="_blank" rel="noopener noreferrer" className="google-proof" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" />
                <span style={{ color: '#94a3b8' }}>Posted on Google</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
