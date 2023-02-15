import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import MeetingNavbar from "../../Pages/Shared/MeetingNavbar/MeetingNavbar";

const MeetInstructors = () => {
  return (
    <div>
      <MeetingNavbar/>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-sky-800">
            <strong>
              <li>
                <Link to={`/checkup/`}>Home</Link>
              </li>
            </strong>
            <li>
              <strong>
                <Link to={`/checkup/instructors`}>Instructors</Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MeetInstructors;
