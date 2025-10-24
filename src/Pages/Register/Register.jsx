import React, { use, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/Context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import DocumentTitle from "../Shared/DocumentTitle";
import axios from "axios";

const Register = () => {
  DocumentTitle("Register | Fixitron - Join Our Community");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleSignIn, updateUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const name = formData.get("name");
  //   const photo = formData.get("photo");

  //   const role = formData.get("role");
  //   console.log("Role selected:", role);

  //   // Validate role
  //   if (!role) {
  //     setError("Please select a role");
  //     return;
  //   }

  //   // Firebase Auth দিয়ে ইউজার তৈরি
  //   createUser(email, password)
  //     .then(async (result) => {
  //       const user = result.user;
  //       await updateUser({ displayName: name, photoURL: photo });
  //       setUser({ ...user, displayName: name, photoURL: photo });

  //       // MongoDB তে ইউজার + role save
  //       await fetch("http://localhost:3000/signup", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ name, email, role }),
  //       });
        
  //       Swal.fire({
  //         title: "Signup successfully!",
  //         icon: "success",
  //         draggable: true,
  //       });

  //       // Role অনুযায়ী redirect
  //       if (role === "provider") navigate("/provider-dashboard");
  //       else navigate("/user-dashboard");
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: error.code,
  //       });
  //     });
  //  //password validate
  //   const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  //   if (passwordRegExp.test(password) === false) {
  //     setError(
  //       "Password must have one uppercase, one lowercase, and 6 characters or longer"
  //     );
  //     return;
  //   }
  // };

  const handleSignup = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const photo = formData.get("photo");
  const role = formData.get("role");

  console.log("Role selected:", role);

  // Validate role
  if (!role) {
    setError("Please select a role");
    return;
  }

  // Password validation first
  const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if (!passwordRegExp.test(password)) {
    setError(
      "Password must have one uppercase, one lowercase, and 6 characters or longer"
    );
    return;
  }

  try {
    // Firebase Auth দিয়ে ইউজার তৈরি
    const result = await createUser(email, password);
    const user = result.user;

    await updateUser({ displayName: name, photoURL: photo });
    setUser({ ...user, displayName: name, photoURL: photo });

    // MongoDB তে ইউজার + role save (Axios)
    const response = await axios.post("http://localhost:3000/signup", {
      name,
      email,
      role,
    });

    console.log("MongoDB response:", response.data);

    Swal.fire({
      title: "Signup successfully!",
      icon: "success",
      draggable: true,
    });

    // Role অনুযায়ী redirect
    if (role === "provider") navigate("/provider-dashboard");
    else navigate("/user-dashboard");
  } catch (error) {
    console.log("Signup error:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response?.data?.message || error.message,
    });
  }
};
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Login successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fbf2]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow border border-green-100">
        <h2 className="text-2xl font-bold text-center mb-1">
          Create an account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your details below to join Fixitron
        </p>
        <form onSubmit={handleSignup}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
              name="name"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
              name="email"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo url"
              className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
              name="photo"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Role</span>
            </label>
            <select
              name="role"
              className="input input-bordered w-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered w-full pr-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400"
              >
                👁
              </button>
            </div>
          </div>

          <button className="btn btn-secondary w-full flex items-center gap-2 text-white mb-4">
            <CiUser />
            Create an Account
          </button>
        </form>
        <p className="text-error">{error}</p>
        <div className="divider text-sm text-gray-400">OR CONTINUE WITH</div>

        {/* Google sign in */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100 focus:outline-none"
        >
          <FcGoogle size={25} />
          Google
        </button>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
