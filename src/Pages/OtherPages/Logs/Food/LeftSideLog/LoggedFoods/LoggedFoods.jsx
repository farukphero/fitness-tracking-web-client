import React, { useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import addFavoriteFood from "../../../../../../redux/thunk/foods/addToFavorite";
import deleteLoggedFood from "../../../../../../redux/thunk/foods/deleteLoggedFood";
import loadLogFoodData from "../../../../../../redux/thunk/foods/fetchLogFoods";

const LoggedFoods = ({ result, setResult, startDate, setStartDate }) => {
  const dispatch = useDispatch();

  const user = useContext(AuthContext);

  const logedFood = useSelector((state) => state.loggedFoods);
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(
      loadLogFoodData(user?.user?.email, startDate?.toLocaleDateString())
    );
  }, [dispatch, user?.user?.email, startDate]);

  useEffect(() => {
    let total = logedFood.reduce(
      (sum, food) => sum + parseInt(food.calorey),
      0
    );
    setResult(total);
  }, [logedFood, setResult]);

  const handleFavoriteFood = (food) => {
    const favouriteFood = {
      food: food.food,
      amount: food.amount,
      calorey: food.calorey,
      time: food.time,
      userEmail: food.userEmail,
      date: food.date,
    };
    const isExist =  favorite.some(obj => {
      return obj.food === favouriteFood.food;
    });
    
    if (isExist) {
      toast.error('This food is already exist in favorite food!')
    } else {
      console.log("Object does not exist in array!");
      dispatch(addFavoriteFood(favouriteFood))
      toast.success('This food is successfully make favorite food!')
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold text-3xl my-3 capitalize mt-24 lg:mt-5">
          logged foods
        </h2>
        <div>
          <DatePicker
            className="font-bold w-2/4 lg:text-2xl capitalize bg-transparent"
            name="date"
            defaultValue="select"
            selected={startDate}
            // value={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-gray-300 text-black text-lg">Food Name</th>
              <th className="bg-gray-300 text-black text-lg">Amount</th>
              <th className="bg-gray-300 text-black text-lg">Calorey</th>
              <th className="bg-gray-300 text-black text-lg">time of intake</th>
              <th className="bg-gray-300 text-black text-lg"></th>
              <th className="bg-gray-300 text-black text-lg"></th>
            </tr>
          </thead>
          <tbody>
            {logedFood?.map((food) => (
              <tr key={food._id}>
                <th className="bg-white text-black">{food.food}</th>
                <td className="bg-white text-black">{food.amount}</td>
                <td className="bg-white text-black">{food.calorey}</td>
                <td className="bg-white text-black">{food.time}</td>

                <td className="bg-white text-black">
                  <button
                    onClick={() => handleFavoriteFood(food)}
                    className="btn btn-xs text-white"
                  >
                    Add To Favorite
                  </button>
                </td>
                <td className="bg-white text-black">
                  <button
                    onClick={() => dispatch(deleteLoggedFood(food._id))}
                    className="btn btn-xs text-white"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="text-black bg-gray-400 text-lg">Total</th>
              <th className="text-black bg-gray-400 text-lg"></th>
              <th className="text-black bg-gray-400 text-lg">{result} Cal</th>
              <th className="text-black bg-gray-400 text-lg"></th>
              <th className="text-black bg-gray-400 text-lg"></th>
              <th className="text-black bg-gray-400 text-lg"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default LoggedFoods;
