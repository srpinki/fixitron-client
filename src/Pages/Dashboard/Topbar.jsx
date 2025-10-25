import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/Context";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { LuPanelLeft } from "react-icons/lu";

export default function Topbar({ toggleSidebar }) {
  const { user, role, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Theme Toggle
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut().catch(console.error);
  };

  return (
    <header className="w-full px-4 py-3 bg-base-100 shadow flex justify-between items-center sticky top-0 z-30">
      {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 group"
          style={{
            color: "var(--text-color-all)",
            backgroundColor: "var(--bg-color-all)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <LuPanelLeft 
            size={20} 
            className="group-hover:scale-110 transition-transform duration-300" 
          />
        </button>

      <h2 className="text-lg font-semibold text-secondary">
        {role === "provider" ? "Provider Dashboard" : "User Dashboard"}
      </h2>

      <div className="flex items-center gap-3">
        {/* ✅ Theme Toggle */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          />
          <IoSunnyOutline className="swap-on text-xl text-primary" />
          <IoMoonOutline className="swap-off text-xl text-primary" />
        </label>

        {/* ✅ Profile Dropdown */}
        <div className="relative">
          <img
            src={user?.photoURL}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-base-100 shadow-lg rounded-lg w-44 p-2 z-50 border border-base-200">
              <p className="px-3 py-2 text-secondary font-semibold capitalize">
                {user?.displayName || "User"} • {role}
              </p>

              <hr className="my-1 border-base-200" />

              <NavLink
                to={
                  role === "provider"
                    ? "/dashboard/provider"
                    : "/dashboard/user"
                }
                className="flex items-center gap-2 px-3 py-2 hover:bg-base-200 rounded-md text-secondary"
                onClick={() => setDropdownOpen(false)}
              >
                <FaUser /> My Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/settings"
                className="flex items-center gap-2 px-3 py-2 hover:bg-base-200 rounded-md text-secondary"
                onClick={() => setDropdownOpen(false)}
              >
                <FaCog /> Settings
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-error hover:text-white rounded-md mt-1 text-secondary duration-200"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
