import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const AllServicesCard = ({ service }) => {
  const {
    _id,
    photo_url,
    service_name,
    service_price,
    service_area,
    service_description,
    providerImage,
    providerName,
  } = service;
  return (
    <div className="card bg-base-100 shadow-md overflow-hidden rounded-xl">
      {/* Image with price badge */}
      <figure className="relative h-48 sm:h-60 overflow-hidden">
        <img
          src={photo_url}
          alt="Service"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-bold">
          ${service_price}
        </div>
      </figure>

      {/* Card body */}
      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl">{service_name}</h2>
        <p className="text-sm text-gray-600 truncate max-w-[ch_100]">
          {service_description}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <FaMapMarkerAlt className="text-gray-400" />
          <span>{service_area}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img
              src={providerImage}
              alt={providerName}
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm text-gray-700">{providerName}</p>
          </div>
          <Link to={`/service-details/${_id}`}>
            <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
