import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RouteAndDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="flex items-center justify-between mx-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          <button className="btn btn-outline btn-sm">today</button>
          <button className="btn btn-outline btn-sm">week</button>
          <button className="btn btn-outline btn-sm">month</button>
          <button className="btn btn-outline btn-sm">year</button>
        </div>
        <div>
          <ReactDatePicker
            className="rounded-md py-1 px-3 focus:outline-none text-lg"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            closeOnScroll={true}
            placeholderText="i have been cleared!"
          ></ReactDatePicker>
        </div>
      </div>
      <div className="divider mx-8"></div>
    </div>
  );
};

export default RouteAndDate;
