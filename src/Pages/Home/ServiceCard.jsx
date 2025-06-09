import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    _id,
    photo_url,
    service_name,
    service_price,
    service_description,
    providerName,
    providerImage,
  } = service;
  return (
   <div className="rounded-lg shadow hover:shadow-xl overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
  <div className="relative">
    <img src={photo_url} className="w-full h-48 object-cover" />
    <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
      ${service_price}
    </span>
  </div>
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800">{service_name}</h2>
    <p className="text-sm text-gray-600 mt-1">{service_description}</p>
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <img
          src={providerImage}
          alt={providerName}
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm text-gray-700">{providerName}</p>
      </div>
      <Link to={`/service-details/${_id}`}><button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 cursor-pointer">
        View Details
      </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default ServiceCard;
