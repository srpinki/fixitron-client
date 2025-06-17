
import {
  FaAward,
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaUserTie,
} from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import Modal from "../Modal/Modal";
import DocumentTitle from "../Shared/DocumentTitle";
import { AuthContext } from "../../AuthProvider/Context";


const ServiceDetails = () => {
  const { id } = useParams();

  const services = useLoaderData();

  const ServiceDetails = services.find((service) => service._id == id);
  
  const {
    photo_url,
    service_name,
    service_price,
    service_area,
    service_description,
    providerName,
    providerImage,
  } = ServiceDetails;

  DocumentTitle(`${service_name} | Fixitron - Book Trusted Services`)
  
  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="bg-gradient-to-r from-[#F8ECE4] to-[#e1e3e6] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        {/* Avatar + Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={providerImage}
              className="w-20 h-20 rounded-full border-4 border-white shadow"
              alt="Provider"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
              <FaShieldAlt className="text-white text-xs" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              {providerName}
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                Verified
              </span>
            </h2>
            <div className="text-sm text-gray-500 flex items-center gap-3 mt-1">
              <FaMapMarkerAlt className="text-orange-500" /> {service_area}
              <FaStar className="text-yellow-500" /> 4.8
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Completed Jobs */}
          <div className="bg-[#f8f4f2] p-4 rounded-xl shadow flex items-center gap-3 min-w-[180px]">
            <FaUserTie className="text-orange-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Completed Jobs</p>
              <p className="text-lg font-semibold text-gray-800">152+</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-[#f8f4f2] p-4 rounded-xl shadow flex items-center gap-3 min-w-[180px]">
            <FaClock className="text-orange-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Response Time</p>
              <p className="text-lg font-semibold text-gray-800">2 hours</p>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-[#f8f4f2] p-4 rounded-xl shadow flex items-center gap-3 min-w-[180px]">
            <FaUserTie className="text-orange-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Service Area</p>
              <p className="text-lg font-semibold text-gray-800">
                {service_area}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 flex-col md:flex-row gap-8 p-6 bg-white rounded-xl shadow-md">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden group shadow-lg lg:sticky lg:top-8 lg:self-start">
          <img
            src={photo_url}
            alt="Service"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md ">
            ${service_price}
          </span>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-5 ">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">{service_name}</h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{service_description}</p>

          {/* Provider Info */}
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
            <img
              src={providerImage}
              className="w-10 h-10 rounded-full"
              alt="Provider"
            />
            <div>
              <h4 className="text-sm font-bold flex items-center gap-1">
                {providerName} <FaCheckCircle className="text-green-500" />
              </h4>
              <div className="text-gray-500 text-xs flex items-center gap-2">
                <FaMapMarkerAlt /> {service_area}
                <FaStar className="text-yellow-500" /> 4.8
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-600" /> Warranty Included
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="text-blue-500" /> Quick Service
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Certified Tech
            </div>
            <div className="flex items-center gap-2">
              <FaAward className="text-yellow-500" /> Top Rated
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-4 bg-gradient-to-r from-[#fcf0e7] to-[#e6e7ea] p-6 rounded-2xl">
            <div>
              <p className="text-sm text-gray-500">Service Price</p>
              <p className="text-2xl font-bold text-orange-500">
                ${service_price}
              </p>
            </div>
            <button onClick={() =>
            document.getElementById("service-details-modal").showModal()
          } className="btn bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Modal ServiceDetails={ServiceDetails}/>
    </div>

  );
};

export default ServiceDetails;
