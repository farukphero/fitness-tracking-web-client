import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogsNavbar = () => {
  const [activeState, setActiveState] = useState({
    active: null,
    navItems: [
      { _id: 2, name: `food` },
      { _id: 1, name: `activities` },
      { _id: 3, name: `water` },
      { _id: 4, name: `sleep` },
    ],
  });

  const selectActiveItem = (index) => {
    return setActiveState({
      ...activeState,
      active: activeState?.navItems[index]?._id,
    });
  };

  const addStyles = (index) => {
    if (activeState?.navItems[index]?._id === activeState?.active) {
      return `btn btn-primary mb-0`;
    } else {
      return `btn btn-error mb-0`;
    }
  };

  return (
    <div className=" flex items-center justify-center flex-wrap space-x-6 my-8 space-y-4 ">
      {activeState?.navItems.map((item, index) => (
        <Link key={index} className="m-0 mt-4 ml-8" to={`/logs/${item.name}`}>
          <button
            onClick={() => selectActiveItem(index)}
            className={addStyles(index)}
          >
            {item?.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default LogsNavbar;
