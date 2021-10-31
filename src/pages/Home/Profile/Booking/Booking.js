import { faAddressBook, faTimes, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';
import './Booking.css';

const Booking = (props) => {
    const { _id, name, email, address, date } = props.item;
    const handleDelete = id => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "You want to delete this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://howling-catacombs-44172.herokuapp.com/booking/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount) {
                                swal("Poof! Your file has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }
    return (
        <div>
            <div className="p-3 booking mt-3 mb-5">
                <div className="d-flex align-items-center justify-content-between">
                    <h4>{name}</h4>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button>
                </div>
                <hr />
                <p><FontAwesomeIcon icon={faVoicemail} className="me-3"></FontAwesomeIcon>{email}</p>
                <p><FontAwesomeIcon icon={faAddressBook} className="me-3"></FontAwesomeIcon>{address}</p>
                <p><FontAwesomeIcon icon={faTimes} className="me-3"></FontAwesomeIcon>{date}</p>
            </div>
        </div>
    );
};

export default Booking;