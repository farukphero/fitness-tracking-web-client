import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  
  const [servicesData, setServiceData] = useState([])

  useEffect(() => {
      fetch('services.json')
      .then(res=> res.json())
      .then(data=> {
          console.log(data)
          setServiceData(data)})

  }, [])

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
