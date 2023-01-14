import React from "react";

const BranchNames = () => {
  return (
    <div className="w-full my-6 px-4 md:px-0 lg:px-4">
      <ul className="flex flex-col space-y-3">
        <li className="bg-base-100 rounded p-4">
          <h2 className="text-center font-bold underline">Dhaka Office</h2>
          <p className="font-semibold">
            Level-4, 34, Awal Centre, Banani, Dhaka Support:
            <br />
            (Available: 9:00am To 10:00pm)
          </p>
        </li>
        <li className="bg-base-100 rounded p-4">
          <h2 className="text-center font-bold underline">Chattogram Office</h2>
          <p className="font-semibold">
            Level-6, 27,Euhan Centre, Hathajari, Chattogram Support:
            <br />
             (Available: 9:00am To 10:00pm)
          </p>
        </li>
        <li className="bg-base-100 rounded p-4">
          <h2 className="text-center font-bold underline"> Rajshahi Office</h2>
          <p className="font-semibold">
            Level-2, 34, Niaz Centre,Shaheb Bazar,Rajshahi Support:
            <br />
             (Available: 9:00am To 10:00pm)
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BranchNames;