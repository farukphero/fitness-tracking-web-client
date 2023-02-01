import { useQuery } from "react-query";
import Spinner from "../../../../../../Components/Spinner/Spinner";
import axios from "axios";

export const FetchingData = (link, email) => {
  const {
    data: activities,
    isLoading,
  } = useQuery({
    queryKey: [`activities`, link, email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/activities/${link}?activist=${email}`
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
