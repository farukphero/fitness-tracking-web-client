import React from "react";
 
 
import DateProvider from "../DateProvider/DateProvider";
import LogActivities from "../LogActivities/LogActivities/LogActivities";
import RouteAndDate from "../Route&Date/Route&Date";
import ActivitiesHistory from "../ActivitiesHistory/ActivityHistory/ActivityHistory";
import ActivitiesChart from "../ActivitiesChart/AcitvitiesChart";
 

const Activities = () => {
  return (
    <DateProvider>
      <div className="lg:w-11/12 mx-auto scale-90 lg:scale-100">
        <RouteAndDate  />
        <ActivitiesChart className="w-full scale-100 lg:scale-100"/>
        <ActivitiesHistory/>
        <LogActivities />
      </div>
    </DateProvider>
  );
};


export default Activities;
