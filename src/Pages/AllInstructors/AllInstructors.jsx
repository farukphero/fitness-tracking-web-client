import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import SingleInstructor from "./SingleInstructor/SingleInstructor";

const AllInstructors = () => {
  const { data: instructors, isLoading } = useQuery({
    queryKey: [`instructors`],
    queryFn: async () => {
      const res = await fetch(`https://fitness-tracking-web-server.vercel.app/instructors`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-xl">
        {instructors?.length > 0 ? instructors.length : 0}
        <span>
          {instructors?.length === 1
            ? ` instructor found`
            : ` instructors found`}
        </span>
      </h2>
      <div>
        {instructors?.map((instructor) => (
          <SingleInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
