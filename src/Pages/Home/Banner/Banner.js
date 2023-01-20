import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "swiper/css";
import "swiper/css/pagination";
import undraw1 from "../../../assets/undraw_indoor_bike_pwa4 (1).svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div >
      <div className=" grid grid-cols-1 lg:grid-cols-2 pb-8 md:pt-16">
        <div className=" justify-center  text-center">
          <h1 className="text-5xl banner-text text-white mt-8 md:mt-24">
            Stay Healthy Even If you Stay
            <span className="text-all-green"> At Home</span>
          </h1>
          <div className="flex mt-8 md:ml-24">
            <NavHashLink smooth to='/#contact' className="btn btn-banner  font-bold">Contact</NavHashLink>
            <NavHashLink smooth to='/#about' className="btn btn-banner font-bold">About</NavHashLink>
          </div>
        </div>
        <div>
        <img className="w-full mt-8 md:mt-0 rounded-md h-3/4" src={undraw1} alt=""></img>
      </div>
      </div>
    </div>
  );
};

export default Banner;
