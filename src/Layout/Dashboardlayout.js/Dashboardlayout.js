import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboarlayout.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
 
const DashboardLayout = () => {
  return (
    <div>
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content relative flex flex-col items-center justify-center">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer"
            className="border-2 px-6 py-3 flex md:hidden border-green-600 btn-explore drawer-button absolute  top-6 lg:top-40  left-6 lg:left-10 "
          >
            User Dashboard
          </label>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-700 ">
            <>
            <li className="border-2  border-green-600 btn-explore rounded-md mb-2 ">
                <Link
                  className="text-center ml-16 text-about font-semibold"
                  to="/Dashboard/userInfo"
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
                  to="/dashboard/setting"
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
    </div>
  </div>
  );
};

export default DashboardLayout;
