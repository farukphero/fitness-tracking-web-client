import React from 'react';
import useTitle from '../../../../Hooks/useTitle/useTitle';
import SideForm1 from './SideForm1/SideForm1';
import {ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useState } from 'react';

const Weight = () => {
    useTitle("Log/Weight")
    const [logedWeight, setLogedWeight] = useState([])
    const data = logedWeight;

    return (


        <div className='w-11/12 mx-auto'>

            <div className='bg-white '>


                <ResponsiveContainer  width="100%" aspect={3}>
                    <LineChart
                        className='bg-white mx-auto mb-12'
                        width={150}
                        height={40}
                        data={data}
                        
                        
                    >
                        <CartesianGrid strokeDasharray="1" />
                        <XAxis className='text-black' dataKey="formatedDate" />
                        <YAxis/>
                        <Tooltip />
                        <Line type="monotone" dataKey="weight" stroke="#2D9F4C" fill="#8884d8" />
                        <Line type="monotone" dataKey="fat" stroke="#E64133" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            <SideForm1 setLogedWeight={setLogedWeight}></SideForm1>


        </div>


    );
};

export default Weight;