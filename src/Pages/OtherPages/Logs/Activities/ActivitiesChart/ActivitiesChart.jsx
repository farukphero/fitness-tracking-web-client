import React, { PureComponent } from "react";
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
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page N",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page O",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page P",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page Q",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page R",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page S",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page T",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page U",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ActivitiesChart = () => {
  return (
    <>
      <div className="border rounded-md border-gray-600 my-5 mx-8">
        <div className="ml-20 gap-x-4 my-5 flex ">
          <button className="btn btn-outline btn-sm">steps</button>
          <button className="btn btn-outline btn-sm">distance</button>
          <button className="btn btn-outline btn-sm">floors</button>
          <button className="btn btn-outline btn-sm">calouries burned</button>
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
        <div className="flex items-center justify-between mx-10">
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
