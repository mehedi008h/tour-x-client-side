import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/service-details/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, [])
    return (
        <div className="mt-5">
            <div className="container">
                <div className="card w-75 mx-auto" style={{ marginTop: 100 }}>
                    <img src={serviceDetails.img} alt="" style={{ height: 400, objectFit: 'cover' }} />
                    <div className="p-3 service-info text-center mt-3">
                        <h3 className="fw-bold text-success">{serviceDetails.title}</h3>
                        <p className="mt-2">{serviceDetails.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;