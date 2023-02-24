import { format } from "date-fns";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const SideForm1 = ({ setLogedData, refetch, setLogedWeight }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const date = format(startDate, "P");

  const logWeight = (data) => {
    const weight = data.weight;
    const weightInfo = {
      weight,
      date,
      email: user?.email,
    };

    fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weightInfo),
    })
      .then((res) => res.json())
      .then((data) => refetch());
    reset();
  };

  return (
    <div>
      <div className="border border-gray-500 p-4 rounded my-4">
        <h1 className="font-bold">Log Your Todays Weight</h1>

        <form className="text-gray-400" onSubmit={handleSubmit(logWeight)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">WEIGHT</span>
            </label>

            <div className=" flex">
              <input
                className="bg-gray-600 mr-1 text-center rounded"
                type="number"
                {...register("weight", {
                  required:
                    "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                  min: {
                    value: 2.5,
                    message:
                      "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                  },
                  max: {
                    value: 350,
                    message:
                      "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                  },
                })}
              />
              <span>kg</span>
            </div>
            {errors.weight && (
              <p className="font-bold text-red-400">{errors.weight.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">DATE</span>
            </label>
            <DatePicker
              className="bg-gray-600 rounded mb-2 text-center text-white"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="">
            <button className="btn btn-log text-black bg-secondary  w-full border-none   rounded-md">
              Log Weight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideForm1;
