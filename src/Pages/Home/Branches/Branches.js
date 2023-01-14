import React from "react";

import "./Branches.css";
import BranchNames from "./BranchNames/BranchNames";
import BranchMap from "./BranchMap/BranchMap";

const Branches = () => {
  return (
    <div className="pb-6 px-0 md:px-10 lg:px-0">
      <div className="px-4">
       <h2 className="text-center text-white font-bold my-2 text-5xl">We'd love to meet with you</h2>
      <h5 className="text-center  text-white font-lg mt-2 mb-5 text-lg">We have offices and teams all around the world</h5>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
      <BranchNames/>
      <BranchMap/>
    </div>
    </div>
  );
};

export default Branches;
