import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const FoodLog = ({ logedFood, setLogedFood }) => {
  const [foodValue, setFoodValue] = useState('');
  const [foodData, setFoodData] = useState({});
  const [foodAmount, setFoodAmount] = useState('');
  const [foodCalory, setFoodCalory] = useState('');
  const [data, setData] = useState([]);
  const user = useContext(AuthContext);
  // console.log(logedFood)
  // console.log(user.user.email)

  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  // console.log(data)

  const handleOnChange = event => {
    setFoodValue(event.target.value);
    if (event.target.value === '') {
      setFoodAmount('')
      setFoodData({})
      setFoodCalory("")
    }

  }

  const onSearch = searchTerm => {
    setFoodValue(searchTerm.name)
    setFoodData(searchTerm)
  }

  const handleAmount = (a, foodValue) => {
    if (!foodValue) {
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
    const userEmail = user?.user?.email;
    const loged = { food: food, amount: amount, time: time, calorey: calorey, userEmail: userEmail }
    fetch('http://localhost:5000/loggedFood', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loged)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if(result.acknowledged){
          refetch()
        }
      })

  };

  const { isLoading, error, data: food, refetch } = useQuery({
    queryKey: ['loggedFood/userEmail',],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/loggedFood/${user?.user?.email}`);
      const data = await res.json();
      return setLogedFood(data)
    }
  })
  refetch()

  if (isLoading) return <progress className="progress w-56"></progress>

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="card-body border rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="font-bold lg:text-4xl capitalize">Food log</h2>
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
                <span className="label-text bg-gray-500 text-white font-semibold lg:text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                name="amount"
                value={foodValue && foodAmount}
                className="input bg-gray-500 input-bordered focus:outline-none"
              />
            </div>
            <div>
              {foodData?.amount?.map(a => <div className=" bg-slate-200 w-1/2"
                onClick={() => handleAmount(a, foodValue)}
                key={a._id}
              >
                {!foodAmount && <p className="text-black p-3 mt-1">{a.amount}</p>}
              </div>)}
            </div>
          </div>
          <div className="form-control basis-1/3">

            <label className="label">
              <span className="label-text font-semibold capitalize text-white lg:text-2xl">
                when?
              </span>
            </label> <select
              name="time" className="select  bg-gray input-md select-bordered">

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
