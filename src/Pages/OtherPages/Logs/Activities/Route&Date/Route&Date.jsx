import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDate } from "../DateProvider/DateProvider";

const RouteAndDate = () => {
  const { state, dispatch } = useDate();

  return (
    <div>
      <div className="flex items-center justify-between lg:mx-8 -mt-20 lg:mt-0">
        <div className="flex flex-wrap justify-start items-center lg:justify-center gap-x-4 gap-y-2">
          <button
            className="btn btn-outline hover:text-white hover:bg-secondary text-white btn-sm w-16"
            onClick={() => dispatch({ type: `TODAY` })}
          >
            today
          </button>
          <button
            onClick={() => dispatch({ type: `WEEK` })}
            className="btn btn-outline hover:text-white hover:bg-secondary text-white btn-sm w-16"
          >
            week
          </button>
          <button
            onClick={() => dispatch({ type: `MONTH` })}
            className="btn btn-outline hover:text-white hover:bg-secondary text-white btn-sm w-16"
          >
            month
          </button>
          <button
            onClick={() => dispatch({ type: `YEAR` })}
            className="btn btn-outline hover:text-white hover:bg-secondary text-white btn-sm w-16"
          >
            year
          </button>
        </div>
        <div className="flex items-center">
          <AiOutlineLeft
            onClick={() => dispatch({ type: `YEASTARDAY` })}
            className="font-bold text-4xl rounded-md bg-gray-600 p-2"
          />
          <ReactDatePicker
            className="rounded-md text-black py-1 ml-2 px-3 focus:outline-none text-lg"
            selected={state}
            onChange={(date) => dispatch({ type: `CUSTOM`, payload: date })}
            isClearable
          ></ReactDatePicker>
          <AiOutlineRight
            onClick={() => dispatch({type: `TOMMOWROW`})}
            className="font-bold text-4xl rounded-md bg-gray-600 p-2"
          />
        </div>
      </div>
      <div className="divider mx-8"></div>
    </div>
  );
};

export default RouteAndDate;
