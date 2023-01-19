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
          <h2 className="font-bold text-4xl capitalize">food log</h2>
        </div>
        <form onSubmit={handleSubmit(handleFoodLogForm)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold capitalize text-2xl">
                what did you eat?
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none"
              {...register(`foodName`)}
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div className="form-control basis-2/3">
              <label className="label">
                <span className="label-text font-semibold text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                className="input input-md input-bordered focus:outline-none"
                {...register(`amount`)}
              />
            </div>
            <div className="form-control basis-1/3">
              <label className="label">
                <span className="label-text font-semibold capitalize text-2xl">
                  when?
                </span>
              </label>
              <select {...register(`time`)} className="select input-md select-bordered">
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
            <button className="btn btn-primary capitalize">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FoodLog;
