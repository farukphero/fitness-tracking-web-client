import { useQuery } from "react-query";
import Spinner from "../../../../../../Components/Spinner/Spinner";
import axios from "axios";
import { useContext } from "react";
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
        `http://localhost:5000/activities/${link}?activist=${user?.email}`
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
