import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Context";
import { useNavigate } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageServices = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

console.log("Services loaded:", services);

  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:3000/services")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => p.providerEmail === user.email);
          setServices(filtered);
        });
    }
  }, [user?.email]);

  return (
    <div className="w-11/12 mx-auto py-18">
      <h2 className="text-3xl font-bold mb-4">Manage Your Services</h2>
      <p>Edit, update, or remove your service offerings</p>

      <div>
        {services.map((service) => (
          <div key={service._id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 mb-4 mt-8">
            <div className="flex justify-between items-start">
              {/* Left Side: Image and Info */}
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-md">
                  <img
                    src={service.photo_url}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{service.service_name}</h2>
                  <p className="text-sm text-gray-500">{service.service_area}</p>
                  <p className="truncate w-80">{service.service_description}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm">
                <div className="font-semibold text-orange-600">Price</div>
                <div className="text-lg font-bold">${service.service_price}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => navigate(`/update-service/${service._id}`)} className="btn btn-outline btn-warning btn-sm flex items-center gap-1">
                  <FaEdit />
                  Edit
                </button>
                <button className="btn btn-outline btn-error btn-sm flex items-center gap-1">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ManageServices;
