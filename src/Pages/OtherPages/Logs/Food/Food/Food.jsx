import React from "react";
import LeftSideLog from "../LeftSideLog/LeftSideLog/LeftSideLog";
import RightSideLog from "../RightSideLog/RIghtSideLog/RightSideLog";

const Food = () => {
  return (
    <div className="flex lg:w-10/12 lg:space-x-5 mx-auto scale-50 lg:scale-100 -mt-52 lg:mt-0 -ml-40 lg:ml-32 lg:mb-20 -mb-60">
      <main className="w-full scale-75 lg:scale-100">
        <LeftSideLog></LeftSideLog>
      </main>
      <aside className="w-full scale-75 lg:scale-100 -ml-24">
        <RightSideLog></RightSideLog>
      </aside>
    </div>
  );
};

export default Food;
