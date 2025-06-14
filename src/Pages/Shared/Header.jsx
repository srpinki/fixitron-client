import React, { use } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { MdManageHistory, MdOutlineArrowDropUp } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/Context";
import { IoMdAdd } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut(() => {
      console.log("Signout successfully");
    }).catch((error) => {
      console.log(error);
    });
  };
  const link = (
    <>
      {" "}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-services"}>All Services</NavLink>
      {user ? (
        <div className="flex flex-col md:flex-row items-baseline md:items-center space-x-2 space-y-2 md:space-y-0">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 btn-outline btn-primary"
            >
              Dashboard <MdOutlineArrowDropUp size={20} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3"
            >
              <NavLink className="flex items-center gap-1" to={"/add-service"}>
                <IoMdAdd />
                Add Service
              </NavLink>
              <NavLink
                className="flex items-center gap-1"
                to={"/manage-services"}
              >
                <MdManageHistory />
                Manage Services
              </NavLink>
              <NavLink
                className="flex items-center gap-1"
                to={"/booked-services"}
              >
                <SlCalender />
                Booked Services
              </NavLink>
              <NavLink
                className="flex items-center gap-1"
                to={"/service-todo"}
              >
                <LuListTodo />
                Service Todo
              </NavLink>
            </ul>
          </div>
          <div>
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-secondary cursor-pointer"
            />
          </div>
          <button
            onClick={handleLogout}
            className="btn btn-secondary text-white px-3 py-1 rounded "
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <NavLink to={"/auth/login"}>
            <button className="btn btn-secondary register-btn">Login</button>
          </NavLink>
        </div>
      )}
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
