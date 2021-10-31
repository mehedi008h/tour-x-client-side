import React, { useEffect, useState } from 'react';
import Item from './Item';

const Service = () => {
    const [service, setservice] = useState([]);
    console.log(service);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setservice(data));
    }, []);
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h2 className="text-center fw-bold">Our Service</h2>
                <div className="row g-5 mt-1">
                    {
                        service.map(item => <div className="col-md-4">
                            <Item
                                key={item._id}
                                items={item}
                            ></Item>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;