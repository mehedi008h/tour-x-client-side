import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container d-flex justify-content-center mt-5">
                <div className="banner-text text-center" >
                    <h1 className="fw-bold" style={{ color: 'olive', fontSize: 60 }}>Amazing tour in Cox's BAZAR</h1>
                    <h3 className="text-success fw-bold">7 Days, 8 Night Tour</h3>
                    <button className="btn btn-success mt-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;