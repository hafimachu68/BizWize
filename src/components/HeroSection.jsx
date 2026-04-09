import React, { forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import freezoneImg from '../images/banner44.png';
import offshoreImg from '../images/newbanner.png';
import biz1 from '../images/banner6.png';
import biz2 from '../images/banner7.png';
import biz3 from '../images/banner3.png';



import './HeroSection.css';

const HeroSection = forwardRef((props, ref) => {

  const handleCallClick = () => {
    window.location.href = 'tel:+971501234567';
  };

  const slides = [
    {
      image: offshoreImg,
      // title: 'Free Zone Company Setup',
      // subtext: 'DMCC, RAKEZ, SHAMS & more',
      // price: 'From AED 5,750',
      features: ['100% Ownership', 'Zero Tax', 'Flexible Visas']
    },
    {
      image: biz2,
      // title: 'Free Zone Company Setup',
      // subtext: 'DMCC, RAKEZ, SHAMS & more',
      // price: 'From AED 5,750',
      features: ['100% Ownership', 'Zero Tax', 'Flexible Visas']
    },
    
    {
      image: biz3,
      title: 'Mainland Business Setup',
      subtext: 'Operate across UAE',
      price: 'From AED 10,999',
      features: ['No Local Sponsor', 'Ejari Included', 'Fast Licensing']
    },
    {
      image: freezoneImg,
      title: 'Mainland Business Setup',
      subtext: 'Operate across UAE',
      price: 'From AED 10,999',
      features: ['No Local Sponsor', 'Ejari Included', 'Fast Licensing']
    },
    {
      image: biz1,
      title: 'Offshore Company Formation',
      subtext: 'Ajman Offshore, RAK ICC, JAFZA',
      price: 'From USD 2,100',
      features: ['Asset Protection', 'Confidentiality', 'Global Reach']
    }
  ];

  return (
  <section className="custom-hero-section">
  <Carousel fade controls indicators interval={7000} className="custom-carousel">
    {slides.map((slide, idx) => (
      <Carousel.Item key={idx} className="custom-carousel-item">
        <img className="custom-hero-img" src={slide.image} alt={slide.title} />
      </Carousel.Item>
    ))}
  </Carousel>

  <div className="custom-call-now" onClick={handleCallClick}>
    📞 <span>We’ll call you just after 30 minutes</span>
  </div>
</section>

  );
});

export default HeroSection;
