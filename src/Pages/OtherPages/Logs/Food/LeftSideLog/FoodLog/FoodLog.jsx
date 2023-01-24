import React from "react";
import { useForm } from "react-hook-form";

const FoodLog = () => {
  const { register, handleSubmit } = useForm();

  const handleFoodLogForm = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold lg:text-4xl capitalize">Food log</h2>
        </div>
        <form onSubmit={handleSubmit(handleFoodLogForm)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-semibold capitalize lg:text-2xl">
                what did you eat?
              </span>
            </label>
            <input
              type="text"
              className="input bg-white text-black input-bordered focus:outline-none"
              {...register(`foodName`)}
            />
          </div>
          <div className="lg:flex items-center lg:space-x-3">
            <div className="form-control basis-2/3">
              <label className="label">
                <span className="label-text text-white font-semibold lg:text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                className="input input-md input-bordered bg-white text-black focus:outline-none"
                {...register(`amount`)}
              />
            </div>
            <div className="form-control lg:basis-1/3">
              <label className="label">
                <span className="label-text font-semibold capitalize text-white lg:text-2xl">
                  when?
                </span>
              </label>
              <select {...register(`time`)} className="select bg-white text-black">
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
    </>
  );
};

export default FoodLog;
