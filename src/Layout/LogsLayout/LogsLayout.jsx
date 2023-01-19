import React from "react";
import Header from "../../Pages/Home/Header/Header";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import LogsNavbar from "../../Pages/Shared/Footer/LogsNavbar/LogsNavbar";

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
