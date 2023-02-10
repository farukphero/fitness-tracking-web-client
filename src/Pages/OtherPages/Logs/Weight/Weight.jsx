import React, { useContext } from 'react';
import useTitle from '../../../../Hooks/useTitle/useTitle';
import {ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend } from 'recharts';

import WeightSummery from './WeightSummery/WeightSummery';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const Weight = () => {
    useTitle("Log/Weight")
    const {user}=useContext(AuthContext)  

    const {
        data: logedInfo = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["logedInfo", user?.email],
        queryFn: () =>
          fetch(`http://localhost:5000/logedWeight?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              return data;
            }),
      });
      let data=[]
      if(logedInfo.length>0){
        data=logedInfo
      }
     

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
                        <XAxis dataKey="date" />
                        <YAxis/>
                        <Tooltip />
                        <Line type="monotone" dataKey="weight" stroke="#2D9F4C" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            {/* <SideForm1 setLogedWeight={setLogedWeight}></SideForm1> */}
            <WeightSummery refetch={refetch}></WeightSummery>


        </div>


    );
};

export default Weight;