import React, { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import { FoodContext } from "../../../../../../Contexts/FoodProvider/FoodProvider";
import { useDispatch, useSelector } from "react-redux";
import loadFoodData from "../../../../../../redux/thunk/foods/fetchFoods";
import postLogFood from "../../../../../../redux/thunk/foods/postLogFood";
import loadLogFoodData from "../../../../../../redux/thunk/foods/fetchLogFoods";

const FoodLog = ({  setLogedFood, startDate, setStartDate, item, setItem, setShowForm, }) => {
  const { foodValue, setFoodValue, foodData, setFoodData, foodAmount, setFoodAmount, foodCalory, setFoodCalory } = useContext(FoodContext);

  const user = useContext(AuthContext);
  const data = useSelector((state) => state.foods);
  const logedFood = useSelector((state) => state.loggedFoods);
  // console.log(logedFood)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFoodData())
  }, [dispatch])
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
    const date = startDate.toLocaleDateString();
    const loged = { food: food, amount: amount, time: time, calorey: calorey, userEmail: userEmail, date: date }
    dispatch(postLogFood(loged))
  };

  useEffect(() => {
    dispatch(loadLogFoodData(user?.user?.email, startDate.toLocaleDateString() ))
  } ,[dispatch, user?.user?.email, startDate])
  const handleFormClose = () => {
    setItem(null);
    setShowForm(false);
  };

  return (
    <div className="card-body border rounded-md">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold lg:text-4xl capitalize">Food log</h2>

        <div>
          <DatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-transparent"
            name="date"
            selected={startDate}
            value={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>
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
              key={item._id}
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
                name="amount"
                value={foodValue && foodAmount}
                className="input bg-gray-500 input-bordered focus:outline-none w-72 lg:w-[510px]"
              />
            </div>
            <div>
              {foodData?.amount?.map(a => <div className=" bg-slate-200"
                onClick={() => handleAmount(a, foodValue)}
                key={a._id}
              >
                {!foodAmount && <p className="text-black p-3 mt-1">{a.amount}</p>}
              </div>)}
            </div>
          </div>
          <div className="form-control">

            <label className="label w-2/3">
              <span className="label-text font-semibold capitalize text-white lg:text-2xl">
                when?
              </span>
            </label> <select
              name="time" className="select select-bordered" defaultValue="Anytime">
                
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
          <button className="btn bg-secondary hover:bg-secondary text-black w-full border-2  border-green-600 rounded-md">Log</button>
        </div>
      </form>
    </div>


  )
}

export default FoodLog;