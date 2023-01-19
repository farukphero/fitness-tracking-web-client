import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from "../DateProvider/DateProvider";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const RouteAndDate = () => {
  const { state, dispatch } = useDate();

  return (
    <div>
      <div className="flex items-center justify-between mx-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => dispatch({ type: `TODAY` })}
          >
            today
          </button>
          <button
            onClick={() => dispatch({ type: `WEEK` })}
            className="btn btn-outline btn-sm"
          >
            week
          </button>
          <button
            onClick={() => dispatch({ type: `MONTH` })}
            className="btn btn-outline btn-sm"
          >
            month
          </button>
          <button
            onClick={() => dispatch({ type: `YEAR` })}
            className="btn btn-outline btn-sm"
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
            className="rounded-md py-1 ml-2 px-3 focus:outline-none text-lg"
            selected={state}
            onChange={(date) => dispatch({ type: `CUSTOM`, payload: date })}
            isClearable
            closeOnScroll={true}
            placeholderText="i have been cleared!"
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
