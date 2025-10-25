// UserDashboard.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaCalendarPlus,
  FaCreditCard,
  FaHistory,
  FaStar,
  FaUser,
  FaTools,
  FaClock,
  FaEllipsisV
} from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/Context";


const StatCard = ({ title, value, icon }) => (
  <div className="card bg-base-100 shadow-sm border p-4">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-[var(--color-primary)] text-white">
        {icon}
      </div>

      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
    </div>
  </div>
);

export default function UserDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalBookings: 0,
    ongoingServices: 0,
    completedServices: 0,
    reviewPoints: 0,
  });

  const [bookings, setBookings] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    // 🚀 Replace these with real API endpoints
    setStats({
      totalBookings: 15,
      ongoingServices: 2,
      completedServices: 11,
      reviewPoints: 38,
    });

    setBookings([
      { id: "B-109", provider: "AC Doctor BD", service: "AC Repair", date: "2025-10-22", status: "Pending", price: "৳1200" },
      { id: "B-106", provider: "PlumbHero", service: "Plumbing", date: "2025-10-21", status: "Completed", price: "৳700" },
      { id: "B-102", provider: "LaptopHub", service: "Laptop Repair", date: "2025-10-19", status: "Confirmed", price: "৳2200" },
    ]);

    setSaved([
      { id: "S-01", title: "AC Cleaning", provider: "Cool Care BD", price: "৳600" },
      { id: "S-09", title: "Pipe Leak Repair", provider: "WaterFix BD", price: "৳900" },
    ]);
  }, [user?.email]);

  const handleNewBooking = () => navigate("/services");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <p className="text-sm text-gray-500">
            Welcome back, {user?.displayName || user?.email}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleNewBooking} className="btn btn-primary gap-2">
            <FaCalendarPlus /> New Booking
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FaEllipsisV />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li><Link to="/dashboard/profile">Profile</Link></li>
              <li><Link to="/dashboard/payment-methods">Payment Methods</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Bookings" value={stats.totalBookings} icon={<FaHistory />} />
        <StatCard title="In Progress" value={stats.ongoingServices} icon={<FaClock />} />
        <StatCard title="Completed" value={stats.completedServices} icon={<FaTools />} />
        <StatCard title="Review Points" value={stats.reviewPoints} icon={<FaStar />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="col-span-2 card bg-base-100 shadow-sm border p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
            <span className="text-xs px-2 py-1 rounded bg-base-200 text-gray-600">
              Latest
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Provider</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td className="font-medium">{b.id}</td>
                    <td>{b.service}</td>
                    <td>{b.provider}</td>
                    <td>{b.date}</td>
                    <td>{b.price}</td>
                    <td>
                      <div
                        className={`badge ${
                          b.status === "Completed"
                            ? "badge-success"
                            : b.status === "Confirmed"
                            ? "badge-info"
                            : "badge-warning"
                        }`}
                      >
                        {b.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-right">
            <Link
              to="/dashboard/booking-history"
              className="text-sm text-primary hover:underline"
            >
              View all bookings →
            </Link>
          </div>
        </div>

        {/* Saved Services */}
        <div className="card bg-base-100 shadow-sm border p-4">
          <h4 className="font-semibold mb-3">Saved Services</h4>

          <div className="space-y-2">
            {saved.map((s) => (
              <div
                key={s.id}
                className="p-3 rounded-lg bg-base-200 hover:bg-base-300 cursor-pointer"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-xs text-gray-500">
                      {s.provider} • {s.price}
                    </div>
                  </div>

                  <Link
                    to={`/services/${s.id}`}
                    className="btn btn-xs btn-outline"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <Link
              to="/dashboard/saved-services"
              className="text-sm text-primary hover:underline"
            >
              Manage Saved Services →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card bg-base-100 shadow-sm border p-4">
        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={handleNewBooking} className="btn btn-outline gap-2">
            <FaCalendarPlus /> Book Service
          </button>

          <Link to="/dashboard/booking-history" className="btn btn-outline gap-2">
            <FaHistory /> Booking History
          </Link>

          <Link to="/dashboard/payment-methods" className="btn btn-outline gap-2">
            <FaCreditCard /> Payment Methods
          </Link>

          <Link to="/dashboard/profile" className="btn btn-outline gap-2">
            <FaUser /> Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
