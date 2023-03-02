import React from 'react';
import FoodStats from '../FoodStats/FoodStats';
import FavouriteFoods from '../FavouriteFoods/FavouriteFoods';

const RightSideLog = ({logedFood, setLogedFood}) => {
    return (
        <div className='flex flex-col gap-y-4 ml-8'>
            <FavouriteFoods logedFood={logedFood} setLogedFood={setLogedFood}></FavouriteFoods>
            <div className='border-2 rounded px-2'>
                <h3 className='text-3xl font-bold px-5 py-3'>Food Stats</h3>
            <FoodStats></FoodStats>
            </div>
        </div>
    );
};

export default RightSideLog;