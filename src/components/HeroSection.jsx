import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import freezoneImg from '../images/cb1.jpg';
import mainlandImg from '../images/cbg2.jpg';
import offshoreImg from '../images/cbg3.jpg';
import './HeroSection.css';

const HeroSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [toast, setToast] = useState(false);
  const formRef = useRef(null); // ✅ This line fixes the error

 // ✅ Expose scrollToForm to parent via ref
  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }));
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mnqeyojv", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setToast(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setToast(false), 4000);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+971501234567';
  };

  const slides = [
    {
      image: freezoneImg,
      title: 'Free Zone Company Setup',
      subtext: 'DMCC, RAKEZ, SHAMS & more',
      price: 'From AED 5,750',
      features: ['100% Ownership', 'Zero Tax', 'Flexible Visas']
    },
    {
      image: mainlandImg,
      title: 'Mainland Business Setup',
      subtext: 'Operate across UAE',
      price: 'From AED 10,999',
      features: ['No Local Sponsor', 'Ejari Included', 'Fast Licensing']
    },
    {
      image: offshoreImg,
      title: 'Offshore Company Formation',
      subtext: 'Ajman Offshore, RAK ICC, JAFZA',
      price: 'From USD 2,100',
      features: ['Asset Protection', 'Confidentiality', 'Global Reach']
    }
  ];

  return (
    <section className="hero-section">
      <Carousel fade controls indicators interval={10000} className="carousel-container">
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block hero-image" src={slide.image} alt={slide.title} />
            <Carousel.Caption className="poster-caption">
              <h3>{slide.title}</h3>
              <p className="subtext">{slide.subtext}</p>
              <p className="price">{slide.price}</p>
              <ul className="features">
                {slide.features.map((f, i) => (<li key={i}>✅ {f}</li>))}
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="hero-form" ref={formRef}>
        <h2>Get a Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Enquiry</button>
        </form>
        {toast && <div className="toast">✅ Submitted! We'll reach out shortly.</div>}
      </div>

      <div className="call-now" onClick={handleCallClick}>
        📞 <span>We’ll call you just after 30 minutes</span>
      </div>
    </section>
  );
});

export default HeroSection;