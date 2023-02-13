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
        <div className='w-1/3'>
          <h3><span className='text-yellow-400'>Note:</span> To see details only for you please input your age below then click on Explore more button</h3>
          <input onBlur={handleAge} className="text-white bg-gray-700 text-center" type='number'/>
        </div>
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
