import React from "react";
import ActivitiesChart from "../ActivitiesChart/ActivitiesChart";
import ActivitiesHistory from "../ActivitiesHistory/ActivitiesHistory";
import DateProvider from "../DateProvider/DateProvider";
import LogActivities from "../LogActivities/LogActivities/LogActivities";
import RouteAndDate from "../Route&Date/Route&Date";
 

const Activities = () => {
  return (
    <DateProvider>
      <div className="w-11/12 mx-auto">
        <RouteAndDate />
        <ActivitiesChart />
        <ActivitiesHistory/>
        {/* <LogActivities /> */}
      </div>
    </DateProvider>
  );
};


export default Activities;
