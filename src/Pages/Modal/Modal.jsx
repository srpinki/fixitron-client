import React, { use } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaClipboardList,
  FaDollarSign,
  FaEnvelope,
  FaUser,
} from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/Context";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({ ServiceDetails }) => {
  const { user } = use(AuthContext);
  const {
    _id,
    photo_url,
    service_name,
    service_price,
    providerName,
    providerImage,
    providerEmail,
  } = ServiceDetails;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBooking = Object.fromEntries(formData.entries());

    const allBooking = {
      ...newBooking,
      serviceStatus: "pending",
    };

    //send data to server
    axios
      .post("https://fixitron-server.vercel.app/booking_details", allBooking)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have booked this service",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="service-details-modal" className="modal min-h-screen">
        <div className="modal-box w-11/12 max-w-4xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleBooking}>
            <div className="bg-white rounded-xl ">
              <div className="flex items-center gap-2 mb-4">
                <FaCalendarAlt className="text-orange-500" />
                <h2 className="text-3xl font-bold">Book Your Service</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Complete your booking details below
              </p>

              {/* Service Summary */}
              <div className="bg-gradient-to-r from-[#F8ECE4] to-[#e1e3e6] rounded-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between items-center gap-8">
                <div className="w-full md:w-7/12">
                  <div className="flex items-center gap-2 mb-2 text-orange-500 font-semibold">
                    <FaClipboardList />
                    <span>Service Summary</span>
                  </div>
                  <div className="flex-1 space-y-2 ">
                    <div>
                      <label className="text-sm font-semibold">
                        Service ID
                      </label>
                      <input
                        type="text"
                        value={_id}
                        readOnly
                        className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                        name="id"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">
                        Service Name
                      </label>
                      <input
                        type="text"
                        value={service_name}
                        readOnly
                        className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                        name="service_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 relative w-50 h-30">
                  <img
                    src={photo_url}
                    alt="Service"
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 bg-orange-500 text-white text-sm px-2 py-0.5 rounded">
                    ${service_price}
                  </span>
                  <input type="hidden" name="photo_url" value={photo_url} />
                </div>
              </div>

              <div className="flex justify-between gap-5 flex-col sm:flex-row ">
                {/* Service Provider */}
                <div className="bg-base-100 rounded-lg p-4 mb-6 border border-gray-200 w-full sm:w-6/12 shadow-xl">
                  <div className="flex items-center gap-2 mb-2 text-orange-500 font-semibold">
                    <FaUser />
                    <span>Service Provider</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={providerImage} alt="Provider" />
                        <input
                          type="hidden"
                          name="providerImage"
                          value={providerImage}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{providerName}</h3>
                      <input
                        type="hidden"
                        name="providerName"
                        value={providerName}
                      />
                      <span className="text-sm text-green-600">
                        Verified Provider
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="text-sm font-semibold">
                      Provider Email
                    </label>
                    <input
                      type="email"
                      value={providerEmail}
                      readOnly
                      className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                      name="providerEmail"
                    />
                  </div>
                </div>

                {/* Your Information */}
                <div className="bg-base-100 rounded-lg p-4 mb-6 border border-gray-200 w-full sm:w-6/12 shadow-xl">
                  <div className="flex items-center gap-2 mb-2 text-orange-500 font-semibold">
                    <FaEnvelope />
                    <span>Your Information</span>
                  </div>
                  <div className="mb-2">
                    <label className="text-sm font-semibold">Your Email</label>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                      name="user_email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Your Name</label>
                    <input
                      type="text"
                      value={user?.displayName || ""}
                      readOnly
                      className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                      name="user_name"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking section */}
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              {/* Header */}
              <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg mb-4">
                <FaCalendarAlt />
                <span>Booking Details</span>
              </div>

              {/* Service Date and Price */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="form-control w-full sm:w-1/2">
                  <label className="label font-semibold">
                    <span>Service Date *</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="input input-bordered w-full pl-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                      name="service_date"
                    />
                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>

                <div className="bg-green-100 text-green-800 rounded-lg p-4 w-full sm:w-1/2 flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    <span className="block text-sm text-gray-600">
                      Total Price
                    </span>
                    <input
                      type="text"
                      name="service_price"
                      value={service_price}
                      readOnly
                      className="bg-transparent border-none text-2xl font-bold p-0 m-0 focus:outline-none"
                    />
                  </div>
                  <FaDollarSign className="text-3xl" />
                </div>
              </div>

              {/* Special Instructions */}
              <div className="form-control mb-6">
                <label className="label font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span>Special Instructions</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                  placeholder="Please provide any specific requirements, your address, preferred time, or customized service plans..."
                  name="service_requirements"
                />
              </div>
            </div>
            {/* Button */}
            <div className="text-center my-8">
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-8 text-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-xl">
                <FaDollarSign className="mr-2" />
                Purchase Service
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
