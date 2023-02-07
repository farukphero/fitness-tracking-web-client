import { format } from "date-fns";
import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";


const SideForm1 = ({setLogedData,refetch}) => {
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
    
    fetch(`http://localhost:5000/logedWeight`, {
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
              <p className="font-bold text-red-400">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">DATE</span>
            </label>
            <DatePicker
              className="bg-gray-600 rounded mb-2 text-center text-green-600"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="btn btn-outline bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black  btn-sm  mt-3 w-full">
            <button className="text-center">Log Weight</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideForm1;
