import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import Spinner from "../../../../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

export const WeekFetchingData = (link) => {
  const { user } = useContext(AuthContext);
  const {
    data: activities,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`activities`, user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://fitness-tracking-web-server.vercel.app/activities/${link}?activist=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  console.log(activities);

  return activities;
};
