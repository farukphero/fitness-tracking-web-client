import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../Pages/Shared/Footer/Footer";
import LogsNavbar from "../../../Pages/Shared/LogsNavbar/LogsNavbar";
import Navbar from "../../../Pages/Shared/NavBar/NavBar";


const LogsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LogsNavbar></LogsNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LogsLayout;