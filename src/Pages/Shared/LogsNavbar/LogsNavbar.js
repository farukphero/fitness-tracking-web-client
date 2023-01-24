import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogsNavbar = () => {
  const [activeState, setActiveState] = useState({
    active: null,
    navItems: [
      { _id: 2, name: `Food` },
      { _id: 1, name: `Activities` },
      { _id: 3, name: `Weight` },
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
      return `btn border-none bg-gradient-to-r from- via-gray-600 to-warning text-white mb-0`;
    } else {
      return `btn border-none text-white bg-gradient-to-r from-gray-700 via-green-500 to-gray-700  text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black mb-0`;
    }
  };

  return (
    <div className=" flex items-center justify-center flex-wrap space-x-3 lg:space-x-6 my-8 space-y-4 ">
      {activeState?.navItems.map((item, index) => (
        <Link key={index} className="m-0 mt-4 " to={`/Logs/${item.name}`}>
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
