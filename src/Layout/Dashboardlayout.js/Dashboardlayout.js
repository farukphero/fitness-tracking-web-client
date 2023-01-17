import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboarlayout.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";

const Dashboardlayout = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content relative ">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer"
            className="border-2 px-6 py-3 border-green-600 btn-explore drawer-button   absolute  top-6 lg:top-40  left-6 lg:left-10 "
          >
            User Dashboard
          </label>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <>
              <li className="border-2  border-green-600 btn-explore rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/event"
                >
                  Events
                  <BsCalendarEvent></BsCalendarEvent>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore    rounded-md mb-2 ">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/userInfo"
                >
                  UserInfo
                  <FaRegUser></FaRegUser>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore rounded-md  mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/dashboard/setting"
                >
                  Setting
                  <AiOutlineSetting></AiOutlineSetting>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/report"
                >
                  Report
                  <TbReportSearch></TbReportSearch>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/event"
                >
                  Events
                  <BsCalendarEvent></BsCalendarEvent>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
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

      {/* <div className="mb-44">
      <div className="drawer ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle text-white"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ml-16">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 mt-16   text-white ">
            <>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2 ">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/userInfo"
                >
                  UserInfo
                  <FaRegUser></FaRegUser>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore rounded-md  mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/dashboard/setting"
                >
                  Setting
                  <AiOutlineSetting></AiOutlineSetting>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/report"
                >
                  Report
                  <TbReportSearch></TbReportSearch>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
                <Link
                  className="text-center ml-16 text-about font-bold"
                  to="/Dashboard/event"
                >
                  Events
                  <BsCalendarEvent></BsCalendarEvent>
                </Link>
              </li>
              <li className="border-2  border-green-600 btn-explore     rounded-md mb-2">
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
    </div> */}
    </div>
  );
};

export default Dashboardlayout;
