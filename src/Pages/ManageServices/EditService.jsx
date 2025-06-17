import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/Context";
import { use } from "react";

const EditService = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const {user} = use(AuthContext);
  const serviceUpdate = services.find((service) => service._id == id);
  const navigate = useNavigate();
  const {
    _id,
    photo_url,
    service_name,
    service_price,
    service_area,
    service_description,
  } = serviceUpdate;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedService = Object.fromEntries(formData.entries());

    //send updated data to the db
    axios
      .put(`https://fixitron-server.vercel.app/services/${_id}`, updatedService, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/manage-services", { replace: true });
        }
      })
      .catch((error) => {
        console.error("Error updating service:", error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-semibold text-center mb-8 flex justify-center gap-4 items-center">
        Update Service
      </h2>
      <form className="space-y-6" onSubmit={handleUpdate}>
        {/* Image*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="text"
            name="photo_url"
            className="input w-full"
            placeholder="Enter photo URL"
            defaultValue={photo_url}
          />
        </div>

        {/* Service Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Name
          </label>
          <input
            type="text"
            placeholder="Enter service name"
            className="input input-bordered w-full mt-1"
            name="service_name"
            defaultValue={service_name}
          />
        </div>
        {/* Service Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Location
          </label>
          <input
            type="text"
            placeholder="Service location"
            className="input input-bordered w-full mt-1"
            name="service_area"
            defaultValue={service_area}
          />
        </div>
        {/* Service Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Price
          </label>
          <input
            type="text"
            placeholder="Service price"
            className="input input-bordered w-full mt-1"
            name="service_price"
            defaultValue={service_price}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Write description"
            className="textarea textarea-bordered w-full mt-1"
            name="service_description"
            defaultValue={service_description}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="btn btn-secondary w-full text-white font-semibold"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditService;
