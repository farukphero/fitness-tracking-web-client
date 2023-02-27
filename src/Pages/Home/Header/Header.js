import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import logo from "../../../images/apple-touch-icon.png";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900   bg-opacity-70">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img className="h-10 w-10 rounded-md" src={logo} alt="" />
              <h1 className="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white text-3xl">FitLessian </span>
              </h1>
          
            </Link>
            
          </div>
          <TypeAnimation
          className="hidden lg:flex"
                sequence={[
                  "START YOUR JOURNEY TODAY", // Types 'One'
                  2000, // Waits 1s
                  " START YOUR JOURNEY TODAY ", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "START YOUR JOURNEY TODAY",
                  2000, // Types 'Three' without deleting 'Two'
                  () => {
                     ; // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1.2em" }}
                
              />
             
          <ul className="items-center hidden space-x-8 lg:flex">
            {
              user && user.emailVerified ? <button onClick={handleLogOut} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500">Log Out</button> : <>
                <li>
              <Link
                to="/SignIn"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/SignUp"
                className="inline-flex items-center justify-center h-10 px-6 font-medium text-white rounded shadow-md bg-gradient-to-r from-green-500 to-secondary"
                aria-label="Sign up"
                title="Sign up"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </li>
              </>
            }
          </ul>
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
                <div className="p-5 bg-gradient-to-r from-black via-gray-700 to-black border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className="h-10 w-10 rounded-md" src={logo} alt="" />
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
                   
                        <Link
                           to="/SignUp"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-50"
                          aria-label="Sign up"
                          title="Sign up"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Sign up
                        </Link>
                     
                    {/* <ul className="space-y-4">
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
                      <li>
                        <Link
                           to="/SignUp"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul> */}
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

export default Header;
