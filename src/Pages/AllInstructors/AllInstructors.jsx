import React, { useCallback, useMemo } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Components/Spinner/Spinner";
import SingleInstructor from "./SingleInstructor/SingleInstructor";

const AllInstructors = () => {
  const {
    data: instructors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`instructors`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/instructors`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-xl">
        {instructors?.length > 0 ? instructors.length : 0}
        <span>
          {" "}{instructors?.length === 1 ? `instructor found` : `insturctors found`}
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
