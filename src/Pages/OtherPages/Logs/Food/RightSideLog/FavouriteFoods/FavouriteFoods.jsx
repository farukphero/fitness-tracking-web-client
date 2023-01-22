import React from "react";

const FavouriteFoods = () => {
  return (
    <>
      <div className="overflow-x-auto border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-3xl">
              Favourite <br /> Foods
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-sm bg-green-500 text-white">most logged</button>
            <button className="btn btn-sm bg-green-500 text-white">recent</button>
          </div>
        </div>
<table className="table w-full mt-3">
          <thead>
            <tr className="hover">
              <th>Cals</th>
              <th>Click on the item to log it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>232 Cals</td>
              <td>Rice, brown, raw</td>
            </tr>

            <tr className="hover">
              <td>157 Cals</td>
              <td>Refried Beans</td>
            </tr>
<tr>
              <td>220 Cals</td>
              <td>Cheese, Queso Asedero</td>
            </tr>
          </tbody>
        </table>
      </div>
 
    </>
  );
};

export default FavouriteFoods;
