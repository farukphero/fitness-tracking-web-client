import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboarlayout.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Navbar from "../../Pages/Shared/NavBar/NavBar";
import Footer from "../../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {
  const { userInfo } = useContext(AuthContext);
  return (
   <div>
     <Navbar></Navbar>
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    
      <div className="drawer-content relative flex flex-col items-center justify-center">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer"
          className="flex md:hidden btn-explore drawer-button absolute top-1 left-6"
        >
          <img
            className="h-12 w-12 rounded-full"
            src={userInfo?.picture}
            alt=""
          />
        </label>
      </div>

      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-gradient-to-r from-gray-700 to-green-800 ">
          <>
            <li className="border-2  border-green-600 btn-explore rounded-md mb-2 ">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Profile/userInfo"
              >
                UserInfo
                <FaRegUser></FaRegUser>
              </Link>
            </li>
            <li className="border-2  border-green-600 btn-explore rounded-md mb-2">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Dashboard/event"
              >
                Events
                <BsCalendarEvent></BsCalendarEvent>
              </Link>
            </li>

            <li className="border-2  border-green-600 btn-explore rounded-md  mb-2">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Profile/setting"
              >
                Setting
                <AiOutlineSetting></AiOutlineSetting>
              </Link>
            </li>
            <li className="border-2  border-green-600 btn-explore rounded-md mb-2">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Dashboard/report"
              >
                Report
                <TbReportSearch></TbReportSearch>
              </Link>
            </li>
            <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Dashboard/event"
              >
                Events
                <BsCalendarEvent></BsCalendarEvent>
              </Link>
            </li>
            <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
              <Link
                className="text-center ml-16 text-about font-semibold"
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
    <Footer></Footer>
   </div>
  );
};

export default DashboardLayout;
