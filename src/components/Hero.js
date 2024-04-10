import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="container-fluid bg-light text-center py-5">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    {/* Website Title */}
                    <h2 className="display-6 fw-bold text-dark mb-4 pb-2 border-bottom border-3 border-primary">
                        Baby's Laser Clinic
                    </h2>

                    {/* Promotional Message */}
                    {/* <h1 className="display-4 fw-bold mb-3">BOOK FIVE SESSIONS, THE SIXTH IS ON US</h1> */}
                    <h1 className="display-4 fw-bold mb-3">Happy Birhday Baby🎉🥳🥳🎉🎉🎉🎉🎉🥳🥳🎉🎉🎂😘🎊 </h1>
                    <h1 className="display-4 fw-bold mb-3">I wish you the best and all the success in the world kiddo.  </h1>
                    <h1 className="display-4 fw-bold mb-3">Dooset daram ❤️</h1>
                    <Link to="/appointment" className="btn btn-dark btn-lg">BOOS NOW?</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
