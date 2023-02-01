import React, { PureComponent, useContext, useReducer, useState } from "react";
import { useDate } from "../DateProvider/DateProvider";
import { formatDistanceToNowStrict } from "date-fns";
import { useEffect } from "react";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import DayChart from "./DayChart/DayChart";
import WeekChart from "./WeekChart/WeekChart";
import MonthChart from "./MonthChart/MonthChart";
import YearChart from "./YearChart/YearChart";

const ActivitiesChart = () => {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(<DayChart />);
  const { user } = useContext(AuthContext);
  const { state } = useDate();
  const dayDistance = formatDistanceToNowStrict(state);

  useEffect(() => {
    if (dayDistance === `1 month`) {
      fetch(`http://localhost:5000/activities/30?activist=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<MonthChart data={data} />);
    } else if (dayDistance === `7 days`) {
      fetch(`http://localhost:5000/activities/7?activist=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<WeekChart data={data} />);
    } else if (dayDistance === `1 year`) {
      fetch(`http://localhost:5000/activities/365?activist=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<YearChart data={data} />);
    } else {
      fetch(`http://localhost:5000/activities/1?activist=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<DayChart data={data} />);
    }
  }, [dayDistance, user?.email, data]);

  console.log(dayDistance);
  console.log(data);

  return (
    <>
      <div className="border rounded-md border-gray-600 my-5 mx-8 w-full -ml-1 p-2">
        <div className="lg:ml-20 ml-5 gap-x-4 my-5 lg:flex">
          <button className="btn btn-outline hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 text-white w-40">
            steps
          </button>
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40">
            distance
          </button>{" "}
          <br />
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 mt-5 lg:mt-0 w-40">
            floors
          </button>
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40 mb-5 lg:mb-0">
            calouries burned
          </button>
        </div>

        {showChart}

        <div className="divider mx-8"></div>
        <div className="flex capitalize font-semibold items-center mb-5 justify-between mx-6 lg:mx-10">
          <h3>daily totals</h3>
          <h3>0 steps</h3>
          <h3>0 miles</h3>
          <h3>730 calouries</h3>
        </div>
      </div>
    </>
  );
};

export default ActivitiesChart;
