import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://howling-catacombs-44172.herokuapp.com/service', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    // const remainingBlog = blog.filter(blog => blog._id !== id);
                    // setBlog(remainingBlog);
                    swal({
                        title: "Good job!",
                        text: "Your Service added Successfully!",
                        icon: "success",
                    });
                    reset();
                }
            })
    };
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="card add-service p-3 shadow rounded w-50 mx-auto">
                    <h3 className="text-center">Add Service</h3>
                    <form className="d-flex flex-column mt-3" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input type="text" {...register("title",)} placeholder="Enter title " className="mb-2 ps-3 input" />
                        <input type="text" {...register("location",)} placeholder="Enter location " className="mb-2 ps-3 input" />
                        <textarea className="mb-2 ps-3" {...register("description",)} id="" rows="5" placeholder="Enter description"></textarea>
                        <input type="url" {...register("img",)} placeholder="Enter image url " className="mb-2 ps-3 input" />

                        <input className="btn btn-info mt-2 fw-bold text-white" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;