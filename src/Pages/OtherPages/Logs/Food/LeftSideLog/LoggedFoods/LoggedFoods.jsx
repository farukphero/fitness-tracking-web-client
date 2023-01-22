import React from "react";

const LoggedFoods = () => {
  return (
    <div>
    <h2 className="font-bold text-3xl my-3 capitalize">logged foods</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
           
            <th>Food Name</th>
            <th>Amount</th>
            <th>time of intake</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>Amaranth Flakes Cereal</th>
            <td>200g</td>
            <td>3.00 pm</td>
          </tr>
          <tr className="hover">
            <th>Carrot</th>
            <td>350g</td>
            <td>7.00 am</td>
          </tr>
          <tr className="hover">
            <th>100% Whole Wheat Bread</th>
            <td>500g</td>
            <td>7.20 pm</td>
          </tr>
          <tr className="hover">
            <th>Zucchini W/skin, Boiled, No Salt</th>
            <td>100g</td>
            <td>10.00 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default LoggedFoods;
