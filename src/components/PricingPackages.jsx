import React from 'react';
import './PricingPackages.css';
import { Check } from 'lucide-react';

const packages = [
  {
    id: 1,
    tag: 'Most Popular',
    title: 'UAE Free Zone: Lowest Price Offer',
    subtitle: 'Zero Visa Package',
    features: [
      'Up To 5 Business Activities',
      'Trade License & Approvals',
      'Free Corporate Tax Registration',
      'Bank Account Opening'
    ],
    oldPriceLabel: 'Just',
    oldPrice: 'AED 11,000*',
    newPrice: 'AED 8,999*',
    terms: '*T & C apply',
  },
  {
    id: 2,
    title: 'All-Inclusive UAE Free Zone',
    subtitle: 'One Visa Package',
    features: [
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Free Flexi Desk',
      'Free VAT & C.T Registration'
    ],
    savingsLabel: 'Enjoy Savings Worth',
    savingsAmount: 'AED 4,000*',
    newPrice: 'AED 15,000*',
    terms: '*T & C apply',
  },
  {
    id: 3,
    tag: 'Bestseller',
    title: 'Dubai Free Zone',
    subtitle: 'Zero Visa Package',
    features: [
      'Business License + Approvals',
      'Free Digital Bank Account',
      'Free Flexi Desk',
      'Free VAT & C.T Registration'
    ],
    savingsLabel: 'Enjoy Savings Worth',
    savingsAmount: 'AED 4,000*',
    newPrice: 'AED 14,900*',
    terms: '*T & C apply',
  },
  {
    id: 4,
    title: 'Cayman Island Offshore',
    subtitle: '0% Tax & 100% Ownership',
    features: [
      'Certification of Incorporation',
      'Registered Office Address (1 year)',
      'Registered agent service (1 year)',
      'KYC & Compliance Assistance'
    ],
    savingsLabel: 'Enjoy Savings Worth',
    savingsAmount: 'AED 4,000*',
    newPrice: 'AED 16,500*',
    terms: '*T & C apply',
  }
];

export default function PricingPackages({ onGetStarted }) {
  return (
    <section className="pricing-packages-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Company Formation In <span className="text-glow">The UAE</span></h2>
          <h3 className="text-glow">BizWize's Exclusive Packages</h3>
          <p>Avail our limited-time Business Setup offers</p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="pricing-card">
              {pkg.tag && <div className="pricing-tag">{pkg.tag}</div>}
              <div className="pricing-card-header">
                <h4>{pkg.title}</h4>
                <p className="pricing-subtitle">{pkg.subtitle}</p>
              </div>

              <ul className="pricing-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-price-section">
                {pkg.oldPrice && (
                  <div className="old-price-wrapper">
                    <span className="old-price-label">{pkg.oldPriceLabel} </span>
                    <span className="old-price strike-through">{pkg.oldPrice}</span>
                  </div>
                )}
                {pkg.savingsLabel && (
                  <div className="savings-wrapper">
                    <span className="savings-label">{pkg.savingsLabel}</span>
                    <span className="savings-amount">{pkg.savingsAmount}</span>
                  </div>
                )}
                <div className="new-price">{pkg.newPrice}</div>
                <div className="pricing-terms">{pkg.terms}</div>
              </div>

              <button className="pricing-btn" onClick={onGetStarted}>
                Get Started Today!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
