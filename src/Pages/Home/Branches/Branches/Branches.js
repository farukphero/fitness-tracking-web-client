import React from "react";
import BranchMap from "../BranchMap/BranchMap";
import BranchNames from "../BranchName/BranchName";

import "./Branches.css";
 

const Branches = () => {
  return (
    <div className="bg-gray-700 pt-10 pb-4 px-0 md:px-10 lg:px-0">
      <div className="px-4">
      <h2 className=" text-center text-white font-semibold my-2 text-5xl">We'd love to meet with you</h2>
      <h5 className="  text-center text-white font-lg my-2 text-lg">We have offices and teams all around the world</h5>
      </div>
      <div className="flex flex-col lg:flex-row bg-gray-700  items-center justify-between ">
      <BranchNames/>
      <BranchMap/>
    </div>
    </div>
  );
};

export default Branches;