import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Courses from './Courses';
import WhyChooseUs from './WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Courses></Courses>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;