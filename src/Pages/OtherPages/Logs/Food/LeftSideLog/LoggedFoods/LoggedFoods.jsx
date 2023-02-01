import React, { useEffect, useState } from "react";

const LoggedFoods = ({ logedFood }) => {
  const [result, setResult] = useState(0);
  // console.log(calorey)

  useEffect(() => {
    let total = logedFood.reduce(
      (sum, food) => sum + parseInt(food.calorey),
      0
    );
    setResult(total);
  }, [logedFood]);
  // new pull
  const handleFavoriteFood = (food) => {
    const favouriteFood = {
      food: food.food,
      amount: food.amount,
      calorey: food.calorey,
      time: food.time,
      userEmail: food.userEmail,
    };
    console.log(favouriteFood);
    fetch("http://localhost:5000/favouriteFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favouriteFood),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h2 className="font-bold text-3xl my-3 capitalize mt-24 lg:mt-5">
        logged foods
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-gray-300 text-black text-lg">Food Name</th>
              <th className="bg-gray-300 text-black text-lg">Amount</th>
              <th className="bg-gray-300 text-black text-lg">Calorey</th>
              <th className="bg-gray-300 text-black text-lg">time of intake</th>
              <th className="bg-gray-300 text-black text-lg"></th>
            </tr>
          </thead>
          <tbody>
            {logedFood?.map((food) => (
              <tr onClick={() => handleFavoriteFood(food)} key={food._id}>
                <th className="bg-white text-black">{food.food}</th>
                <td className="bg-white text-black">{food.amount}</td>
                <td className="bg-white text-black">{food.calorey}</td>
                <td className="bg-white text-black">{food.time}</td>
                <td className="bg-white text-black">
                  <button className="btn btn-xs text-white">
                    Add To Favourite
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="text-black bg-gray-400 text-lg">Total</th>
              <th className="text-black bg-gray-400 text-lg"></th>
              <th className="text-black bg-gray-400 text-lg">{result} cal</th>
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
