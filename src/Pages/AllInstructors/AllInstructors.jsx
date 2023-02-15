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
      <SingleInstructor />
    </div>
  );
};

export default AllInstructors;
