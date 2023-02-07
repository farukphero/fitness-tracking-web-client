import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

const LoggedFoods = ({ logedFood, result, setResult, startDate, setStartDate }) => {
  
  // console.log(calorey)

  // const currentDate = new Date();
  // const year = currentDate.getFullYear();
  // const month = currentDate.getMonth();
  // const day = currentDate.getDate();
  
  // const currentDateOnly = new Date(year, month, day);
  // const [startDate, setStartDate] = useState(currentDateOnly);

  useEffect(() => {
    let total = (logedFood.reduce((sum, food) => sum + parseInt(food.calorey), 0));
    setResult(total);
  }, [logedFood]);
// new pull
  const handleFavoriteFood =(food)=>{
    const favouriteFood = {food: food.food, amount: food.amount, calorey: food.calorey, time: food.time, userEmail: food.userEmail, date: food.date}
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

  const handleDeleteLogFood = (food) =>{
    fetch(`http://localhost:5000/loggedFood/${food._id}`, { 
            method: 'DELETE' 
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
  }
  return (
    <div>
      <div className="flex items-center justify-between w-full">
      <h2 className="font-bold text-3xl my-3 capitalize mt-24 lg:mt-5">logged foods</h2>
      <div>
   <DatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-green-800"
        name="date"
        defaultValue='select'
      selected={startDate}
      // value={startDate}
      onChange={date => setStartDate(date)}
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
            {logedFood?.map(food => <tr  key={food._id}>
              <th className="bg-white text-black">{food.food}</th>
              <td className="bg-white text-black">{food.amount}</td>
              <td className="bg-white text-black">{food.calorey}</td>
              <td className="bg-white text-black">{food.time}</td>

              <td className="bg-white text-black"><button onClick={()=>handleFavoriteFood(food)} className="btn btn-xs text-white">Add To Favourite</button></td>
              
              <td className="bg-white text-black"><button onClick={()=>handleDeleteLogFood(food)}  className="btn btn-xs text-white">X</button></td>
            </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th className="text-black bg-gray-400 text-lg">Total</th>
              <th className="text-black bg-gray-400 text-lg"></th>
              <th className="text-black bg-gray-400 text-lg">{ result} cal</th>
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