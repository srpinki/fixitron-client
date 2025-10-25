// ProviderDashboard.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaPlus,
  FaClipboardList,
  FaUsers,
  FaChartLine,
  FaToolbox,
  FaCalendarCheck,
  FaClock,
  FaEllipsisV,
} from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/Context";


/**
 * ProviderDashboard
 * - replace mock data / commented axios calls with real endpoints
 * - uses Tailwind + DaisyUI utility classes
 */

const StatCard = ({ title, value, delta, icon }) => (
  <div className="card bg-base-100 shadow-sm border p-4">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-[var(--color-primary)] text-white">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
      {delta && (
        <div className={`text-sm font-medium ${delta.startsWith("-") ? "text-error" : "text-success"}`}>
          {delta}
        </div>
      )}
    </div>
  </div>
);

const SmallBadge = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-base-200 text-gray-600">{children}</span>
);

export default function ProviderDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // UI state (replace with real data fetching)
  const [stats, setStats] = useState({
    totalServices: 0,
    activeBookings: 0,
    totalCustomers: 0,
    monthlyEarnings: "৳0",
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [myServices, setMyServices] = useState([]);
  const [todos, setTodos] = useState([
    { id: 1, text: "Confirm booking #409", done: false },
    { id: 2, text: "Upload proof image for service X", done: false },
  ]);

  useEffect(() => {
    // TODO: replace with real API calls
    // Example:
    // axios.get(`/api/provider/${user.email}/stats`).then(res => setStats(res.data));
    // axios.get(`/api/provider/${user.email}/bookings?limit=5`).then(res => setRecentBookings(res.data));
    // axios.get(`/api/provider/${user.email}/services`).then(res => setMyServices(res.data));

    // mock data for now:
    setStats({
      totalServices: 12,
      activeBookings: 7,
      totalCustomers: 158,
      monthlyEarnings: "৳46,350",
    });

    setRecentBookings([
      { id: "B-409", customer: "Samiya K.", service: "AC Repair", date: "2025-10-20", status: "Pending", price: "৳1200" },
      { id: "B-408", customer: "Rafiq H.", service: "Plumbing", date: "2025-10-18", status: "Completed", price: "৳850" },
      { id: "B-407", customer: "Nasim", service: "Laptop Repair", date: "2025-10-17", status: "Confirmed", price: "৳2200" },
    ]);

    setMyServices([
      { id: "S-01", name: "AC Repair", price: "৳1200", active: true },
      { id: "S-02", name: "Plumbing (basic)", price: "৳700", active: true },
      { id: "S-03", name: "Laptop Repair", price: "৳2200", active: false },
    ]);
  }, [user?.email]);

  const handleAddService = () => navigate("/add-service");

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Provider Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, {user?.displayName || user?.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleAddService} className="btn btn-primary gap-2">
            <FaPlus /> Add Service
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FaEllipsisV />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/dashboard/settings">Settings</Link></li>
              <li><Link to="/dashboard/profile">Profile</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Services" value={stats.totalServices} delta="+2" icon={<FaToolbox />} />
        <StatCard title="Active Bookings" value={stats.activeBookings} delta="-1" icon={<FaCalendarCheck />} />
        <StatCard title="Customers" value={stats.totalCustomers} delta="+8" icon={<FaUsers />} />
        <StatCard title="This month" value={stats.monthlyEarnings} delta="+12%" icon={<FaChartLine />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="col-span-2 card bg-base-100 shadow-sm border p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
            <SmallBadge>Latest</SmallBadge>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Booking</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id}>
                    <td className="font-medium">{b.id}</td>
                    <td>{b.customer}</td>
                    <td>{b.service}</td>
                    <td>{b.date}</td>
                    <td>{b.price}</td>
                    <td>
                      <div className={`badge ${b.status === "Completed" ? "badge-success" : b.status === "Confirmed" ? "badge-info" : "badge-warning"}`}>
                        {b.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-right">
            <Link to="/dashboard/bookings" className="text-sm text-primary hover:underline">View all bookings →</Link>
          </div>
        </div>

        {/* Right column: Services + To-do */}
        <div className="space-y-4">
          {/* My Services */}
          <div className="card bg-base-100 shadow-sm border p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">My Services</h4>
              <SmallBadge>{myServices.length} items</SmallBadge>
            </div>

            <div className="space-y-2">
              {myServices.map((s) => (
                <div key={s.id} className="flex items-center justify-between gap-3 p-2 rounded hover:bg-base-200">
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className={`btn btn-sm ${s.active ? "btn-success" : "btn-ghost"}`}>
                      {s.active ? "Active" : "Inactive"}
                    </button>
                    <Link to={`/update-service/${s.id}`} className="btn btn-sm btn-outline">Edit</Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <Link to="/dashboard/manage-services" className="text-sm text-primary hover:underline">Manage services →</Link>
            </div>
          </div>

          {/* To-do */}
          <div className="card bg-base-100 shadow-sm border p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">To-do</h4>
              <SmallBadge>{todos.filter(t => !t.done).length} pending</SmallBadge>
            </div>

            <ul className="space-y-2">
              {todos.map(t => (
                <li key={t.id} className="flex items-center justify-between gap-3 p-2 rounded hover:bg-base-200">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} className="checkbox" />
                    <span className={t.done ? "line-through text-gray-400" : ""}>{t.text}</span>
                  </div>
                  <div className="text-xs text-gray-400">due today</div>
                </li>
              ))}
            </ul>

            <div className="mt-3 text-right">
              <button className="btn btn-sm btn-outline">Add task</button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics / Insights */}
      <div className="card bg-base-100 shadow-sm border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Insights</h3>
          <SmallBadge>Monthly</SmallBadge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            {/* Simple svg placeholder chart - replace with Recharts / Chart.js if you want */}
            <div className="h-40 rounded-lg bg-base-200 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="font-semibold">Revenue trend</div>
                <div className="text-sm mt-2">Replace with Recharts for a proper chart</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-base-200">
              <div className="text-sm text-gray-500">Avg. Response Time</div>
              <div className="text-xl font-medium">1.2h</div>
            </div>
            <div className="p-3 rounded-lg bg-base-200">
              <div className="text-sm text-gray-500">Completion Rate</div>
              <div className="text-xl font-medium">92%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
