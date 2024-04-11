import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Assuming your logo is located at src/assets/logo.png
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                {/* Logo and Title container */}
                <div className="d-flex align-items-center">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ maxHeight: '50px' }} />
                    </Link>

                    {/* Title */}
                    <Link to="/" className="navbar-brand fw-bold fs-3 d-none d-lg-block">
                        Baby's Laser Clinic
                    </Link>
                </div>

                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    {/* Book Appointment Button visible on sm screens and up */}
                    <Link to="/appointment" className="btn btn-outline-dark text-nowrap d-none d-md-block me-2">
                        Book an Appointment
                    </Link>

                    {/* Navbar Links */}
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        {/* Book Appointment Button inside the collapsible menu only visible on xs to md screens */}
                        <Link to="/appointment" className="nav-link d-block d-md-none">Book an Appointment</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
