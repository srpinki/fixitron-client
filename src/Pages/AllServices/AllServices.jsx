import React, { useEffect, useState } from "react";
import { FaSearch, FaSort, FaTimes } from "react-icons/fa";
import AllServicesCard from "./AllServicesCard";
import DocumentTitle from "../Shared/DocumentTitle";
import Loading from "../Loading/Loading";

const AllServices = () => {
  DocumentTitle("All Services | Fixitron - Explore & Book Services");

  const [queryInput, setQueryInput] = useState("");
  const [services, setServices] = useState([]); // currently displayed list
  const [allServices, setAllServices] = useState([]); // master copy fetched on mount
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); // "", "asc", "desc"

  // fetch full catalog once on mount (keeps master copy)
  useEffect(() => {
    setLoading(true);
    fetch("https://fixitron-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setAllServices(arr);
        setServices(arr);
      })
      .catch((err) => {
        console.error("Fetch all services error:", err);
        setAllServices([]);
        setServices([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // resilient price parser (handles numbers, "$1,200", "1200.50", { amount: 1200 }, etc.)
  const parsePrice = (val) => {
    if (val == null) return 0;
    if (typeof val === "number" && !Number.isNaN(val)) return val;
    if (typeof val === "object") {
      if (val.amount != null) return parsePrice(val.amount);
      if (val.value != null) return parsePrice(val.value);
      if (val.price != null) return parsePrice(val.price);
      return 0;
    }
    const cleaned = String(val).replace(/[^\d.-]+/g, "");
    const num = parseFloat(cleaned);
    return Number.isNaN(num) ? 0 : num;
  };

  // When user changes sortOrder, reorder the currently displayed list (no fetch)
  useEffect(() => {
    if (!sortOrder) return;
    setServices((prev) => {
      const copy = [...prev];
      copy.sort((a, b) =>
        sortOrder === "asc"
          ? parsePrice(a.service_price) - parsePrice(b.service_price)
          : parsePrice(b.service_price) - parsePrice(a.service_price)
      );
      return copy;
    });
  }, [sortOrder]);

  // SEARCH: run only when user submits (keeps search and sort independent)
  const handleSearchSubmit = async (e) => {
    e?.preventDefault?.();
    setLoading(true);

    try {
      // note: using the same query param name you used earlier ("serachParams")
      const res = await fetch(
        `https://fixitron-server.vercel.app/services?serachParams=${encodeURIComponent(
          queryInput
        )}`
      );
      const data = await res.json();
      const arr = Array.isArray(data) ? data : [];

      // If a sort is currently active, apply it to the fresh results (client-side)
      if (sortOrder) {
        arr.sort((a, b) =>
          sortOrder === "asc"
            ? parsePrice(a.service_price) - parsePrice(b.service_price)
            : parsePrice(b.service_price) - parsePrice(a.service_price)
        );
      }

      setServices(arr);
    } catch (err) {
      console.error("Search fetch error:", err);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQueryInput("");
    setSortOrder("");
    setServices(allServices);
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-base-100 p-6 sm:p-10 w-11/12 mx-auto my-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral">
          All Electronic Repair Services
        </h1>
        <p className="text-gray-500 mt-2">
          Browse our complete collection of professional electronic repair
          services from certified technicians
        </p>
      </div>

      {/* Controls: search (submit) + sort (client-side) */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row items-stretch justify-between sm:items-center gap-4 mb-12"
      >
        {/* Search input + submit */}
        <div className="relative w-full sm:max-w-lg">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-lg z-10" />
          <input
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            type="text"
            placeholder="Search services by name, description, or area..."
            className="input input-bordered w-full pl-10 pr-24"
            aria-label="Search services"
          />
          <button
            type="submit"
            className="btn btn-primary absolute right-1 top-1 h-8 px-3"
            aria-label="Search"
          >
            Search
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <FaSort className="text-gray-600" />
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              aria-label="Sort services"
            >
              <option value="">Sort by</option>
              <option value="asc">Price: Low → High</option>
              <option value="desc">Price: High → Low</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-ghost ml-2"
            onClick={handleClear}
            aria-label="Clear filters"
            title="Clear search & sort"
          >
            <FaTimes />
            <span className="ml-2 hidden sm:inline">Clear</span>
          </button>
        </div>
      </form>

      {/* Grid: 1 column mobile, 2 cols small, 3 cols large */}
      {services.length === 0 ? (
        <div className="p-8 text-center text-gray-500 rounded-lg border border-dashed">
          No services found. Try a different search or clear filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <AllServicesCard
              key={service._id || service.id}
              service={service}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
