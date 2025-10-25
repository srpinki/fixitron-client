"use client";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider/Context";
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import { Outlet } from "react-router";
import {
  FaHome,
  FaPlusCircle,
  FaList,
  FaCheckSquare,
  FaCalendarCheck,
} from "react-icons/fa";

// ✅ Navigation Items with Icons
const navItems = {
  provider: [
    { label: "Dashboard", path: "/dashboard/provider", icon: <FaHome /> },
    { label: "Add Services", path: "/dashboard/add-service", icon: <FaPlusCircle /> },
    { label: "Manage Services", path: "/dashboard/manage-services", icon: <FaList /> },
    { label: "Booked Services", path: "/dashboard/booked-services", icon: <FaCheckSquare /> },
    { label: "Service To-Do", path: "/dashboard/service-todo", icon: <FaCheckSquare /> },
  ],
  user: [
    { label: "Dashboard", path: "/dashboard/user", icon: <FaHome /> },
    { label: "Booked Services", path: "/dashboard/booked-services", icon: <FaCalendarCheck /> },
  ],
};

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { role } = useContext(AuthContext);

  // ✅ Body scroll disable on mobile drawer
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const dynamicItems = navItems[role] || [];

  return (
    <div className="flex min-h-screen bg-base-200">
      <Sidebar
        items={dynamicItems}
        isCollapsed={isCollapsed}
        role={role}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <Topbar
          toggleSidebar={() => {
            if (window.innerWidth >= 768) setIsCollapsed(!isCollapsed);
            else setMobileOpen(!mobileOpen);
          }}
        />

        <main className="flex-1 p-3 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
