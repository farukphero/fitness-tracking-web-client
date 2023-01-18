import React from "react";
import AddActivities from "../AddActivities/AddActivities";
import FavouriteActivities from "../FavouriteActivities/FavouriteActivities";

const LogActivities = () => {
  return (
    <div class="flex flex-row w-full mt-8  space-x-8 px-10">
      <main className="basis-8/12">
        <AddActivities />
      </main>
      <aside class="basis-4/12 sticky top-0">
        <FavouriteActivities />
      </aside>
    </div>
  );
};

export default LogActivities;
