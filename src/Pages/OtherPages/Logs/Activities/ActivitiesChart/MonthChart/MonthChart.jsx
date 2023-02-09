import { format } from "date-fns";
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

const MonthChart = ({ data, focus, setTotal }) => {
  const date30 = new Date(new Date() - 24 * 60 * 60 * 1000 * 30)
    .toISOString()
    .slice(0, 10);
  const date29 = new Date(new Date() - 24 * 60 * 60 * 1000 * 29)
    .toISOString()
    .slice(0, 10);
  const date28 = new Date(new Date() - 24 * 60 * 60 * 1000 * 28)
    .toISOString()
    .slice(0, 10);
  const date27 = new Date(new Date() - 24 * 60 * 60 * 1000 * 27)
    .toISOString()
    .slice(0, 10);
  const date26 = new Date(new Date() - 24 * 60 * 60 * 1000 * 26)
    .toISOString()
    .slice(0, 10);
  const date25 = new Date(new Date() - 24 * 60 * 60 * 1000 * 25)
    .toISOString()
    .slice(0, 10);
  const date24 = new Date(new Date() - 24 * 60 * 60 * 1000 * 24)
    .toISOString()
    .slice(0, 10);
  const date23 = new Date(new Date() - 24 * 60 * 60 * 1000 * 23)
    .toISOString()
    .slice(0, 10);
  const date22 = new Date(new Date() - 24 * 60 * 60 * 1000 * 22)
    .toISOString()
    .slice(0, 10);
  const date21 = new Date(new Date() - 24 * 60 * 60 * 1000 * 21)
    .toISOString()
    .slice(0, 10);
  const date20 = new Date(new Date() - 24 * 60 * 60 * 1000 * 20)
    .toISOString()
    .slice(0, 10);
  const date19 = new Date(new Date() - 24 * 60 * 60 * 1000 * 19)
    .toISOString()
    .slice(0, 10);
  const date18 = new Date(new Date() - 24 * 60 * 60 * 1000 * 18)
    .toISOString()
    .slice(0, 10);
  const date17 = new Date(new Date() - 24 * 60 * 60 * 1000 * 17)
    .toISOString()
    .slice(0, 10);
  const date16 = new Date(new Date() - 24 * 60 * 60 * 1000 * 16)
    .toISOString()
    .slice(0, 10);
  const date15 = new Date(new Date() - 24 * 60 * 60 * 1000 * 15)
    .toISOString()
    .slice(0, 10);
  const date14 = new Date(new Date() - 24 * 60 * 60 * 1000 * 14)
    .toISOString()
    .slice(0, 10);
  const date13 = new Date(new Date() - 24 * 60 * 60 * 1000 * 13)
    .toISOString()
    .slice(0, 10);
  const date12 = new Date(new Date() - 24 * 60 * 60 * 1000 * 12)
    .toISOString()
    .slice(0, 10);
  const date11 = new Date(new Date() - 24 * 60 * 60 * 1000 * 11)
    .toISOString()
    .slice(0, 10);
  const date10 = new Date(new Date() - 24 * 60 * 60 * 1000 * 10)
    .toISOString()
    .slice(0, 10);
  const date9 = new Date(new Date() - 24 * 60 * 60 * 1000 * 9)
    .toISOString()
    .slice(0, 10);
  const date8 = new Date(new Date() - 24 * 60 * 60 * 1000 * 8)
    .toISOString()
    .slice(0, 10);
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
      name: format(new Date(date30), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date30 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date30)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date30)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date30)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date30)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date29), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date29 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date29)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date29)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date29)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date29)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date28), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date28 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date28)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date28)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date28)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date28)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date27), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date27 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date27)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date27)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date27)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date27)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date26), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date26 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date26)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date26)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date26)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date26)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date25), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date25 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date25)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date25)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date25)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date25)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date24), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date24 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date24)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date24)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date24)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date24)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date23), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date23 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date23)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date23)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date23)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date23)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date22), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date22 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date22)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date22)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date22)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date22)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date21), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date21 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date21)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date21)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date21)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date21)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date20), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date20 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date20)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date20)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date20)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date20)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date19), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date19 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date19)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date19)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date19)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date19)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date18), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date18 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date18)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date18)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date18)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date18)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date17), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date17 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date17)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date17)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date17)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date17)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date16), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date16 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date16)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date16)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date16)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date16)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date15), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date15 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date15)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date15)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date15)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date15)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date14), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date14 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date14)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date14)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date14)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date14)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date13), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date13 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date13)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date13)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date13)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date13)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date12), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date12 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date12)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date12)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date12)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date12)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date11), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date11 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date11)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date11)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date11)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date11)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date10), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date10 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date10)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date10)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date10)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date10)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date9), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date9 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date9)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date9)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date9)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date9)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date8), "PP"),
      steps: data
        .filter(
          (d) =>
            d?.timestamp?.slice(0, 10) === date8 && typeof d.steps === "number"
        )
        .reduce((total, value) => value.steps + total, 0),
      distance: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date8)
        .reduce((total, value) => parseFloat(value.distance) + total, 0),
      calouries_burned: data
        .filter((d) => d?.timestamp?.slice(0, 10) === date8)
        .reduce((total, value) => parseFloat(value.calourie_burned) + total, 0),
      floors: isNaN(
        data
          .filter((d) => d?.timestamp?.slice(0, 10) === date8)
          .reduce((total, value) => parseFloat(value.floors) + total, 0)
      )
        ? 0
        : data
            .filter((d) => d?.timestamp?.slice(0, 10) === date8)
            .reduce((total, value) => parseFloat(value.floors) + total, 0),
    },
    {
      name: format(new Date(date7), "PP"),
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
      name: format(new Date(date6), "PP"),
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
      name: format(new Date(date5), "PP"),
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
      name: format(new Date(date4), "PP"),
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
      name: format(new Date(date3), "PP"),
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
      name: format(new Date(date2), "PP"),
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
      name: format(new Date(date1), "PP"),
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
    type: `monthly`,
    steps: allValues.totalSteps,
    kilometers: allValues.totalDistance,
    calouries: allValues.totalCalouriesBurned,
  });

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        <Bar dataKey={focus} fill="#8884d8" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis tick={{ stroke: `white` }} dataKey="name" />
        <YAxis tick={{ stroke: `yellow` }} />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthChart;
