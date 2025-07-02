import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-200 text-center px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-base-balance">
            How It Works
          </h2>
          <p className="mb-16 max-w-2xl mx-auto">
            Getting your electronics repaired has never been easier. Follow our
            simple 3-step process.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-balance">
              Book Service
            </h3>
            <p className="text-base-content mt-2 max-w-xs">
              Schedule your repair appointment online or give us a call. Choose
              your preferred time slot.
            </p>
          </motion.div>

          {/* Arrow */}
          <FaArrowRight className="text-orange-500 hidden md:inline-block text-2xl" />

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4">
              <FaTools className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-balance">
              Expert Repair
            </h3>
            <p className="text-base-content mt-2 max-w-xs">
              Our certified technicians diagnose and fix your device using
              quality parts and tools.
            </p>
          </motion.div>

          {/* Arrow */}
          <FaArrowRight className="text-orange-500 hidden md:inline-block text-2xl" />

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="bg-purple-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4">
              <FaCheckCircle className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-base-balance">
              Quality Check
            </h3>
            <p className="text-base-content mt-2 max-w-xs">
              Thorough testing ensures everything works perfectly before we
              return your device.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="btn bg-gradient-to-r from-orange-500 to-gray-800 text-white px-6 py-3 text-lg rounded-xl shadow-md hover:scale-105 transition-transform">
            Ready to get started?
          </button>
          <p className="text-sm mt-2 text-base-content">
            Book your repair service today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
