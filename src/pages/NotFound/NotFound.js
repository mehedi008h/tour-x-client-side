import React from 'react';
import notFound from '../../image/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="">
            <div className="text-center">
                <img className="w-50" style={{ marginTop: 100 }} src={notFound} alt="" />
                <h3 className="mt-3 error">Page Not Found</h3>
                <button className="btn btn-success mt-2">Home</button>
            </div>
        </div>
    );
};

export default NotFound;