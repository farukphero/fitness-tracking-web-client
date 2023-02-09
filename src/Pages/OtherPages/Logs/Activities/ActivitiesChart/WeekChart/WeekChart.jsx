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
import { format } from "date-fns";

const WeekChart = ({ data, focus, setTotal }) => {
  const date7 = new Date(new Date() - 24 * 60 * 60 * 1000 * 7)
    .toISOString()
    .slice(0, 10);
  const date6 = new Date(new Date() - 24 * 60 * 60 * 1000 * 6)
    .toISOString()
    .slice(0, 10);
  const date5 = new Date(new Date() - 24 * 60 * 60 * 1000 * 5)
    .toISOString()
    .slice(0, 10);
  const date4 = new Date(new Date() - 24 * 60 * 60 * 1000 * 4)
    .toISOString()
    .slice(0, 10);
  const date3 = new Date(new Date() - 24 * 60 * 60 * 1000 * 3)
    .toISOString()
    .slice(0, 10);
  const date2 = new Date(new Date() - 24 * 60 * 60 * 1000 * 2)
    .toISOString()
    .slice(0, 10);
  const date1 = new Date(new Date() - 24 * 60 * 60 * 1000 * 1)
    .toISOString()
    .slice(0, 10);

  const myData = [
    {
      name: format(new Date(date7), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date7 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date7)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date7)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date7)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date7)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date6), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date6 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date6)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date6)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date6)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date6)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date5), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date5 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date5)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date5)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date5)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date5)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date4), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date4 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date4)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date4)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date4)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date4)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date3), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date3 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date3)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date3)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date3)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date3)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date2), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date2 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date2)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date2)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date2)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date2)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date1), "EEEE"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date1 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date1)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date1)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date1)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date1)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
  ];

  const allValues = {
    totalSteps: myData.reduce((t, v) => t + v.steps, 0),
    totalDistance: myData.reduce((t, v) => t + v.distance, 0),
    totalCalouriesBurned: myData.reduce((t, v) => t + v.calouries_burned, 0),
  };

  setTotal({
    type: `weekly`,
    steps: allValues.totalSteps,
    kilometers: allValues.totalDistance,
    calouries: allValues.totalCalouriesBurned,
  });


  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        mv: data,
        <Bar dataKey={focus} fill="#8884d8" />
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
