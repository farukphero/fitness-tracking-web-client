import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import LogsNavbar from "../../Pages/Shared/LogsNavbar/LogsNavbar";
import Header from "../../Pages/Home/Header/Header";


const LogsLayout = () => {
  return (
    <div>
      <Header></Header>
      <LogsNavbar></LogsNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LogsLayout;
