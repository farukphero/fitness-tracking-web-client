import React, { useState } from 'react';
import FoodInfoSlide from '../FoodInfoSlide/FoodInfoSlide';
import FoodLog from '../FoodLog/FoodLog';
import LoggedFoods from '../LoggedFoods/LoggedFoods';
import LoogedWater from '../LoogedWater/LoogedWater';
import WaterLog from '../WaterLog/WaterLog';
  
const LeftSideLog = ({logedFood, setLogedFood}) => {

    const [result, setResult] = useState(0);
    const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  
  const currentDateOnly = new Date(year, month, day);
  const [startDate, setStartDate] = useState(currentDateOnly);
    return (
       <div>
         <div className='flex space-y-5 flex-col'>
            <FoodLog logedFood={logedFood} setLogedFood={setLogedFood} startDate={startDate} setStartDate={setStartDate}></FoodLog>
            <FoodInfoSlide result={result} setResult={setResult} startDate={startDate} setStartDate={setStartDate}></FoodInfoSlide>
           
        </div>
        <div className='w-[980px] lg:w-full'>
             <LoggedFoods logedFood={logedFood} result={result} setResult={setResult} startDate={startDate} setStartDate={setStartDate}></LoggedFoods>
        </div>
        <div>
          <WaterLog startDate={startDate} setStartDate={setStartDate}></WaterLog>
        </div>
        <div>
          <LoogedWater startDate={startDate} setStartDate={setStartDate}></LoogedWater>
        </div>
       </div>
    );
};

export default LeftSideLog;