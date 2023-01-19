import React from 'react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from './ServiceDetailPage';

const ServiceDetails = () => {
    const location = useLocation();
  
    const service = location.state?.from?.service;

    const userAge = 11;
    return (
        <div className='text-white container mx-auto mt-10 mb-20'>
            {userAge < 10 && <p>No service for you.</p>}
            {(userAge > 10 && userAge < 20) && <ServiceDetailPage detail={service.serviceDetail[0]}></ServiceDetailPage>}
            {(userAge === 20 && userAge < 45) && <ServiceDetailPage detail={service.serviceDetail[1]}></ServiceDetailPage>}
            {(userAge > 45) && <ServiceDetailPage detail={service.serviceDetail[2]}></ServiceDetailPage>}
        </div>
    );
};

export default ServiceDetails;