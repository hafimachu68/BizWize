import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
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
          {/* Add more routes later */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
