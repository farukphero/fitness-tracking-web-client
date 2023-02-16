import React from "react";

const ServiceDetailPage = ({ detail }) => {
  return (
   <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 -mt-10 -mb-12">
     <div className="w-10/12 mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-8">
      <img className="w-2/3" src={detail.img} alt="" />
      <h2 className="text-4xl my-2 mt-6">{detail.serviceName}</h2>
      <p>{detail.description}</p>
      <p>{detail.tricks[0].heading}</p>
      <p className="text-2xl font-bold">Top Tips for you:</p>
      {detail.tricks[1].points.map((d) => (
        <li key={d._id} point={d}>
          <p>
            <span className="font-bold text-2xl">{d.point}</span>{" "}
            <span>{d.description}</span>
          </p>
        </li>
      ))}
    </div>
   </section>
  );
};

export default ServiceDetailPage;
