import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start p-4 px-8 text-lg tracking-wider sticky top-0 z-50">
      {/* Logo and Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-[#2F4F4F] font-bold text-xl transition duration-200 hover:text-[#20B2AA]">
            WeatherNet
          </span>
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6 items-center font-semibold">
          <li className="transition duration-200 hover:text-[#20B2AA] cursor-pointer">
            <Link to="/" className="text-[#2F4F4F]">Home</Link>
          </li>
          <li className="transition duration-200 hover:text-[#20B2AA] cursor-pointer">
            <Link to="/forecast" className="text-[#2F4F4F]">Forecast</Link>
          </li>
          <li className="transition duration-200 hover:text-[#20B2AA] cursor-pointer">
            <Link to="/about" className="text-[#2F4F4F]">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}