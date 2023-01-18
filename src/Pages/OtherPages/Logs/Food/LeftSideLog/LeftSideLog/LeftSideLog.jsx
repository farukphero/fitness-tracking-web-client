import React from 'react';
import FoodLog from '../FoodLog/FoodLog';
import FoodInfoSlide from '../FoodInfoSlide/FoodInfoSlide';
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