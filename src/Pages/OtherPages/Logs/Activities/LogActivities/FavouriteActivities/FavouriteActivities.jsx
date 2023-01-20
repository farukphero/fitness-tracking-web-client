import React from "react";

const FavouriteActivities = () => {
  return (
    <>
      <div className="overflow-x-auto border border-gray-600 rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-3xl">
              Favourite <br /> activities
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-sm bg-green-400 ">Most logged</button>
            <button className="btn btn-sm bg-green-400 ">Recent</button>
          </div>
        </div>
        <table className="table w-full mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>

            <tr className="hover">
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>

            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FavouriteActivities;
