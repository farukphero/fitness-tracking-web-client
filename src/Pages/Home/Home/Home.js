import React from 'react';
import About from '../AboutUs/About';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <ContactUs></ContactUs>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;