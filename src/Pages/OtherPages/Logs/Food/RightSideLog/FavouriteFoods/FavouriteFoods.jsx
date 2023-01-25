import React from "react";

const FavouriteFoods = () => {
  return (
    <section>
      <div className="overflow-x-auto border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold lg:text-3xl">
              Favourite <br /> Foods
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-sm btn-outline   hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500   text-white">
              most logged
            </button>
            <button className="btn btn-sm  btn-outline  hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500  text-white">
              recent
            </button>
          </div>
        </div>
       <div>
       <table className="table w-full mt-3">
          <thead>
            <tr>
              <th className="bg-gray-200  text-black">Cals</th>
              <th className="bg-gray-200 text-black">Click on the item to log it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  className="bg-white text-black">232 Cals</td>
              <td  className="bg-white text-black">Rice, brown, raw</td>
            </tr>

            <tr >
              <td  className="bg-white  text-black">157 Cals</td>
              <td  className="bg-white  text-black">Refried Beans</td>
            </tr>
            <tr>
              <td  className="bg-white text-black">220 Cals</td>
              <td  className="bg-white text-black">Cheese, Queso Asedero</td>
            </tr>
          </tbody>
        </table>
       </div>
      </div>
    </section>
  );
};

export default FavouriteFoods;
