import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
          <Link to="/location/dubai" style={{ color: 'white', textDecoration: 'none' }}>Business Setup Dubai</Link>
          <Link to="/location/abu-dhabi" style={{ color: 'white', textDecoration: 'none' }}>Business Setup Abu Dhabi</Link>
          <Link to="/location/sharjah" style={{ color: 'white', textDecoration: 'none' }}>Business Setup Sharjah</Link>
        </div>
        <p>© {new Date().getFullYear()} <strong>BizWize</strong> — Empowering Business Setup in UAE</p>
      </div>
    </footer>
  );
}
