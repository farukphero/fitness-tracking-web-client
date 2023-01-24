import React, { useState } from 'react';
import FoodInfoSlide from '../FoodInfoSlide/FoodInfoSlide';
import FoodLog from '../FoodLog/FoodLog';
import LoggedFoods from '../LoggedFoods/LoggedFoods';
  
const LeftSideLog = () => {
    const [logedFood, setLogedFood] = useState([]);
    return (
        <div className='flex space-y-5 flex-col'>
            <FoodLog logedFood={logedFood} setLogedFood={setLogedFood}></FoodLog>
            <FoodInfoSlide></FoodInfoSlide>
            <LoggedFoods logedFood={logedFood}></LoggedFoods>
        </div>
    );
};

export default LeftSideLog;