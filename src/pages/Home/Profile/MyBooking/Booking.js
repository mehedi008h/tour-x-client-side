import { faAddressBook, faCalendar, faTimes, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';

const Booking = (props) => {
    const { _id, name, address, email, date } = props.item;
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
                    const url = `http://localhost:5000/booking/${id}`;
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
                <p><FontAwesomeIcon icon={faCalendar} className="me-3"></FontAwesomeIcon>{date}</p>
            </div>
        </div>
    );
};

export default Booking;