import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    const { _id, title, location, description, img } = props.items;
    return (
        <div>
            <div className="service">
                <div>
                    <img className="service-img" src={img} alt="" />
                </div>
                <div className="p-3">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className="location"><FontAwesomeIcon className="me-2" icon={faLocationArrow}></FontAwesomeIcon> {location}</button>
                        <Link to={`/service-details/${_id}`} className="btn btn-success">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;