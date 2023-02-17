import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';
import deleteFavoritedFood from '../../../../../../redux/thunk/foods/deleteFavouriteFood';

const FavoriteFoodTable = ({ food, item, setItem }) => {

  const dispatch = useDispatch();

  //  const handleDelete = (food) => {
  //     fetch(`https://fitness-tracking-web-server.vercel.app/favoriteFood/${food._id}`, {
  //       method: 'DELETE'
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //   }

  const handleLogFood = (food) => {
    console.log(food)
    setItem(food)
  }


  return (

    <div className="flex justify-center items-center gap-2 w-full mt-3 mb-1 bg-white text-black">

      <div>
        <tr onClick={() => handleLogFood(food)}>
          <td className="bg-white text-black">{food.calorey} Cals</td>
          <td className="bg-white text-black">{food.food}</td>
          {/* <td className="bg-white text-black" onClick={() => handleLogFood(food)}>Log Food</td> */}
         
        </tr>
      </div>
      <div className='pr-3'>
        <button className="btn btn-xs text-white" onClick={() => dispatch(deleteFavoritedFood(food._id))}>X</button>
      </div>

    </div>

  );
};

export default FavoriteFoodTable;




