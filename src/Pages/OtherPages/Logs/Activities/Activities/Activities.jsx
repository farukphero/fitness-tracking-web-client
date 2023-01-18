import React from "react";
import ActivitiesChart from "../ActivitiesChart/ActivitiesChart";
import ActivitiesHistory from "../ActivitiesHistory/ActivitiesHistory";
import RouteAndDate from "../RouteAndDate/RouteAndDate";
import LogActivities from "../LogActivities/LogActivities/LogActivities";

const Activities = () => {
  return (
    <div className="w-11/12 mx-auto">
      <RouteAndDate />
      <ActivitiesChart />
      <ActivitiesHistory /> 
      <LogActivities/>
    </div>
  );
};

export default Activities;
