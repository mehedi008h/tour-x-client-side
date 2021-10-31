import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';

const PlaceService = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user);
    const [service, setService] = useState({});
    const { title, location } = service;
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        const url = `https://howling-catacombs-44172.herokuapp.com/service-details/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://howling-catacombs-44172.herokuapp.com/booking', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    // const remainingBlog = blog.filter(blog => blog._id !== id);
                    // setBlog(remainingBlog);
                    swal({
                        title: "Good job!",
                        text: "Your Booking Placed Successfully!",
                        icon: "success",
                    });
                    reset();
                }
            })
    };
    return (
        <div className="mt-5">

            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-offset-7 mx-auto mt-5 mb-5">
                        <div className="card mt-5 p-3">
                            <h3 className="text-center">Place Booking</h3>
                            <form className="d-flex flex-column mt-3" onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input type="text" value={user.displayName || ''} {...register("name",)} placeholder="Enter location " className="mb-2 ps-3 input" />
                                <input type="text" value={user.email || ''} {...register("email",)} placeholder="Enter location " className="mb-2 ps-3 input" />
                                <input type="text"  {...register("address",)} placeholder="Enter address " className="mb-2 ps-3 input" />
                                <input type="date"  {...register("date",)} placeholder="Enter location " className="mb-2 ps-3 input" />

                                <input className="btn btn-info mt-2 fw-bold text-white" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceService;