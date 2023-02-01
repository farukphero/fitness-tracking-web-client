import React from 'react';
import FoodStats from '../FoodStats/FoodStats';
import FavouriteFoods from '../FavouriteFoods/FavouriteFoods';

const RightSideLog = ({logedFood, setLogedFood}) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <FavouriteFoods logedFood={logedFood} setLogedFood={setLogedFood}></FavouriteFoods>
            <FoodStats></FoodStats>
        </div>
    );
};

export default RightSideLog;