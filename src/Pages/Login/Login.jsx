import React, { use, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/Context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import DocumentTitle from "../Shared/DocumentTitle";
const Login = () => {
  DocumentTitle("Login | Fixitron - Access Your Account Easily")
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "Signup successfully!",
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
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow border border-green-100">
        <h2 className="text-2xl font-bold text-center mb-1">Welcome back</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to your Fixitron account
        </p>
        <form onSubmit={handleLogin}>
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
            <FaSignInAlt /> Sign in
          </button>
        </form>
        <div className="divider text-sm text-gray-400">OR CONTINUE WITH</div>

        {/* Google sign in */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-base-100"
        >
          <FcGoogle size={25} />
          Google
        </button>

        <p className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/auth/register"
            className="text-primary font-medium hover:underline"
          >
            SignUp here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
