import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Booking from './Booking';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    console.log(booking);

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);
    return (
        <div>
            <div className="container" style={{ marginTop: 100 }}>
                <h3 className="text-center fw-bold">My Booking</h3>
                <div className="row">
                    {
                        booking.filter((mybooking) => mybooking.email == user.email).map(item => <div className="col-md-4">
                            <Booking
                                item={item}
                            ></Booking>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBooking;