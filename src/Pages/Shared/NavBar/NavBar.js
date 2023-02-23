import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import logo from "../../../images/apple-touch-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, userInfo } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navBar = [
    {
      _id: 0,
      navigate: `/Leaderboard`,
      title: `Leaderboard`,
      content: `Leaderboard`,
    },
    {
      _id: 1,
      navigate: `/Logs/Activities`,
      aria: `Logs`,
      content: `Logs`,
    },
    {
      _id: 2,
      navigate: `/Community/Friends`,
      aria: `Community`,
      content: `Community`,
    },
    
    {
      _id: 3,
      navigate: `/instructor/instructors`,
      aria: `Instructor`,
      content: `Instructor`,
    },
    {
      _id: 4,
      navigate: `/Tutorials`,
      aria: `Tutorials`,
      content: `Tutorials`,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 sticky top-0 z-50 bg-opacity-70">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/Leaderboard"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img className="h-10 w-10 rounded-md" src={logo} alt="" />
              <h1 className="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white">
                  FitLessian{" "}
                </span>
              </h1>
            </Link>
            <ul className=" items-center hidden nav-item space-x-8 lg:flex relative">
              {navBar.map((nav) => (
                <li key={nav._id}>
                  <NavLink
                    to={nav.navigate}
                    aria-label={nav.title}
                    title={nav.title}
                    className="font-medium tracking-wide transition-colors capitalize duration-200 hover:text-teal-accent-400 nav-all"
                  >
                    {nav.content}
                  </NavLink>
                  <div className="line"></div>
                </li>
              ))}
              {isAdmin && (
                <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  <NavLink to="/AddTutorials">AddTutorials</NavLink>
                </li>
              )}
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li tabIndex={0}>
                    <p className="font-medium  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                      Calculator
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </p>
                    <ul className="p-2 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600">
                      {/* <li>
                        <Link to="/WeightCalculator">Weight Calculator</Link>
                      </li> */}

                      <li>
                        <Link to="/bmi">BMI CALCULATOR</Link>
                      </li>
                      <li>
                        <Link to="/bmr">BMR CALCULATOR</Link>
                      </li>
                      <li>
                        <Link to="/water">WATER TRACKING</Link>
                      </li>
                      <li>
                        <Link to="/blood">BLOOD MEASUREMENT</Link>
                      </li>
                      <li>
                        <Link to="/protein">INTAKE PROTEIN</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end  hidden lg:flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                  <img src={userInfo?.picture} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-16 p-5 shadow menu menu-compact dropdown-content bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 text-white hover:bg-gradient-to-r rounded-box w-52"
              >
                <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  <Link to="/Profile/userInfo" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  <Link to="/Profile/setting">Settings</Link>
                </li>

                {user && (
                  <button
                    onClick={handleLogOut}
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md border-none bg-gradient-to-r from-gray-700 via-teal-600 to-gray-700  text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-teal-700 hover:to-gray-800"
                  >
                    Log Out
                  </button>
                )}
              </ul>
            </div>

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-14 -left-80 w-80 transition ">
                  <div className="p-5 bg-gradient-to-r from-gray-700 via-teal-800 to-gray-700  border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="block">
                        <img
                          className="h-14 w-14 rounded-full ml-10"
                          src={userInfo?.picture}
                          alt=""
                        />
                        <h5 className="text-xl mb-5">
                          {userInfo?.firstName} {userInfo?.lastName}
                        </h5>
                     
                      </div>

                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-10 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline capitalize z-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-8 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-center">
                        {navBar.map((nav) => (
                          <li
                            key={nav._id}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Link
                              to={nav.navigate}
                              aria-label={nav.title}
                              title={nav.title}
                              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              {nav.content}
                            </Link>
                          </li>
                        ))}
                        {isAdmin && (
                          <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                            <Link
                              to="/AddTutorials"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              AddTutorials
                            </Link>
                          </li>
                        )}
                        <div className="flex-none">
                          <ul className="menu menu-horizontal px-1">
                            <li tabIndex={0}>
                              <p className="font-medium  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                                Calculator
                                <svg
                                  className="fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                              </p>
                              <ul className="p-2 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600">
                                <li>
                                  <Link to="/WeightCalculator">
                                    Weight Calculator
                                  </Link>
                                </li>
                                <li>
                                  <Link>Calory calculator </Link>
                                </li>
                                <li>
                                  <Link>Calory burn calculator </Link>
                                </li>
                                <li>
                                  <Link>BMI calculator </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                          <Link
                            to="/Profile/userInfo"
                            className="justify-between"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Profile/setting"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Settings
                          </Link>
                        </li>

                        {user && (
                          <button
                            onClick={handleLogOut}
                            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md border-none bg-gradient-to-r from-gray-700 via-teal-600 to-gray-700  text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-teal-700 hover:to-gray-800"
                          >
                            Log Out
                          </button>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;