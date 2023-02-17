import format from "date-fns/format";
import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DayChart = ({ data }) => {
  const hour23 = Date.now() - 23 * 60 * 60 * 1000;
  const hour22 = Date.now() - 22 * 60 * 60 * 1000;
  const hour21 = Date.now() - 21 * 60 * 60 * 1000;
  const hour20 = Date.now() - 20 * 60 * 60 * 1000;
  const hour19 = Date.now() - 19 * 60 * 60 * 1000;
  const hour18 = Date.now() - 18 * 60 * 60 * 1000;
  const hour17 = Date.now() - 17 * 60 * 60 * 1000;
  const hour16 = Date.now() - 16 * 60 * 60 * 1000;
  const hour15 = Date.now() - 15 * 60 * 60 * 1000;
  const hour14 = Date.now() - 14 * 60 * 60 * 1000;
  const hour13 = Date.now() - 13 * 60 * 60 * 1000;
  const hour12 = Date.now() - 12 * 60 * 60 * 1000;
  const hour11 = Date.now() - 11 * 60 * 60 * 1000;
  const hour10 = Date.now() - 10 * 60 * 60 * 1000;
  const hour9 = Date.now() - 9 * 60 * 60 * 1000;
  const hour8 = Date.now() - 8 * 60 * 60 * 1000;
  const hour7 = Date.now() - 7 * 60 * 60 * 1000;
  const hour6 = Date.now() - 6 * 60 * 60 * 1000;
  const hour5 = Date.now() - 5 * 60 * 60 * 1000;
  const hour4 = Date.now() - 4 * 60 * 60 * 1000;
  const hour3 = Date.now() - 3 * 60 * 60 * 1000;
  const hour2 = Date.now() - 2 * 60 * 60 * 1000;
  const hour1 = Date.now() - 1 * 60 * 60 * 1000;
  const hour0 = Date.now();

  // console.log(data);

  const myData = [
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 10000,
    //   pv: 2400,
    //   amt: 2400,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 4000,
    //   pv: 2400,
    //   amt: 2400,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 4000,
    //   pv: 2400,
    //   amt: 2400,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
    // {
    //   name: format(new Date(hour1), "p"),
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
    {
      name: format(new Date(hour1), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour2).getHours().toString().length === 1
              ? `0` + new Date(hour2).getHours().toString()
              : new Date(hour2).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  console.log(myData.map((d) => d.steps));

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        <Bar dataKey="steps" fill="#8884d8" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis tick={{ stroke: `black` }} dataKey="name" />
        <YAxis tick={{ stroke: `primary` }} />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default memo(DayChart);
