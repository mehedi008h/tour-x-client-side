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
                                <img src="https://i.ibb.co/f2vmtQg/pexels-andrea-piacquadio-3778527.jpg" alt="" />
                                <h4 className="mt-3 text-success">Jahid Hasan</h4>
                                <h5>Traveller</h5>
                                <p>“I am happy to be one of the early buyers, the founder's are just amazing 👏.”</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item rounded-5 shadow p-3 text-center">
                                <img src="https://i.ibb.co/SV85FH6/pexels-chloe-1043473.jpg" alt="" />
                                <h4 className="mt-3 text-success">Tashan Khan</h4>
                                <h5>Traveller</h5>
                                <p>“I am happy to be one of the early buyers, the founder's are just amazing 👏.”</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item rounded-5 shadow p-3 text-center">
                                <img src="https://i.ibb.co/jZVxXzM/pexels-linkedin-sales-navigator-2182970.jpg" alt="" />
                                <h4 className="mt-3 text-success">Imran Khan</h4>
                                <h5>Traveller</h5>
                                <p>“I am happy to be one of the early buyers, the founder's are just amazing 👏.”</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item rounded-5 shadow p-3 text-center">
                                <img src="https://i.ibb.co/SV85FH6/pexels-chloe-1043473.jpg" alt="" />
                                <h4 className="mt-3 text-success">Jahid Hasan</h4>
                                <h5>Traveller</h5>
                                <p>“I am happy to be one of the early buyers, the founder's are just amazing 👏.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;