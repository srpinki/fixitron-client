import { motion } from "framer-motion";
import React from "react";
import { FaShieldAlt, FaClock, FaUserCog, FaMedal } from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: "Warranty Protection",
    description:
      "All repairs come with comprehensive warranty coverage for your peace of mind.",
  },
  {
    icon: <FaClock className="text-3xl text-orange-500" />,
    title: "Fast Turnaround",
    description:
      "Quick and efficient repairs with most devices fixed within 24-48 hours.",
  },
  {
    icon: <FaUserCog className="text-3xl text-orange-500" />,
    title: "Expert Technicians",
    description:
      "Certified professionals with years of experience in electronic repairs.",
  },
  {
    icon: <FaMedal className="text-3xl text-orange-500" />,
    title: "Quality Parts",
    description:
      "Only genuine and high-quality replacement parts used in all repairs.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};
const WhyChooseFixitron = () => {
  return (
    <div className="text-center py-20 bg-base-100 w-11/12 mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-neutral"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Fixitron?
      </motion.h2>
      <motion.p
        className="mt-4 max-w-xl mx-auto text-base-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We're committed to providing the best electronic repair services with
        unmatched quality and customer satisfaction
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-0">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="card bg-base-100 shadow-sm p-6 rounded-2xl items-center text-center hover:shadow-lg"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-neutral">{card.title}</h3>
            <p className="text-sm text-base-content mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseFixitron;
