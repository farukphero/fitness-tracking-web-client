import React, { createContext } from "react";
import ActivitiesHistory from "../../ActivitiesHistory/ActivityHistory/ActivityHistory";
import AddActivities from "../AddActivities/AddActivities";
import FavouriteActivities from "../FavouriteActivities/FavouriteActivities";
import { useQuery } from "react-query";
import Spinner from "../../../../../../Components/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";



const LogActivities = () => {
  const {user} = useContext(AuthContext);
  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`activities`, user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://fitness-tracking-web-server.vercel.app/activities?activist=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:mt-8 lg:space-x-8  lg:px-10 ">
      <main className="basis-8/12">
        <AddActivities refetch={refetch} />
      </main>
      <aside className="lg:basis-4/12 w-full sticky top-0 my-5 lg:my-0 mr-5 ">
        {/* <FavouriteActivities /> */}
        <ActivitiesHistory activities={activities} refetch={refetch} />
      </aside>
    </div>
  );
};

export default LogActivities;
