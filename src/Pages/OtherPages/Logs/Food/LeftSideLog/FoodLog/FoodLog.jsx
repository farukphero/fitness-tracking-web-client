import React from "react";

const FoodLog = () => {
  return (
    <>
      <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl">food log</h2>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-2xl">
              what did you eat?
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between space-x-3">
          <div className="form-control basis-2/3">
            <label className="label">
              <span className="label-text font-semibold text-2xl">
                how much?
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="form-control basis-1/3">
            <label className="label">
              <span className="label-text font-semibold text-2xl">when?</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default FoodLog;
