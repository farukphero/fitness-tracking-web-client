import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import ServiceDetailPage from "./ServiceDetailPage";

const ServiceDetails = () => {
  const location = useLocation();
  const user = useContext(AuthContext);
  const service = location.state?.from?.service;
  console.log(user?.user?.email);
  const [appUser, setAppUser] = useState({});
  console.log(appUser.age);

  useEffect(() => {
    fetch(
      `https://fitness-tracking-web-server.vercel.app/users/${user?.user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppUser(data);
      });
  }, [user?.user?.email]);

  // const  userAge = 20

  const userAge = parseFloat(appUser?.age);

  return (
    <div className="text-white container mx-auto mt-10 mb-20">
      {userAge <= 10 && <p>No service for you.</p>}
      {userAge > 10 && userAge <= 20 && (
        <ServiceDetailPage
          detail={service.serviceDetail[0]}
        ></ServiceDetailPage>
      )}
      {userAge > 20 && userAge <= 45 && (
        <ServiceDetailPage
          detail={service.serviceDetail[1]}
        ></ServiceDetailPage>
      )}
      {userAge > 45 && (
        <ServiceDetailPage
          detail={service.serviceDetail[2]}
        ></ServiceDetailPage>
      )}
    </div>
  );
};

export default ServiceDetails;
