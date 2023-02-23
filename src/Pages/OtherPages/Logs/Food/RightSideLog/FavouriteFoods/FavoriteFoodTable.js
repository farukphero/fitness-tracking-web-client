import React from "react";
import { useDispatch } from "react-redux";
import deleteFavoritedFood from "../../../../../../redux/thunk/foods/deleteFavouriteFood";

const FavoriteFoodTable = ({ food, item, setItem }) => {
  const dispatch = useDispatch();

  const handleLogFood = (food) => {
    console.log(food);
    setItem(food);
  };

  return (
    <div className="flex justify-center items-center gap-2 w-full mt-3 mb-1 bg-white text-black">
      <div>
        <tr onClick={() => handleLogFood(food)}>
          <td className="bg-white text-black">{food.calorey} Cals</td>
          <td className="bg-white text-black">{food.food}</td>
        </tr>
      </div>
      <div className="pr-3">
        <button
          className="btn btn-xs text-white"
          onClick={() => dispatch(deleteFavoritedFood(food._id))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default FavoriteFoodTable;
