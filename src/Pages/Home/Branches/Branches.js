import React from "react";

import "./Branches.css";
import BranchNames from "./BranchNames/BranchNames";
import BranchMap from "./BranchMap/BranchMap";

const Branches = () => {
  return (
    <div
      className="mt-24 px-0 md:px-10 lg:px-0"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <div className="px-4">
        <h2 className="text-center font-semibold my-2 text-all-green text-4xl">
          We'd love to meet with you
        </h2>
        <h5 className="text-center text-all-green text-2xl mt-2 mb-5 ">
          Our Team And Office
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-between -z-50">
        <BranchNames />
        <BranchMap />
      </div>
    </div>
  );
};

export default Branches;
