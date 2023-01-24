import React from "react";

const LoggedFoods = () => {
  return (
    <div>
    <h2 className="font-bold text-3xl my-3 capitalize">logged foods</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
           
            <th className="bg-gray-200 text-black">Food Name</th>
            <th className="bg-gray-200 text-black">Amount</th>
            <th className="bg-gray-200 text-black">time of intake</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th className="bg-white text-black">Amaranth Flakes Cereal</th>
            <td className="bg-white text-black">200g</td>
            <td className="bg-white text-black">3.00 pm</td>
          </tr>
          <tr >
            <th className="bg-white text-black">Carrot</th>
            <td className="bg-white text-black">350g</td>
            <td className="bg-white text-black">7.00 am</td>
          </tr>
          <tr >
            <th className="bg-white text-black">100% Whole Wheat Bread</th>
            <td className="bg-white text-black">500g</td>
            <td className="bg-white text-black">7.20 pm</td>
          </tr>
          <tr>
            <th className="bg-white text-black">Zucchini W/skin, Boiled, No Salt</th>
            <td className="bg-white text-black">100g</td>
            <td className="bg-white text-black">10.00 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default LoggedFoods;
