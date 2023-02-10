import React from 'react';

import {ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend } from 'recharts';
const WeightGoalChart = ({data}) => {
    return (
        <div>
            <div className='bg-white '>


                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                        className='bg-white mx-auto mb-12'
                        width={150}
                        height={40}
                        data={data}


                    >
                        <CartesianGrid strokeDasharray="1" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="weight" stroke="#2D9F4C" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default WeightGoalChart;