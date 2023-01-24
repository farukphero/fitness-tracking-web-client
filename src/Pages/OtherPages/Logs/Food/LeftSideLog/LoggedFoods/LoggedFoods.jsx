import React from "react";

const LoggedFoods = ({logedFood}) => {
  return (
    <div>
    <h2 className="font-bold text-3xl my-3 capitalize">logged foods</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
           
            <th>Food Name</th>
            <th>Amount</th>
            <th>Calorey</th>
            <th>time of intake</th>
          </tr>
        </thead>
        <tbody>
          {logedFood?.map(food=><tr className="hover" key={food.calorey}>
            <th>{food.food}</th>
            <td>{food.amount}</td>
            <td>{food.calorey}</td>
            <td>{food.time}</td>
          </tr>)}
       </tbody>
      </table>
    </div>
  </div>
  );
};

export default LoggedFoods;
