import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/NavBar/NavBar';
import Footer from '../../Pages/Shared/Footer/Footer';

const CallingVideo = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default CallingVideo;