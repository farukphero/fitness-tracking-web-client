import React, { useState } from 'react';
import FoodInfoSlide from '../FoodInfoSlide/FoodInfoSlide';
import FoodLog from '../FoodLog/FoodLog';
import LoggedFoods from '../LoggedFoods/LoggedFoods';
  
const LeftSideLog = () => {
    const [logedFood, setLogedFood] = useState([]);
    return (
       <div>
         <div className='flex space-y-5 flex-col'>
            <FoodLog logedFood={logedFood} setLogedFood={setLogedFood}></FoodLog>
            <FoodInfoSlide></FoodInfoSlide>
           
        </div>
        <div className='w-[980px] lg:w-full'>
             <LoggedFoods logedFood={logedFood}></LoggedFoods>
        </div>
       </div>
    );
};

export default LeftSideLog;