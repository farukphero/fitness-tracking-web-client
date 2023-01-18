import React from 'react';
import FoodStats from '../FoodStats/FoodStats';
import FavouriteFoods from '../FavouriteFoods/FavouriteFoods';

const RightSideLog = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <FavouriteFoods></FavouriteFoods>
            <FoodStats></FoodStats>
        </div>
    );
};

export default RightSideLog;