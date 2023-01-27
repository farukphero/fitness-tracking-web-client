import React, { PureComponent, useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "12 AM",
    uv: 10000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "01 AM",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "02 AM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "03 AM",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "04 AM",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "05 AM",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "06 AM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "07 AM",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "08 AM",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "09 AM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "10 AM",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11 AM",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12 PM",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "02 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "03 PM",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "04 PM",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "05 PM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "06 PM",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "07 PM",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "08 PM",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "09 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12 PM",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ActivitiesChart = () => {
  return (
    <>
      <div className="border rounded-md border-gray-600 my-5 mx-8 w-full -ml-1 p-2">
        <div className="lg:ml-20 ml-5 gap-x-4 my-5 lg:flex">
          <button className="btn btn-outline hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 text-white w-40">steps</button>
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40">distance</button> <br />
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm mr-5 mt-5 lg:mt-0 w-40">floors</button>
          <button className="btn btn-outline text-white hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  btn-sm w-40 mb-5 lg:mb-0">calouries burned</button>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis tick={{ stroke: `white` }} dataKey="name" />
            <YAxis tick={{ stroke: `yellow` }} />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
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
