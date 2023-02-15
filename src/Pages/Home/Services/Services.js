import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  
  const [servicesData, setServiceData] = useState([]);


  useEffect(() => {
      fetch('https://fitness-tracking-web-server.vercel.app/services')
      .then(res=> res.json())
      .then(data=> {
          setServiceData(data)})

  }, [])

  const handleAge = event =>{
  const usersAgeForServices = {age : event.target.value};
  fetch('http://localhost:5000/usersAgeForServices/63e9d22f781ec04ec2072283', {
 
  method: 'PATCH',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(usersAgeForServices)
})
  .then(res => res.json())
  .then(result => {
    
  })
  }

  return (
    <div className=" text-white mt-12">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-all-green text-center mb-3 font-semibold">
          Our Services
        </h1>
       
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} 
            handleAge={handleAge}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
