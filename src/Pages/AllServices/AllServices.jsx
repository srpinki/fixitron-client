import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AllServicesCard from "./AllServicesCard";
import DocumentTitle from "../Shared/DocumentTitle";

const AllServices = () => {
  DocumentTitle("All Services | Fixitron - Explore & Book Services");
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://fixitron-server.vercel.app/services?serachParams=${search}`)
    .then((res) => res.json())
    .then((data) => setServices(data))
    .catch((error) => {
      console.error("Error fetching services:", error); 
    });
  }, [search]);

  return (
    <div className="bg-base-100 p-6 sm:p-10 w-11/12 mx-auto">
      {/* Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral">
          All Electronic Repair Services
        </h1>
        <p className="text-gray-500 mt-2">
          Browse our complete collection of professional electronic repair
          services from certified technicians
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-xl z-10" />
          <input
            type="text"
            placeholder="Search services by name, description, or area..."
            className="input input-bordered w-full pl-10"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Service Card */}
      <div className="flex gap-8 flex-col">
        {services.map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
