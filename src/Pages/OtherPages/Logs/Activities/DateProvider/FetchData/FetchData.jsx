import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../../../../../../Components/Spinner/Spinner";

export const FetchingData = (link, email) => {
  const { data: activities, isLoading } = useQuery({
    queryKey: [`activities`, link, email],
    queryFn: async () => {
      const res = await axios.get(
        `https://fitness-tracking-web-server.vercel.app/activities/${link}?activist=${email}`
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
