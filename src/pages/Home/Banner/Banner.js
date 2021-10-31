import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container d-flex justify-content-center mt-5">
                <div className="banner-text text-center" >
                    <h1 className="text-white fw-bold">Amazing tour in Cox's BAZAR</h1>
                    <h5 className="text-white fw-bold">7 Days, 8 Night Tour</h5>
                    <button className="btn btn-success mt-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;