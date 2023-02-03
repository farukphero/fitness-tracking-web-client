import { format } from "date-fns";
import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import WeightGoalModal from "../Modal/WeightGoalModal";
import { toast } from "react-hot-toast";
const SideForm1 = ({ setLogedWeight }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [restWeight, setRestWeight] = useState(0);
  const [weightGoal, setWeightGoal] = useState(0);

  const formatedDate = format(startDate, "PP");

  const {
    data: logedInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["logedInfo", user?.email],
    queryFn: () =>
      fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLogedWeight(data);
          return data;
        }),
  });
  console.log(logedInfo);
  if (isLoading) {
    <h1 className="text-4xl font-bold text-white">Loading...</h1>;
  }

  const logWeight = (data) => {
    const weight = data.weight;
    const fat = data.fat;
    const weightInfo = {
      weight,
      fat,
      formatedDate,
      email: user?.email,
    };

    const onlyWeight = {
      weight,
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

    fetch(`https://fitness-tracking-web-server.vercel.app/users/edit/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(onlyWeight),
    })
      .then((res) => res.json())
      .then((data) => refetch());

    reset();
    
  };

  const presetWeight = logedInfo[0]?.weight;

  // delete loged weight
  const handleDelete = (id) => {
    fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted");
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="lg:flex">
      {/* Weight Table */}
      {logedInfo.length > 0 ? (
        <>
          <div className="rounded sm:w-full lg:w-3/4 lg:m-3">
            <div className="m-2">
              <div className="grid grid-cols-4 bg-gray-600 px-2 py-1">
                <div>Date</div>
                <div>Fat</div>
                <div>Weight</div>
                <div>Delete</div>
              </div>
              {logedInfo.map((information) => (
                <div className="grid grid-cols-4 bg-gray-300 text-black font-bold p-2 border border-gray-600">
                  <div>{information.formatedDate}</div>
                  <div>{information.fat}</div>
                  <div>{information.weight}</div>
                  <div className="flex items-center">
                    <button onClick={() => handleDelete(information._id)}>
                      <FaRegTrashAlt></FaRegTrashAlt>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded lg:w-3/4 lg:m-3"></div>
        </>
      )}

      <div className="sm:w-full lg:w-1/4">
        <div className="border border-gray-500 p-4 rounded my-4">
          <h1 className="font-bold">Log Weight</h1>

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
                <span className="label-text">BODY FAT</span>
              </label>

              <div className="flex">
                <input
                  className="bg-gray-600 rounded mr-1 text-center"
                  type="number"
                  {...register("fat", {
                    required: "Please enter a percentage between 5 and 75.",
                    min: {
                      value: 2.5,
                      message: "Please enter a percentage between 5 and 75.",
                    },
                    max: {
                      value: 350,
                      message: "Please enter a percentage between 5 and 75.",
                    },
                  })}
                />
                <span>%</span>
              </div>
              {errors.fat && (
                <p className="font-bold text-red-400">{errors.fat.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">DATE</span>
              </label>
              <DatePicker
                className="bg-gray-600 rounded mb-2 text-center"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="btn btn-outline bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black  btn-sm  mt-3 w-full">
              <button className="text-center">Log Weight</button>
            </div>
          </form>
        </div>
        <div className="border border-gray-500 p-4 rounded my-4">
          <h1 className="font-bold">Weight Summary</h1>
          <div className="flex border-b border-gray-500 py-3 text-center items-center">
            {presetWeight === undefined ? (
              <>
                <p className="text-sm text-center text-gray-400">
                  What is your weight Goal?
                </p>
              </>
            ) : (
              <>
                <span className="text-sm text-center text-gray-400">
                  Your Current Weight
                </span>
                <h1 className="ml-2 font-bold text-xl">{presetWeight} Kg</h1>
              </>
            )}
          </div>
          {weightGoal !== presetWeight || weightGoal !== 0 ? (
            <>
              {(weightGoal > presetWeight && (
                <p className="text-sm  text-gray-400 mt-2">
                  You have to gain{" "}
                  <span className="text-white font-bold">{restWeight}</span> kg
                  to achieve your weight goal
                </p>
              )) ||
                (weightGoal < presetWeight && (
                  <p className="mt-2 text-sm text-gray-400">
                    You have to lose{" "}
                    <span className="text-white font-bold">
                      {Math.abs(restWeight)}
                    </span>{" "}
                    kg to achieve your weight goal.
                  </p>
                ))}
            </>
          ) : (
            <>
              <p className="text-sm text-center text-gray-400 mt-2">
                Set a goal with us and we will help you stay on track!
              </p>
            </>
          )}

          {presetWeight === undefined ? (
            <>
              <p className="text-sm text-center text-gray-400 mt-2">
                At first log your weight and then you can set new weight goal.
              </p>
            </>
          ) : (
            <>
              <div className="btn btn-outline  bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black  btn-sm  mt-3 w-full">
                <button className="text-center">
                  <label htmlFor="set-weight-goal-modal">
                    Set New Weight Goal
                  </label>
                </button>
              </div>
            </>
          )}
        </div>

        {/* modal */}
        <WeightGoalModal
          logedInfo={logedInfo}
          setRestWeight={setRestWeight}
          setWeightGoal={setWeightGoal}
        ></WeightGoalModal>
      </div>
    </div>
  );
};

export default SideForm1;
