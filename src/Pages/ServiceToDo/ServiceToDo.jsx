import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Context";
import DocumentTitle from "../Shared/DocumentTitle";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaRegFileAlt,
  FaUser,
} from "react-icons/fa";
import axios from "axios";


const ServiceToDo = () => {
  DocumentTitle("Services To Do | Fixitron - track progress");
  const { user } = use(AuthContext);
  const [booked, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
     fetch(`https://fixitron-server.vercel.app/booking_details?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => p.providerEmail === user.email);
          setBookings(filtered);
        });
    }
  }, [user?.email, user?.accessToken]);

  const handleChange = (e, id) => {
    const updatedStatus = e.target.value;
    console.log(updatedStatus);

    //Send updated data to the DB
    axios
      .put(`https://fixitron-server.vercel.app/booking_details/${id}`, {
        serviceStatus: updatedStatus,
      })
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          setBookings((prev) =>
            prev.map((item) =>
              item._id === id ? { ...item, serviceStatus: updatedStatus } : item
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div className="w-11/12 mx-auto py-18">
      <h2 className="text-3xl font-bold mb-4">Service To-Do List</h2>
      <p>Manage your service requests and track progress</p>

      <div className="mt-8">
        {booked.length > 0 ? (
          booked.map((book) => (
            <div
              key={book._id}
              className="card bg-white shadow-md border border-gray-200 rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                {/* Image and Basic Info */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden">
                    <img
                      src={book.photo_url}
                      alt="Service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold">{book.service_name}</h2>
                    <p className="flex items-center gap-2 text-sm">
                      <FaUser className="text-gray-500" />
                      <span>
                        <span className="font-semibold">Customer:</span>{" "}
                        {book.user_name}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <FaEnvelope className="text-gray-500" />
                      <span>
                        <span className="font-semibold">Customer Email:</span>{" "}
                        {book.user_email}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <FaCalendarAlt className="text-gray-500" />
                      <span>
                        <span className="font-semibold">Service Date:</span>{" "}
                        {book.service_date}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="badge badge-warning badge-outline">
                  {book.serviceStatus}
                </div>
              </div>

              {/* Details */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div>
                    <p>Service Price</p>
                    <p className="text-orange-600 font-semibold text-2xl">
                      ${book.service_price}
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <p className="flex items-center gap-2 font-semibold mb-1">
                      <FaRegFileAlt className="text-gray-500" />
                      Special Instructions:
                    </p>
                    <div className=" p-2 text-sm text-gray-700">
                      {book.service_requirements || "None"}
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div>
                  <div className="form-control w-full">
                    <label className="label font-semibold">Update Status</label>
                    <select
                      className="select select-bordered focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 w-full"
                      defaultValue={book.serviceStatus}
                      onChange={(e) => handleChange(e,book._id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="btn btn-primary btn-sm text-white w-full">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4 font-bold text-2xl">
            You haven't received any service requests yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceToDo;
