import React from "react";
import LeftSideLog from "../LeftSideLog/LeftSideLog/LeftSideLog";
import RightSideLog from "../RightSideLog/RIghtSideLog/RightSideLog";

const Food = () => {
  return (
    <div className="flex flex-row w-11/12 mx-auto space-x-6 scale-75">
      <main className="w-8/12">
        <LeftSideLog></LeftSideLog>
      </main>
      <aside className="w-4/12 sticky top-0">
        <RightSideLog></RightSideLog>
      </aside>
    </div>
  );
};

export default Food;
