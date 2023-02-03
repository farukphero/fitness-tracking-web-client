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

const WeekChart = ({ data }) => {


  const myData = [
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fri Day",
      date: "2023-01-26",
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
  ]

  console.log(myData.kv);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        mv: data,
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
