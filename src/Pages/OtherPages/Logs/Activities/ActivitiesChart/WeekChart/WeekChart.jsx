import React from "react";
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

const myData = [
  {
    name: "Fri Day",
    uv: 10000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Satur Day",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sun Day",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Mon Day",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tues Day",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Wednes Day",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Thrus Day",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const WeekChart = ({data}) => {
    console.log(data);
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        <Bar dataKey="uv" fill="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ stroke: `white` }} dataKey="name" />
        <YAxis tick={{ stroke: `yellow` }} />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeekChart;
