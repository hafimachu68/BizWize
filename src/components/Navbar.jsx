import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/Logo12.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar nav ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-logo log ms-5">
        <Link to="/" className="logo-link" title="Home" aria-label="Home link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="BizWize Logo" className="logo-icon" />
          <span className="brand-name">Biz<span className="highlight">Wize</span></span>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

     <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
  <li className="ms-3"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
  <li><Link to="/freezone" onClick={() => setMenuOpen(false)}>Free Zone</Link></li>
  <li><Link to="/mainland" onClick={() => setMenuOpen(false)}>Mainland</Link></li>
  <li><Link to="/offshore" onClick={() => setMenuOpen(false)}>Offshore</Link></li>
  <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
  <li className="me-5"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
</ul>


      
    </nav>
  );
}
