import React, { use, useEffect, useState } from "react";
import { FaCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { FaEnvelope, FaUser } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/Context";
import DocumentTitle from "../Shared/DocumentTitle";

const BookedServices = () => {
  DocumentTitle("My Booked Services | Fixitron - Track Your Service Requests")
  const { user } = use(AuthContext);
  const [booked, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      fetch(`https://fixitron-server.vercel.app/booking_details?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => p.user_email === user.email);
          setBookings(filtered);
        });
    }
  }, [user?.email, user?.accessToken]);

  return (
    <div className="w-11/12 mx-auto py-18">
      <h2 className="text-3xl font-bold mb-4">My Booked Services</h2>
      <p>Track your service bookings and their current status</p>

      <div className="mt-8">
        {booked.length > 0 ?  
        (booked.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 mb-4 mt-8"
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
                <div>
                  <h2 className="text-lg font-bold text-secondary">{book.service_name}</h2>
                  <p className="text-primary font-semibold">
                    ${book.service_price}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="badge badge-warning badge-outline text-secondary">
                {book.serviceStatus}
              </div>
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="flex items-center gap-2 text-sm">
                  <FaUser className="text-gray-500" />
                  <span className="text-secondary">
                    <span className="font-semibold">Provider:</span>{" "}
                    {book.providerName}
                  </span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaEnvelope className="text-gray-500" />
                  <span className="text-secondary">
                    <span className="font-semibold">Provider Email:</span>{" "}
                    {book.providerEmail}
                  </span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCalendarAlt className="text-gray-500" />
                  <span className="text-secondary">
                    <span className="font-semibold">Service Date:</span>{" "}
                    {book.service_date}
                  </span>
                </p>
              </div>

              {/* Special Instructions */}
              <div>
                <p className="flex items-center gap-2 font-semibold mb-1 text-secondary">
                  <FaRegFileAlt className="text-gray-500" />
                  Special Instructions:
                </p>
                <div className="bg-gray-100 p-2 rounded-md text-sm text-gray-700">
                  {book.service_requirements || "None"}
                </div>
              </div>
            </div>
          </div>
        ))) :
        <p className="text-center text-gray-500 mt-4 font-bold text-2xl">You haven't booked any services yet.</p>
}
      </div>
    </div>
  );
};

export default BookedServices;
