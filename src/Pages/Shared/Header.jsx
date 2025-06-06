import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";

const Header = () => {
  const link = (
    <>
      {" "}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-services"}>All services</NavLink>
      <div className="flex items-center gap-2">

          <NavLink to={"/auth/login"}><button className="btn btn-secondary register-btn">Login</button></NavLink>

      </div>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="w-11/12 mx-auto navbar">
        <div className="flex-1 flex items-center">
          <Link
            to={"/"}
            className="text-2xl font-bold text-secondary hidden md:flex"
          >
            <img src={logo} alt="" />
          </Link>
          <div className="dropdown header">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <FaBarsStaggered color="#1E293B" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="navbar-center hidden md:flex">
            <ul className="menu items-center gap-5 menu-horizontal px-1 text-secondary text-base">
              {link}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl font-bold text-white md:hidden sm:flex"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
