import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar1';
import Footer from './components/Footer';


import Home from './Pages/Home';
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';
import BusinessSetup from './Pages/BusinessSetup';
import HRSolutions from './Pages/HRSolutions';
import DigitalMarketing from './Pages/DigitalMarketing';
import ManagementConsultancy from './Pages/ManagementConsultancy';
import FacilityManagement from './Pages/FacilityManagement';
import AccountingBookkeeping from './Pages/AccountingBookkeeping';
// For now comment these if not created yet
// import FreeZone from './pages/FreeZone';
// import Mainland from './pages/Mainland';
// import Offshore from './pages/Offshore';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Service Pages */}
        <Route path="/business-setup" element={<BusinessSetup/>} />
        <Route path="/hr-solutions" element={<HRSolutions/>} />
        <Route path="/digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/management-consultancy" element={<ManagementConsultancy/>} />
        <Route path="/facility-management" element={<FacilityManagement/>} />
        <Route path="/accounting-bookkeeping" element={<AccountingBookkeeping/>} />

           <Route path="/about" element={<AboutUs/>} />
           <Route path="/contact" element={<Contact/>} />


          {/* Add more routes later */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
