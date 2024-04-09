import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <div className="container-fluid bg-light text-center py-5">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <h1 className="display-4 fw-bold">BOOK FIVE SESSION, THE SIXTH IS ON US</h1>
                    <button className="btn btn-dark btn-lg">REGISTER</button>
                    <p>TILL 30.04.2023</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
