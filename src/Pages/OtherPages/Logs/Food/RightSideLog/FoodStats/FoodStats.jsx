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
            <button className="btn btn-sm btn-outline hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500  text-white">
              most logged
            </button>
            <button className="btn btn-sm btn-outline hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500  text-white">
              recent
            </button>
          </div>
        </div>
        <table className="table w-full mt-3">
        <thead>
            <tr  >
              <th className="bg-gray-200  text-black">Cals</th>
              <th  className="bg-gray-200 text-black">Click on the item to log it</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <td className="bg-white text-black">972 Cals</td>
              <td className="bg-white text-black">
                Kiwi Fruit, Raw (chinese Gooseberry)
              </td>
            </tr>

            <tr>
              <td className="bg-white text-black">327 Cals</td>
              <td className="bg-white text-black">Lime Juice</td>
            </tr>

            <tr>
              <td className="bg-white text-black">472 Cals</td>
              <td className="bg-white text-black">
                Pure Whey Protein, Unflavored
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FoodStats;
