import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboarlayout.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Home/Header/Header";

const DashboardLayout = () => {
  return (
  <div>
    <Header></Header>
      <div className="">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ml-16 bg-gradient-to-r from-primary to-accent">
          <label htmlFor="dashboard-drawer" className=" "></label>
          <ul className="menu p-4 w-80 text-white ">
            <>
              <li className="border-2  border-black btn-explore rounded-md mb-2 ">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/userInfo"
                >
                  UserInfo
                  <FaRegUser></FaRegUser>
                </Link>
              </li>
              <li className="border-2  border-black btn-explore rounded-md  mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/dashboard/setting"
                >
                  Setting
                  <AiOutlineSetting></AiOutlineSetting>
                </Link>
              </li>
              <li className="border-2  border-black btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/report"
                >
                  Report
                  <TbReportSearch></TbReportSearch>
                </Link>
              </li>
              <li className="border-2  border-black btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/event"
                >
                  Events
                  <BsCalendarEvent></BsCalendarEvent>
                </Link>
              </li>
              <li className="border-2  border-black btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/support"
                >
                  Supports
                  <CgSupport></CgSupport>
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default DashboardLayout;
