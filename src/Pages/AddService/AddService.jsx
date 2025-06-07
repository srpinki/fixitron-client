import React from "react";

const AddService = () => {

    const handleAddService = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className="bg-[#f8fafc] py-20">
      <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow-sm border rounded-xl border-[#e2e8f0] ">
        <h2 className="text-3xl font-bold text-center text-neutral">
          Add New Service
        </h2>
        <p className="text-center text-base-content mt-2 mb-8">
          Create a new electronic repair service offering
        </p>

        <form onSubmit={handleAddService} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="label font-semibold">
              <span className="label-text">Service Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter image URL for your service"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
            />
          </div>

          {/* Service Name */}
          <div>
            <label className="label font-semibold">
              <span className="label-text">
                Service Name <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g., Smartphone Screen Repair"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label font-semibold">
              <span className="label-text">
                Price ($) <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter service price"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
            />
          </div>

          {/* Service Area */}
          <div>
            <label className="label font-semibold">
              <span className="label-text">
                Service Area <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g., New York, California"
              className="input input-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-semibold">
              <span className="label-text">
                Description <span className="text-error">*</span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
              placeholder="Describe your service in detail..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white font-semibold"
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
