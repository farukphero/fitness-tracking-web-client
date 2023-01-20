import React from 'react';
import FoodInfoSlide from '../FoodInfoSlide/FoodInfoSlide';
import FoodLog from '../FoodLog/FoodLog';
import LoggedFoods from '../LoggedFoods/LoggedFoods';
  
const LeftSideLog = () => {
    return (
        <div className='flex space-y-5 flex-col'>
            <FoodLog></FoodLog>
            <FoodInfoSlide></FoodInfoSlide>
            <LoggedFoods></LoggedFoods>
        </div>
    );
};

export default LeftSideLog;