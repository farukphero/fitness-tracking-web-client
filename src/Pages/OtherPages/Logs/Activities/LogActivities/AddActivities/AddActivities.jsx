import React, { useState } from "react";
import { MdLocalActivity } from "react-icons/md";
import { FaWalking, FaRunning, FaSwimmer } from "react-icons/fa";
import { BiCycling, BiSwim } from "react-icons/bi";

const AddActivities = () => {
  const [logActivities, setLogActivities] = useState(false);
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
            <form className="flex gap-y-3 flex-col">
              <div className="form-control flex flex-row w-full">
                <label className="label w-4/12">
                  <span className="label-text capitalize font-lg text-xl">
                    name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-md input-bordered ml-5 w-full"
                />
              </div>
              <div className="form-control flex flex-row w-full">
                <label className="label w-4/12">
                  <span className="label-text capitalize font-lg text-xl">
                    date
                  </span>
                </label>
                <input
                  type="date"
                  className="input input-md input-bordered ml-5 w-full"
                />
              </div>
              <div className="form-control flex flex-row w-full">
                <label className="label w-4/12">
                  <span className="label-text capitalize font-lg text-xl">
                    start time
                  </span>
                </label>
                <input
                  type="time"
                  className="input input-md input-bordered ml-5 w-full"
                />
              </div>
              <div className="form-control flex flex-row w-full">
                <label className="label w-4/12">
                  <span className="label-text capitalize font-lg text-xl">
                    end time
                  </span>
                </label>
                <input
                  type="time"
                  className="input input-md input-bordered ml-5 w-full"
                />
              </div>
              <div className="form-control flex flex-row w-full">
                <label className="label w-4/12">
                  <span className="label-text capitalize font-lg text-xl">
                    notes
                  </span>
                </label>
                <textarea className="textarea ml-5 w-full textarea-bordered h-24"></textarea>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center basis-4/12">
        <MdLocalActivity
          onClick={() => setLogActivities(!logActivities)}
          className="text-6xl cursor-pointer text-amber-400 font-bold"
        />
        <h2>activity record</h2>
      </div>
    </div>
  );
};

export default AddActivities;
