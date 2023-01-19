import React from "react";

import "./Branches.css";
import BranchNames from "./BranchNames/BranchNames";
import BranchMap from "./BranchMap/BranchMap";

const Branches = () => {
  return (
    <div className="mt-16 px-0 md:px-10 lg:px-0">
      <div className="px-4">
        <h2 className="text-center font-semibold my-2 text-all-green text-4xl">
          We'd love to meet with you
        </h2>
        <h5 className="text-center text-all-green text-2xl mt-2 mb-5 ">
          Our Team And Office
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <BranchNames />
        <BranchMap />
      </div>
    </div>
  );
};

export default Branches;
