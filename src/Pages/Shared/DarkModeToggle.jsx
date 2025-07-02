import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      {/* Sun Icon */}
      <svg
        className="swap-on fill-current w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17...Z" />
      </svg>
      {/* Moon Icon */}
      <svg
        className="swap-off fill-current w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13...Z" />
      </svg>
    </label>
  );
}
