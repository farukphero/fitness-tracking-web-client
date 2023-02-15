import React from "react";
import ActivitiesHistory from "../../ActivitiesHistory/ActivityHistory/ActivityHistory";
import AddActivities from "../AddActivities/AddActivities";
import FavouriteActivities from "../FavouriteActivities/FavouriteActivities";

const LogActivities = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:mt-8 lg:space-x-8  lg:px-10 ">
      <main className="basis-8/12">
        <AddActivities/>
      </main>
      <aside className="lg:basis-4/12 w-full sticky top-0 my-5 lg:my-0 mr-5 ">
        <FavouriteActivities />
        <ActivitiesHistory/>
      </aside>
    </div>
  );
};

export default LogActivities;
