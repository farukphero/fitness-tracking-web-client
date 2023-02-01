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

const DayChart = () => {
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

export default DayChart;
