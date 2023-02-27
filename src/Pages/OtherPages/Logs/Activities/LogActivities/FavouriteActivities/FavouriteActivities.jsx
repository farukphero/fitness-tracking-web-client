import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const FavouriteActivities = () => {
  const { user } = useContext(AuthContext);

  const {
    data: activities = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["activities.", user?.email],
    queryFn: () =>
      fetch(`https://fitness-tracking-web-server.vercel.app/allactivities?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          refetch();
          return data;
        }),
  });
  console.log(activities);
  return (
    <>
      <div className="overflow-x-auto border border-gray-600 rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-3xl">Favorite Activities</span>
          </div>
          <div className="flex space-x-3">
            <button className="btn btn-outline btn-sm hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  text-white">
              most logged
            </button>
            <button className="btn btn-outline btn-sm hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-400  text-white">
              recent
            </button>
          </div>
        </div>
        <table className="table w-full mt-3">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Duration</th>
              <th>Calouries Burned</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr className="hover">
                <td>{activity.activity_name}</td>
                <td>{activity.timestamp}</td>
                <td>{activity.calourie_burned}</td>
              </tr>
            ))}
            {/* <tr className="hover">
              <td>Run</td>
              <td>2.5 Hour</td>
              <td>238 Cals</td>
            </tr>
            <tr className="hover">
              <td>Cycling</td>
              <td>1.2 Hour</td>
              <td>133 Cals</td>
            </tr>
            <tr className="hover">
              <td>Swim</td>
              <td>0.5 Hour</td>
              <td>82 Cals</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FavouriteActivities;
