import React from "react";
import "./BranceNames.css";

const BranchNames = () => {
  return (
    <div className="w-full my-6 px-4 md:px-0 lg:px-4">
      <ul className="flex flex-col space-y-3">
        <li className="bg-gray-800 text-white rounded p-4">
          <h2 className="text-center text-all-green text-2xl font-bold underline">
            Dhaka Office
          </h2>
          <p className="font-semibold">
            Level-4, 34, Awal Centre, Banani, Dhaka Support: (Available: 9:00am
            To 10:00pm)
          </p>
        </li>
        <li className="bg-gray-800 text-white rounded p-4">
          <h2 className="text-center text-all-green text-2xl font-bold underline">
            Rajshahi Office
          </h2>
          <p className="font-semibold">
            Level-4, 34, Euhan Centre, Shaheb Bazar, Rajshahi Support:
            (Available: 9:00am To 10:00pm)
          </p>
        </li>
        <li className="bg-gray-800 text-white rounded p-4">
          <h2 className="text-center text-all-green text-2xl font-bold underline">
            Chattogram Office
          </h2>
          <p className="font-semibold">
            Level-4, 34, Rumel Centre, Hathajari, Chattogram Support:
            (Available: 9:00am To 10:00pm)
          </p>
        </li>
        <li className="bg-gray-800 text-white rounded p-4">
          <h2 className="text-center text-all-green text-2xl font-bold underline">
            Khulna Office
          </h2>
          <p className="font-semibold">
            Level-4, 34, Niaz Centre, Khulna Support: (Available: 9:00am To
            10:00pm)
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BranchNames;
