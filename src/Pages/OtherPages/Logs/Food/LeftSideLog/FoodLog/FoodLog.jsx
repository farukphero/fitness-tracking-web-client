import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";

const FoodLog = () => {
  // const { register, handleSubmit } = useForm();
  const [foodValue, setFoodValue] = useState('');

  const data = [{ name: 'Rice' }, { name: 'Tea' }, { name: 'Toast' }]

  const handleOnChange = event => {
    setFoodValue(event.target.value);
  }

  const onSearch = searchTerm => {
    setFoodValue(searchTerm)
  }

  const handleFoodLogForm = (value) => {
    console.log(value);
  };

  return (
    <>
      {/* <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl capitalize">food log</h2>
        </div>
        <form onSubmit={handleSubmit(handleFoodLogForm)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-semibold capitalize text-2xl">
                what did you eat?
              </span>
            </label>
            <input
              type="text"
              className="input bg-gray-500 input-bordered focus:outline-none"
              {...register(`foodName`)}
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div className="form-control basis-2/3">
              <label className="label">
                <span className="label-text text-white font-semibold text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                className="input input-md input-bordered bg-gray-500 focus:outline-none"
                {...register(`amount`)}
              />
            </div>
            <div className="form-control basis-1/3">
              <label className="label">
                <span className="label-text font-semibold capitalize text-white text-2xl">
                  when?
                </span>
              </label>
              <select {...register(`time`)} className="select bg-gray-500 input-md select-bordered">
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
      </div> */}

      <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl capitalize">food log</h2>
        </div>
        <form>
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
                onClick={() => onSearch(item.name)}
                key={item.name}
              >
                <p className="text-black p-3 mt-1">{item.name}</p>
              </div>)}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-3">
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
              />
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
