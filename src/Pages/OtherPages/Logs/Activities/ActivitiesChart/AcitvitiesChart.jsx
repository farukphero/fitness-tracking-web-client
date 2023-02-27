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
      setShowChart(
        <MonthChart focus={focus} setTotal={setTotal} data={data} />
      );
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
      setShowChart(<DayChart focus={focus} setTotal={setTotal} data={data} />);
    }
  }, [dayDistance, user?.email, data, focus, setTotal]);

  return (
    <>
      <div className="border rounded-md bg-white border-gray-600 text-black mx-8 w-full -ml-1 p-2">
        <div className="lg:ml-20 ml-5 gap-x-4 my-5 lg:flex">
          <button
            onClick={() => setFocus(`steps`)}
            className="btn btn-outline text-black border-2  border-green-600 rounded-md  btn-sm mr-5   w-40"
          >
            steps
          </button>
          <button
            onClick={() => setFocus(`distance`)}
            className="btn btn-outline border-2 text-black border-green-600 rounded-md  btn-sm mr-5   w-40"
          >
            distance
          </button>{" "}
          <br />
          <button
            onClick={() => setFocus(`floors`)}
            className="btn btn-outline  border-2 text-black border-green-600 rounded-md  btn-sm mr-5   w-40"
          >
            floors
          </button>
          <button
            onClick={() => setFocus(`calouries_burned`)}
            className="btn btn-outline  border-2 text-black border-green-600 rounded-md  btn-sm mr-5   w-40"
          >
            calouries burned
          </button>
        </div>

        {showChart}

        <div className="divider mx-8"></div>
        <div className="flex capitalize font-semibold items-center mb-5 justify-between mx-6 lg:mx-10">
          <h3>{total?.type ? total?.type : 0} totals</h3>
          <h3>{total?.steps ? total?.steps : 0} steps</h3>
          <h3>{total?.kilometers ? total?.kilometers : 0} kilometers</h3>
          <h3>{total?.calouries ? total?.calouries : 0} calouries</h3>
        </div>
      </div>
    </>
  );
};

export default ActivitiesChart;
