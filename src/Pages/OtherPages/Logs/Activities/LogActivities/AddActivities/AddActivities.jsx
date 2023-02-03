import axios from "axios";
import React, { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { BiCycling, BiSwim } from "react-icons/bi";
import { FaRunning, FaWalking } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import { useDate } from "../../DateProvider/DateProvider";

const AddActivities = () => {
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useDate();
  const { user } = useContext(AuthContext);
  const handleActivityLogForm = (data) => {
    const {
      name,
      sTime,
      duration,
      distance,
      unit,
      text,
      hour,
      minute,
      second,
      weight,
      parameter,
    } = data;

    // duration
    const hourToSecond = parseInt(hour) * 60 * 60;
    const minuteToSecond = parseInt(minute) * 60;
    const totalDurationSec = Math.round(
      hourToSecond + minuteToSecond + parseInt(second)
    );

    // distance
    let totalDistance;
    if (unit === "Kilometers") {
      totalDistance = parseInt(distance);
    } else {
      totalDistance = parseInt(distance) * 1.60934;
    }

    // weight
    let totalWeight;
    if (parameter === `lbs`) {
      totalWeight = parseFloat(weight) * 0.453592;
    } else {
      totalWeight = parseFloat(weight);
    }

    // Calouries Calculations
    console.log(totalDistance, totalWeight);
    const calouries = Math.round(totalDistance * totalWeight * 1.036);
    const calsPerKm = Math.round(weight * 1.036);
    const calsPerMi = Math.round(1.60934 * totalWeight * 1.036);
    const calsPerHour = Math.round(
      totalDistance * totalWeight * 1.036 * (3600 / duration)
    );
    const calsBurnRate = unit === `mile` ? calsPerMi : calsPerKm;

    //steps calculation

    const totalSteps = totalDistance * 1375;

    const activity = {
      activist: user?.email,
      activity_name: name,
      activity_date: state,
      start_time: sTime,
      duration,
      distance,
      calourie_burned: calouries,
      steps: totalSteps,
      notes: text,
    };

    axios
      .post(`https://fitness-tracking-web-server.vercel.app/activities`, {
        ...activity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [logActivities, setLogActivities] = useState(true);
  return (
    <div className="flex justify-between border border-gray-600 rounded-md p-6">
      <div className="basis-8/12">
        <h2 className="font-bold text-3xl">log activities</h2>
        {logActivities === false ? (
          <div>
            <div>
              <p className="mt-8">commom activities</p>
              <div className="flex items-center gap-x-5 my-4">
                <FaWalking className="bg-primary rounded-md text-4xl text-white" />
                <FaRunning className="bg-primary rounded-md text-4xl text-white" />
                <BiSwim className="bg-primary rounded-md text-4xl text-white" />
                <BiCycling className="bg-primary rounded-md text-4xl text-white" />
              </div>
            </div>
            <div className="form-control w-full my-8">
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="my-5">
              You want to create an{" "}
              <span className="font-bold">Activity Record.</span>
            </p>
            <form
              onSubmit={handleSubmit(handleActivityLogForm)}
              className="flex gap-y-3 flex-col mt-16"
            >
              <div className="form-control flex flex-row w-full">
                <label className="label  w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-md input-bordered w-full"
                  {...register(`name`)}
                />
              </div>

              <div className="form-control flex flex-row w-full">
                <label className="label  w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    date
                  </span>
                </label>
                <ReactDatePicker
                  className="input input-md input-bordered w-full"
                  selected={state}
                  onChange={(date) =>
                    dispatch({ type: `CUSTOM`, payload: date })
                  }
                  isClearable
                  closeOnScroll={true}
                ></ReactDatePicker>
              </div>

              <div className="form-control flex flex-row w-full">
                <label className="label  w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    start time
                  </span>
                </label>
                <input
                  type="time"
                  className="input input-md input-bordered   w-full"
                  {...register(`sTime`)}
                />
              </div>

              <div className="form-control flex flex-row w-full">
                <label className="label  w-32">
                  <span className="label-text capitalize font-lg text-xl ">
                    duration
                  </span>
                </label>
                <div className="flex gap-x-2">
                  <input
                    type="text"
                    placeholder="hours"
                    className="input input-md input-bordered w-full lg:ml-4 ml-1"
                    {...register(`hour`)}
                  />
                  <input
                    type="text"
                    placeholder="minutes"
                    className="input input-md input-bordered w-full"
                    {...register(`minute`)}
                  />
                  <input
                    placeholder="seconds"
                    type="text"
                    className="input input-md input-bordered w-full"
                    {...register(`second`)}
                  />
                </div>
              </div>

              <div className="form-control flex flex-row">
                <label className="label w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    distance
                  </span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="input input-bordered w-full lg:-ml-7 ml-1"
                    {...register(`distance`)}
                  />
                  <select
                    {...register(`unit`)}
                    className="select bg-gray-500  select-bordered ml-2 "
                  >
                    <option selected>Kilometers</option>
                    <option>Miles</option>
                    <option>Steps</option>
                  </select>
                </div>
              </div>

              <div className="form-control flex flex-row">
                <label className="label w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    weight
                  </span>
                </label>
                <div className="flex gap-x-1 w-full justify-between">
                  <input
                    type="text"
                    className="input input-md input-bordered w-full -ml-1"
                    {...register(`weight`)}
                  />
                  <select
                    {...register(`parameter`)}
                    className="select bg-gray-500 select-bordered ml-2"
                  >
                    <option selected>lbs</option>
                    <option>kg</option>
                  </select>
                </div>
              </div>

              <div className="form-control flex flex-row w-full">
                <label className="label w-32">
                  <span className="label-text capitalize font-lg text-xl">
                    notes
                  </span>
                </label>
                <textarea
                  {...register(`text`)}
                  className="textarea textarea-bordered h-24 w-full"
                ></textarea>
              </div>
              <div className="form-control flex flex-row">
                <input
                  type="submit"
                  defaultValue="submit"
                  className="btn w-full lg:w-96 ml-16 mt-6"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <MdLocalActivity
          onClick={() => setLogActivities(!logActivities)}
          className="text-6xl cursor-pointer text-amber-400 font-bold"
        />
        <h2>Activity record</h2>
      </div>
    </div>
  );
};

export default AddActivities;
