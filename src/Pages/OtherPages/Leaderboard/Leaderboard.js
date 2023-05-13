import React from "react";
import {
  FaBeer,
  FaCloudsmith,
  FaUtensils,
  FaRunning,
  FaUsers,
  FaUserMd,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle/useTitle";
import FoodPlanModal from "./Modal/FoodPlanModal/FoodPlanModal";
import Recent from "./Modal/Recent/Recent";
import WaterModal from "./Modal/WaterModal/WaterModal";
import WeightModal from "./Modal/WeightModal/WeightModal";

const Leaderboard = () => {
  useTitle("Leaderboard");
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-9/12 mx-auto my-20">
        <div className="bg-gray-800 rounded shadow-lg shadow-green-600">
          <label htmlFor="recent-modal" className="cursor-pointer">
            <div>
              <h1 className="text-2xl  text-center border-b my-3 border-gray-600 pb-2">
                Recent Exercise
              </h1>
              <div className="text-8xl text-green-600 mt-12">
                <FaRunning className="mx-auto border-green-600 border rounded-full p-1"></FaRunning>
              </div>
              <p></p>
            </div>
          </label>
          <Recent></Recent>
        </div>
        <div className="grid grid-rows-2 gap-4">
          {/* food plan */}
          <div className="bg-gray-800 rounded shadow-lg shadow-green-600 pt-5 ">
            <div className="text-4xl text-green-600">
              <FaUtensils className="mx-auto"></FaUtensils>
            </div>
            <h1 className="text-xl text-center">Food Plan</h1>
            <p className="text-center text-gray-400 text-sm">
              Set your daily calorie estimate.
            </p>
            <div className="text-center mt-4 mb-12">
              <label
                htmlFor="food-modal"
                className="px-4 py-3 bg-green-700 rounded-full text-white text-lg"
              >
                Start Now
              </label>
            </div>
            <FoodPlanModal></FoodPlanModal>
          </div>

          <div className="bg-gray-800 rounded shadow-lg shadow-green-600 py-5">
            <div className="text-4xl text-green-600">
              <FaCloudsmith className="mx-auto"></FaCloudsmith>
            </div>
            <h1 className="text-center text-2xl">Weight Goal</h1>
            <p className="text-center text-gray-400 text-sm">
              Have a weight goal?
            </p>
            <div className="text-center mt-4 mb-12">
              <label
                htmlFor="weight-modal"
                className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-full text-white btn"
              >
                Start Now
              </label>
            </div>
            <WeightModal></WeightModal>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="bg-gray-800 rounded shadow-lg shadow-green-600 py-5">
            <div className="text-4xl text-green-600">
              <FaBeer className="mx-auto"></FaBeer>
            </div>
            <h1 className="text-center text-2xl">Water</h1>
            <p className="text-center  text-gray-400 text-sm">
              At Least 800 ml daily
            </p>
            <div className="text-center mt-4 mb-12">
              <label
                htmlFor="water-modal"
                className="px-4 py-3 bg-green-700 rounded-full text-white text-lg"
              >
                Start Now
              </label>
            </div>
            <WaterModal></WaterModal>
          </div>
          <Link
            to="/instructor/instructors"
            className="bg-gray-800 text-gray-400 rounded shadow-lg shadow-green-600 lg:p-10 "
          >
            <div>
              <div className="text-8xl text-green-600 mb-4 md:pt-10 lg:pt-0">
                <FaUserMd className="mx-auto"></FaUserMd>
              </div>
              <div>
                <p className="text-sm text-gray-400 text-center">
                  Meet our Instructor.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <Link
            to="/Community/friends"
            className="bg-gray-800 rounded shadow-lg shadow-green-600 py-5"
          >
            <div className="">
              <div className="text-green-600 text-8xl">
                <FaUsers className="mx-auto"></FaUsers>
              </div>
              <p className="text-sm text-gray-400 text-center">
                Do more fun with your friends!
              </p>
            </div>
          </Link>
          <div className="bg-gray-800 rounded shadow-lg shadow-green-600 p-2">
            <img
              className="h-32 w-32 mx-auto my-10"
              src="https://static.vecteezy.com/system/resources/previews/014/011/484/original/fire-icon-in-gradient-red-colors-flame-signs-illustration-png.png?fbclid=IwAR2S02B9dRythX9X4QZkyRQsobZmhLYnXVsem8FE6T6EMR8dErCFn00PQDA"
              alt=""
            />
            <h1 className="text-gray-400 lg:ml-20 pb-5">Keep Fit Yourself</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
