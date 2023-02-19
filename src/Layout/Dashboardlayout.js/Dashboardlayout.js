import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboarlayout.css";
import { AiOutlineSetting } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { FaQuestion, FaRegUser } from "react-icons/fa";

const DashboardLayout = () => {
  const { userInfo, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="drawer drawer-mobile bg-gradient-to-r from-gray-700 via-green-700 to-gray-700">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content relative flex flex-col items-center justify-center">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer"
          className="flex lg:hidden btn-explore drawer-button absolute top-1 left-6"
        >
          <img
            className="h-12 w-12 rounded-full"
            src={userInfo?.picture}
            alt=""
          />
        </label>
      </div>

      <div className="drawer-side border-r-2 border-green-500 ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700">
          <>
            {isAdmin && (
              <li className="btn-dashboard border-b-2  border-sky-400 mb-2 ">
                <Link
                  className="text-center ml-16 text-about font-semibold"
                  to="/Profile/AllUsers"
                >
                  All Users
                  <FaRegUser></FaRegUser>
                </Link>
              </li>
            )}
            <li className="btn-dashboard border-b-2  border-sky-400 mb-2  ">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Profile/userInfo"
              >
                Profile
                <FaRegUser></FaRegUser>
              </Link>
            </li>

            <li className="btn-dashboard border-b-2  border-sky-400 mb-2 ">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Profile/setting"
              >
                Setting
                <AiOutlineSetting></AiOutlineSetting>
              </Link>
            </li>
            <li className="btn-dashboard border-b-2  border-sky-400 mb-2 ">
              <Link
                className="text-center ml-16 text-about font-semibold"
                to="/Profile/questions"
              >
                Questions
                <FaQuestion></FaQuestion>
              </Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
