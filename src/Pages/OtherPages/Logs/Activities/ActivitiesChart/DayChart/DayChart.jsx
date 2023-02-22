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

const DayChart = ({ data, focus, setTotal }) => {
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
    {
      name: format(new Date(hour23), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour23).getHours().toString().length === 1
              ? `0` + new Date(hour23).getHours().toString()
              : new Date(hour23).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour23).getHours().toString().length === 1
              ? `0` + new Date(hour23).getHours().toString()
              : new Date(hour23).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour23).getHours().toString().length === 1
              ? `0` + new Date(hour23).getHours().toString()
              : new Date(hour23).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour22), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour22).getHours().toString().length === 1
              ? `0` + new Date(hour22).getHours().toString()
              : new Date(hour22).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour22).getHours().toString().length === 1
              ? `0` + new Date(hour22).getHours().toString()
              : new Date(hour22).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour22).getHours().toString().length === 1
              ? `0` + new Date(hour22).getHours().toString()
              : new Date(hour22).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour21), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour21).getHours().toString().length === 1
              ? `0` + new Date(hour21).getHours().toString()
              : new Date(hour21).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour21).getHours().toString().length === 1
              ? `0` + new Date(hour21).getHours().toString()
              : new Date(hour21).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour21).getHours().toString().length === 1
              ? `0` + new Date(hour21).getHours().toString()
              : new Date(hour21).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour20), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour20).getHours().toString().length === 1
              ? `0` + new Date(hour20).getHours().toString()
              : new Date(hour20).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour20).getHours().toString().length === 1
              ? `0` + new Date(hour20).getHours().toString()
              : new Date(hour20).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour20).getHours().toString().length === 1
              ? `0` + new Date(hour20).getHours().toString()
              : new Date(hour20).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour19), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour19).getHours().toString().length === 1
              ? `0` + new Date(hour19).getHours().toString()
              : new Date(hour19).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour19).getHours().toString().length === 1
              ? `0` + new Date(hour19).getHours().toString()
              : new Date(hour19).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour19).getHours().toString().length === 1
              ? `0` + new Date(hour19).getHours().toString()
              : new Date(hour19).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour18), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour18).getHours().toString().length === 1
              ? `0` + new Date(hour18).getHours().toString()
              : new Date(hour18).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour18).getHours().toString().length === 1
              ? `0` + new Date(hour18).getHours().toString()
              : new Date(hour18).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour18).getHours().toString().length === 1
              ? `0` + new Date(hour18).getHours().toString()
              : new Date(hour18).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour17), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour17).getHours().toString().length === 1
              ? `0` + new Date(hour17).getHours().toString()
              : new Date(hour17).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour17).getHours().toString().length === 1
              ? `0` + new Date(hour17).getHours().toString()
              : new Date(hour17).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour17).getHours().toString().length === 1
              ? `0` + new Date(hour17).getHours().toString()
              : new Date(hour17).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour16), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour16).getHours().toString().length === 1
              ? `0` + new Date(hour16).getHours().toString()
              : new Date(hour16).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour16).getHours().toString().length === 1
              ? `0` + new Date(hour16).getHours().toString()
              : new Date(hour16).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour16).getHours().toString().length === 1
              ? `0` + new Date(hour16).getHours().toString()
              : new Date(hour16).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour15), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour15).getHours().toString().length === 1
              ? `0` + new Date(hour15).getHours().toString()
              : new Date(hour15).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour15).getHours().toString().length === 1
              ? `0` + new Date(hour15).getHours().toString()
              : new Date(hour15).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour15).getHours().toString().length === 1
              ? `0` + new Date(hour15).getHours().toString()
              : new Date(hour15).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour14), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour14).getHours().toString().length === 1
              ? `0` + new Date(hour14).getHours().toString()
              : new Date(hour14).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour14).getHours().toString().length === 1
              ? `0` + new Date(hour14).getHours().toString()
              : new Date(hour14).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour14).getHours().toString().length === 1
              ? `0` + new Date(hour14).getHours().toString()
              : new Date(hour14).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour13), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour13).getHours().toString().length === 1
              ? `0` + new Date(hour13).getHours().toString()
              : new Date(hour13).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour13).getHours().toString().length === 1
              ? `0` + new Date(hour13).getHours().toString()
              : new Date(hour13).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour13).getHours().toString().length === 1
              ? `0` + new Date(hour13).getHours().toString()
              : new Date(hour13).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour12), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour12).getHours().toString().length === 1
              ? `0` + new Date(hour12).getHours().toString()
              : new Date(hour12).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour12).getHours().toString().length === 1
              ? `0` + new Date(hour12).getHours().toString()
              : new Date(hour12).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour12).getHours().toString().length === 1
              ? `0` + new Date(hour12).getHours().toString()
              : new Date(hour12).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour11), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour11).getHours().toString().length === 1
              ? `0` + new Date(hour11).getHours().toString()
              : new Date(hour11).getHours().toString()) ===
            d.start_time.slice(0, 11)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour11).getHours().toString().length === 1
              ? `0` + new Date(hour11).getHours().toString()
              : new Date(hour11).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour11).getHours().toString().length === 1
              ? `0` + new Date(hour11).getHours().toString()
              : new Date(hour11).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour10), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour10).getHours().toString().length === 1
              ? `0` + new Date(hour10).getHours().toString()
              : new Date(hour10).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour10).getHours().toString().length === 1
              ? `0` + new Date(hour10).getHours().toString()
              : new Date(hour10).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour10).getHours().toString().length === 1
              ? `0` + new Date(hour10).getHours().toString()
              : new Date(hour10).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour9), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour9).getHours().toString().length === 1
              ? `0` + new Date(hour9).getHours().toString()
              : new Date(hour9).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour9).getHours().toString().length === 1
              ? `0` + new Date(hour9).getHours().toString()
              : new Date(hour9).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour9).getHours().toString().length === 1
              ? `0` + new Date(hour9).getHours().toString()
              : new Date(hour9).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour8), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour8).getHours().toString().length === 1
              ? `0` + new Date(hour8).getHours().toString()
              : new Date(hour8).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour8).getHours().toString().length === 1
              ? `0` + new Date(hour8).getHours().toString()
              : new Date(hour8).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour8).getHours().toString().length === 1
              ? `0` + new Date(hour8).getHours().toString()
              : new Date(hour8).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour7), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour7).getHours().toString().length === 1
              ? `0` + new Date(hour7).getHours().toString()
              : new Date(hour7).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour7).getHours().toString().length === 1
              ? `0` + new Date(hour7).getHours().toString()
              : new Date(hour7).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour7).getHours().toString().length === 1
              ? `0` + new Date(hour7).getHours().toString()
              : new Date(hour7).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour6), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour6).getHours().toString().length === 1
              ? `0` + new Date(hour6).getHours().toString()
              : new Date(hour6).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour6).getHours().toString().length === 1
              ? `0` + new Date(hour6).getHours().toString()
              : new Date(hour6).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour6).getHours().toString().length === 1
              ? `0` + new Date(hour6).getHours().toString()
              : new Date(hour6).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour5), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour5).getHours().toString().length === 1
              ? `0` + new Date(hour5).getHours().toString()
              : new Date(hour5).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour5).getHours().toString().length === 1
              ? `0` + new Date(hour5).getHours().toString()
              : new Date(hour5).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour5).getHours().toString().length === 1
              ? `0` + new Date(hour5).getHours().toString()
              : new Date(hour5).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour4), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour4).getHours().toString().length === 1
              ? `0` + new Date(hour4).getHours().toString()
              : new Date(hour4).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour4).getHours().toString().length === 1
              ? `0` + new Date(hour4).getHours().toString()
              : new Date(hour4).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour4).getHours().toString().length === 1
              ? `0` + new Date(hour4).getHours().toString()
              : new Date(hour4).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour3), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour3).getHours().toString().length === 1
              ? `0` + new Date(hour3).getHours().toString()
              : new Date(hour3).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour3).getHours().toString().length === 1
              ? `0` + new Date(hour3).getHours().toString()
              : new Date(hour3).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour3).getHours().toString().length === 1
              ? `0` + new Date(hour3).getHours().toString()
              : new Date(hour3).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour2), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour2).getHours().toString().length === 1
              ? `0` + new Date(hour2).getHours().toString()
              : new Date(hour2).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour2).getHours().toString().length === 1
              ? `0` + new Date(hour2).getHours().toString()
              : new Date(hour2).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour2).getHours().toString().length === 1
              ? `0` + new Date(hour2).getHours().toString()
              : new Date(hour2).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
    {
      name: format(new Date(hour1), "p"),
      steps: data
        ?.filter(
          (d) =>
            (new Date(hour1).getHours().toString().length === 1
              ? `0` + new Date(hour1).getHours().toString()
              : new Date(hour1).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        ?.filter(
          (d) =>
            (new Date(hour1).getHours().toString().length === 1
              ? `0` + new Date(hour1).getHours().toString()
              : new Date(hour1).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.distance + total, 0),
      calouries_burned: data
        ?.filter(
          (d) =>
            (new Date(hour1).getHours().toString().length === 1
              ? `0` + new Date(hour1).getHours().toString()
              : new Date(hour1).getHours().toString()) ===
            d.start_time.slice(0, 2)
        )
        .reduce((total, value) => value.calouries_burned + total, 0),
    },
  ];

  const allValues = {
    totalSteps: myData.reduce((t, v) => t + v.steps, 0),
    totalDistance: myData.reduce((t, v) => t + v.distance, 0),
    totalCalouriesBurned: myData.reduce((t, v) => t + v.calouries_burned, 0),
  };

  // setTotal Needed

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        <Bar dataKey={focus} fill="#8884d8" />
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
