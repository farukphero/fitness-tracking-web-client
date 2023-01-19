import React from "react";
import DateProvider from "../DateProvider/DateProvider";
import ActivitiesChart from "../ActivitiesChart/ActivitiesChart";
import RouteAndDate from "../RouteAndDate/RouteAndDate";
import ActivitiesHistory from "../ActivitiesHistory/ActivitiesHistory";
import LogActivities from "../LogActivities/LogActivities/LogActivities";

const Activities = () => {
  return (
    <DateProvider>
      <div className="w-11/12 mx-auto">
        <RouteAndDate />
        <ActivitiesChart />
        <ActivitiesHistory />
        <LogActivities />
      </div>
    </DateProvider>
  );
};

export default Activities;
