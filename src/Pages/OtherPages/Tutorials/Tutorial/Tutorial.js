import React from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Tutorial = () => {
  useTitle("Tutorial");
  const data = useLoaderData();
  
  const { data: tutorials = [] } = useQuery({
    queryKey: ["tutorials"],
    queryFn: () =>
      fetch(
        `https://fitness-tracking-web-server.vercel.app/tutorials?category=${data?.category}`
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  return (
    <div className="m-12 ">
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <div className="">
            <iframe
              className="border"
              height="350px"
              width="350px"
              key={tutorial._id}
              src={tutorial.link}
            ></iframe>
            <h1 className="text-center text-sm">{tutorial.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
