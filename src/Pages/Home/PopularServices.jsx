import React, { use } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router";

const PopularServices = ({ servicesPromise }) => {
  const allServices = use(servicesPromise);
  const services = [...allServices].reverse().slice(0, 6)

  return (
    <div className="py-20 bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <button className=" mb-4 badge text-primary p-4 rounded-full bg-[#f8ede4]">
          Most Popular
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Popular Services
        </h2>
        <p className="text-base-content max-w-2xl mx-auto">
          Discover our most requested electronic repair services from certified
          professionals
        </p>
      </motion.div>

      {/* service card */}
      <div className="w-11/12 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center w-11/12 mx-auto mt-12">
        <Link to={"/all-services"}> <button className="btn btn-primary ">
          Show All Services <FaArrowRightLong />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
