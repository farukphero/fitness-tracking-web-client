import { formatDistanceToNowStrict } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { useDate } from "../DateProvider/DateProvider";
import DayChart from "./DayChart/DayChart";
import MonthChart from "./MonthChart/MonthChart";
import WeekChart from "./WeekChart/WeekChart";
import YearChart from "./YearChart/YearChart";

const ActivitiesChart = () => {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(<DayChart />);
  const { user } = useContext(AuthContext);
  const { state } = useDate();
  const dayDistance = formatDistanceToNowStrict(state);
  const [focus, setFocus] = useState(`steps`);
  const [total, setTotal] = useState({
    type: `daily`,
    steps: 0,
    kilometers: 0,
    calouries: 0,
  });

  useEffect(() => {
    if (dayDistance === `1 month`) {
 
      fetch(`https://fitness-tracking-web-server.vercel.app/activities/30?activist=${user?.email}`)
 
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<MonthChart focus={focus} setTotal={setTotal} data={data} />);
    } else if (dayDistance === `7 days`) {
 
      fetch(`https://fitness-tracking-web-server.vercel.app/activities/7?activist=${user?.email}`)
 
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<WeekChart focus={focus} setTotal={setTotal} data={data} />);
    } else if (dayDistance === `1 year`) {
 
      fetch(`https://fitness-tracking-web-server.vercel.app/activities/365?activist=${user?.email}`)
 
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<YearChart focus={focus} setTotal={setTotal} data={data} />);
    } else {
 
      fetch(`https://fitness-tracking-web-server.vercel.app/activities/1?activist=${user?.email}`)
 
        .then((res) => res.json())
        .then((data) => setData(data));
      setShowChart(<DayChart data={data} />);
    }
  }, [dayDistance, user?.email, data, focus]);

  return (
    <>
      <div className="border rounded-md border-gray-600 my-5 mx-8 w-full -ml-1 p-2">
        <div className="lg:ml-20 ml-5 gap-x-4 my-5 lg:flex">
          <button
            onClick={() => setFocus(`steps`)}
            className="btn btn-outline hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 text-white w-40"
          >
            steps
          </button>
          <button
            onClick={() => setFocus(`distance`)}
            className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40"
          >
            distance
          </button>{" "}
          <br />
          <button
            onClick={() => setFocus(`floors`)}
            className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 mt-5 lg:mt-0 w-40"
          >
            floors
          </button>
          <button
            onClick={() => setFocus(`calouries_burned`)}
            className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40 mb-5 lg:mb-0"
          >
            calouries burned
          </button>
        </div>

        {showChart}

        <div className="divider mx-8"></div>
        <div className="flex capitalize font-semibold items-center mb-5 justify-between mx-6 lg:mx-10">
          <h3>{total?.type} totals</h3>
          <h3>{total?.steps} steps</h3>
          <h3>{total?.kilometers} kilometers</h3>
          <h3>{total?.calouries} calouries</h3>
        </div>
      </div>
    </>
  );
};

export default ActivitiesChart;
