import React, { useState } from "react";
import SideForm1 from "../SideForm1/SideForm1";
import SideForm2 from "../SideForm2/SideForm2";

const WeightSummery = ({ refetch }) => {
  const [goalSetData, setGoalSetData] = useState();
  const [logedData, setLogedData] = useState();
  const date = Math.abs(
    new Date(goalSetData?.date) - new Date(logedData?.date)
  );
  const dd = Math.ceil(date / (1000 * 60 * 60 * 24));
  const calorie = goalSetData?.expectedWeight * 7800;
  const dailyTake = calorie / goalSetData?.days;
  const oneDayWeight = goalSetData?.expectedWeight / goalSetData?.days;

  return (
    <div className="lg:flex">
      <div className="lg:mx-4 w-3/4 mx-auto">
        {goalSetData && (
          <div className="border border-gray-500 p-4 rounded my-4 lg:w-1/2 mx-auto shadow-xl ">
            <h1 className="font-bold text-center text-2xl border-b pb-2 border-gray-500">
              Suggestion For You
            </h1>
            {goalSetData.goalType === "Gain" ? (
              <>
                <p className="text-center text-gray-300 my-3">
                  You have to take{" "}
                  <span className="text-white font-bold">
                    {dailyTake.toFixed(2)}
                  </span>{" "}
                  calorie daily to reach your goal.
                </p>
              </>
            ) : (
              <>
                <p className="text-center text-gray-300 my-3">
                  You have to burned{" "}
                  <span className="text-white font-bold">
                    {dailyTake.toFixed(2)}
                  </span>{" "}
                  calorie daily to reach your goal.
                </p>
              </>
            )}
            {oneDayWeight.toFixed(2) > 0.18 ? (
              <>
                <div>
                  {goalSetData.goalType === "Gain" &&
                  oneDayWeight.toFixed(2) > 0.18 ? (
                    <>
                      <p className="text-red-400 text-center font-bold">
                        You want to gain {oneDayWeight.toFixed(2)} kg in one
                        day, But it is harmful to your health. We recommend that
                        you will gain 0.07 kg to 0.14 kg in one day. That means
                        0.5 kg to 1 kg per week.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-black text-center font-bold">
                        You want to lose {oneDayWeight.toFixed(2)} kg in one
                        day, But it is harmful to your health. We recommend that
                        you will lose 0.07 kg to 0.14 kg in one day. That means
                        0.5 kg to 1 kg per week.
                      </p>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="text-center font-bold text-xl">Carry On</p>
              </>
            )}
          </div>
        )}
      </div>

      <div className="sm:w-full md:mx-20 md:w-full md:mx-auto lg:mx-4 lg:w-1/4 mx-auto">
        <div className="">
          {/* goal set */}
          <SideForm2 setGoalSetData={setGoalSetData}></SideForm2>
        </div>
        <div>
          {/* Loged weight */}
          <SideForm1 setLogedData={setLogedData} refetch={refetch}></SideForm1>
        </div>
      </div>
    </div>
  );
};

export default WeightSummery;
