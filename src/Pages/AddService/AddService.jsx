import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/Context";
import DocumentTitle from "../Shared/DocumentTitle";

const AddService = () => {
  DocumentTitle("Add a Service | Fixitron - Offer Your Skills");
  const { user } = use(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newServices = Object.fromEntries(formData.entries());

    const fullServiceData = {
      ...newServices,
      providerName: user?.displayName || "Anonymous",
      providerEmail: user?.email,
      providerImage: user?.photoURL,
    };

    
    //send data to server
    axios
      .post("https://fixitron-server.vercel.app/services", fullServiceData )
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your services has been sent",
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
    <div className="bg-base-200 py-20">
      <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-sm border rounded-xl border-[#e2e8f0] ">
        <h2 className="text-3xl font-bold text-center text-neutral">
          Add New Service
        </h2>
        <p className="text-center text-secondary mt-2 mb-8">
          Create a new electronic repair service offering
        </p>

        <form onSubmit={handleAddService} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="label font-semibold">
              <span className="label-text text-secondary">Service Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter image URL for your service"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              name="photo_url"
            />
          </div>

          {/* Service Name */}
          <div>
            <label className="label font-semibold">
              <span className="label-text text-secondary">
                Service Name <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g., Smartphone Screen Repair"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
              name="service_name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label font-semibold">
              <span className="label-text text-secondary">
                Price ($) <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter service price"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
              name="service_price"
            />
          </div>

          {/* Service Area */}
          <div>
            <label className="label font-semibold">
              <span className="label-text text-secondary">
                Service Area <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g., New York, California"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
              name="service_area"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-semibold">
              <span className="label-text text-secondary">
                Description <span className="text-error">*</span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="Describe your service in detail..."
              rows="4"
              required
              name="service_description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white font-semibold "
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
