import React from "react";
import { motion } from "framer-motion";

const PopularServices = () => {
  return (
    <div className="py-20 bg-[#f9fafb]">
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
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">
          Popular Services
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover our most requested electronic repair services from certified
          professionals
        </p>
      </motion.div>
    </div>
  );
};

export default PopularServices;
