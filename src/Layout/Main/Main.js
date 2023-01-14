import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import Header from '../../Components/Header/Header';
=======
import Header from '../../Pages/Home/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
>>>>>>> main

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;