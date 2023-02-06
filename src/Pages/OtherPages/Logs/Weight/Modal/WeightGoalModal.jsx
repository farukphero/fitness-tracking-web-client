import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const WeightGoalModal = ({ logedInfo, setRestWeight, setWeightGoal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const { data: expectedWeightGoal = [], refetch } = useQuery({
    queryKey: ["expectedWeightGoal", user?.email],
    queryFn: () =>
      fetch(`https://fitness-tracking-web-server.vercel.app/weightGoal?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data.length > 0) {
              refetch()
          // }
          return data;
        }),
  });

  const weightGoal = (data) => {
    console.log(data.expectedWeight, data.goalType);
    const expectedWeight = data.expectedWeight;
    const logedGoal = {
      expectedWeight,
      email: user?.email,
    };
    setWeightGoal(expectedWeight);

    fetch(`https://fitness-tracking-web-server.vercel.app/weightGoal/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logedGoal),
    })
      .then((res) => res.json())
      .then((data) => refetch());

    
  };
  setRestWeight(expectedWeightGoal[0]?.expectedWeight - logedInfo[0]?.weight);

  return (
    <div>
      <input
        type="checkbox"
        id="set-weight-goal-modal"
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box relative bg-gray-600 ">
          <label
            htmlFor="set-weight-goal-modal"
            className="bg-gray-600 btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit(weightGoal)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">What is your weight goal?</span>
              </label>

              <div className=" flex">
                <input
                  className="bg-gray-500 mr-1 text-center rounded"
                  type="number"
                  {...register("expectedWeight", {
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
              {errors.expectedWeight && (
                <p className="font-semibold text-red-300">
                  {errors.expectedWeight.message}
                </p>
              )}
            </div>
            <div className="modal-action">
              <button>
                <label
                  htmlFor="set-weight-goal-modal"
                  className="btn btn-sm text-center btn-outline text-white bg-gradient-to-r from-green-800 to-green-500 "
                >
                  Submit
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeightGoalModal;
