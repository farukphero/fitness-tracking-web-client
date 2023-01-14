import React from 'react';

const ServiceCard = ({service}) => {
    const {name, description, image} = service;
    console.log(service)
    return (
        <div className="w-full my-10 border-spacing-4 shadow-xl image-full border rounded relative">
            <figure><img className='w-full lg:h-60 md:h-auto' src={image} alt="service-card" /></figure>
            <div className="card-body" style={{height: '300px'}}>
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{description.slice(0, 170)}...</p>
                <div className="absolute bottom-5 left-8">
                    <button className="btn btn-accent text-white">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;