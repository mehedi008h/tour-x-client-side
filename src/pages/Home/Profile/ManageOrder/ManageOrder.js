import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const ManageOrder = () => {
    const [booking, setBooking] = useState([]);
    console.log(booking);

    useEffect(() => {
        fetch('https://howling-catacombs-44172.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);
    return (
        <div>
            <div className="container" style={{ marginTop: 100 }}>
                <h3 className="text-center fw-bold">Manage All Booking</h3>
                <div className="row">
                    {
                        booking.map(item => <div className="col-md-4">
                            <Booking
                                key={item._id}
                                item={item}
                            ></Booking>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;