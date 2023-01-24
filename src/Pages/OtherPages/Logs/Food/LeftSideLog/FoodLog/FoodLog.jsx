import React from "react";
import { useState } from "react";

const FoodLog = ({logedFood, setLogedFood}) => {
  const [foodValue, setFoodValue] = useState('');
  const [foodData, setFoodData] = useState({});
  const [foodAmount, setFoodAmount] = useState('');
  const [foodCalory, setFoodCalory] = useState('');
  // const [logedFood, setLogedFood] = useState({});
  console.log('calory', foodCalory)
  console.log(foodAmount)
  console.log(foodValue)
  console.log('logFood', logedFood)

 const data = [
      {
        category: "Beef & Veal Calories",
        name: "beeff",
        cal_per_oz: 48,
        per_serving: {
          type: "ounce",
          amount: 6,
          gram: 168
        },
        details :[{amount:"1 kg", calorey: "1000 cal"}, {amount:"1 cup", calory:"500 cal"}, {amount:"1 piece", calorey: "50 cal"}]
        },
        {
          category: "Beef & Veal Calories",
          name: "beef brisket",
          cal_per_oz: 38,
          per_serving: {
            type: "piece",
            amount: 1,
            gram: 178
          },
          details :[{amount:"1 piece"}, {amount:"2 pieces"}, {amount:"3 pieces"}]
        },
        {
          category: "Beef & Veal Calories",
          name: "beef curry",
          cal_per_oz: 38,
          per_serving: {
            type: "piece",
            amount: 1,
            gram: 178
          },
          details :[{amount:"1 plate"}, {amount:"2 plate"}, {amount:"3 plate"}]
        },
    ]
    console.log(data)
   

  const handleOnChange = event => {
    setFoodValue(event.target.value);
    if(event.target.value === ''){
      setFoodAmount('')
      setFoodData({})
      setFoodCalory("")
    }
    
  }

  const handleAmountChange = event =>{
   console.log(event.target.value)
  }

  const onSearch = searchTerm => {
    setFoodValue(searchTerm.name)
    setFoodData(searchTerm)
  }

  const handleAmount =( a, foodValue )=>{
    if(!foodValue){
      setFoodAmount('')
      setFoodCalory("")
    }
    setFoodAmount(a.amount)
    setFoodCalory(a.calorey)
  }

  const handleFoodLogForm = (event) => {
    event.preventDefault()
    const food = event.target.foodName.value;
    const amount = event.target.amount.value;
    const time = event.target.time.value;
    const calorey = foodCalory;
    const loged = {food:food, amount:amount, time:time, calorey:calorey}
    // setLogedFood(loged)
    setLogedFood([...logedFood, loged])
    console.log(food, amount, time, calorey)
  };

  return (
    <>
       <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl capitalize">food log</h2>
        </div>
        <form onSubmit={handleFoodLogForm}>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold capitalize text-2xl">
                  what did you eat?
                </span>
              </label>
              <input
                type="text"
                className="input bg-gray-500 input-bordered focus:outline-none"
                name="foodName"
                value={foodValue}
                onChange={handleOnChange}
              />
            </div>
            <div>
              {data.filter(item => {
                const searchTerm = foodValue.toLowerCase();
                const foodName = item.name.toLowerCase();
                return searchTerm && foodName.startsWith(searchTerm) && foodName !== searchTerm;
              }).map(item => <div className=" bg-slate-200 w-1/2"
                // onClick={() => onSearch(item.name)}
                 onClick={() => onSearch(item)}
                key={item.name}
              >
                <p className="text-black p-3 mt-1">{item.name}</p>
              </div>)}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div>
            <div className="form-control basis-2/3">
              <label className="label">
                <span className="label-text text-white font-semibold text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                className="input input-md input-bordered bg-gray-500 focus:outline-none"
                name="amount"
                value={foodValue && foodAmount }
                onChange={handleAmountChange}
              />
            </div>
            <div>
              {foodData?.details?.map(a =><div className=" bg-slate-200 w-1/2"
                 onClick={() => handleAmount(a,foodValue)}
                key={a.amount}
              >
                 {!foodAmount &&  <p className="text-black p-3 mt-1">{a.amount}</p>}
              </div>)}
            </div>
            </div>
            <div className="form-control basis-1/3">
              <label className="label">
                <span className="label-text font-semibold capitalize text-white text-2xl">
                  when?
                </span>
              </label>
              <select name="time" className="select bg-gray-500 input-md select-bordered">
                <option disabled selected>
                  Anytime
                </option>
                <option>Breakfast</option>
                <option>Morning Snack</option>
                <option>Launch</option>
                <option>Afternoon Snack</option>
                <option>Dinner</option>
                <option>After Dinner</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-contact capitalize">Log</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FoodLog;
