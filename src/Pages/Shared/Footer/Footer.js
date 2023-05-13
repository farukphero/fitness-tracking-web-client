import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../src/images/apple-touch-icon.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  //footer
  return (
    <div className="relative bg-gradient-to-r from-gray-700 via-black to-gray-700  text-white  mt-10">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-700 "
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="h-10 w-10 rounded-lg" src={logo} alt="" />
              <h1 className="ml-2 text-4xl font-bold tracking-wide text-gray-100 uppercase ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white">FitLessian </span>
              </h1>
              
            </a>
            <div className="mt-4 lg:max-w-sm"><p className=" text-gray-400">Stay fit, ftay healthy. keep track your fitness information with FitLessian.</p></div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4">
            <div>
              <p className="font-semibold tracking-wide text-white">Company</p>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><Link to="/Leaderboard">Leaderboard</Link></li>
                <li><Link to="/Logs/Activities">Logs</Link></li>
                <li><Link to="/Community/friends">Community</Link></li>
                <li><Link to="/Tutorials">Tutorials</Link></li>
              </ul>
            </div>
            <div>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li><span className="font-bold ">Phone:</span> <br className="flex md:hidden" /> <span> +880 1580786205</span></li>
                <li><span className="font-bold ">Email:</span><span> farukk6323@gmail.com</span></li>
                <li className="flex">
                    <a href="https://www.facebook.com/profile.php?id=100081178906073" className="mr-2"><FaFacebookF></FaFacebookF></a>
                    <a href="https://www.linkedin.com/in/omarfaruk-238764240/" className="mr-2"><FaLinkedinIn></FaLinkedinIn></a>
                    <Link><FaTwitter></FaTwitter></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-10 border-t border-deep-purple-accent-200 text-center">
          <p className="text-sm text-gray-400">
            © Copyright 2023 Fitlessian All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
