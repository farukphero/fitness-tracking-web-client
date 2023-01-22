import React from "react";

const FoodStats = () => {
  return (
    <>
      <div className="overflow-x-auto border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-3xl">Foods</span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-sm bg-green-500 text-white">most logged</button>
            <button className="btn btn-sm bg-green-500 text-white">recent</button>
          </div>
        </div>
        <table className="table w-full mt-3">
    
          <tbody>
            <tr>
              <td>972 Cals</td>
              <td>Kiwi Fruit, Raw (chinese Gooseberry)</td>
            </tr>

            <tr className="hover">
              <td>327 Cals</td>
              <td>Lime Juice</td>
            </tr>

            <tr>
              <td>472 Cals</td>
              <td>Pure Whey Protein, Unflavored</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
};

export default FoodStats;
