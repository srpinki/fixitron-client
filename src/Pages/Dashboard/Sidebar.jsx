import { NavLink } from "react-router";

export default function Sidebar({
  items,
  isCollapsed,
  mobileOpen,
  onCloseMobile,
}) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-secondary text-white p-4 z-50 transition-all duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isCollapsed ? "w-16" : "w-64"}
      `}
    >
      {!isCollapsed && (
        <h2 className="font-bold text-lg mb-6 text-primary">Dashboard</h2>
      )}

      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={onCloseMobile}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-base
              ${
                isActive
                  ? "bg-primary text-white font-semibold"
                  : "text-gray-200 hover:bg-gray-700"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
