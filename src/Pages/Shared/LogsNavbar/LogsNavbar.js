import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogsNavbar = () => {
  const [activeState, setActiveState] = useState({
    active: null,
    navItems: [
      { _id: 2, name: `Food` },
      { _id: 1, name: `Activities` },
      { _id: 3, name: `Water` },
      { _id: 4, name: `Sleep` },
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
      return `btn btn-primary  mb-0`;
    } else {
      return `btn bg-green-400 text-white mb-0`;
    }
  };

  return (
    <div className=" flex items-center justify-center flex-wrap space-x-6 my-8 space-y-4 ">
      {activeState?.navItems.map((item, index) => (
        <Link key={index} className="m-0 mt-4 ml-8" to={`/Logs/${item.name}`}>
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
