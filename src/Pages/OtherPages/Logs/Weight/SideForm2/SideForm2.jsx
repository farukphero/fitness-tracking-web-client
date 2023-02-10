
import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { useQuery } from "react-query";


const SideForm2 = ({ setGoalSetData }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const date = format(startDate, "P");


    const setWeightGoal = data => {
        const expectedWeight = data.expectedWeight;
        const days = data.days;
        const goalType = data.goalType;

        const goalInfo = {
            expectedWeight,
            days,
            goalType,
            email: user?.email,
            date
        }


        fetch(
            `http://localhost:5000/weightGoal/${user?.email}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(goalInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data));

        setGoalSetData(goalInfo)
        reset();

    }


    return (
        <div>
            <div className="border border-gray-500 p-4 rounded my-4">
                <h1 className="font-bold">Set Your Weight Goal</h1>
                <form onSubmit={handleSubmit(setWeightGoal)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GoalType</span>
                        </label>
                        <select {...register("goalType", {
                            required: true,
                            message: "Must be a valid weight greater than 2.5 kg and less than 350 kg"
                        })}
                            className="w-4/6 bg-gray-600 rounded mr-1 text-center">
                            <option selected>Gain</option>
                            <option>Lose</option>
                        </select>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">What Is Your Weight Goal?</span>
                        </label>

                        <div className="flex">
                            <input
                                className="bg-gray-600 rounded mr-1 text-center"
                                type="number"
                                {...register("expectedWeight", {
                                    required:
                                        "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                                    min: {
                                        value: 1,
                                        message:
                                            "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                                    },
                                    max: {
                                        value: 300,
                                        message:
                                            "Must be a valid weight greater than 2.5 kg and less than 350 kg",
                                    },
                                })}
                            />
                            <span>Kg</span>
                        </div>
                        {errors.expectedWeight && (
                            <p className="font-bold text-red-400">{errors.expectedWeight.message}</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">In How Many Days Do You Want To Reach This Goal?</span>
                        </label>

                        <div className="flex">
                            <input
                                className="bg-gray-600 rounded mr-1 text-center"
                                type="number"
                                {...register("days", {
                                    required:
                                        "Please share your expected days.",
                                    min: {
                                        value: 1,
                                        message:
                                            "Must be a valid day.",
                                    }
                                })}
                            />
                            <span>Days</span>
                        </div>
                        {errors.days && (
                            <p className="font-bold text-red-400">{errors.days.message}</p>
                        )}
                    </div>
                    <div className="form-control hidden ">
                        <DatePicker
                            className="bg-gray-600 rounded mb-2 text-center"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <div className="">
                        <button className="text-center btn btn-outline bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black  btn-sm  mt-3 w-full">Submit</button>

                    </div>






                </form>
            </div>

        </div>
    );
};

export default SideForm2;