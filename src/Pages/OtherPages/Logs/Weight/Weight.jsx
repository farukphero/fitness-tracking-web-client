import React, { useContext } from 'react';
import useTitle from '../../../../Hooks/useTitle/useTitle';

import WeightSummery from './WeightSummery/WeightSummery';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import WeightGoalChart from './WeightGoalChart/WeightGoalChart';
import { useDispatch, useSelector } from 'react-redux';
import loadWeightData from '../../../../redux/thunk/weight/fetchWeight';
import { useEffect } from 'react';

const Weight = () => {
    useTitle("Log/Weight")
    const {user}=useContext(AuthContext);
    // const data = useSelector((state) => state.weights.weight);
    // console.log(data)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(loadWeightData(user?.email))
    // }, [dispatch, user?.email])

    const {
        data: logedInfo = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["logedInfo", user?.email],
        queryFn: () =>
          fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
            //   console.log(data);
              return data;
            }),
      });
      let data=[]
      if(logedInfo.length>0){
        data=logedInfo
      }
     

    return (


        <div className='w-11/12 mx-auto'>

           <WeightGoalChart data={data}></WeightGoalChart>
            {/* <SideForm1 setLogedWeight={setLogedWeight}></SideForm1> */}
            <WeightSummery refetch={refetch}></WeightSummery>
            {/* <WeightSummery ></WeightSummery> */}


        </div>


    );
};

export default Weight;