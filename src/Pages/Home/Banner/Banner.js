import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import undraw1 from "../../../assets/undraw_indoor_bike_pwa4 (1).svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-black grid grid-cols-1 lg:grid-cols-2 pb-8 pt-16">
      <div className=" justify-center  text-center">
        <h1 className="text-5xl banner-text text-white mt-24">
          Stay Healthy Even If you Stay
          <span className="text-all-green"> At Home</span>
        </h1>
        <div className="flex mt-8 justify-evenly">
          <button className="btn btn-banner  font-bold">Contact</button>
          <button className="btn btn-banner font-bold">About</button>
        </div>
      </div>
      <div>
        <img className="w-full  rounded-md h-3/4" src={undraw1} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
