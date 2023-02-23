import React from "react";
import DateProvider from "../DateProvider/DateProvider";
import LogActivities from "../LogActivities/LogActivities/LogActivities";
import RouteAndDate from "../Route&Date/Route&Date";
import ActivitiesHistory from "../ActivitiesHistory/ActivityHistory/ActivityHistory";
import ActivitiesChart from "../ActivitiesChart/AcitvitiesChart";
import useTitle from "../../../../../Hooks/useTitle/useTitle";
import GeoLocation from "../GeoLocation/GeoLocation";

const Activities = () => {
  useTitle("Log/Activities");

  return (
    <DateProvider>
      <div className="lg:w-11/12 mx-auto scale-90 lg:scale-100">
        <RouteAndDate />
        <ActivitiesChart className="w-full scale-100 lg:scale-100" />
        <LogActivities />
        <GeoLocation />
      </div>
    </DateProvider>
  );
};

export default Activities;
