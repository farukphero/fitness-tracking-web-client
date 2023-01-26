import React from "react";
 
 
import DateProvider from "../DateProvider/DateProvider";
import LogActivities from "../LogActivities/LogActivities/LogActivities";
import RouteAndDate from "../Route&Date/Route&Date";
import ActivitiesHistory from "../ActivitiesHistory/ActivityHistory/ActivityHistory";
import ActivitiesChart from "../ActivitiesChart/AcitvitiesChart";
 

const Activities = () => {
  return (
    <DateProvider>
      <div className="w-11/12 mx-auto">
        <RouteAndDate />
        <ActivitiesChart />
        <ActivitiesHistory/>
        <LogActivities />
      </div>
    </DateProvider>
  );
};


export default Activities;
