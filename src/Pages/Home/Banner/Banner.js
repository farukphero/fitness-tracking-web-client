import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import lott21 from "../../../images/staggered_push_ups (1).json";
import lott23 from "../../../assets/working21 (3).json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 pb-8 md:pt-16 w-11/12 mx-auto">
        <div className=" justify-center  text-center">
          <h1 className="text-5xl font-bold banner-text text-white mt-8 md:mt-24 w-11/12">
            Stay Healthy Even If you <br />
            Stay
            <span className="text-all-green"> At Home</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Achieve Your Training Goals With The Right Plan, Not With A Luck.
          </p>
          <div className="flex flex-row gap-4 mt-6 justify-center items-center">
            <NavHashLink smooth to="/#contact">
              {" "}
              <button className="border-2 px-8 py-3 border-green-600 btn-explore font-bold  rounded-md ">
                Contact
              </button>
            </NavHashLink>
            <NavHashLink smooth to="/#about">
              {" "}
              <button className="btn-explore-about border-2 px-8 py-3 border-green-600 rounded-md ">
                About
              </button>
            </NavHashLink>
          </div>
        </div>
        <div>
          <div className="flex justify-center -mt-10">
            <Lottie
              className="w-4/5 scale-110"
              animationData={lott21}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
