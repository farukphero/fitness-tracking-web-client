import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Header from '../../Pages/Home/Header/Header';
  
 import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/NavBar/NavBar';
 

const Main = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user && user.emailVerified ? <Navbar></Navbar> : <Header></Header>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;