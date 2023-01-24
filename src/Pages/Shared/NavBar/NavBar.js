import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import logo from "../../../images/apple-touch-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
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
      navigate: `/Community`,
      aria: `Community`,
      content: `Community`,
    },
    {
      _id: 3,
      navigate: `/Tutorials`,
      aria: `Tutorials`,
      content: `Tutorials`,
    },
    {
      _id: 4,
      navigate: `/Dashboard`,
      aria: `Dashboard`,
      content: `Dashboard`,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-600 via-teal-600 to-gray-600 sticky top-0 z-50 bg-opacity-70">
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
            <ul className=" items-center hidden space-x-8 lg:flex">
              {navBar.map((nav) => (
                <li key={nav._id}>
                  <Link
                    to={nav.navigate}
                    aria-label={nav.title}
                    title={nav.title}
                    className="font-medium tracking-wide text-gray-100 transition-colors capitalize duration-200 hover:text-teal-accent-400"
                  >
                    {nav.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt=''/>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-5 shadow menu menu-compact dropdown-content bg-gradient-to-r from-black via-gray-700 to-black text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-teal-700 hover:to-gray-800 rounded-box w-52"
            >
              <li>
                <Link to='' className="justify-between">
                  Profile
                  
                </Link>
              </li>
              <li>
                <Link to=''>Settings</Link>
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
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-black  border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/Leaderboard"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          className="h-10 w-10 rounded-md"
                          src={logo}
                          alt=""
                        />
                        <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                          FIT<span className="text-green-700">LESSIAN</span>
                        </h1>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline capitalize z-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {navBar.map((nav) => (
                        <li key={nav._id}>
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
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;