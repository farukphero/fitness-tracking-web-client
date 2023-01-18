import React from "react";
import LeftSideLog from "../LeftSideLog/LeftSideLog/LeftSideLog";
import RightSideLog from "../RightSideLog/RIghtSideLog/RightSideLog";

const Food = () => {
  return (
    <div class="flex flex-row w-11/12 mx-auto space-x-6">
      <main className="basis-8/12">
        <LeftSideLog></LeftSideLog>
      </main>
      <aside class="h-screen basis-4/12 sticky top-0">
        <RightSideLog></RightSideLog>
      </aside>
    </div>
  );
};

export default Food;
