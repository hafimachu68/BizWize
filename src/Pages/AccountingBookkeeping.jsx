import React from 'react';
import './services.css';
import { Calculator } from 'lucide-react';

export default function AccountingBookkeeping() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Accounting & Bookkeeping</h1>
        <p>Accurate, compliant financial management and bookkeeping for smooth business operations.</p>
        <i><Calculator size={48} /></i>
      </div>
      <div className="service-content">
        <h2>Accounting Services:</h2>
        <ul>
          <li>Bookkeeping & Financial Recording</li>
          <li>Payroll & Tax Compliance</li>
          <li>Financial Reporting</li>
          <li>Budgeting & Forecasting</li>
          <li>Auditing & Advisory</li>
        </ul>
      </div>
    </div>
  );
}
