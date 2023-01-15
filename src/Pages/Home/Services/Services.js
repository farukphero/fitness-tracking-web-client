import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Diet",
      image:
        "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:
        "Diet is very important for the health of the human body. You can maintain your daily diet with us.Leave the responsibility of your daily nutrition to us. We will track your progess.",
    },
    {
      id: 2,
      name: "Exercise",
      image:
        "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      description:
        "Exercise is very important for the health of the human body. You can maintain your daily exercise with us.Leave the responsibility of your daily exercise to us. We will track your progess.",
    },
    {
      id: 3,
      name: "Daily Activities",
      image:
        "https://images.unsplash.com/photo-1626143955914-e2c1001bc7d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
      description:
        "Your Daily Activities is very important for the health of you. You can maintain your Daily Activities like eating, sleeping and all everything with us.Leave the responsibility of your Daily Activities to us. We will track your progess.",
    },
  ];
  return (
    <div className=" text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-all-green text-center mb-3 font-semibold">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
