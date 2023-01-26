import React, { useEffect } from "react";
import { useState } from "react";

const LoggedFoods = ({ logedFood }) => {
  const [result, setResult] = useState(0);
  // console.log(calorey)

  useEffect(() => {
    let total = (logedFood.reduce((sum, food) => sum + parseInt(food.calorey), 0));
    setResult(total);
  }, [logedFood]);

  const handleFavoriteFood =(food)=>{
    const favouriteFood = {food: food.food, amount: food.amount, calorey: food.calorey, time: food.time, userEmail: food.userEmail}
    console.log(favouriteFood)
    fetch('http://localhost:5000/favouriteFood', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(favouriteFood)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        
      })
  }
  return (
    <div>
      <h2 className="font-bold text-3xl my-3 capitalize">logged foods</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>

              <th>Food Name</th>
              <th>Amount</th>
              <th>Calorey</th>
              <th>time of intake</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {logedFood?.map(food => <tr onClick={()=>handleFavoriteFood(food)} className="hover" key={food._id}>
              <th>{food.food}</th>
              <td>{food.amount}</td>
              <td>{food.calorey}</td>
              <td>{food.time}</td>
              <td><button className="btn btn-xs">Add To Favourite</button></td>
            </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th></th>
              <th>{ result} cal</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};

export default LoggedFoods;
