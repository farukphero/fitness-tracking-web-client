import React from 'react';
import About from '../AboutUs/About';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Services/>
            <About/>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;