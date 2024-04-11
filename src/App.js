import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/HomePage';
import Services from './pages/ServicesPage';
import Appointment from './pages/AppointmentPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* If you have a 404 page, you can use "*" to match any other path */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;