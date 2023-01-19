import React from "react";
import RouteAndDate from "../Route&Date/Route&Date";
import ActivitiesChart from "../ActivitiesChart/AcitvitiesChart";
import ActivitiesHistory from "../ActivitiesHistory/ActivitiesHistory";
import LogActivities from "../LogActivities/LogActivities/LogActivities";
import DateProvider from "../DateProvider/DateProvider";

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
