import React from 'react';
import './locationPage.css';
import SEO from '../components/SEO';
import { MapPin, Phone, Star } from 'lucide-react';

const locationData = {
  dubai: {
    city: "Dubai",
    title: "Business Setup in Dubai",
    desc: "Start your business in Dubai with our expert Mainland and Free Zone company formation solutions tailored for innovators and visionaries.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115438.45239088674!2d55.158525!3d25.076288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000",
    client: "Ahmed T., E-commerce Founder",
    testimonial: "BizWize made our Dubai free zone setup completely stress-free. Highly recommended for any foreign investor!"
  },
  "abu-dhabi": {
    city: "Abu Dhabi",
    title: "Company Formation Abu Dhabi",
    desc: "Establish your corporate presence in the UAE's capital. We provide end-to-end business setup and licensing in Abu Dhabi.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232532.79155091494!2d54.432929!3d24.387920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc660d103ac23a31c!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000",
    client: "Sarah J., Industrial Corp",
    testimonial: "Their knowledge of Abu Dhabi Mainland laws is unmatched. They handled all our municipality approvals effortlessly."
  },
  sharjah: {
    city: "Sharjah",
    title: "Business Setup Sharjah",
    desc: "Leverage Sharjah's strategic location and cost-effective Free Zones for robust manufacturing and trading setups.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115367.62580790835!2d55.409395!3d25.337372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fef79b0fd%3A0xa1969a47395efbb2!2sSharjah!5e0!3m2!1sen!2sae!4v1700000000000",
    client: "Ravi P., Trading Co",
    testimonial: "Outstanding service. We registered our logistics company in SAIF Zone with zero roadblocks thanks to BizWize."
  }
};

export default function LocationPage({ locationId }) {
  
  const data = locationData[locationId] || locationData['dubai'];

  return (
    <div className="location-page">
      <SEO 
        title={`${data.title} | Top Consultancy in ${data.city}`}
        description={data.desc}
        url={`https://www.bizwizeuae.com/location/${locationId}`}
      />
      
      <section className="location-hero">
        <div className="lhero-overlay"></div>
        <div className="lhero-content">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
      </section>

      <section className="location-content">
        <div className="location-details">
          <h2>Your Growth Partner in {data.city}</h2>
          <p>
            Whether you are looking to tap into <strong>{data.city}'s</strong> booming real estate, trade, or tech markets, 
            BizWize is your dedicated local partner. We streamline your regulatory journey, 
            providing bespoke consultation for Mainland, Free Zone, and Offshore setups.
          </p>

          <div className="contact-box">
             <h3><MapPin className="inline-icon" /> Regional Office Contact</h3>
             <p><strong>HQ Address:</strong> Abuhail Centre, Habtoor Building, Office GR14 Abu Hail St, Deira, Dubai.</p>
             <p><strong>Regional Servicing:</strong> Full coverage throughout {data.city}.</p>
             <p><strong><Phone className="inline-icon" /> Support:</strong> +971585893680</p>
          </div>

          <div className="testimonial-box">
            <h3><Star className="inline-icon" fill="gold" stroke="gold" /> Client Testimonial</h3>
            <p className="testimonial-text">"{data.testimonial}"</p>
            <p className="client-name">— {data.client}</p>
          </div>

          <a href="/contact"><button className="cta-btn location-cta">Consult with a {data.city} Expert</button></a>
        </div>

        <div className="location-map">
          <h2>Find Us</h2>
          <iframe 
            title={`BizWize Coverage in ${data.city}`}
            src={data.mapEmbed}
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>
  );
}
