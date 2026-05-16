import React from 'react';
import './IndustriesWeServe.css';
import { UtensilsCrossed, ChefHat, Coffee, ShoppingBag, Globe2, Laptop, Scissors, Wrench } from 'lucide-react';

const industriesData = [
  { icon: <UtensilsCrossed size={32} />, name: 'Restaurants' },
  { icon: <ChefHat size={32} />, name: 'Cloud Kitchens' },
  { icon: <Coffee size={32} />, name: 'Cafes' },
  { icon: <ShoppingBag size={32} />, name: 'E-commerce' },
  { icon: <Globe2 size={32} />, name: 'General Trading' },
  { icon: <Laptop size={32} />, name: 'Freelancers' },
  { icon: <Scissors size={32} />, name: 'Beauty Salons' },
  { icon: <Wrench size={32} />, name: 'Technical Services' }
];

export default function IndustriesWeServe() {
  return (
    <section className="industries-section">
      <div className="industries-header">
        <span style={{ display: 'inline-block', marginBottom: '1rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '8px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          Company Formation In The UAE
        </span>
        <h2>Industries We <span className="highlight">Serve</span></h2>
        <p>Specialized business setup and licensing solutions across Dubai's most thriving sectors.</p>
      </div>
      
      <div className="industries-grid">
        {industriesData.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-icon">
              {industry.icon}
            </div>
            <h3>{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
