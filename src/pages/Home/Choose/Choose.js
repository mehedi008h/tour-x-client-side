import React from 'react';
import './Choose.css';

const Choose = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="text-center choose-info">
                    <h5>Why TourX</h5>
                    <h2 className="text-success">Why You Are Travel With Tourx</h2>
                </div>
                <div className="row g-3 mt-3">
                    <div className="col-md-3">
                        <div className="choose-item mx-auto rounded p-3 text-center">
                            <div className="mx-auto">
                                <img className="mb-2" src="https://i.ibb.co/kJ0By5h/photographer.png" alt="" />
                            </div>
                            <h4>2000+ Our worldwide guide</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="choose-item mx-auto rounded p-3 text-center">
                            <div className="mx-auto">
                                <img className="mb-2" src="https://i.ibb.co/zVDQ1cy/experience.png" alt="" />
                            </div>
                            <h4>100% trusted travel agency</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="choose-item mx-auto rounded p-3 text-center">
                            <div className="mx-auto">
                                <img className="mb-2" src="https://i.ibb.co/KmcBxfX/handshake.png" alt="" />
                            </div>
                            <h4>10+ year of travel experience</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="choose-item mx-auto rounded p-3 text-center">
                            <div className="mx-auto">
                                <img className="mb-2" src="https://i.ibb.co/rvHsjJW/tour-guide.png" alt="" />
                            </div>
                            <h4>90% of our traveller happy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;