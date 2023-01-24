import React from "react";
import { useState } from "react";

const FoodLog = () => {
  const [foodValue, setFoodValue] = useState('');
  const [foodData, setFoodData] = useState({});
  const [foodAmount, setFoodAmount] = useState('');
  // console.log(foodAmount)
  console.log(foodValue)

 const data = [
      {
        category: "Beef & Veal Calories",
        name: "beef",
        cal_per_oz: 48,
        per_serving: {
          type: "ounce",
          amount: 6,
          gram: 168
        },
        amount :[{amount:"1 kg"}, {amount:"1 cup"}, {amount:"1 piece"}]
        }
    ]
    console.log(data)

  const handleOnChange = event => {
    setFoodValue(event.target.value);
  }

  const handleAmountChange = event =>{
   
  }

  const onSearch = searchTerm => {
    setFoodValue(searchTerm.name)
    setFoodData(searchTerm)
  }

  const handleAmount = a =>{
    if(foodValue){
      setFoodAmount(a.amount)
    }
    else if(!foodValue){
      setFoodAmount('')
    }
  }

  const handleFoodLogForm = (value) => {
    console.log(value);
  };

  return (
    <div className="card-body border rounded-md">
    <div className="flex items-center justify-between">
      <h2 className="font-bold lg:text-4xl capitalize">Food log</h2>
    </div>

    <form  onSubmit={handleFoodLogForm}>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold capitalize text-2xl">
              what did you eat?
            </span>
          </label>
          <input
          //  {...register(`foodName`)}
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
            <span className="label-text text-white font-semibold lg:text-2xl capitalize">
              how much?
            </span>
          </label>
          <input
            type="text"

            className="input input-md input-bordered bg-white text-black focus:outline-none"
            // {...register(`amount`)}
          />
        </div>
        {/* <div className="form-control lg:basis-1/3">

            className="input input-md input-bordered bg-gray-500 focus:outline-none"
            name="amount"
            value={foodAmount}
            onChange={handleAmountChange}
          />
        </div> */}
        <div>
          {foodData?.amount?.map(a =><div className=" bg-slate-200 w-1/2"
             onClick={() => handleAmount(a)}
            key={a.amount}
          >
             {!foodAmount &&  <p className="text-black p-3 mt-1">{a.amount}</p>}
          </div>)}
        </div>
        </div>
        <div className="form-control basis-1/3">

          <label className="label">
            <span className="label-text font-semibold capitalize text-white lg:text-2xl">
              when?
            </span>
          </label>

          {/* <select className="select bg-white text-black"> */}

          <select  
          // {...register(`time`)} 
          name="time" className="select  bg-white input-md select-bordered">

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
        <button className="btn w-full border-none bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black">Log</button>
      </div>
    </form>
  </div>
 

      )
}

export default FoodLog;
