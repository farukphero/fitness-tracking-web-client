import React from "react";

import "./Branches.css";
import BranchNames from "./BranchNames/BranchNames";
import BranchMap from "./BranchMap/BranchMap";

const Branches = () => {
  return (
    <div className="bg-gray-700 py-16 px-0 md:px-10 lg:px-0">
      <div className="px-4">
      <h4 className="text-center font-bold my-2">join with us</h4>
      <h2 className="text-center font-bold my-2 text-5xl">we'd love to meet with you</h2>
      <h5 className="text-center font-lg my-2 text-lg">we have offices and teams all around the world</h5>
      </div>
      <div className="flex flex-col lg:flex-row bg-gray-700  items-center justify-between ">
      <BranchNames/>
      <BranchMap/>
    </div>
    </div>
  );
};

export default Branches;
