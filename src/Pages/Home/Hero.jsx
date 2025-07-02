import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaRocket, FaStar } from "react-icons/fa6";
import heroBg from "../../assets/lottie/hero-bg.json";
import Lottie from "lottie-react";
import heroImg from "/hero-img.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-r from-[#0f141d] to-gray-300  text-white pt-20 pb-12 px-6">
      {/* Lottie Background Animation */}
      <div className="absolute opacity-20 inset-0 pointer-events-none z-0">
        <Lottie
          animationData={heroBg}
          loop={true}
          autoplay={true}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-11/12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Professional{" "}
              <span className="text-primary">Electronic Repair </span>
              Services
            </h1>
            <p className="text-primary font-semibold">
              Expert technicians, quality parts, and fast turnaround times
            </p>
            <p className="text-gray-300">
              Get your electronics fixed by certified professionals with
              warranty guarantee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "backOut" }}
            className="flex gap-4"
          >
            <Link to={"/all-services"}><button className="btn bg-orange-500 hover:bg-orange-600 text-white">
              View Services
            </button></Link>
          </motion.div>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="flex gap-6 mt-6 text-sm text-gray-300 items-center"
          >
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" /> <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" /> <span>Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-blue-400" /> <span>Fast Service</span>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <img
            src={heroImg}
            alt="Electronics Repair"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
