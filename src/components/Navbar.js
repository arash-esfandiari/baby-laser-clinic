import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Assuming your logo is located at src/assets/logo.png
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container-fluid">
                {/* Left side - Book Appointment Button only visible on sm screens and up */}
                <div className="d-none d-sm-flex col-lg-4 justify-content-start mb-3 mt-2">
                    <Link to="/appointment" className="btn btn-outline-dark text-nowrap">Book Appointment</Link>
                </div>

                {/* Centered Title with Logo */}
                <div className="col-6 col-lg-4 d-flex justify-content-center align-items-center">
                    {/* Logo Image */}
                    <img src={logo} alt="Baby's Laser Clinic Logo" style={{ marginRight: '10px', height: '40px' }} />
                    <Link className="navbar-brand fw-bold fs-3" to="/">Baby's Laser Clinic</Link>
                </div>

                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        {/* Book Appointment Button inside the collapsible menu only visible on xs screens */}
                        <Link to="/appointment" className="nav-link d-lg-none">Book Appointment</Link>
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
