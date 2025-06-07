import React from "react";
import error from "../../assets/lottie/error.json";
import { Link } from "react-router";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      <div className="w-md">
        <Lottie animationData={error} loop={true} />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/" className="btn bg-primary text-white px-6">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
