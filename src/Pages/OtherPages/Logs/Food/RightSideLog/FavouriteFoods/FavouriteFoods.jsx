import React from "react";

const FavouriteFoods = () => {
  return (
    <>
      <div className="overflow-x-auto border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-3xl">
              favourite <br /> foods
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-sm btn-primary">most logged</button>
            <button className="btn btn-sm btn-primary">recent</button>
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

export default FavouriteFoods;
