import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Review from '../Review/Review';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Choose></Choose>
            <Review></Review>
        </div>
    );
};

export default Home;