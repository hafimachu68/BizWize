import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
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
import ThankYou from './Pages/ThankYou';
import FAQs from './Pages/FAQs';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Wiki from './components/Wiki';
import LocationPage from './Pages/LocationPage';
import BiziGPT from './Pages/BiziGPT';

/* Authority Pages */
import MainlandSetup from './Pages/MainlandSetup';
import FreezoneSetup from './Pages/FreezoneSetup';
import FoodLicense from './Pages/FoodLicense';
import CloudKitchen from './Pages/CloudKitchen';
import AmazonSeller from './Pages/AmazonSeller';

function App() {
  return (
    <HelmetProvider>
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

          {/* Authority Pages */}
          <Route path="/mainland-business-setup-dubai" element={<MainlandSetup />} />
          <Route path="/freezone-company-setup-uae" element={<FreezoneSetup />} />
          <Route path="/food-license-dubai" element={<FoodLicense />} />
          <Route path="/cloud-kitchen-setup-dubai" element={<CloudKitchen />} />
          <Route path="/amazon-seller-account-uae" element={<AmazonSeller />} />

            {/* Location Pages */}
          <Route path="/location/dubai" element={<LocationPage locationId="dubai" />} />
          <Route path="/location/abu-dhabi" element={<LocationPage locationId="abu-dhabi" />} />
          <Route path="/location/sharjah" element={<LocationPage locationId="sharjah" />} />

             <Route path="/about" element={<AboutUs/>} />
             <Route path="/contact" element={<Contact/>} />
                        <Route path="/faq" element={<FAQs/>} />
                        <Route path="/blog" element={<Blog/>} />
                        <Route path="/blog/:slug" element={<BlogDetail/>} />
                        <Route path="/wiki" element={<Wiki/>} />

                     <Route path="/thankyou" element={<ThankYou/>} />
                     <Route path="/bizigpt" element={<BiziGPT/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
