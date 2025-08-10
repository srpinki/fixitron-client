import { motion } from "framer-motion";
import React from "react";
import { FaUsers, FaStar, FaClock, FaShieldAlt } from "react-icons/fa";

const Trusted = () => {
  return (
    <section className="bg-secondary text-white py-16 px-6">
      <div className="w-11/12 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-300 mb-12">
            Our commitment to excellence has earned us the trust of customers
            across the country
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: FaUsers,
              value: "2000+",
              label: "Happy Customers",
              desc: "Satisfied clients worldwide",
            },
            {
              icon: FaStar,
              value: "4.9",
              label: "Average Rating",
              desc: "Based on customer reviews",
            },
            {
              icon: FaClock,
              value: "24h",
              label: "Fast Service",
              desc: "Quick turnaround time",
            },
            {
              icon: FaShieldAlt,
              value: "100%",
              label: "Warranty",
              desc: "Guaranteed quality work",
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                key={index}
                className="bg-gray-800 p-6 rounded-xl transform transition-transform duration-300 hover:scale-105"
              >
                {/* Icon Button with rotate on hover */}
                <div className="group mx-auto w-20 h-20 flex items-center justify-center bg-[#604030] rounded-full mb-4">
                  <IconComponent className="text-primary text-4xl group-hover:rotate-[360deg] transition-transform duration-[1200ms] ease-in-out" />
                </div>

                <h3 className="text-4xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-2xl mt-2">{stat.label}</p>
                <p className="text-sm text-gray-300 mt-1">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
