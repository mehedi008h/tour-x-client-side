import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <div className="review d-flex">
            <div className="container mt-5 mb-5">
                <div className="review-text text-center fw-bold w-50 mx-auto">
                    <h5 className="text-warning fw-bold">Our Traveller Say</h5>
                    <h1 className="fw-bold">What Our Traveller Say About Us</h1>
                </div>
                <div className="mt-4">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <div className="item rounded-5 shadow p-3 text-center">
                                <img src="" alt="" />
                                <h4 className="mt-3 text-success">Jahid Hasan</h4>
                                <h5>Traveller</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aliquam suscipit neque rerum cupiditate quos dignissimos, </p>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;