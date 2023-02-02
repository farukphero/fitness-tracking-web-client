import React from 'react';
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
      name:"01/01/2023",
      
      uv: 10000,
      pv: 2400,
      amt: 2400,
    },
    {
      name:"02/01/2023",
      
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name:"03/01/2023",
      
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name:"04/01/2023",
      
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name:"05/01/2023",
      
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name:"06/01/2023",
      
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name:"07/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"08/01/2023",
      
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name:"09/01/2023",
      
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name:"10/01/2023",
      
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name:"11/01/2023",
      
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name:"12/01/2023",
      
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name:"13/01/2023",
      
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name:"14/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"15/01/2023",
      
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name:"16/01/2023",
      
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name:"17/01/2023",
      
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name:"18/01/2023",
      
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name:"19/01/2023",
      
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name:"20/01/2023",
      
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name:"21/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"22/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"23/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"24/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"25/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"26/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"27/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"28/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"29/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"30/01/2023",
      
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name:"31/01/2023",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }
  ];
  
const MonthChart = ({data}) => {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={150} height={40} data={myData}>
        <Bar dataKey="uv" fill="#8884d8" />
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